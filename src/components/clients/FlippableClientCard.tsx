
import { useEffect, useRef, useState } from 'react';
import { ClientLogo } from '@/types/client';
import { extractBgColor } from '@/data/clients';

interface FlippableClientCardProps {
  client: ClientLogo;
  delay?: number;
}

const FlippableClientCard = ({ client, delay = 0 }: FlippableClientCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay for staggered animation
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`
        flip-card h-40 rounded-xl shadow-sm border border-border
        hover:shadow-md transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
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
