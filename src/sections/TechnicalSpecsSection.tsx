
import { Monitor, Battery, Volume2, Wifi } from 'lucide-react';

const TechnicalSpecsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-tijwal-blue/10 text-tijwal-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            المواصفات التقنية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">شاشات متطورة بمواصفات عالية</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            نستخدم أحدث التقنيات في شاشاتنا المتنقلة لضمان أفضل تجربة عرض ممكنة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-tijwal-orange/10 flex items-center justify-center mb-4">
              <Monitor className="h-6 w-6 text-tijwal-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">الشاشة</h3>
            <p className="text-tijwal-gray mb-4">شاشة 32 بوصة</p>
            <p className="text-tijwal-gray mb-2">دقة عالية Full HD</p>
            <p className="text-tijwal-gray">1920 × 1080 بكسل</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-tijwal-orange/10 flex items-center justify-center mb-4">
              <Volume2 className="h-6 w-6 text-tijwal-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">الصوت</h3>
            <p className="text-tijwal-gray">سماعات مدمجة عالية الجودة للعرض الصوتي المرافق للفيديو</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-tijwal-orange/10 flex items-center justify-center mb-4">
              <Battery className="h-6 w-6 text-tijwal-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">البطارية</h3>
            <p className="text-tijwal-gray">بطاريات قابلة للشحن تدوم لمدة 7 ساعات من التشغيل المتواصل</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-tijwal-orange/10 flex items-center justify-center mb-4">
              <Wifi className="h-6 w-6 text-tijwal-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">الاتصال</h3>
            <p className="text-tijwal-gray">اتصال 4G عبر شريحة SIM من شركة زين</p>
            <p className="text-tijwal-gray">نظام تتبع GPS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
