
import { useState, useEffect } from 'react';
import { AnimatedRobot } from './AnimatedRobot';
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  // Show the speech bubble after a short delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Hide the speech bubble after it's been shown for a while
  useEffect(() => {
    if (showSpeechBubble) {
      const timer = setTimeout(() => {
        setShowSpeechBubble(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showSpeechBubble]);

  // Hide speech bubble if chat is opened
  useEffect(() => {
    if (isOpen && showSpeechBubble) {
      setShowSpeechBubble(false);
    }
  }, [isOpen, showSpeechBubble]);

  return (
    <TooltipProvider>
      <Tooltip>
        <div className="fixed bottom-6 left-6 z-50 flex items-end">
          {/* Speech bubble */}
          <div 
            className={cn(
              "absolute mb-14 ml-8 bg-white text-tijwal-orange px-4 py-2 rounded-lg shadow-md border border-tijwal-orange/20 transition-all duration-300",
              showSpeechBubble ? "opacity-100 transform-gpu translate-y-0" : "opacity-0 transform-gpu translate-y-2 pointer-events-none",
            )}
          >
            <span className="font-bold text-lg">اسألني</span>
            {/* Triangle for speech bubble */}
            <div className="absolute bottom-0 left-0 w-4 h-4 transform translate-y-1/2 -translate-x-1/2 rotate-45 bg-white border-b border-r border-tijwal-orange/20"></div>
          </div>
          
          <TooltipTrigger asChild>
            <button
              onClick={() => {
                onClick();
                setShowSpeechBubble(false);
              }}
              className={cn(
                "rounded-full bg-tijwal-orange p-3 shadow-lg hover:bg-tijwal-orange/90 transition-all duration-300 text-white",
                isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100" // Hide when chat is open
              )}
              aria-label="فتح نافذة المحادثة"
            >
              <AnimatedRobot className="h-7 w-7" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-white text-tijwal-dark">
            <p>التحدث مع مساعد التجوال</p>
          </TooltipContent>
        </div>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ChatButton;
