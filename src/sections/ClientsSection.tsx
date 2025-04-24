
import { useRef } from 'react';
import { clients } from '@/data/clients';
import ClientCard from '@/components/clients/ClientCard';
import FlippableClientCard from '@/components/clients/FlippableClientCard';
import ClientCarousel from '@/components/clients/ClientCarousel';

const ClientsSection = () => {
  const carouselRef = useRef(null);

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
              delay={index * 100} // Staggered delay of 100ms per card
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
