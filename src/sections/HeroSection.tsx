
import { ChevronDown } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';
import Logo from '@/components/Logo';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultation = () => {
    // For now, we'll just scroll to the contact section
    const contactSection = document.getElementById('pricing');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Consultation button clicked');
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tijwal-light via-white to-tijwal-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-tijwal-orange/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tijwal-blue/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-tijwal-blue/10 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="inline-block mb-6 animate-fade-in-right">
          <span className="bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium">
            #ثورة_الإعلان_في_العراق
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tijwal-dark mb-6 animate-fade-in">
          التجوال للدعاية والاعلان
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-tijwal-gray mb-10 animate-fade-in">
          نبتكر في عالم الإعلان بدمج أحدث التقنيات في شاشاتنا المتنقلة مع التواجد الذكي والتواصل المباشر، لتصل إلى جمهورك في كل مكان وبأنسب الأسعار
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
          <TijwalButton variant="primary" size="lg" onClick={handleConsultation}>
            احصل على استشارة مجانية
          </TijwalButton>
          <TijwalButton variant="secondary" size="lg" onClick={handleTijwalEye}>
            تعرف على عين التجوال
          </TijwalButton>
        </div>

        {/* Image Placeholder with Logo Watermark */}
        <div className="max-w-5xl mx-auto mb-10 relative animate-fade-in">
          <div className="image-placeholder aspect-video rounded-xl relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600 bg-white/70 px-4 py-2 rounded-full">
                صورة للشاشات المتنقلة المحمولة بواسطة الوكلاء
              </span>
            </div>
            <div className="absolute bottom-4 right-4 w-16 h-16 opacity-50">
              <Logo variant="icon" size="md" />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToNextSection}
        >
          <ChevronDown className="h-10 w-10 text-tijwal-orange opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
