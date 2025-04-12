
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
      {/* Robot body */}
      <rect 
        x="3" 
        y="11" 
        width="18" 
        height="10" 
        rx="2" 
        className="animate-pulse-soft" 
      />
      
      {/* Head */}
      <circle 
        cx="12" 
        cy="5" 
        r="2" 
        className="animate-pulse-soft" 
      />
      
      {/* Neck */}
      <path 
        d="M12 7v4" 
      />
      
      {/* Eyes */}
      <line 
        x1="8" 
        y1="16" 
        x2="8" 
        y2="16" 
        className={blinking ? "animate-blink" : ""} 
        strokeWidth="2.5"
      />
      <line 
        x1="16" 
        y1="16" 
        x2="16" 
        y2="16" 
        className={blinking ? "animate-blink" : ""} 
        strokeWidth="2.5"
      />
      
      {/* Antenna */}
      <path 
        d="m9 7 2 2 2-2"
        className="animate-pulse-soft" 
      />
    </svg>
  );
};
