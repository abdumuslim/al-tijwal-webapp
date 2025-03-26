
import { useRef } from 'react';
import { clients } from '@/data/clients';
import ClientCard from '@/components/clients/ClientCard';
import FlippableClientCard from '@/components/clients/FlippableClientCard';
import ClientCarousel from '@/components/clients/ClientCarousel';

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
            <FlippableClientCard key={client.name} client={client} />
          ))}
        </div>

        {/* Mobile View - Simple Carousel */}
        <div className="md:hidden w-full">
          <ClientCarousel clients={clients} />
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
