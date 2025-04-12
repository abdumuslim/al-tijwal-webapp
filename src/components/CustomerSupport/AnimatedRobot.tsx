
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
      className={cn("transform-gpu", className)}
      {...props}
    >
      {/* Main head circle - light gray */}
      <circle 
        cx="12" 
        cy="12" 
        r="9" 
        fill="#E6E6F0" 
        className="animate-pulse-soft" 
      />
      
      {/* Outer ring - subtle blue */}
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="#A0C8FF" 
        strokeWidth="0.5" 
        fill="none" 
      />
      
      {/* Left headphone */}
      <circle 
        cx="3.5" 
        cy="12" 
        r="2" 
        fill="#A0C8FF" 
      />
      
      {/* Right headphone */}
      <circle 
        cx="20.5" 
        cy="12" 
        r="2" 
        fill="#A0C8FF" 
      />
      
      {/* Visor/eye area - dark blue/black */}
      <rect 
        x="7" 
        y="9" 
        width="10" 
        height="4" 
        rx="2" 
        fill="#0A1A3B" 
      />
      
      {/* Left eye - light blue */}
      <circle 
        cx="9" 
        cy="11" 
        r="1.25" 
        fill="#A0C8FF" 
        className={blinking ? "animate-blink" : ""} 
      />
      
      {/* Right eye - light blue */}
      <circle 
        cx="15" 
        cy="11" 
        r="1.25" 
        fill="#A0C8FF"
        className={blinking ? "animate-blink" : ""} 
      />
      
      {/* Smile */}
      <path 
        d="M10 15c1.5,1 2.5,1 4,0" 
        stroke="#0A1A3B" 
        strokeWidth="0.75" 
        strokeLinecap="round" 
      />
      
      {/* Microphone/chin piece */}
      <circle 
        cx="12" 
        cy="19" 
        r="1.5" 
        fill="#A0C8FF" 
      />
    </svg>
  );
};
