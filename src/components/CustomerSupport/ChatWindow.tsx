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
    { text: 'مرحباً! اني مساعد التجوال الذكي. شلون اكدر اساعدك اليوم؟', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
        // Removed resizeTextarea() call from here to prevent initial resize when empty
      }, 300); // Small delay to ensure the animation completes
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper function for sending message with retries
  const sendMessageWithRetry = async (
    url: string,
    options: RequestInit,
    maxRetries = 3,
    initialDelay = 1000 // 1 second initial delay
  ): Promise<Response> => {
    let retries = 0;
    let delay = initialDelay;

    while (retries < maxRetries) {
      try {
        // Use a timeout for each attempt
        const controller = new AbortController();
        // Assign timeoutId within the loop scope for proper clearing
        const timeoutId = setTimeout(() => controller.abort(), 180000); // 180 seconds timeout per attempt

        const currentOptions = { ...options, signal: controller.signal };
        const response = await fetch(url, currentOptions);

        clearTimeout(timeoutId); // Clear the timeout for this specific attempt

        // If response is OK, return it immediately
        if (response.ok) {
          return response;
        }

        // Check if the error is retryable (e.g., server errors 5xx)
        // We don't retry client errors (4xx) or specific non-retryable statuses
        if (response.status >= 500 && response.status <= 599) {
          console.warn(`Attempt ${retries + 1} failed with status ${response.status}. Retrying...`);
          // Throw an error to trigger the catch block for retry logic
          throw new Error(`Server error: ${response.status}`);
        } else {
          // For non-retryable errors (like 4xx), return the response directly
          // The caller (handleSendMessage) will handle this non-ok response
          console.error(`Non-retryable server error: ${response.status}`);
          return response;
        }

      } catch (error: any) {
        // Don't retry if it was an AbortError (timeout)
        if (error.name === 'AbortError') {
          console.error('Request timed out. Not retrying.');
          throw error; // Re-throw timeout error
        }

        // Log as warning instead of error, as the next attempt might succeed
        console.warn(`Attempt ${retries + 1} encountered an issue:`, error.message);
        retries++;

        if (retries >= maxRetries) {
          console.error('Max retries reached. Giving up.');
          throw error; // Re-throw the last error after max retries
        }

        // Wait before retrying
        console.log(`Waiting ${delay}ms before next retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        // delay *= 2; // Optional: Exponential backoff - keeping it simple for now
      }
    }
    // Should not be reached if maxRetries > 0, but satisfies TypeScript
    throw new Error('sendMessageWithRetry failed after exhausting retries.');
  };


  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = inputValue;
    setInputValue('');
    resizeTextarea(); // Reset textarea size after sending

    // Add user message to chat
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);

    // Set loading state
    setIsLoading(true);

    try {
      // Prepare fetch options
      const fetchOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          [AUTH_HEADER_KEY]: AUTH_HEADER_VALUE,
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: sessionId // Include the sessionId in the request
        }),
        // Note: The signal/timeout is now handled inside sendMessageWithRetry
      };

      // Send message using the retry helper
      const response = await sendMessageWithRetry(WEBHOOK_URL, fetchOptions);

      // --- Handle Response (Success or Non-Retryable Error) ---
      if (!response.ok) {
        // This handles non-retryable errors (e.g., 4xx) or if sendMessageWithRetry returns a non-ok response
        console.error('Server responded with non-retryable error:', response.status);
        throw new Error(`Server responded with status: ${response.status}`);
      }

      // --- Process Successful Response ---
      const responseData = await response.json();
      console.log('Response from webhook:', responseData);

      // Extract the bot response based on the n8n response structure
      let botMessage = '';

      // 1. Check for direct 'output' property (most likely)
      if (typeof responseData?.output === 'string' && responseData.output.trim() !== '') {
        botMessage = responseData.output;
      }
      // 2. Check for nested 'Response.output' (less likely, based on console log ambiguity)
      else if (typeof responseData?.Response?.output === 'string' && responseData.Response.output.trim() !== '') {
        botMessage = responseData.Response.output;
      }
      // 3. Check for legacy 'response' property
      else if (typeof responseData?.response === 'string' && responseData.response.trim() !== '') {
        botMessage = responseData.response;
      }
      // 4. Check for array structure (as originally present)
      else if (Array.isArray(responseData) && typeof responseData[0]?.output === 'string' && responseData[0].output.trim() !== '') {
        botMessage = responseData[0].output;
      }
      // 5. Fallback if none of the above formats match or provide a valid string
      else {
        botMessage = 'عذراً، لم أتمكن من فهم سؤالك. هل يمكنك إعادة صياغته؟';
        console.error('Unexpected response format or empty message:', responseData);
      }

      // Add bot response to chat
      setMessages(prev => [...prev, {
        text: botMessage,
        sender: 'bot'
      }]);

    } catch (error: any) {
      // This catch block now handles:
      // 1. Timeout errors (AbortError) from sendMessageWithRetry
      // 2. Final errors after all retries failed in sendMessageWithRetry
      // 3. Errors thrown explicitly for non-ok responses above
      console.error('Error sending message after retries or due to non-retryable error:', error);
      
      // Determine if it was a timeout
      const isTimeout = error.name === 'AbortError';
      const errorDescription = isTimeout
        ? "انتهت مهلة الطلب. يرجى المحاولة مرة أخرى." // Specific timeout message
        : "عذراً، المساعد غير متوفر حالياً. حاول اعادة السؤال مرة اخرى لطفاً"; // Generic error

      toast({
        title: "حدث خطأ",
        description: errorDescription,
        variant: "destructive",
      });

      setMessages(prev => [...prev, {
        text: 'عذراً، المساعد غير متوفر حاليا. يرجى المحاولة مرة أخرى.', // Keep generic message in chat
        sender: 'bot'
      }]);
    } finally {
      setIsLoading(false);
      // Focus the input after sending or error
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };
 
  // Function to resize the textarea based on content
  const resizeTextarea = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'; // Reset height to recalculate
      // Set height based on scroll height, but limit max height
      const maxHeight = 120; // Example max height in pixels (adjust as needed)
      const scrollHeight = inputRef.current.scrollHeight;
      inputRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
      // Show scrollbar if content exceeds max height
      inputRef.current.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
    }
  };
 
  // Update input value and resize textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    resizeTextarea();
  };
 
  // Handle Enter key press for sending message
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle Enter key press for sending message, only if not already loading
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault(); // Prevent newline on Enter
      handleSendMessage();
    }
    // Allow Shift+Enter for newlines (default textarea behavior)
  };

  return (
    <div
      className={cn(
        "fixed bottom-7 left-4 right-4 sm:left-6 sm:right-auto z-50 w-auto sm:w-[330px] md:w-[480px] max-w-md rounded-2xl shadow-xl bg-white border border-gray-200 transition-all duration-300 transform opacity-0 scale-95 pointer-events-none flex flex-col", // Added flex flex-col, adjusted width/positioning
        isOpen && "opacity-100 scale-100 pointer-events-auto"
      )}
      style={{ maxHeight: '90vh' }} // Use viewport height directly
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
      <div className="p-4 flex-1 overflow-y-auto"> {/* Removed fixed height, added flex-1 */}
        <div className="flex flex-col gap-3">
          {messages.map((message, index) => ( // Start of message mapping
            <div // Outer container for alignment and icon
              key={index}
              className={cn(
                "flex w-full items-end gap-2 animate-fade-in", // Ensure full width and apply flex alignment
                message.sender === 'bot'
                  ? "justify-end" // CHANGED: Align bot messages to right
                  : "justify-start" // CHANGED: Align user messages to left
              )}
            >
              {/* User Icon - MOVED: Now on the left for user messages */}
              {message.sender === 'user' && (
                <User className="h-6 w-6 text-gray-400 mb-1 flex-shrink-0" />
              )}
              {/* Message Bubble */}
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-lg prose prose-sm", // Common styles
                  message.sender === 'bot'
                  ? "bg-tijwal-light text-tijwal-dark rounded-bl-none prose-headings:text-tijwal-dark prose-strong:text-tijwal-dark prose-a:text-tijwal-orange hover:prose-a:text-tijwal-orange/80" // CHANGED: User now uses light style and rounded-bl-none
                  : "bg-tijwal-blue text-white rounded-br-none prose-headings:text-white prose-strong:text-white prose-a:text-tijwal-light hover:prose-a:text-tijwal-light/80" // CHANGED: Bot now uses blue style and rounded-br-none
                   
                )}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
              {/* Bot Icon - MOVED: Now on the right for bot messages */}
              {message.sender === 'bot' && (
                <img src={eye1} alt="Bot Icon" className="h-6 w-6 rounded-full mb-1 flex-shrink-0" />
              )}
            </div>
          ))} {/* End of message mapping */}
          {/* Loading indicator for user messages */}
          {(isLoading) && (
            <div className="flex w-full items-end gap-2 justify-end"> {/* Align loading indicator LEFT */}
              {/* Loading bubble to the RIGHT of the icon */}
              <div className="bg-tijwal-light text-tijwal-dark rounded-lg rounded-bl-none max-w-[80%] p-3"> {/* Styles match bot messages (light background) */}
                <div className="flex items-center gap-2"> {/* Use items-center for vertical alignment */}
                  {/* Added text */}
                  <span className="text-sm text-tijwal-dark">دا افكر...</span>
                  {/* Dots are now blue */}
                  <span className="w-2 h-2 bg-tijwal-blue rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-tijwal-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-tijwal-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
              <img src={eye1} alt="Bot Icon" className="h-6 w-6 rounded-full mb-1 flex-shrink-0" /> {/* Bot icon on LEFT */}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <textarea
            ref={inputRef}
            rows={1} // Start with one row
            value={inputValue}
            onChange={handleInputChange} // Use the combined handler
            onKeyDown={handleKeyDown}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tijwal-orange resize-none overflow-hidden" // Added resize-none and overflow-hidden
            disabled={isLoading}
            style={{ maxHeight: '120px' }} // Set max height directly for consistency
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
