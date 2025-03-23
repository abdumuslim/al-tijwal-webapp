
import { Monitor, Battery, Volume2, Wifi } from 'lucide-react';

const TechnicalSpecsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-tijwal-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag">
            المواصفات التقنية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tijwal-dark modern-header">شاشات متطورة بمواصفات عالية</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto mt-8">
            نستخدم أحدث التقنيات في شاشاتنا المتنقلة لضمان أفضل تجربة عرض ممكنة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto reveal">
          <div className="glass-card p-8 text-center reveal stagger-1 transform transition-all duration-500 hover:-translate-y-2">
            <div className="mx-auto w-16 h-16 rounded-full bg-tijwal-blue/10 flex items-center justify-center mb-6">
              <Monitor className="h-8 w-8 text-tijwal-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-tijwal-dark">الشاشة</h3>
            <p className="text-tijwal-gray mb-2">شاشة 32 بوصة</p>
            <p className="text-tijwal-gray mb-2">دقة عالية Full HD</p>
            <p className="text-tijwal-gray">1920 × 1080 بكسل</p>
          </div>
          
          <div className="glass-card p-8 text-center reveal stagger-2 transform transition-all duration-500 hover:-translate-y-2">
            <div className="mx-auto w-16 h-16 rounded-full bg-tijwal-blue/10 flex items-center justify-center mb-6">
              <Volume2 className="h-8 w-8 text-tijwal-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-tijwal-dark">الصوت</h3>
            <p className="text-tijwal-gray">سماعات مدمجة عالية الجودة للعرض الصوتي المرافق للفيديو</p>
          </div>
          
          <div className="glass-card p-8 text-center reveal stagger-3 transform transition-all duration-500 hover:-translate-y-2">
            <div className="mx-auto w-16 h-16 rounded-full bg-tijwal-blue/10 flex items-center justify-center mb-6">
              <Battery className="h-8 w-8 text-tijwal-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-tijwal-dark">البطارية</h3>
            <p className="text-tijwal-gray">بطاريات قابلة للشحن تدوم لمدة 7 ساعات من التشغيل المتواصل</p>
          </div>
          
          <div className="glass-card p-8 text-center reveal stagger-4 transform transition-all duration-500 hover:-translate-y-2">
            <div className="mx-auto w-16 h-16 rounded-full bg-tijwal-blue/10 flex items-center justify-center mb-6">
              <Wifi className="h-8 w-8 text-tijwal-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-tijwal-dark">الاتصال</h3>
            <p className="text-tijwal-gray mb-2">اتصال 4G عبر شريحة SIM من شركة زين</p>
            <p className="text-tijwal-gray">نظام تتبع GPS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
