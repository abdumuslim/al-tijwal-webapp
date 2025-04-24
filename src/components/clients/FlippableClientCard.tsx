
import { useEffect, useRef, useState } from 'react';
import { ClientLogo } from '@/types/client';
import { extractBgColor } from '@/data/clients';
// No longer need useIsMobile

interface FlippableClientCardProps {
  client: ClientLogo;
  delay?: number;
}

const FlippableClientCard = ({ client, delay = 0 }: FlippableClientCardProps) => {
  const [isVisible, setIsVisible] = useState(false); // Keep for initial fade-in
  // No longer need isFlipped state
  const cardRef = useRef<HTMLDivElement>(null);
  // No longer need isMobile hook

  // Effect for Intersection Observer (for initial fade-in visibility)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay only if specified, otherwise show immediately
          if (delay && delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
        } else {
           // Optional: Hide or reset when scrolling out of view
           // setIsVisible(false);
           // setIsFlipped(false); // Reset flip state when not visible
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    const currentRef = cardRef.current; // Capture ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]); // Effect only depends on delay

  // Removed the auto-flipping effect hook entirely
  // Removed the logging

  return (
    <div
      ref={cardRef}
      // Removed is-flipped class logic, hover is handled by CSS, mobile flip is handled by CSS animation
      className={`
        flip-card h-40 rounded-xl shadow-sm border border-border
        hover:shadow-md transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* No inline style needed */}
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className={`flip-card-front flex items-center justify-center ${client.className || 'bg-card'}`}> {/* Use bg-card as default */}
          <div className="absolute inset-0" style={{
            backgroundColor: extractBgColor(client.className) // This might override bg-card, which is fine
          }}></div>
          <img 
            src={client.src} 
            alt={client.alt}
            className={`relative z-10 max-w-full object-contain p-3 h-32 ${client.imgClass || ''}`}
          />
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back bg-card"> {/* Use bg-card */}
          <img
            src={client.flipImage}
            alt={`${client.alt} in action`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FlippableClientCard;
