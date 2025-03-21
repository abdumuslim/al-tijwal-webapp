
import { useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

interface ClientLogo {
  name: string;
  src: string;
  alt: string;
  className?: string; // Add className property for custom styling
  imgClass?: string; // Add imgClass property for custom image styling
}

const clients: ClientLogo[] = [
  {
    name: "101",
    src: "/lovable-uploads/74c985b0-fd1c-4129-bbdf-9cc9c13fc92a.png",
    alt: "101 شركة"
  },
  {
    name: "Elryan",
    src: "/lovable-uploads/3ac89038-e04f-488f-9e7a-adb1ec83c9f6.png",
    alt: "Elryan شركة"
  },
  {
    name: "FastPay",
    src: "/lovable-uploads/a61f8a63-a512-483c-8669-a664a4f218e4.png",
    alt: "FastPay شركة"
  },
  {
    name: "ITEXIraq",
    src: "/lovable-uploads/34a6871b-2532-4643-8004-0fb3acfaa2b5.png",
    alt: "ITEX Iraq شركة",
    className: "bg-[#121212]" // Removed p-3 to avoid padding issues
  },
  {
    name: "Supercell",
    src: "/lovable-uploads/46def75c-e10b-433c-8ffe-dbc0c13e0c90.png",
    alt: "Supercell شركة"
  },
  {
    name: "Oodi",
    src: "/lovable-uploads/bd292633-35d4-46e9-96fb-0070abe93146.png",
    alt: "Oodi شركة",
    className: "bg-[#6713e9]" // Removed p-3 to avoid padding issues
  }
];

const ClientsSection = () => {
  const carouselRef = useRef(null);

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
            <div 
              key={client.name}
              className={`relative flex items-center justify-center h-40 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden ${client.className || 'bg-white'}`}
            >
              <div className="absolute inset-0" style={{ 
                backgroundColor: client.className?.includes('bg-[#') ? 
                  client.className.match(/bg-\[\#([0-9a-f]+)\]/)?.[1] ? 
                    `#${client.className.match(/bg-\[\#([0-9a-f]+)\]/)[1]}` : 
                    'transparent' : 
                  'transparent' 
              }}></div>
              <img 
                src={client.src} 
                alt={client.alt}
                className={`relative z-10 max-h-20 max-w-full h-auto object-contain transition-all duration-300 p-3 ${client.imgClass || ''}`}
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel
            ref={carouselRef}
            className="w-full max-w-xs mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.name} className="basis-full">
                  <Card className={`relative flex items-center justify-center h-40 border border-gray-100 overflow-hidden ${client.className || 'bg-white'}`}>
                    <div className="absolute inset-0" style={{ 
                      backgroundColor: client.className?.includes('bg-[#') ? 
                        client.className.match(/bg-\[\#([0-9a-f]+)\]/)?.[1] ? 
                          `#${client.className.match(/bg-\[\#([0-9a-f]+)\]/)[1]}` : 
                          'transparent' : 
                        'transparent' 
                    }}></div>
                    <img 
                      src={client.src} 
                      alt={client.alt}
                      className={`relative z-10 max-h-20 max-w-full h-auto object-contain transition-all duration-300 p-3 ${client.imgClass || ''}`}
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 bg-white text-tijwal-dark border-tijwal-gray/20" />
            <CarouselNext className="absolute right-0 bg-white text-tijwal-dark border-tijwal-gray/20" />
          </Carousel>
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
