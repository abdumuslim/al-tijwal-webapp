
import { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { Bot } from './Bot';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();

  // N8N authentication header - this is the passphrase required by the webhook
  const AUTH_HEADER_KEY = 'OK-ACCESS-PASSPHRASE';
  const AUTH_HEADER_VALUE = 'tijwal-secret-2025'; // Replace with your actual passphrase

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
      // Send message to n8n webhook with authentication header
      const response = await fetch('https://n8n.al-tijwal.com/webhook/bf4dd093-bb02-472c-9454-7ab9af97bd1d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          [AUTH_HEADER_KEY]: AUTH_HEADER_VALUE, // Add the authentication header
        },
        body: JSON.stringify({ 
          message: userMessage 
        }),
      });

      if (!response.ok) {
        throw new Error('حدث خطأ أثناء الاتصال بالخادم');
      }

      const data = await response.json();
      
      // Add bot response to chat
      setMessages(prev => [...prev, { 
        text: data.response || 'عذراً، لم أتمكن من فهم سؤالك. هل يمكنك إعادة صياغته؟', 
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
        "fixed bottom-20 left-6 z-50 w-[330px] md:w-[380px] rounded-2xl shadow-xl bg-white border border-gray-200 transition-all duration-300 transform opacity-0 scale-95 pointer-events-none",
        isOpen && "opacity-100 scale-100 pointer-events-auto"
      )}
      style={{ maxHeight: 'calc(100vh - 140px)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-tijwal-orange text-white rounded-t-2xl">
        <div className="flex items-center gap-3">
          <Bot className="h-6 w-6" />
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
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[80%] p-3 rounded-lg animate-fade-in",
                message.sender === 'bot' 
                  ? "bg-tijwal-light text-tijwal-dark self-start rounded-bl-none" 
                  : "bg-tijwal-blue text-white self-end rounded-br-none"
              )}
            >
              {message.text}
            </div>
          ))}
          {isLoading && (
            <div className="bg-tijwal-light text-tijwal-dark self-start rounded-lg rounded-bl-none max-w-[80%] p-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
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
