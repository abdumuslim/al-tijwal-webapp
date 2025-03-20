
import { ChevronDown } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tijwal-light via-white to-tijwal-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-tijwal-orange/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tijwal-blue/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-tijwal-teal/10 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="inline-block mb-6 animate-fade-in-right">
          <span className="bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium">
            #ثورة_الإعلان_في_العراق
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-tijwal-dark animate-fade-in">
          مرحباً بك في
          <span className="text-tijwal-orange block mt-2">التجوال</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-tijwal-gray mb-10 animate-fade-in">
          نبتكر في عالم الإعلان بدمج أحدث التقنيات في شاشاتنا المتنقلة لتحقيق نتائج استثنائية وقياس دقيق للأداء
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
          <TijwalButton variant="gradient" size="lg">
            احصل على استشارة مجانية
          </TijwalButton>
          <TijwalButton variant="secondary" size="lg">
            اكتشف خدماتنا
          </TijwalButton>
        </div>

        {/* Image Placeholder */}
        <div className="max-w-md mx-auto mb-10 relative animate-fade-in">
          <div className="image-placeholder aspect-video rounded-xl">
            <div className="text-center p-4">
              <span className="text-sm">صورة ترويجية للشاشات المتنقلة</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 animate-fade-in">
          <div className="glass-card p-6">
            <h3 className="text-tijwal-orange text-3xl font-bold mb-2">+5000</h3>
            <p className="text-tijwal-gray">مشاهدة يومية</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-tijwal-orange text-3xl font-bold mb-2">+40</h3>
            <p className="text-tijwal-gray">موقع استراتيجي</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-tijwal-orange text-3xl font-bold mb-2">+95%</h3>
            <p className="text-tijwal-gray">معدل رضا العملاء</p>
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
