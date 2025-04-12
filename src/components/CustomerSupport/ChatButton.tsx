
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
  
  // Create a cycling effect for the speech bubble
  useEffect(() => {
    // Don't show the speech bubble if the chat is open
    if (isOpen) {
      setShowSpeechBubble(false);
      return;
    }
    
    // Show the speech bubble initially after a short delay
    const initialDelay = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 1500);
    
    // Set up the cycle for showing/hiding the speech bubble
    const cycleInterval = setInterval(() => {
      setShowSpeechBubble(prev => !prev);
    }, 10000); // Toggle every 10 seconds - longer duration
    
    return () => {
      clearTimeout(initialDelay);
      clearInterval(cycleInterval);
    };
  }, [isOpen]);

  return (
    <TooltipProvider>
      <Tooltip>
        <div className="fixed bottom-6 left-6 z-50 flex items-end">
          {/* Speech bubble with improved design */}
          <div 
            className={cn(
              "absolute mb-12 ml-0 bg-white rounded-full px-4 py-2 shadow-md",
              "speech-bubble-oval", // custom CSS class for the oval speech bubble shape with pointer
              showSpeechBubble ? "animate-bubble-appear" : "animate-bubble-disappear opacity-0 scale-0 pointer-events-none",
            )}
          >
            <span className="font-bold text-tijwal-orange">اسألني</span>
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
