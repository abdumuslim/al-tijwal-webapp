import React, { useRef, useEffect, useState } from 'react';
import { Send, X, User, MoreVertical, Trash2, Volume2, VolumeX } from 'lucide-react'; // Removed Loader2, Brain, Activity
import { Loader } from './Loader'; // Import the new Loader component
//import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
// Removed useToast as it's handled in parent
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Removed chatSecurity imports as logic is in parent
//import rehypeRaw from 'rehype-raw';
import { renderMarkdown } from '@/lib/markdown';

// Blink images (kept for UI)
import eye1 from '@/assets/chatbot-blink/1.webp';
import eye2 from '@/assets/chatbot-blink/2.webp';
import eye3 from '@/assets/chatbot-blink/3.webp';
import eye4 from '@/assets/chatbot-blink/4.webp';
import eye5 from '@/assets/chatbot-blink/5.webp';

// Moved ChatMessage interface to index.tsx
// Re-importing here for prop definition clarity
interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: number; // epoch ms
}

// Updated Props Interface
interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  isLoading: boolean;
  inputValue: string;
  onInputChange: (value: string) => void; // Changed to accept value directly
  onSendMessage: () => void;
  muted: boolean;
  onToggleMute: () => void;
  onClearHistory: () => void;
  focusInputTrigger?: number; // Add the new prop
  // onNewMessage is removed as parent handles it internally
}

/** Helper to format timestamps (kept for rendering) */
const formatTime = (ts: number) =>
  new Date(ts).toLocaleTimeString('ar-EG', { hour: 'numeric', minute: '2-digit' });
const formatDate = (ts: number) =>
  new Date(ts).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }); // Changed locale to Arabic

// Simple markdown converter (kept for rendering)
// const simpleMarkdownToHtml = (text: string): string => {
//   let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
//   html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
//   html = html.replace(/\n/g, '<br />');
//   return html;
// };

// Removed getMaxCharLimit as it's used in parent
// const maxCharLimit = getMaxCharLimit(); // Now handled in parent

const ChatWindow = ({
  isOpen,
  onClose,
  messages,
  isLoading,
  inputValue,
  onInputChange,
  onSendMessage,
  muted,
  onToggleMute,
  onClearHistory,
  focusInputTrigger
}: ChatWindowProps) => {

  // Refs for UI elements (kept)
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom effect (kept)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // Trigger scroll when messages change

  // Blinking animation state and logic (kept for UI)
  const blinkSeq = [eye1, eye2, eye3, eye4, eye5, eye4, eye3, eye2, eye1];
  const [eyeImg, setEyeImg] = useState(eye1);
  useEffect(() => {
    let blinkInterval: NodeJS.Timeout | null = null;
    let blinkTimeout: NodeJS.Timeout | null = null;
    let sequenceIndex = 0;

    const startBlinkSequence = () => {
      sequenceIndex = 0;
      blinkInterval = setInterval(() => {
        setEyeImg(blinkSeq[sequenceIndex]);
        sequenceIndex++;
        if (sequenceIndex >= blinkSeq.length) {
          clearInterval(blinkInterval!);
          blinkInterval = null;
          scheduleNextBlink();
        }
      }, 80);
    };

    const scheduleNextBlink = () => {
      setEyeImg(eye1); // Ensure eye is open before scheduling
      const randomDelay = Math.random() * 4000 + 2500;
      blinkTimeout = setTimeout(startBlinkSequence, randomDelay);
    };

    if (isOpen) {
      scheduleNextBlink(); // Start blinking when window opens
    } else {
      setEyeImg(eye1); // Reset eye when window closes
    }

    return () => { // Cleanup
      if (blinkTimeout) clearTimeout(blinkTimeout);
      if (blinkInterval) clearInterval(blinkInterval);
      setEyeImg(eye1);
    };
  }, [isOpen]); // Rerun effect when isOpen changes

  // Simple markdown state (kept for rendering)
  // const [useSimpleMarkdown, setUseSimpleMarkdown] = useState(false);
  // useEffect(() => {
  //   const ua = navigator.userAgent;
  //   const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  //   setUseSimpleMarkdown(isSafari);
  // }, []);

  // Input resize logic (kept for UI)
  const resizeTextarea = () => {
    if (!inputRef.current) return;
    inputRef.current.style.height = 'auto'; // Reset height
    const maxH = 120; // Max height in pixels
    const scrollH = inputRef.current.scrollHeight;
    inputRef.current.style.height = `${Math.min(scrollH, maxH)}px`;
    inputRef.current.style.overflowY = scrollH > maxH ? 'auto' : 'hidden';
  };

  // Call resize on input change and when inputValue prop changes externally (e.g., after send)
  useEffect(() => {
    resizeTextarea();
  }, [inputValue]);

  // Input change handler (calls prop function)
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value); // Pass the new value up
    // resizeTextarea(); // Resize is now handled by useEffect watching inputValue
  };

  // Keydown handler (calls prop function)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      onSendMessage(); // Call parent's send function
    }
  };

  // Auto-focus logic (kept for UI)
  useEffect(() => {
    if (isOpen) {
      // Delay focus slightly to ensure the element is fully rendered and transitions complete
      const focusTimeout = setTimeout(() => {
        inputRef.current?.focus();
        resizeTextarea(); // Ensure correct size on focus
      }, 300);
      return () => clearTimeout(focusTimeout);
    }
  }, [isOpen]);

  // ——— New: refocus input whenever loading finishes ———
  useEffect(() => {
    if (!isLoading) {
      // slight delay to let React finish rendering the new message
      const t = setTimeout(() => {
        resizeTextarea();
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  // ——— New: refocus input when focusInputTrigger changes (e.g., after history clear) ———
  useEffect(() => {
    if (focusInputTrigger && focusInputTrigger > 0 && isOpen) {
      // slight delay to let React finish rendering and ensure input is visible
      const t = setTimeout(() => {
        resizeTextarea();
        inputRef.current?.focus();
      }, 100); // Adjusted delay slightly, can be 0 if transitions are not an issue
      return () => clearTimeout(t);
    }
  }, [focusInputTrigger, isOpen]);

  // Character limit check moved to parent, but we still need maxCharLimit for display
  // This could be passed as a prop if it's dynamic, or redefined if static
  const maxCharLimit = 600; // Assuming a static limit for display purposes
  const isInputOverLimit = inputValue.length > maxCharLimit;


  // Render messages helper (kept for UI, uses props.messages)
  const renderMessages = () => {
    let lastDate = '';
    return messages.map((m, i) => {
      const dateStr = formatDate(m.timestamp);
      const timeStr = formatTime(m.timestamp);
      const showDateSeparator = dateStr !== lastDate;
      lastDate = dateStr;

      return (
        <React.Fragment key={`msg-${m.timestamp}-${i}`}>
          {showDateSeparator && (
            <div key={`date-${i}`} className="flex justify-center my-2">
              <span className="text-xs text-muted-foreground bg-muted/50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                {dateStr}
              </span>
            </div>
          )}
          {/* Outer container for alignment */}
          <div className={cn(
            'flex w-full items-start gap-2 animate-fade-in', // Changed items-end to items-start for better alignment with timestamp below
            m.sender === 'bot' ? 'justify-end' : 'justify-start'
          )}>
            {/* User Icon */}
            {m.sender === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />} {/* Added flex-shrink-0 and margin */}

            {/* Container for Bubble + Timestamp */}
            <div className={cn(
              'flex flex-col max-w-[85%]', // Increased max-width slightly
              m.sender === 'bot' ? 'items-end' : 'items-start' // Align items within this column
            )}>
              {/* Message Bubble */}
              <div
                className={cn(
                  'p-3 rounded-lg prose prose-sm dark:prose-invert break-words', // Keep prose classes
                  // 'force-font-cairo', // Removed custom utility class
                  m.sender === 'bot'
                    ? 'bg-muted dark:bg-gray-700 text-muted-foreground rounded-br-none' // Bot style
                    : 'bg-secondary text-primary-foreground rounded-bl-none' // User style (text color handled below)
                )}
                // Removed inline style override
              >
                {/* single, unified markdown renderer */}
                <div
                  // Add text-white directly here for user messages
                  className={cn(
                    "prose prose-sm dark:prose-invert break-words", // Restored dark:prose-invert
                    m.sender === 'user' && 'text-white' // Apply text-white only for user
                  )}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(m.text) }}
                />
              </div>
              {/* Timestamp (Moved Outside Bubble) */}
              <div className={cn(
                "text-[0.65rem] mt-1 opacity-70 select-none px-1", // Added padding for spacing
                m.sender === 'bot' ? 'text-right ml-auto' : 'text-left mr-auto' // Alignment handled by parent div now, but kept for clarity
              )}>
                {timeStr}
              </div>
            </div>

            {/* Bot Icon */}
            {m.sender === 'bot' && <img src={eyeImg} alt="Bot" className="h-6 w-6 rounded-full flex-shrink-0 self-end" />} {/* Added flex-shrink-0 and self-end */}
          </div>
        </React.Fragment>
      );
    });
  };

  // Component returns null if not open (no change)
  if (!isOpen) return null;

  // Main component structure (mostly unchanged, uses props)
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm" onClick={onClose} />

      {/* Chat panel Wrapper */}
      <div onClick={(e) => e.stopPropagation()}> {/* Removed id */}
        {/* Chat panel */}
        <div
          aria-busy={isLoading} // Added aria-busy
          className={cn(
          'fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-20 z-50 w-auto sm:w-[330px] md:w-[480px] max-w-md rounded-2xl shadow-xl bg-card border border-border flex flex-col',
          'max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-8rem)]', // Adjusted max height
          'transition-transform duration-300 ease-out', // Added transition
           isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none' // Animate in/out
        )}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-2xl flex-shrink-0">
            <div className="flex items-center gap-2">
              {/* Static image in header, blinking is separate */}
              <img src={eye1} alt="Icon" className="h-20 w-20 -mt-14" />
              <h3 className="font-bold text-lg">مساعد التجوال</h3>
            </div>
            <div className="flex items-center gap-1">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button aria-label="Chat options" className="p-1 rounded hover:bg-primary-foreground/20">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="text-foreground bg-card border-border">
                  {/* Use onToggleMute prop */}
                  <DropdownMenuItem onClick={onToggleMute} className="flex items-center gap-2 cursor-pointer hover:bg-muted focus:bg-muted">
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    <span>{muted ? 'تفعيل الصوت' : 'كتم الصوت'}</span>
                  </DropdownMenuItem>
                  {/* Use onClearHistory prop */}
                  <DropdownMenuItem onClick={onClearHistory} className="flex items-center gap-2 cursor-pointer text-destructive hover:!text-destructive focus:!text-destructive hover:bg-muted focus:bg-muted">
                    <Trash2 className="h-4 w-4" />
                    <span>مسح المحادثة</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button onClick={onClose} aria-label="Close chat" className="p-1 rounded hover:bg-primary-foreground/20">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className={cn("p-4 flex-1 overflow-y-auto overscroll-contain", "chat-messages-scrollbar")}>
            <div className="flex flex-col gap-3">
              {renderMessages()}
              {isLoading && (
                <div className="flex w-full items-end gap-2 justify-end animate-fade-in">
                  <div className="bg-muted dark:bg-gray-700 text-muted-foreground rounded-lg rounded-br-none max-w-[80%] p-3 flex items-center justify-center h-10">
                    <Loader variant="brain-glow" />
                  </div>
                  <img src={eyeImg} alt="Bot thinking" className="h-6 w-6 rounded-full self-end" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex-shrink-0">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={inputValue} // Use inputValue prop
                  onChange={handleInputChange} // Use handler that calls prop
                  onKeyDown={handleKeyDown} // Use handler that calls prop
                  placeholder="اكتب رسالتك هنا..."
                  disabled={isLoading} // Use isLoading prop
                  maxLength={maxCharLimit} // Use defined limit
                  className={cn(
                    "flex-1 p-2 border border-border bg-input dark:bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none overflow-hidden",
                    isInputOverLimit && "border-destructive focus:ring-destructive" // Use local check for display
                  )}
                  style={{ maxHeight: '120px' }} // Keep max height style
                />
                <button
                  onClick={onSendMessage} // Use onSendMessage prop
                  // Disable based on props and local input check
                  disabled={isLoading || !inputValue.trim() || isInputOverLimit}
                  className={cn(
                    'p-2 rounded-lg bg-primary text-primary-foreground flex items-center justify-center transition-opacity',
                    (isLoading || !inputValue.trim() || isInputOverLimit) && 'opacity-50 cursor-not-allowed'
                  )}
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                {/* Display character count */}
                <span>{inputValue.length}/{maxCharLimit}</span>
                {isInputOverLimit && <span className="text-destructive">تم تجاوز الحد الأقصى للأحرف</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;