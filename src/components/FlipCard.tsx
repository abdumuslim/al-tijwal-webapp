
import React from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const FlipCard = ({ frontContent, backContent, className }: FlipCardProps) => {
  return (
    <div className={cn("flip-card-container perspective-1000", className)}>
      <div className="relative w-full h-full transform-gpu transition-transform duration-500 preserve-3d group">
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          {frontContent}
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotateY-180 transform-gpu">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
