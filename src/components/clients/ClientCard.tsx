
import { useEffect, useRef, useState } from 'react';
import { ClientLogo } from '@/types/client';
import { extractBgColor } from '@/data/clients';

interface ClientCardProps {
  client: ClientLogo;
  delay?: number;
}

const ClientCard = ({ client, delay = 0 }: ClientCardProps) => {
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
      key={client.name}
      className={`
        relative flex items-center justify-center h-40 rounded-xl 
        shadow-sm border border-gray-100 hover:shadow-md 
        transition-all duration-500 overflow-hidden 
        ${client.className || 'bg-white'}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className="absolute inset-0" style={{ 
        backgroundColor: extractBgColor(client.className)
      }}></div>
      <img 
        src={client.src} 
        alt={client.alt}
        className={`relative z-10 max-w-full object-contain transition-all duration-300 p-3 h-32 ${client.imgClass || ''}`}
      />
    </div>
  );
};

export default ClientCard;
