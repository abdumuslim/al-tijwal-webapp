
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
      {/* Robot head - more rounded */}
      <rect 
        x="4" 
        y="2" 
        width="16" 
        height="14" 
        rx="4" 
        className="animate-pulse-soft" 
      />
      
      {/* Eyes - larger for better visibility when blinking */}
      <circle 
        cx="9" 
        y="8" 
        r="1.5"
        fill="currentColor" 
        className={blinking ? "animate-blink" : ""} 
      />
      <circle 
        cx="15" 
        y="8" 
        r="1.5" 
        fill="currentColor"
        className={blinking ? "animate-blink" : ""} 
      />
      
      {/* Mouth */}
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Antenna */}
      <path 
        d="M12 2v-1"
        className="animate-pulse-soft" 
      />
      
      {/* Robot body */}
      <rect 
        x="7" 
        y="16" 
        width="10" 
        height="7" 
        rx="2" 
        className="animate-pulse-soft" 
      />
      
      {/* Neck */}
      <path d="M12 16v-2" />
    </svg>
  );
};
