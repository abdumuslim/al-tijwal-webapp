
import Layout from '@/components/Layout';
import HeroSection from '@/sections/HeroSection';
import ProblemSolutionSection from '@/sections/ProblemSolutionSection';
import TijwalEyeSection from '@/sections/TijwalEyeSection';
import CoreBenefitsSection from '@/sections/CoreBenefitsSection';
import LocationsSection from '@/sections/LocationsSection';
import PricingSection from '@/sections/PricingSection';
import FaqSection from '@/sections/FaqSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <TijwalEyeSection />
      <CoreBenefitsSection />
      <LocationsSection />
      <PricingSection />
      <FaqSection />
    </Layout>
  );
};

export default Index;
