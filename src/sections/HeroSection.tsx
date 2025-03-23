
import { ChevronDown } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterRedirect = () => {
    // Scroll to footer section
    const footerSection = document.getElementById('contact');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Contact button clicked - redirecting to footer');
  };

  const handleTijwalEye = () => {
    // Scroll to Tijwal Eye section
    const tijwalEyeSection = document.getElementById('tijwal-eye');
    if (tijwalEyeSection) {
      tijwalEyeSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Tijwal Eye button clicked');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-tijwal-light overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-blob top-20 right-0 w-96 h-96 bg-tijwal-blue/10"></div>
        <div className="hero-blob bottom-0 left-10 w-96 h-96 bg-tijwal-orange/10"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-dashed border-tijwal-blue/20 animate-spin-slow opacity-70" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-right">
            <div className="inline-block mb-6 animate-slideInRight">
              <span className="bg-gradient-to-r from-tijwal-blue/10 to-tijwal-blue/5 text-tijwal-blue px-4 py-1 rounded-full text-sm font-medium">
                #ثورة_الإعلان_في_العراق
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-tijwal-dark animate-slideInRight" style={{animationDelay: '0.1s'}}>
              مرحباً بك في
              <span className="text-tijwal-blue block mt-2">التجوال</span>
            </h1>

            <p className="text-lg md:text-xl text-tijwal-gray mb-10 animate-slideInRight" style={{animationDelay: '0.2s'}}>
              نبتكر في عالم الإعلان بدمج أحدث التقنيات في شاشاتنا المتنقلة مع التواجد الذكي والتواصل المباشر، لتصل إلى جمهورك في كل مكان وبأنسب الأسعار
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-16 animate-slideInRight" style={{animationDelay: '0.3s'}}>
              <TijwalButton variant="primary" size="lg" onClick={handleFooterRedirect}>
                احصل على استشارة مجانية
              </TijwalButton>
              <TijwalButton variant="secondary" size="lg" onClick={handleTijwalEye}>
                تعرف على عين التجوال
              </TijwalButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-tijwal-blue/20">
              <img 
                src="/lovable-uploads/54847be8-3e6a-44a9-aca6-3337e7204f12.png" 
                alt="فريق التجوال مع شاشات الإعلان المتنقلة" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tijwal-dark/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToNextSection}
        >
          <div className="p-2 rounded-full bg-white shadow-md shadow-tijwal-blue/10 hover:shadow-tijwal-blue/20 transition-all duration-300">
            <ChevronDown className="h-8 w-8 text-tijwal-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
