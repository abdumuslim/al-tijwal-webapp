
import { useState, useEffect } from 'react';
// Remove AnimatedRobot import
// import { AnimatedRobot } from './AnimatedRobot';
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Import the blink images
import eye1 from '@/assets/chatbot-blink/1.webp';
import eye2 from '@/assets/chatbot-blink/2.webp';
import eye3 from '@/assets/chatbot-blink/3.webp';
import eye4 from '@/assets/chatbot-blink/4.webp';
import eye5 from '@/assets/chatbot-blink/5.webp';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

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

    // Start the blink cycle only when the button is visible (chat is closed)
    if (!isOpen) {
       scheduleNextBlink();
    } else {
      // Reset to open eye immediately if chat opens
       setCurrentEyeImage(eye1);
    }

    // Cleanup function
    return () => {
      if (blinkTimeout) clearTimeout(blinkTimeout);
      if (blinkInterval) clearInterval(blinkInterval);
      // Reset to open eye when unmounting or if chat opens
      setCurrentEyeImage(eye1);
    };
  }, [isOpen]); // Rerun effect when isOpen changes
  // --- End Blinking Animation Logic ---


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
    }, 7000); // Toggle every 7 seconds

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
              "absolute mb-16 bg-white rounded-full px-4 py-2 shadow-md",
              "speech-bubble", // custom CSS class for the styled speech bubble
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
                "transition-all duration-300", // Removed background, padding, shadow, etc.
                isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100" // Hide when chat is open
              )}
              aria-label="فتح نافذة المحادثة"
            >
              {/* Replace AnimatedRobot with blinking image */}
              <img src={currentEyeImage} alt="Chatbot Icon" className="h-20 w-20 animate-float" /> {/* Increased size to 5rem and added float animation */}
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
