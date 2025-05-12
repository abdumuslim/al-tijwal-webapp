import React, { useState, lazy, Suspense, useCallback, useEffect, useRef, useMemo } from 'react';
import ChatButton from './ChatButton';
const LazyChatWindow = lazy(() => import('./ChatWindow'));
import { logEvent } from '@/lib/analytics';
import { useToast } from '@/hooks/use-toast';
import { encryptMessage, decryptMessage, checkRateLimit, isOverCharLimit, getMaxCharLimit } from '@/utils/chatSecurity';
import soundSrc from '@/assets/public/sounds/message.mp3';

// Define ChatMessage type here as it's now managed by this component
interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: number; // epoch ms
}

// Constants moved from ChatWindow
const AUTH_HEADER_KEY   = 'tijwal-AI-bot';
const AUTH_HEADER_VALUE = 'tijwal-secret-2025';
const WEBHOOK_URL       = import.meta.env.VITE_N8N_WEBHOOK_URL!;

const CustomerSupport = () => {
  const { toast } = useToast();
  const maxCharLimit = getMaxCharLimit();

  // State lifted from ChatWindow
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [muted, setMuted] = useState(() => localStorage.getItem('tijwalChat.muted') === 'true');
  const [focusInputTrigger, setFocusInputTrigger] = useState(0); // New state for triggering focus

  // Session ID generation function
  const generateNewSessionId = (): string => {
    const sid = crypto.randomUUID();
    localStorage.setItem('tijwalChat.sid', sid);
    return sid;
  };

  // Session ID state
  const [sessionId, setSessionId] = useState<string>(() => {
    return localStorage.getItem('tijwalChat.sid') || generateNewSessionId();
  });

  // Message state and persistence moved from ChatWindow
  const initialGreeting: ChatMessage = {
    text: 'مرحباً! اني مساعد التجوال الذكي. شلون اكدر اساعدك اليوم؟\n\n**محادثاتنا مسجلة لأغراض قياس الجودة.**',
    sender: 'bot',
    timestamp: Date.now(),
  };
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const stored = localStorage.getItem('tijwalChat.messages');
    if (stored) {
      try {
        const parsed: ChatMessage[] = JSON.parse(stored);
        // Ensure timestamp exists and decrypt user messages
        return parsed.map(m => ({
          text: m.sender === 'user' ? decryptMessage(m.text) : m.text,
          sender: m.sender,
          timestamp: m.timestamp ?? Date.now(),
        })).filter(m => m.text); // Filter out potential null/empty decrypted messages
      } catch (e) {
        console.error("Failed to parse stored messages:", e);
        localStorage.removeItem('tijwalChat.messages'); // Clear corrupted storage
        return [initialGreeting];
      }
    }
    return [initialGreeting];
  });

  useEffect(() => {
    try {
      const toStore = messages.map(m => ({
        text: m.sender === 'user' ? encryptMessage(m.text) : m.text,
        sender: m.sender,
        timestamp: m.timestamp,
      }));
      localStorage.setItem('tijwalChat.messages', JSON.stringify(toStore));
    } catch (e) {
      console.error("Failed to save messages to storage:", e);
      // Optionally notify user or handle error
    }
  }, [messages]);

  // Sound logic moved from ChatWindow
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    // Initialize Audio object only on the client-side
    audioRef.current = new Audio(soundSrc);
    audioRef.current.muted = muted;
  }, []); // Runs once on mount

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
    localStorage.setItem('tijwalChat.muted', muted.toString());
  }, [muted]);

  const playSound = useCallback(() => {
    if (!muted && audioRef.current) {
      audioRef.current.play().catch(error => console.error("Error playing sound:", error));
    }
  }, [muted]);

  // Handle new bot message arrival (called from handleSendMessage)
  const handleNewBotMessage = useCallback((botMessage: ChatMessage) => {
    setMessages(prev => [...prev, botMessage]);
    playSound();
    if (!isChatOpen) {
      setUnreadCount(prev => prev + 1);
    }
  }, [isChatOpen, playSound]); // Include isChatOpen dependency

  // Toggle chat open/closed
  const toggleChat = () => {
    const newState = !isChatOpen;
    setIsChatOpen(newState);
    if (newState) {
      setUnreadCount(0); // Reset count when opening
    }
    logEvent('customer_support', newState ? 'open_chat' : 'close_chat');
  };

  // Close chat
  const closeChat = () => {
    setIsChatOpen(false);
    logEvent('customer_support', 'close_chat');
  };

  // Clear history moved from ChatWindow
  const clearHistory = () => {
    // Clear storage first
    localStorage.removeItem('tijwalChat.sid');
    localStorage.removeItem('tijwalChat.messages');

    // Reset message state
    setMessages([initialGreeting]);
    setUnreadCount(0);

    // Generate and set a new session ID
    const newSid = generateNewSessionId();
    setSessionId(newSid);

    toast({ title: 'تم مسح المحادثة بنجاح' });
    setFocusInputTrigger(prev => prev + 1); // Trigger focus
    // Optionally close chat after clearing
    // closeChat();
  };

  // Toggle mute moved from ChatWindow
  const toggleMute = () => {
    setMuted(prev => !prev);
  };

  // sendMessageWithRetry moved from ChatWindow
  const sendMessageWithRetry = async (
    url: string,
    options: RequestInit,
    maxRetries = 3,
    delay = 1000
  ): Promise<Response> => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const ctrl = new AbortController();
        const tid = setTimeout(() => ctrl.abort(), 180000); // 3 min timeout
        const res = await fetch(url, { ...options, signal: ctrl.signal });
        clearTimeout(tid);
        if (res.ok) return res;
        // Retry on 5xx errors
        if (res.status >= 500 && res.status < 600) throw new Error(`Server Error: ${res.status}`);
        // Don't retry on client errors (4xx) or other issues
        return res;
      } catch (err: any) {
        // Don't retry on AbortError
        if (err.name === 'AbortError') {
           console.error("Request timed out.");
           throw new Error("Request timed out after 3 minutes.");
        }
        console.warn(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`, err);
        if (i === maxRetries - 1) throw err; // Throw last error
        await new Promise(r => setTimeout(r, delay * Math.pow(2, i))); // Exponential backoff
      }
    }
    throw new Error('Retries exhausted'); // Should be unreachable but satisfies TS
  };

  // handleSendMessage moved from ChatWindow
  const handleSendMessage = async () => {
    const msg = inputValue.trim();
    if (!msg || isLoading) return;

    if (isOverCharLimit(msg)) {
      toast({
        title: 'تم تجاوز حد الأحرف',
        description: `يرجى تقصير رسالتك. الحد الأقصى هو ${maxCharLimit} حرف`,
        variant: 'destructive'
      });
      return;
    }

    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      toast({
        title: 'تم تجاوز حد الرسائل',
        description: `يرجى الانتظار ${rateLimitCheck.remainingTime} ثانية قبل إرسال رسالة جديدة`,
        variant: 'destructive'
      });
      return;
    }

    const userMessage: ChatMessage = { text: msg, sender: 'user', timestamp: Date.now() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue(''); // Clear input immediately
    setIsLoading(true);

    try {
      const currentSessionId = sessionId; // Use the memoized sessionId
      const opts: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          [AUTH_HEADER_KEY]: AUTH_HEADER_VALUE,
        },
        // Send user message as plain text
        body: JSON.stringify({ message: msg, sessionId: currentSessionId }),
      };

      const res = await sendMessageWithRetry(WEBHOOK_URL, opts);

      if (!res.ok) {
         const errorBody = await res.text();
         console.error("API Error Response:", errorBody);
         throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();

      // Handle potential variations in response structure
      let botText = '';
      if (typeof data.output === 'string') botText = data.output;
      else if (data.Response?.output) botText = data.Response.output;
      else if (Array.isArray(data) && data[0]?.json?.output) botText = data[0].json.output; // Adjusted for potential n8n structure
      else if (Array.isArray(data) && data[0]?.output) botText = data[0].output;
      else {
          console.warn("Unexpected API response structure:", data);
          botText = 'عذراً، لم أتمكن من فهم الرد. حاول مرة أخرى.';
      }

      // Decrypt if necessary (assuming bot response might also be encrypted)
      // botText = decryptMessage(botText); // Uncomment if bot responses are encrypted

      const botMessage: ChatMessage = { text: botText, sender: 'bot', timestamp: Date.now() };
      handleNewBotMessage(botMessage); // Use the dedicated handler

    } catch (err: any) {
      console.error("Error sending message:", err);
      const errorMessage = 'عذراً، المساعد غير متوفر حالياً. يرجى المحاولة مرة أخرى لاحقاً.';
      toast({ title: 'حدث خطأ', description: errorMessage, variant: 'destructive' });
      // Add error message to chat
      const errorBotMessage: ChatMessage = { text: errorMessage, sender: 'bot', timestamp: Date.now() };
      // Directly set message without sound/unread count for error
      setMessages(prev => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
      // Focus logic remains in ChatWindow as it needs the inputRef
    }
  };

  return (
    <>
      <ChatButton onClick={toggleChat} isOpen={isChatOpen} unreadCount={unreadCount} />
      <Suspense fallback={null}>
        {isChatOpen && (
          <LazyChatWindow
            isOpen={isChatOpen}
            onClose={closeChat}
            messages={messages}
            isLoading={isLoading}
            inputValue={inputValue}
            onInputChange={setInputValue} // Pass setter directly
            onSendMessage={handleSendMessage}
            muted={muted}
            onToggleMute={toggleMute}
            onClearHistory={clearHistory}
            focusInputTrigger={focusInputTrigger} // Pass trigger to ChatWindow
            // onNewMessage is no longer needed here as logic is internal
          />
        )}
      </Suspense>
    </>
  );
};

export default CustomerSupport;
