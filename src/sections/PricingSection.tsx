
import { Check } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';
import { useEffect, useRef, useState } from 'react';

const PricingSection = () => {
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

  const pricingPlans = [
    {
      name: "العرض الاقتصادي",
      description: "اعلانك مشترك على شاشاتنا مع اعلانات اخرى، في اكثر الشوارع ازدحاما",
      features: [
        "عرض الإعلان في أكثر الشوارع ازدحاماً (حسب اختيارنا)",
        "العرض خلال أوقات الذروة (3 ساعات)",
        "مشاركة الشاشة مع إعلانات أخرى",
        "تقارير أساسية عن أداء الحملة",
        "مناسب للمشاريع ذات الميزانية المحدودة"
      ],
      isPopular: false,
      color: "bg-white"
    },
    {
      name: "عرض VIP",
      description: "اعلانك يكون وحده على شاشاتنا بدون اعلانات اخرى، في المكان الذي تختاره",
      features: [
        "حصرية العرض - إعلانك فقط على الشاشة بدون مشاركة",
        "اختيار الموقع المناسب داخل بغداد حسب رغبتك",
        "مرونة في اختيار وقت العرض",
        "تطبيق خاص لمتابعة مكان المندوبين في الوقت الحقيقي",
        "خدمة \"عين التجوال\" لتحليل المشاهدات",
        "توزيع المنشورات الدعائية من قبل مندوبينا",
        "تفاعل مباشر مع المهتمين من خلال مندوبينا المدربين",
        "مناسب للشركات التي ترغب بتحصيل أقصى استفادة من جميع خدماتنا"
      ],
      isPopular: true,
      color: "bg-gradient-to-br from-tijwal-orange/5 to-tijwal-orange/10 border-tijwal-orange"
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-tijwal-light">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            باقاتنا وعروضنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اختر العرض المناسب لاحتياجاتك</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            نوفر باقات متنوعة تلبي احتياجات مختلف العملاء، سواء للميزانيات المحدودة أو للحملات الشاملة عالية التأثير
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${plan.color} border ${plan.isPopular ? 'border-tijwal-orange' : 'border-gray-100'} ${isVisible ? 'opacity-100 translate-y-0 hover:shadow-xl transform hover:-translate-y-2' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0 bg-tijwal-orange text-white py-1 text-center text-sm font-medium">
                  الأكثر طلباً
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
                <p className="text-center text-tijwal-gray mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} 
                        style={{ transitionDelay: `${(index * 200) + (fIndex * 100)}ms` }}>
                      <div className="mt-1 flex-shrink-0">
                        <span className={`flex h-5 w-5 items-center justify-center rounded-full bg-tijwal-orange/10 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-0'}`}
                              style={{ animationDelay: `${(index * 200) + (fIndex * 150)}ms` }}>
                          <Check className={`h-3 w-3 text-tijwal-orange ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                                 style={{ animationDelay: `${(index * 200) + (fIndex * 150) + 100}ms` }} />
                        </span>
                      </div>
                      <span className="mr-3 text-tijwal-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <TijwalButton 
                    variant={plan.isPopular ? "primary" : "secondary"}
                    className={`w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${(index * 200) + (plan.features.length * 100) + 200}ms` }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    احصل على هذا العرض
                  </TijwalButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Discounts Section */}
        <div className={`mt-12 max-w-6xl mx-auto bg-tijwal-blue/5 rounded-xl p-6 border border-tijwal-blue/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <h3 className="text-xl font-bold mb-4 text-center">خصومات خاصة</h3>
          <p className="text-center mb-6">نقدم خصومات تصاعدية بناءً على مدة الحملة الإعلانية:</p>
          <div className={`flex items-center justify-center p-4 bg-white rounded-lg shadow-sm max-w-xl mx-auto transition-all duration-500 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className={`mr-3 h-10 w-10 flex items-center justify-center bg-tijwal-orange/10 rounded-full text-tijwal-orange font-bold ${isVisible ? 'animate-pulse-soft' : ''}`}>%</div>
            <div>
              <h4 className="font-bold mb-1">خصم تصاعدي على الحملات</h4>
              <p className="text-sm text-tijwal-gray">تزداد نسبة الخصم تدريجياً كلما زادت مدة الحملة، بدءاً من حملات الأسبوع الواحد</p>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
          <p className="text-tijwal-gray mb-4">لديك أسئلة حول خدماتنا وعروضنا؟</p>
          <a href="#faq" className="text-tijwal-orange hover:underline font-medium">تعرف على المزيد من خلال الأسئلة الشائعة</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
