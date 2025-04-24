
import { Eye, BarChart3, Users, Clock } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';
import { useEffect, useRef, useState } from 'react';

const TijwalEyeSection = () => {
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

  // Function to scroll to contact section when button is clicked
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="tijwal-eye" className="py-20 bg-gradient-to-b from-background to-muted/50 dark:bg-[hsl(var(--background))]"> {/* Explicit dark background */}
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"> {/* Use primary */}
            تقنية حصرية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">تقنية عين التجوال</h2> {/* Use text-foreground */}
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Use text-muted-foreground */}
            تقنية ذكاء اصطناعي متطورة تقيس عدد المشاهدات ومدة المشاهدة لإعلاناتك، مما يتيح قياس أداء الحملة بدقة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">كيف تعمل عين التجوال؟</h3> {/* Use text-foreground */}

            <div className="space-y-6">
              {[
                {
                  icon: <Eye className="h-6 w-6 text-primary" />, // Use primary
                  title: "تحليل المشاهدات",
                  description: "تستخدم نظام داشكام متطور مع خوارزميات الذكاء الاصطناعي لتحديد عدد الأشخاص الذين ينظرون إلى الإعلان مع الحفاظ التام على خصوصية الأفراد."
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />, // Use primary
                  title: "قياس مدة المشاهدة",
                  description: "تقيس التقنية المدة التي يقضيها المشاهد في النظر إلى الإعلان، مما يوفر معلومات قيمة عن مدى جاذبية المحتوى."
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />, // Use primary
                  title: "تحسين الاستهداف",
                  label: "(قريباً)",
                  description: "نعمل على تطوير إمكانيات تحليلية إضافية لفهم أفضل للجمهور، مما سيساعد في تحسين استهداف الحملات المستقبلية."
                },
                {
                  icon: <BarChart3 className="h-6 w-6 text-primary" />, // Use primary
                  title: "تقارير أداء مفصلة",
                  description: "تقارير يومية وأسبوعية وشهرية تعرض بيانات الأداء بطريقة سهلة الفهم من خلال لوحة تحكم خاصة بك."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150 + 450}ms` }}
                >
                  <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0"> {/* Use primary */}
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-foreground"> {/* Use text-foreground */}
                      {feature.title}
                      {feature.label && <span className="text-xs text-primary"> {feature.label}</span>} {/* Use primary */}
                    </h4>
                    <p className="text-muted-foreground">{feature.description}</p> {/* Use text-muted-foreground */}
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <TijwalButton variant="primary" onClick={handleContactClick}>تعرف على المزيد</TijwalButton>
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="relative glass-card p-1 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] dark:bg-card/60 dark:backdrop-blur-lg"> {/* Added dark glass effect */}
                <img
                  src="/lovable-uploads/51fb4261-5cde-4486-a976-0b3ec174ce35.webp"
                  alt="تقنية عين التجوال في العمل"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              
              {/* Stats overlay */}
              <div className={`absolute -bottom-6 -right-6 glass-card px-6 py-4 shadow-lg dark:bg-card/80 backdrop-blur-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}> {/* Add dark:bg-card/80 */}
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full"> {/* Use primary */}
                    <Users className="h-5 w-5 text-primary" /> {/* Use primary */}
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">دقة التحليل</p> {/* Use text-muted-foreground */}
                    <p className="font-bold text-foreground">98.5%</p> {/* Use text-foreground */}
                  </div>
                </div>
              </div>
              
              <div className={`absolute -top-6 -left-6 glass-card px-6 py-4 shadow-lg dark:bg-card/80 backdrop-blur-sm transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}> {/* Add dark:bg-card/80 */}
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full"> {/* Use primary */}
                    <BarChart3 className="h-5 w-5 text-primary" /> {/* Use primary */}
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">تحسين أداء الحملات</p> {/* Use text-muted-foreground */}
                    <p className="font-bold text-foreground">+65%</p> {/* Use text-foreground */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TijwalEyeSection;
