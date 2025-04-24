
import { Target, Users, BarChart3, Clock, MapPin, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const CoreBenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section ref={sectionRef} id="services" className="py-20 bg-background"> {/* Use bg-background */}
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"> {/* Use primary color */}
            لماذا تختار التجوال؟
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">مزايا التجوال التنافسية</h2> {/* Use text-foreground */}
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Use text-muted-foreground */}
            تجمع خدماتنا بين الانتشار الواسع والاستهداف الدقيق مع إمكانية قياس الأداء لتحقيق أقصى عائد على استثمارك الإعلاني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`benefit-card transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 hover:-translate-y-2' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="benefit-icon-container text-primary"> {/* Add text-primary for icon color */}
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-foreground">{benefit.title}</h3> {/* Use text-foreground */}
              <p className="text-muted-foreground text-center">{benefit.description}</p> {/* Use text-muted-foreground */}
            </div>
          ))}
        </div>

        {/* Vision Section */}
        {/* Removed light gradient, applied standard dark card bg */}
        <div className={`mt-16 glass-card p-8 border border-primary/20 dark:bg-card dark:border-border transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">رؤيتنا لعام 2029</h3> {/* Use text-foreground */}
            <p className="text-muted-foreground max-w-3xl mx-auto"> {/* Use text-muted-foreground */}
              أن نصبح الشركة الرائدة في مجال الإعلانات الداخلية والخارجية المبتكرة في العراق، محدثين ثورة في طريقة تواصل العلامات التجارية مع جماهيرها من خلال شاشاتنا المتنقلة المتطورة. نريد أن يرتبط اسم التجوال في أذهان الناس بالابتكار والجودة العالية في الإعلان في العراق وأن نكون الخيار الأول الذي يفكرون فيه.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBenefitsSection;
