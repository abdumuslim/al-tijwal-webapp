
import { useRef, useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import FlipCard from '@/components/FlipCard';

interface ClientLogo {
  name: string;
  src: string;
  alt: string;
  className?: string;
  imgClass?: string;
  hasFlip?: boolean;
  flipImage?: string;
}

const clients: ClientLogo[] = [
  {
    name: "1001",
    src: "/lovable-uploads/74c985b0-fd1c-4129-bbdf-9cc9c13fc92a.png",
    alt: "1001"
  },
  {
    name: "Elryan",
    src: "/lovable-uploads/3ac89038-e04f-488f-9e7a-adb1ec83c9f6.png",
    alt: "Elryan"
  },
  {
    name: "FastPay",
    src: "/lovable-uploads/a61f8a63-a512-483c-8669-a664a4f218e4.png",
    alt: "FastPay",
    hasFlip: true,
    flipImage: "/lovable-uploads/fd661e02-046b-4577-9fcc-c1f4d370023f.png"
  },
  {
    name: "ITEXIraq",
    src: "/lovable-uploads/34a6871b-2532-4643-8004-0fb3acfaa2b5.png",
    alt: "ITEX Iraq",
    className: "bg-[#121212]"
  },
  {
    name: "Supercell",
    src: "/lovable-uploads/46def75c-e10b-433c-8ffe-dbc0c13e0c90.png",
    alt: "Supercell"
  },
  {
    name: "Oodi",
    src: "/lovable-uploads/bd292633-35d4-46e9-96fb-0070abe93146.png",
    alt: "Oodi",
    className: "bg-[#6713e9]"
  }
];

// Helper function to extract background color from className
const extractBgColor = (className?: string): string => {
  if (!className || !className.includes('bg-[#')) return 'transparent';
  const match = className.match(/bg-\[\#([0-9a-f]+)\]/);
  return match?.[1] ? `#${match[1]}` : 'transparent';
};

// Regular client logo card component
const ClientCard = ({ client }: { client: ClientLogo }) => (
  <div 
    key={client.name}
    className={`relative flex items-center justify-center h-40 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden ${client.className || 'bg-white'}`}
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

// Flippable client card component
const FlippableClientCard = ({ client }: { client: ClientLogo }) => (
  <div className="flip-card h-40 rounded-xl shadow-sm border border-gray-100 hover:shadow-md">
    <div className="flip-card-inner">
      {/* Front of card */}
      <div className={`flip-card-front flex items-center justify-center ${client.className || 'bg-white'}`}>
        <div className="absolute inset-0" style={{ 
          backgroundColor: extractBgColor(client.className)
        }}></div>
        <img 
          src={client.src} 
          alt={client.alt}
          className={`relative z-10 max-w-full object-contain p-3 h-32 ${client.imgClass || ''}`}
        />
      </div>
      
      {/* Back of card */}
      <div className="flip-card-back bg-white">
        <img 
          src={client.flipImage} 
          alt={`${client.alt} in action`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

const ClientsSection = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto advance the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % clients.length);
  };

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + clients.length) % clients.length);
  };

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tijwal-dark">
            عملاء يثقون بنا
            <span className="text-tijwal-orange">.</span>
          </h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            نفتخر بثقة العديد من الشركات الرائدة في العراق والمنطقة. هذه بعض العلامات التجارية التي اختارت التعاون معنا
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {clients.map((client) => (
            client.hasFlip ? (
              <FlippableClientCard key={client.name} client={client} />
            ) : (
              <ClientCard key={client.name} client={client} />
            )
          ))}
        </div>

        {/* Mobile View - Simple Carousel */}
        <div className="md:hidden w-full">
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
                  className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-tijwal-orange' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-tijwal-gray font-medium">
            انضم إلى قائمة عملائنا المميزين وحقق أهدافك الإعلانية معنا
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
