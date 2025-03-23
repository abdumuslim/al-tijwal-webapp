
import Layout from '@/components/Layout';
import HeroSection from '@/sections/HeroSection';
import ProblemSolutionSection from '@/sections/ProblemSolutionSection';
import TijwalEyeSection from '@/sections/TijwalEyeSection';
import CoreBenefitsSection from '@/sections/CoreBenefitsSection';
import LocationsSection from '@/sections/LocationsSection';
import ClientsSection from '@/sections/ClientsSection';
import PricingSection from '@/sections/PricingSection';
import FaqSection from '@/sections/FaqSection';

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
    </Layout>
  );
};

export default Index;
