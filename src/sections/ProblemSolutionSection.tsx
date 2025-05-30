
import { Check, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ProblemSolutionSection = () => {
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
        rootMargin: '-100px', // Changed from 0px to -100px to trigger earlier
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background dark:bg-card/30"> {/* Alternate dark bg */}
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">مشاكل الإعلان التقليدي وحلول التجوال</h2> {/* Use text-foreground */}
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Use text-muted-foreground */}
            نقدم حلولاً مبتكرة للتحديات التي تواجه الإعلانات التقليدية، مما يجعل علامتك التجارية أكثر وضوحاً وتأثيراً
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Traditional Advertising Problems */}
          {/* Removed light gradient/border, added dark bg/border */}
          <div className={`glass-card p-8 border dark:bg-card dark:border-destructive/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'}`}>
            <div className="mb-8 flex items-center justify-center">
              <div className={`w-16 h-16 bg-red-100 dark:bg-destructive/20 rounded-full flex items-center justify-center transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-0'}`}>
                <X className={`h-8 w-8 text-red-500 dark:text-destructive transition-all duration-500 ${isVisible ? 'rotate-0' : 'rotate-90'}`} style={{ transitionDelay: '200ms' }} /> {/* Dark mode icon color */}
              </div>
              <h3 className={`text-2xl font-bold text-foreground mr-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '300ms' }}>الإعلان التقليدي</h3> {/* Use text-foreground */}
            </div>

            <ul className="space-y-6">
              {[
                {
                  title: "ضعف جذب الانتباه",
                  description: "اللوحات الإعلانية الثابتة هي الطريقة الأقل فعالية لجذب انتباه المشاهدين، حيث تندمج مع الخلفية وغالباً ما يتجاهلها المارة."
                },
                {
                  title: "انعدام قياس الأداء الفعلي",
                  description: "الإعلانات التقليدية لا توفر بيانات دقيقة عن عدد المشاهدات أو تأثير الحملة الإعلانية."
                },
                {
                  title: "محدودية الانتشار",
                  description: "تقتصر الشاشات التقليدية على أماكن ثابتة محددة، مما يحد من وصولها للجمهور المستهدف."
                },
                {
                  title: "ارتفاع التكلفة",
                  description: "تكاليف عالية مع عوائد غير مضمونة وعدم وجود طرق دقيقة لقياس العائد على الاستثمار."
                },
                {
                  title: "عدم المرونة",
                  description: "صعوبة تغيير المحتوى الإعلاني أو تحديثه استجابة للتغيرات في السوق أو الحملات الموسمية."
                }
              ].map((problem, index) => (
                <li key={index} className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${(index * 150) + 400}ms` }}>
                  <div className="mt-1 flex-shrink-0">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-destructive/20 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${(index * 150) + 450}ms` }}> {/* Dark mode icon bg */}
                      <X className={`h-4 w-4 text-red-500 dark:text-destructive transition-all duration-500 ${isVisible ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} style={{ transitionDelay: `${(index * 150) + 500}ms` }} /> {/* Dark mode icon color */}
                    </span>
                  </div>
                  <div className="mr-4">
                    <h4 className={`text-lg font-semibold mb-1 text-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${(index * 150) + 550}ms` }}>{problem.title}</h4> {/* Use text-foreground */}
                    <p className={`text-muted-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${(index * 150) + 600}ms` }}>{problem.description}</p> {/* Use text-muted-foreground */}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Al-Tijwal Solutions */}
           {/* Removed light gradient/border, added dark bg/border */}
          <div className={`glass-card p-8 border dark:bg-card dark:border-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 hover:shadow-xl' : 'opacity-0 translate-x-40'}`}>
            <div className="mb-8 flex items-center justify-center">
              <div className={`w-16 h-16 bg-tijwal-blue/20 dark:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-0'}`}>
                <Check className={`h-8 w-8 text-tijwal-blue dark:text-primary transition-all duration-500 ${isVisible ? 'rotate-0' : '-rotate-90'}`} style={{ transitionDelay: '600ms' }} /> {/* Dark mode icon color */}
              </div>
              <h3 className={`text-2xl font-bold text-tijwal-blue dark:text-primary mr-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '700ms' }}>حلول التجوال</h3> {/* Dark mode text color */}
            </div>

            <ul className="space-y-6">
              {[
                {
                  title: "جذب انتباه طبيعي",
                  description: "العين البشرية مبرمجة على ملاحظة الحركة وتجاهل الأشياء الثابتة، لذا فإن شاشاتنا المتحركة تجذب الانتباه بشكل طبيعي وتلقائي."
                },
                {
                  title: "قياس دقيق للأداء",
                  description: "تقنية عين التجوال توفر بيانات دقيقة عن عدد المشاهدات ومدة المشاهدة لتقييم فعالية الحملة."
                },
                {
                  title: "وصول أوسع وأكثر استهدافاً",
                  description: "شاشات متنقلة تصل لمناطق متعددة واستهداف الأماكن المزدحمة في الأوقات المناسبة."
                },
                {
                  title: "تكلفة فعالة",
                  description: "باقات سعرية متنوعة تناسب كافة الميزانيات مع إمكانية قياس العائد على الاستثمار."
                },
                {
                  title: "مرونة كاملة",
                  description: "سهولة تغيير المحتوى وتحديثه والتكيف مع الحملات الموسمية والعروض الخاصة."
                }
              ].map((solution, index) => (
                <li key={index} className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${(index * 150) + 800}ms` }}>
                  <div className="mt-1 flex-shrink-0">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-tijwal-blue/20 dark:bg-primary/20 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${(index * 150) + 850}ms` }}> {/* Dark mode icon bg */}
                      <Check className={`h-4 w-4 text-tijwal-blue dark:text-primary transition-all duration-500 ${isVisible ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} style={{ transitionDelay: `${(index * 150) + 900}ms` }} /> {/* Dark mode icon color */}
                    </span>
                  </div>
                  <div className="mr-4">
                    <h4 className={`text-lg font-semibold mb-1 text-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: `${(index * 150) + 950}ms` }}>{solution.title}</h4> {/* Use text-foreground */}
                    <p className={`text-muted-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: `${(index * 150) + 1000}ms` }}>{solution.description}</p> {/* Use text-muted-foreground */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
