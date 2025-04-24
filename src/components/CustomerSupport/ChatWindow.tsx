import { useState, useRef, useEffect, useMemo } from 'react';
import { Send, X, User, MoreVertical, Trash2, Volume2, VolumeX } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import the sound asset directly so bundler includes it
import soundSrc from '@/assets/public/sounds/message.mp3';

// Blink images
import eye1 from '@/assets/chatbot-blink/1.webp';
import eye2 from '@/assets/chatbot-blink/2.webp';
import eye3 from '@/assets/chatbot-blink/3.webp';
import eye4 from '@/assets/chatbot-blink/4.webp';
import eye5 from '@/assets/chatbot-blink/5.webp';

// Static header auth (unchanged)
const AUTH_HEADER_KEY   = 'tijwal-AI-bot';
const AUTH_HEADER_VALUE = 'tijwal-secret-2025';
const WEBHOOK_URL       = import.meta.env.VITE_N8N_WEBHOOK_URL!;

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const { toast } = useToast();

  // 1) sessionId persistence
  const sessionId = useMemo(() => {
    let sid = localStorage.getItem('tijwalChat.sid');
    if (!sid) {
      sid = `session_${Date.now()}_${Math.random().toString(36).substring(2,9)}`;
      localStorage.setItem('tijwalChat.sid', sid);
    }
    return sid;
  }, []);

  // 2) message state with persistence
  const initialGreeting = {
    text: 'مرحباً! اني مساعد التجوال الذكي. شلون اكدر اساعدك اليوم؟',
    sender: 'bot' as const
  };
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>(() => {
    const stored = localStorage.getItem('tijwalChat.messages');
    if (stored) {
      try { return JSON.parse(stored); } catch {}
    }
    return [initialGreeting];
  });
  useEffect(() => {
    localStorage.setItem('tijwalChat.messages', JSON.stringify(messages));
  }, [messages]);

  // 3) loading state & refs
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  // 4) blinking animation
  const blinkSeq = [eye1, eye2, eye3, eye4, eye5, eye4, eye3, eye2, eye1];
  const [eyeImg, setEyeImg] = useState(eye1);
  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout;
    const doBlink = () => {
      let idx = 0;
      const iv = setInterval(() => {
        setEyeImg(blinkSeq[idx++]);
        if (idx >= blinkSeq.length) {
          clearInterval(iv);
          t2 = setTimeout(doBlink, Math.random() * 4000 + 2500);
        }
      }, 80);
    };
    if (isOpen) t1 = setTimeout(doBlink, Math.random() * 4000 + 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); setEyeImg(eye1); };
  }, [isOpen]);

  // 5) sound + mute toggle
  const audioRef = useRef(new Audio(soundSrc));
  const [muted, setMuted] = useState(() => localStorage.getItem('tijwalChat.muted') === 'true');
  useEffect(() => {
    audioRef.current.muted = muted;
    localStorage.setItem('tijwalChat.muted', muted.toString());
  }, [muted]);
  const playSound = () => { if (!muted) audioRef.current.play().catch(() => {}); };

  // 6) clear history & reset ID
  const clearHistory = () => {
    localStorage.removeItem('tijwalChat.sid');
    localStorage.removeItem('tijwalChat.messages');
    window.location.reload();
  };

  // 7) input handling & resize
  const [inputValue, setInputValue] = useState('');
  const resizeTextarea = () => {
    if (!inputRef.current) return;
    inputRef.current.style.height = 'auto';
    const maxH = 120;
    const sh = inputRef.current.scrollHeight;
    inputRef.current.style.height = `${Math.min(sh, maxH)}px`;
    inputRef.current.style.overflowY = sh > maxH ? 'auto' : 'hidden';
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    resizeTextarea();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) { e.preventDefault(); handleSendMessage(); }
  };

  // 8) sendMessageWithRetry
  const sendMessageWithRetry = async (
    url: string,
    options: RequestInit,
    maxRetries = 3,
    delay = 1000
  ): Promise<Response> => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const ctrl = new AbortController();
        const tid = setTimeout(() => ctrl.abort(), 180000);
        const res = await fetch(url, { ...options, signal: ctrl.signal });
        clearTimeout(tid);
        if (res.ok) return res;
        if (res.status >= 500 && res.status < 600) throw new Error(`Server ${res.status}`);
        return res;
      } catch (err: any) {
        if (err.name === 'AbortError') throw err;
        if (i === maxRetries - 1) throw err;
        await new Promise(r => setTimeout(r, delay));
      }
    }
    throw new Error('Retries exhausted');
  };

  // 9) main send
  const handleSendMessage = async () => {
    const msg = inputValue.trim(); if (!msg) return;
    setInputValue(''); resizeTextarea();
    setMessages(m => [...m, { text: msg, sender: 'user' }]);
    setIsLoading(true);
    try {
      const opts: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          [AUTH_HEADER_KEY]: AUTH_HEADER_VALUE,
        },
        body: JSON.stringify({ message: msg, sessionId }),
      };
      const res = await sendMessageWithRetry(WEBHOOK_URL, opts);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      let botText = '';
      if (typeof data.output === 'string') botText = data.output;
      else if (data.Response?.output) botText = data.Response.output;
      else if (Array.isArray(data) && data[0]?.output) botText = data[0].output;
      else botText = 'عذراً، لم أتمكن من فهم سؤالك. هل يمكنك إعادة صياغته؟';
      setMessages(m => [...m, { text: botText, sender: 'bot' }]);
      playSound();
    } catch (err: any) {
      console.error(err);
      toast({ title: 'حدث خطأ', description: 'عذراً، المساعد غير متوفر حالياً.', variant: 'destructive' });
      setMessages(m => [...m, { text: 'عذراً، المساعد غير متوفر حالياً.', sender: 'bot' }]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // 10) auto-focus
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 300); }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Chat panel Wrapper to stop propagation */}
      <div onClick={(e) => e.stopPropagation()}>
        {/* Chat panel */}
        <div className={cn(
          'fixed left-4 right-4 sm:left-6 sm:right-auto z-50 w-auto sm:w-[330px] md:w-[480px] max-w-md rounded-2xl shadow-xl bg-card border border-border flex flex-col safe-bottom', // Use card/border
          'max-h-[90vh]'
        )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-2xl"> {/* Use primary */}
          <div className="flex items-center gap-2">
            <img src={eyeImg} alt="Icon" className="h-20 w-20 -mt-14" />
            <h3 className="font-bold text-lg">مساعد التجوال</h3>
          </div>
          <div className="flex items-center gap-1"> {/* Reduced gap slightly */}
            <DropdownMenu modal={false}> {/* Set modal to false */}
              <DropdownMenuTrigger asChild>
                <button aria-label="Chat options" className="p-1 rounded hover:bg-primary-foreground/20"> {/* Adjusted hover */}
                  <MoreVertical className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="text-foreground bg-card border-border"> {/* Adjusted dropdown content */}
                <DropdownMenuItem onClick={() => setMuted(m => !m)} className="flex items-center gap-2 cursor-pointer hover:bg-muted focus:bg-muted"> {/* Adjusted item hover/focus */}
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  <span>{muted ? 'تفعيل الصوت' : 'كتم الصوت'}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={clearHistory} className="flex items-center gap-2 cursor-pointer text-destructive hover:!text-destructive focus:!text-destructive hover:bg-muted focus:bg-muted"> {/* Use destructive, adjusted hover/focus */}
                  <Trash2 className="h-4 w-4" />
                  <span>مسح المحادثة</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={onClose} aria-label="Close chat" className="p-1 rounded hover:bg-primary-foreground/20"> {/* Adjusted hover */}
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 flex-1 overflow-y-auto overscroll-contain">
          <div className="flex flex-col gap-3">
            {messages.map((m, i) => (
              <div key={i} className={cn(
                'flex w-full items-end gap-2 animate-fade-in',
                m.sender === 'bot' ? 'justify-end' : 'justify-start'
              )}>
                {m.sender === 'user' && <User className="h-6 w-6 text-muted-foreground" />} {/* Use muted-foreground */}
                <div className={cn(
                  'max-w-[80%] p-3 rounded-lg prose prose-sm dark:prose-invert', // Added dark:prose-invert
                  m.sender === 'bot'
                    ? 'bg-muted dark:bg-gray-700 text-muted-foreground rounded-bl-none' // Refined dark bot bubble
                    : 'bg-primary text-primary-foreground rounded-br-none' // Use primary
                )}>
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                </div>
                {m.sender === 'bot' && <img src={eye1} alt="Bot" className="h-6 w-6 rounded-full" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex w-full items-end gap-2 justify-end">
                <div className="bg-muted dark:bg-gray-700 text-muted-foreground rounded-lg rounded-bl-none max-w-[80%] p-3"> {/* Refined dark bot bubble */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} /> {/* Use primary */}
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} /> {/* Use primary */}
                  </div>
                </div>
                <img src={eye1} alt="Bot" className="h-6 w-6 rounded-full" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border"> {/* Use border-border */}
          <div className="flex gap-2">
            <textarea
              ref={inputRef}
              rows={1}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="اكتب رسالتك هنا..."
              disabled={isLoading}
              className="flex-1 p-2 border border-border bg-input dark:bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none overflow-hidden" // Refined dark input bg
              style={{ maxHeight: '120px' }}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className={cn(
                'p-2 rounded-lg bg-primary text-primary-foreground flex items-center justify-center', // Use primary
                (isLoading || !inputValue.trim()) && 'opacity-50 cursor-not-allowed'
              )}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
