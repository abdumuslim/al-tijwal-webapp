
import { Target, Users, BarChart3, Clock, MapPin } from 'lucide-react';

const CoreBenefitsSection = () => {
  const benefits = [
    {
      title: "الوصول الأوسع",
      description: "تغطية شاملة للمناطق المستهدفة وجمهور أكبر من خلال الشاشات المتنقلة التي تصل إلى الأماكن الأكثر ازدحاماً",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "استهداف دقيق",
      description: "اختيار المواقع والأوقات المناسبة لعرض إعلانك، مما يضمن وصوله للجمهور المستهدف في الوقت المناسب",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "قياس الأداء",
      description: "تقارير مفصلة عن أداء حملتك الإعلانية بما في ذلك عدد المشاهدات ومعدلات التفاعل ومستوى الوصول",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      title: "مرونة العرض",
      description: "إمكانية تغيير المحتوى الإعلاني بسهولة وسرعة استجابة للمتغيرات في السوق والمواسم المختلفة",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "تغطية استراتيجية",
      description: "التواجد في المناطق الحيوية والتجارية والترفيهية الأكثر ازدحاماً في بغداد لضمان أقصى انتشار",
      icon: <MapPin className="h-8 w-8" />
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tijwal-blue/10 text-tijwal-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            لماذا تختار التجوال؟
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">مميزات فريدة لإعلانات متميزة</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            تجمع خدماتنا بين الانتشار الواسع والاستهداف الدقيق مع إمكانية قياس الأداء لتحقيق أقصى عائد على استثمارك الإعلاني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="benefit-icon-container">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
              <p className="text-tijwal-gray text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Animated Stats Banner */}
        <div className="mt-16 glass-card p-8 bg-gradient-to-r from-tijwal-blue/5 to-tijwal-blue/10 border-tijwal-blue/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-tijwal-blue text-4xl font-bold mb-2">+40</h4>
              <p className="text-tijwal-gray">موقع استراتيجي</p>
            </div>
            <div className="text-center">
              <h4 className="text-tijwal-blue text-4xl font-bold mb-2">+100</h4>
              <p className="text-tijwal-gray">عميل راضٍ</p>
            </div>
            <div className="text-center">
              <h4 className="text-tijwal-blue text-4xl font-bold mb-2">+1000</h4>
              <p className="text-tijwal-gray">حملة إعلانية ناجحة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBenefitsSection;
