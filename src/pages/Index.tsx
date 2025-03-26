
import Layout from '@/components/Layout';
import HeroSection from '@/sections/HeroSection';
import ProblemSolutionSection from '@/sections/ProblemSolutionSection';
import TijwalEyeSection from '@/sections/TijwalEyeSection';
import CoreBenefitsSection from '@/sections/CoreBenefitsSection';
import LocationsSection from '@/sections/LocationsSection';
import ClientsSection from '@/sections/ClientsSection';
import PricingSection from '@/sections/PricingSection';
import FaqSection from '@/sections/FaqSection';
import ContactSection from '@/sections/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <CoreBenefitsSection />
      <TijwalEyeSection />
      <LocationsSection />
      <ClientsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
