
import { useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

interface ClientLogo {
  name: string;
  src: string;
  alt: string;
  className?: string;
  imgClass?: string;
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
    className: "bg-[#121212]"
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
    className: "bg-[#6713e9]"
  }
];

const ClientsSection = () => {
  const carouselRef = useRef(null);

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag">
            ثقة وشراكة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tijwal-dark modern-header">عملاء يثقون بنا</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto mt-8">
            نفتخر بثقة العديد من الشركات الرائدة في العراق والمنطقة. هذه بعض العلامات التجارية التي اختارت التعاون معنا
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12 reveal">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className={`relative flex items-center justify-center h-40 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${client.className || 'bg-white'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
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
                className={`relative z-10 max-w-full object-contain transition-all duration-300 p-3 h-32 ${client.imgClass || ''}`}
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden mb-12 reveal">
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
                  <div 
                    className={`relative flex items-center justify-center h-40 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden ${client.className || 'bg-white'}`}
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
                      className="relative z-10 max-w-full object-contain p-3 h-32"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 bg-white text-tijwal-blue border-gray-200 hover:bg-tijwal-blue hover:text-white transition-colors duration-300" />
            <CarouselNext className="absolute right-0 bg-white text-tijwal-blue border-gray-200 hover:bg-tijwal-blue hover:text-white transition-colors duration-300" />
          </Carousel>
        </div>

        <div className="text-center reveal">
          <div className="inline-block bg-gradient-to-r from-tijwal-blue/10 to-tijwal-orange/10 px-6 py-3 rounded-xl">
            <p className="text-tijwal-dark font-medium">
              انضم إلى قائمة عملائنا المميزين وحقق أهدافك الإعلانية معنا
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
