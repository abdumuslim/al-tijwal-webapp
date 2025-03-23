
import { Check } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const PricingSection = () => {
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
      color: "bg-white border-gray-100"
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
      color: "bg-gradient-to-r from-tijwal-blue/5 to-tijwal-blue/10 border-tijwal-blue/20"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-tijwal-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag">
            باقاتنا وعروضنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tijwal-dark modern-header">اختر العرض المناسب لاحتياجاتك</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto mt-8">
            نوفر باقات متنوعة تلبي احتياجات مختلف العملاء، سواء للميزانيات المحدودة أو للحملات الشاملة عالية التأثير
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto reveal">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 relative ${plan.color} border`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0 bg-tijwal-blue text-white py-1.5 text-center text-sm font-medium">
                  الأكثر طلباً
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-center text-tijwal-dark">{plan.name}</h3>
                <p className="text-center text-tijwal-gray mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="pricing-feature">
                      <div className="pricing-feature-icon">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-tijwal-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <TijwalButton 
                    variant={plan.isPopular ? "primary" : "secondary"}
                    className="w-full"
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
        <div className="mt-16 max-w-6xl mx-auto glass-card p-8 bg-gradient-to-r from-tijwal-orange/5 to-tijwal-orange/10 reveal stagger-2">
          <h3 className="text-xl font-bold mb-4 text-center text-tijwal-dark">خصومات خاصة</h3>
          <p className="text-center mb-6 text-tijwal-gray">نقدم خصومات تصاعدية بناءً على مدة الحملة الإعلانية:</p>
          <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm max-w-xl mx-auto">
            <div className="mr-4 h-12 w-12 flex items-center justify-center bg-tijwal-orange text-white rounded-full font-bold text-lg">%</div>
            <div>
              <h4 className="font-bold mb-1 text-tijwal-dark">خصم تصاعدي على الحملات</h4>
              <p className="text-sm text-tijwal-gray">تزداد نسبة الخصم تدريجياً كلما زادت مدة الحملة، بدءاً من حملات الأسبوع الواحد</p>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center reveal stagger-3">
          <p className="text-tijwal-gray mb-4">لديك أسئلة حول خدماتنا وعروضنا؟</p>
          <a href="#faq" className="btn-with-arrow group">
            تعرف على المزيد من خلال الأسئلة الشائعة
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
