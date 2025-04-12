
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
    // Show the speech bubble initially after a short delay
    const initialDelay = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 1500);
    
    // Set up the cycle for showing/hiding the speech bubble
    const cycleInterval = setInterval(() => {
      setShowSpeechBubble(prev => !prev);
    }, 7000); // Toggle every 7 seconds
    
    return () => {
      clearTimeout(initialDelay);
      clearInterval(cycleInterval);
    };
  }, []);
  
  // Hide speech bubble if chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowSpeechBubble(false);
    }
  }, [isOpen]);

  return (
    <TooltipProvider>
      <Tooltip>
        <div className="fixed bottom-6 left-6 z-50 flex items-end">
          {/* Speech bubble with improved design */}
          <div 
            className={cn(
              "absolute mb-16 ml-6 bg-white text-tijwal-orange px-4 py-3 rounded-lg shadow-md border border-tijwal-orange/20 animate-float",
              "speech-bubble", // custom CSS class for the speech bubble shape
              showSpeechBubble ? "animate-scale-in" : "animate-scale-out opacity-0 scale-0 pointer-events-none",
            )}
          >
            <span className="font-bold text-lg">اسألني</span>
            {/* Triangle for speech bubble is now added via CSS */}
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
