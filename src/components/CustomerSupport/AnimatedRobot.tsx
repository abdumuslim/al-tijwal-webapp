
import { cn } from "@/lib/utils";
import { LucideProps } from 'lucide-react';
import { useEffect, useState } from 'react';

export const AnimatedRobot = ({ className, ...props }: LucideProps) => {
  const [blinking, setBlinking] = useState(false);
  
  useEffect(() => {
    // Create random blinking interval
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => {
        setBlinking(false);
      }, 300); // Blink duration
    }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds
    
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={cn("transform-gpu", className)}
      {...props}
    >
      {/* Robot head - more rounded like in the reference image */}
      <rect 
        x="3" 
        y="4" 
        width="18" 
        height="12" 
        rx="6" 
        className="animate-pulse-soft" 
      />
      
      {/* Eyes - positioned more prominently */}
      <circle 
        cx="9" 
        cy="10" 
        r="2"
        fill="currentColor" 
        className={blinking ? "animate-blink" : ""} 
      />
      <circle 
        cx="15" 
        cy="10" 
        r="2" 
        fill="currentColor"
        className={blinking ? "animate-blink" : ""} 
      />
      
      {/* Mouth - simple curved smile */}
      <path d="M9 14c2,1.5 4,1.5 6,0" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Robot body - minimal rectangle at bottom */}
      <rect 
        x="8" 
        y="16" 
        width="8" 
        height="4" 
        rx="2" 
      />
    </svg>
  );
};
