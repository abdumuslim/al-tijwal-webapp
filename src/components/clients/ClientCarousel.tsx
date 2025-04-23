
import { useState, useEffect } from 'react';
import { ClientLogo } from '@/types/client';
import { extractBgColor } from '@/data/clients';

interface ClientCarouselProps {
  clients: ClientLogo[];
}

const ClientCarousel = ({ clients }: ClientCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto advance the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  // Handle manual navigation
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % clients.length);
  };

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + clients.length) % clients.length);
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Current slide */}
      <div className="relative">
        {clients.map((client, index) => (
          <div 
            key={client.name}
            className={`relative flex items-center justify-center h-40 rounded-xl shadow-sm border border-gray-100 ${client.className || 'bg-white'} ${index === activeIndex ? 'block' : 'hidden'}`}
          >
            <div className="absolute inset-0" style={{ 
              backgroundColor: extractBgColor(client.className)
            }}></div>
            <img 
              src={client.src} 
              alt={client.alt}
              loading="eager"
              className={`relative z-10 h-32 w-auto object-contain p-3 ${client.imgClass || ''}`}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPrev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200 text-tijwal-dark z-10"
        aria-label="Previous client"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button 
        onClick={goToNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200 text-tijwal-dark z-10"
        aria-label="Next client"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-tijwal-orange' : 'bg-gray-300'} p-2`} // Added p-2 for larger tap target
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
