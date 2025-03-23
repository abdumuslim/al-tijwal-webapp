
import Layout from '@/components/Layout';
import HeroSection from '@/sections/HeroSection';
import ProblemSolutionSection from '@/sections/ProblemSolutionSection';
import TijwalEyeSection from '@/sections/TijwalEyeSection';
import CoreBenefitsSection from '@/sections/CoreBenefitsSection';
import LocationsSection from '@/sections/LocationsSection';
import ClientsSection from '@/sections/ClientsSection';
import PricingSection from '@/sections/PricingSection';
import FaqSection from '@/sections/FaqSection';
import TechnicalSpecsSection from '@/sections/TechnicalSpecsSection';

// Add a script for reveal animations to ensure they work
const revealer = `
  document.addEventListener('DOMContentLoaded', function() {
    function checkReveal() {
      var reveals = document.querySelectorAll('.reveal');
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    }
    
    window.addEventListener('scroll', checkReveal);
    // Initial check on page load
    checkReveal();
  });
`;

const Index = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <CoreBenefitsSection />
        <ProblemSolutionSection />
        <TijwalEyeSection />
        <LocationsSection />
        <ClientsSection />
        <TechnicalSpecsSection />
        <PricingSection />
        <FaqSection />
      </Layout>
      <script dangerouslySetInnerHTML={{ __html: revealer }} />
    </>
  );
};

export default Index;
