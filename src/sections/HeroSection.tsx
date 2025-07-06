
import { ChevronDown } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';
import { logEvent } from '@/lib/analytics';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterRedirect = () => {
    // Track this event
    logEvent('Navigation', 'Click', 'Hero - Free Consultation Button');
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Contact button clicked - redirecting to contact section');
  };

  const handleTijwalEye = () => {
    // Track this event
    logEvent('Navigation', 'Click', 'Hero - Tijwal Eye Button');
    0
    // Scroll to Tijwal Eye section
    const tijwalEyeSection = document.getElementById('tijwal-eye');
    if (tijwalEyeSection) {
      tijwalEyeSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Tijwal Eye button clicked');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:bg-gradient-to-br dark:from-[hsl(var(--background))] dark:via-[hsl(var(--card))] dark:to-[hsl(var(--background))] overflow-hidden"> {/* Dark mode gradient */}
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-soft"></div> {/* Use primary color */}
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft"></div> {/* Use secondary color */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft"></div> {/* Use secondary color */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="inline-block mb-6 animate-fade-in-right">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"> {/* Use primary color */}
            #ثورة_الإعلان_في_العراق
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-foreground animate-fade-in"> {/* Use text-foreground */}
          مرحباً بك في
          <span className="text-primary block mt-2">التجوال</span> {/* Use text-primary */}
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in"> {/* Use text-muted-foreground */}
          نبتكر في عالم الإعلان بدمج أحدث التقنيات في شاشاتنا المتنقلة مع التواجد الذكي والتواصل المباشر، لتصل إلى جمهورك في كل مكان وبأنسب الأسعار
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
          <TijwalButton variant="primary" size="lg" onClick={handleFooterRedirect}>
            احصل على استشارة مجانية
          </TijwalButton>
          <TijwalButton variant="secondary" size="lg" onClick={handleTijwalEye}>
            تعرف على عين التجوال
          </TijwalButton>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-10 relative animate-fade-in">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/54847be8-3e6a-44a9-aca6-3337e7204f12.webp" 
              alt="فريق التجوال مع شاشات الإعلان المتنقلة" 
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToNextSection}
        >
          <ChevronDown className="h-10 w-10 text-primary" /> {/* Use text-primary, removed opacity */}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
