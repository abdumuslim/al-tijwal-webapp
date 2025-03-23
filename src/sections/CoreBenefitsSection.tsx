
import { Target, Users, BarChart3, Clock, MapPin, MessageCircle } from 'lucide-react';

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
      description: "تقارير مفصلة عن أداء حملتك الإعلانية باستخدام تقنية عين التجوال التي تقيس عدد المشاهدات ومدة المشاهدة",
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
    {
      title: "التفاعل المباشر",
      description: "تواصل مباشر مع العملاء المحتملين من خلال مندوبينا المدربين الذين يمكنهم الإجابة على استفسارات الجمهور",
      icon: <MessageCircle className="h-8 w-8" />
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            لماذا تختار التجوال؟
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">مزايا التجوال التنافسية</h2>
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

        {/* Vision Section */}
        <div className="mt-16 glass-card p-8 bg-gradient-to-r from-tijwal-orange/5 to-tijwal-blue/5 border border-tijwal-orange/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-tijwal-dark">رؤيتنا لعام 2029</h3>
            <p className="text-tijwal-gray max-w-3xl mx-auto">
              أن نصبح الشركة الرائدة في مجال الإعلانات الداخلية والخارجية المبتكرة في العراق، محدثين ثورة في طريقة تواصل العلامات التجارية مع جماهيرها من خلال شاشاتنا المتنقلة المتطورة. نريد أن يرتبط اسم التجوال في أذهان الناس بالابتكار والجودة العالية في الإعلان في العراق وأن نكون الخيار الأول الذي يفكرون فيه.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBenefitsSection;
