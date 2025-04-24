
import { useRef, useState, useEffect } from 'react';
import { clients } from '@/data/clients';
// ClientCard is not used
import FlippableClientCard from '@/components/clients/FlippableClientCard';
import ClientCarousel from '@/components/clients/ClientCarousel';

const ClientsSection = () => {
  // const carouselRef = useRef(null); // Not used for the grid logic
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null); // Renamed state
  const cardCycleTime = 4000; // Total time for one card's flip-back cycle (in ms)
  const totalClients = clients.length;

  useEffect(() => {
      // Only run the auto-flip logic on the client-side and for non-empty client list
      if (typeof window === 'undefined' || totalClients === 0) return;
  
      // Check if we are on a desktop view
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      let intervalId: NodeJS.Timeout | null = null;
  
      const startInterval = () => {
        if (intervalId) clearInterval(intervalId); // Clear existing interval if any
        setActiveCardIndex(0); // Start with the first card
        intervalId = setInterval(() => {
          setActiveCardIndex(current => {
            const nextIndex = (current === null || current >= totalClients - 1) ? 0 : current + 1;
            return nextIndex;
          });
        }, cardCycleTime); // Use the total cycle time for the interval
      };
  
      const stopInterval = () => {
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
        setActiveCardIndex(null); // Reset active card
      };
  
      // Initial check
      if (mediaQuery.matches) {
        startInterval();
      } else {
        stopInterval();
      }
  
      // Handle resize: start/stop interval based on viewport width
      const handleResize = () => {
        if (window.matchMedia('(min-width: 768px)').matches) {
          if (intervalId === null) { // Only start if not already running
             startInterval();
          }
        } else {
          stopInterval();
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        clearInterval(intervalId);
        window.removeEventListener('resize', handleResize);
        // Ensure interval is cleared on component unmount
        if (intervalId) clearInterval(intervalId);
      };
    }, [totalClients, cardCycleTime]); // Rerun effect if client count or cycle time changes
  
    return (
      <section id="clients" className="py-16 bg-background dark:bg-[hsl(var(--background))]"> {/* Explicit dark background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground"> {/* Use text-foreground */}
            عملاء يثقون بنا
            <span className="text-primary">.</span> {/* Use text-primary */}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Use text-muted-foreground */}
            نفتخر بثقة العديد من الشركات الرائدة في العراق والمنطقة. هذه بعض العلامات التجارية التي اختارت التعاون معنا
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {clients.map((client, index) => (
            <FlippableClientCard
              key={client.name}
              client={client}
              delay={index * 100} // Staggered delay for initial fade-in
              isActive={index === activeCardIndex} // Pass the active state
            />
          ))}
        </div>

        {/* Mobile View - Simple Carousel */}
        <div className="md:hidden w-full">
          <ClientCarousel clients={clients} />
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-medium"> {/* Use text-muted-foreground */}
            انضم إلى قائمة عملائنا المميزين وحقق أهدافك الإعلانية معنا
          </p>
        </div>
      </div>

    </section>
  );
};

export default ClientsSection;
