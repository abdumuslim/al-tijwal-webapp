
import { useState, useEffect } from 'react';
import { AnimatedRobot } from './AnimatedRobot';
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  const [showPopover, setShowPopover] = useState(false);

  // Show the popover after a short delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopover(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Hide the popover after it's been shown for a while
  useEffect(() => {
    if (showPopover) {
      const timer = setTimeout(() => {
        setShowPopover(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showPopover]);

  // Hide popover if chat is opened
  useEffect(() => {
    if (isOpen && showPopover) {
      setShowPopover(false);
    }
  }, [isOpen, showPopover]);

  return (
    <TooltipProvider>
      <Tooltip>
        <Popover open={showPopover} onOpenChange={setShowPopover}>
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>
              <button
                onClick={(e) => {
                  onClick();
                  setShowPopover(false);
                  e.preventDefault();
                }}
                className={cn(
                  "fixed bottom-6 left-6 z-50 rounded-full bg-tijwal-orange p-3 shadow-lg hover:bg-tijwal-orange/90 transition-all duration-300 text-white",
                  isOpen && "scale-0 opacity-0" // Hide when chat is open
                )}
                aria-label="فتح نافذة المحادثة"
              >
                <AnimatedRobot className="h-7 w-7" />
              </button>
            </TooltipTrigger>
          </PopoverTrigger>
          <PopoverContent side="top" className="bg-tijwal-orange text-white border-tijwal-orange mb-2 mr-2 animate-bounce">
            <span className="font-bold text-lg">اسألني</span>
          </PopoverContent>
          <TooltipContent side="right" className="bg-white text-tijwal-dark">
            <p>التحدث مع مساعد التجوال</p>
          </TooltipContent>
        </Popover>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ChatButton;
