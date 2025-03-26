
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">مشاكل الإعلان التقليدي وحلول التجوال</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            نقدم حلولاً مبتكرة للتحديات التي تواجه الإعلانات التقليدية، مما يجعل علامتك التجارية أكثر وضوحاً وتأثيراً
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Traditional Advertising Problems */}
          <div className={`glass-card p-8 bg-gradient-to-br from-red-50 to-white border-red-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <X className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-tijwal-dark mr-4">الإعلان التقليدي</h3>
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
                  description: "تقتصر البيلبورد التقليدية على أماكن ثابتة محددة، مما يحد من وصولها للجمهور المستهدف."
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
                <li key={index} className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="mt-1 flex-shrink-0">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold mb-1">{problem.title}</h4>
                    <p className="text-tijwal-gray">{problem.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Al-Tijwal Solutions */}
          <div className={`glass-card p-8 bg-gradient-to-br from-blue-50 to-white border-blue-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0 hover:shadow-xl' : 'opacity-0 translate-x-20'}`}>
            <div className="mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-tijwal-blue/20 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-tijwal-blue" />
              </div>
              <h3 className="text-2xl font-bold text-tijwal-blue mr-4">حلول التجوال</h3>
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
                <li key={index} className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                  <div className="mt-1 flex-shrink-0">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tijwal-blue/20">
                      <Check className="h-4 w-4 text-tijwal-blue" />
                    </span>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold mb-1">{solution.title}</h4>
                    <p className="text-tijwal-gray">{solution.description}</p>
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
