
import { useState, useRef, useEffect } from 'react';
import { Send, X, User } from 'lucide-react'; // Import User icon
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
// Remove the old Bot import
// import { Bot } from './Bot';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// Import the blink images
import eye1 from '@/assets/chatbot-blink/1.webp';
import eye2 from '@/assets/chatbot-blink/2.webp';
import eye3 from '@/assets/chatbot-blink/3.webp';
import eye4 from '@/assets/chatbot-blink/4.webp';
import eye5 from '@/assets/chatbot-blink/5.webp';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    { text: 'مرحباً! أنا مساعد التجوال. كيف يمكنني مساعدتك؟', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // Generate a unique sessionId when the component first mounts
  const [sessionId] = useState(() => {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  });

  // N8N authentication header - this is the passphrase required by the webhook
  const AUTH_HEADER_KEY = 'tijwal-AI-bot';
  const AUTH_HEADER_VALUE = 'tijwal-secret-2025'; // Replace with your actual passphrase
  
  // Updated webhook URL
  // const WEBHOOK_URL = 'https://n8n.al-tijwal.com/webhook-test/bf4dd093-bb02-472c-9454-7ab9af97bd1d'; // for testing
  const WEBHOOK_URL = 'https://n8n.al-tijwal.com/webhook/bf4dd093-bb02-472c-9454-7ab9af97bd1d';
// --- Start Blinking Animation Logic ---
const blinkSequence = [eye1, eye2, eye3, eye4, eye5, eye4, eye3, eye2, eye1];
const [currentEyeImage, setCurrentEyeImage] = useState(eye1);

useEffect(() => {
  let blinkTimeout: NodeJS.Timeout | null = null;
  let blinkInterval: NodeJS.Timeout | null = null;
  let sequenceIndex = 0;

  const startBlinkSequence = () => {
    sequenceIndex = 0;
    blinkInterval = setInterval(() => {
      setCurrentEyeImage(blinkSequence[sequenceIndex]);
      sequenceIndex++;
      if (sequenceIndex >= blinkSequence.length) {
        clearInterval(blinkInterval!);
        blinkInterval = null;
        // Schedule the next blink
        scheduleNextBlink();
      }
    }, 80); // Speed of the blink animation (ms per frame)
  };

  const scheduleNextBlink = () => {
    // Ensure eye is open before scheduling next blink
    setCurrentEyeImage(eye1);
    const randomDelay = Math.random() * 4000 + 2500; // Blink every 2.5-6.5 seconds
    blinkTimeout = setTimeout(startBlinkSequence, randomDelay);
  };

  // Start the first blink cycle only when the chat is open
  if (isOpen) {
     scheduleNextBlink();
  }

  // Cleanup function
  return () => {
    if (blinkTimeout) clearTimeout(blinkTimeout);
    if (blinkInterval) clearInterval(blinkInterval);
    // Reset to open eye when closing or unmounting
    setCurrentEyeImage(eye1);
  };
}, [isOpen]); // Rerun effect when isOpen changes
// --- End Blinking Animation Logic ---


// Automatically focus the input when chat opens
useEffect(() => {
  if (isOpen && inputRef.current) {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300); // Small delay to ensure the animation completes
  }
}, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    const userMessage = inputValue;
    setInputValue('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Use a timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout
      
      // Send message to n8n webhook with authentication header and sessionId
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          [AUTH_HEADER_KEY]: AUTH_HEADER_VALUE,
        },
        body: JSON.stringify({ 
          message: userMessage,
          sessionId: sessionId // Include the sessionId in the request
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        console.error('Server responded with error:', response.status);
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const responseData = await response.json();
      console.log('Response from webhook:', responseData);
      
      // Extract the bot response based on the n8n response structure
      let botMessage = '';
      
      // Handle the response format where output is an array with object containing output property
      if (Array.isArray(responseData) && responseData[0]?.output) {
        botMessage = responseData[0].output;
      } 
      // Handle the response format where the output is directly in the response object
      else if (responseData?.output) {
        botMessage = responseData.output;
      }
      // Legacy format where response property is used
      else if (responseData?.response) {
        botMessage = responseData.response;
      }
      // Fallback if none of the above formats match
      else {
        botMessage = 'عذراً، لم أتمكن من فهم سؤالك. هل يمكنك إعادة صياغته؟';
        console.error('Unexpected response format:', responseData);
      }
      
      // Add bot response to chat
      setMessages(prev => [...prev, { 
        text: botMessage, 
        sender: 'bot' 
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من الاتصال بخدمة الدردشة، يرجى المحاولة مرة أخرى لاحقاً.",
        variant: "destructive",
      });
      
      setMessages(prev => [...prev, { 
        text: 'عذراً، حدثت مشكلة في الاتصال. يرجى المحاولة مرة أخرى.', 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
      // Focus the input after sending
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-24 left-6 z-50 w-[330px] md:w-[380px] rounded-2xl shadow-xl bg-white border border-gray-200 transition-all duration-300 transform opacity-0 scale-95 pointer-events-none",
        isOpen && "opacity-100 scale-100 pointer-events-auto"
      )}
      style={{ maxHeight: 'calc(100vh - 140px)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-tijwal-orange text-white rounded-t-2xl">
        <div className="flex gap-1">
          {/* Replace Bot component with animated image */}
          <img src={currentEyeImage} alt="Chatbot Icon" className="h-20 w-20 -mt-14" />
          <h3 className="font-bold text-lg">مساعد التجوال</h3>
        </div>
        <button 
          onClick={onClose}
          className="rounded-full p-1 hover:bg-white/20 transition-colors"
          aria-label="إغلاق المحادثة"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 h-[380px] overflow-y-auto">
        <div className="flex flex-col gap-3">
          {messages.map((message, index) => ( // Start of message mapping
            <div // Outer container for alignment and icon
              key={index}
              className={cn(
                "flex w-full items-end gap-2 animate-fade-in", // Ensure full width and apply flex alignment
                message.sender === 'bot'
                  ? "justify-start" // Align content to the start (left) for bot
                  : "justify-end" // Align content to the end (right) for user
              )}
            >
              {/* Bot Icon */}
              {message.sender === 'bot' && (
                <img src={eye1} alt="Bot Icon" className="h-6 w-6 rounded-full mb-1 flex-shrink-0" />
              )}
              {/* Message Bubble */}
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-lg prose prose-sm", // Common styles
                  message.sender === 'bot'
                    ? "bg-tijwal-light text-tijwal-dark rounded-bl-none prose-headings:text-tijwal-dark prose-strong:text-tijwal-dark prose-a:text-tijwal-orange hover:prose-a:text-tijwal-orange/80" // Bot specific styles
                    : "bg-tijwal-blue text-white rounded-br-none prose-headings:text-white prose-strong:text-white prose-a:text-tijwal-light hover:prose-a:text-tijwal-light/80" // User specific styles
                )}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
              {/* User Icon */}
              {message.sender === 'user' && (
                <User className="h-6 w-6 text-gray-400 mb-1 flex-shrink-0" />
              )}
            </div>
          ))} {/* End of message mapping */}
          {isLoading && ( // Start of loading indicator
            <div className="flex w-full items-end gap-2 justify-start"> {/* Align loading indicator left */}
              <img src={eye1} alt="Bot Icon" className="h-6 w-6 rounded-full mb-1 flex-shrink-0" /> {/* Add bot icon */}
              <div className="bg-tijwal-light text-tijwal-dark rounded-lg rounded-bl-none max-w-[80%] p-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span> {/* Loading dots */}
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )} {/* End of loading indicator */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tijwal-orange"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || inputValue.trim() === ''}
            className={cn(
              "p-2 rounded-lg bg-tijwal-orange text-white flex items-center justify-center",
              (isLoading || inputValue.trim() === '') && "opacity-50 cursor-not-allowed"
            )}
            aria-label="إرسال الرسالة"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
