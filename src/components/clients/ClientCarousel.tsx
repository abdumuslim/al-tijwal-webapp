
import { useState, useEffect } from 'react';
import { ClientLogo } from '@/types/client';
// import { extractBgColor } from '@/data/clients'; // No longer needed here
import FlippableClientCard from './FlippableClientCard'; // Import the component

interface ClientCarouselProps {
  clients: ClientLogo[];
}

const ClientCarousel = ({ clients }: ClientCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto advance the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % clients.length);
    }, 6000); // Increased interval to 6 seconds
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
          // Keep outer div only for visibility control based on activeIndex
          <div key={client.name} className={`${index === activeIndex ? 'block' : 'hidden'}`}>
            {/* Render the actual FlippableClientCard */}
            <FlippableClientCard client={client} />
            {/* Note: The delay prop for staggered animation isn't used here, but could be added */}
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute -left-4 top-[43%] -translate-y-1/2 w-8 h-8 rounded-full bg-card flex items-center justify-center shadow-sm border border-border text-foreground z-10" // Changed top-1/2 to top-[49%]
        aria-label="Previous client"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute -right-4 top-[43%] -translate-y-1/2 w-8 h-8 rounded-full bg-card flex items-center justify-center shadow-sm border border-border text-foreground z-10" // Changed top-1/2 to top-[49%]
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
            className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-muted'} p-2`} // Use primary/muted
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
