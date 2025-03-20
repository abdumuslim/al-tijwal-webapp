
import { Check } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "الباقة الأساسية",
      price: "17,000",
      unit: "للشاشة/للساعة",
      duration: "الحد الأدنى ساعتان",
      features: [
        "شاشة إعلانية متنقلة واحدة",
        "موقع واحد استراتيجي في بغداد",
        "تقارير يومية عن الأداء",
        "الوصول إلى منصة عين التجوال",
        "دعم فني أساسي"
      ],
      isPopular: false,
      color: "bg-white"
    },
    {
      name: "الباقة المميزة",
      price: "16,000",
      unit: "للشاشة/للساعة",
      duration: "عند حجز 5 ساعات",
      features: [
        "شاشات متعددة حسب الطلب",
        "موقعين استراتيجيين في بغداد",
        "تقارير مفصلة عن الأداء والجمهور",
        "الوصول الكامل إلى منصة عين التجوال",
        "تخصيص المسارات حسب الطلب",
        "دعم فني على مدار الساعة"
      ],
      isPopular: true,
      color: "bg-gradient-to-br from-tijwal-orange/5 to-tijwal-orange/10 border-tijwal-orange"
    },
    {
      name: "الباقة الاحترافية",
      price: "15,000",
      unit: "للشاشة/للساعة",
      duration: "عند حجز 10+ ساعات",
      features: [
        "شاشات متعددة حسب الطلب",
        "ثلاثة مواقع استراتيجية في بغداد",
        "تقارير متقدمة مع تحليلات الجمهور",
        "الوصول الكامل إلى منصة عين التجوال",
        "تخصيص المسارات والأوقات",
        "دعم فني متميز ومدير حساب مخصص",
        "موظف تسويق مرافق للشاشة"
      ],
      isPopular: false,
      color: "bg-white"
    }
  ];

  const enterprisePlan = {
    name: "الباقة المخصصة للشركات",
    description: "حلول مخصصة للشركات الكبيرة والحملات واسعة النطاق، تشمل حزم شهرية بأسعار تنافسية",
    features: [
      "خطة مخصصة حسب احتياجات عملك",
      "تغطية واسعة النطاق في مختلف مناطق بغداد",
      "موظفي تسويق متخصصين",
      "تقارير وتحليلات متقدمة",
      "أولوية في المواقع الاستراتيجية",
      "مدير حساب تنفيذي مخصص"
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-tijwal-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            باقاتنا وأسعارنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">استثمار يحقق نتائج ملموسة</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            باقات مرنة تناسب احتياجات عملك المختلفة مع أسعار تنافسية وقيمة عالية مقارنة بوسائل الإعلان التقليدية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 relative ${plan.color} border ${plan.isPopular ? 'border-tijwal-orange' : 'border-gray-100'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 w-full bg-tijwal-orange text-white py-1 text-center text-sm font-medium">
                  الأكثر شعبية
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
                <div className="flex justify-center items-baseline my-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-tijwal-gray mr-2 text-sm">د.ع/{plan.unit}</span>
                </div>
                <p className="text-center text-tijwal-gray text-sm mb-6">{plan.duration}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <div className="mt-1 flex-shrink-0">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-tijwal-orange/10">
                          <Check className="h-3 w-3 text-tijwal-orange" />
                        </span>
                      </div>
                      <span className="mr-3 text-tijwal-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <TijwalButton 
                    variant={plan.isPopular ? "primary" : "secondary"}
                    className="w-full"
                  >
                    اختر هذه الباقة
                  </TijwalButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Discounts Section */}
        <div className="mt-12 max-w-6xl mx-auto bg-tijwal-blue/5 rounded-xl p-6 border border-tijwal-blue/20">
          <h3 className="text-xl font-bold mb-4 text-center">خصومات خاصة</h3>
          <p className="text-center mb-6">نقدم خصومات خاصة للحملات الكبيرة والعملاء المستمرين:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
              <div className="mr-3 h-10 w-10 flex items-center justify-center bg-tijwal-orange/10 rounded-full text-tijwal-orange font-bold">5%</div>
              <div>
                <h4 className="font-bold mb-1">خصم الحملات الكبيرة</h4>
                <p className="text-sm text-tijwal-gray">خصم 5-7% على الحملات التي تستخدم 10 شاشات أو أكثر</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
              <div className="mr-3 h-10 w-10 flex items-center justify-center bg-tijwal-blue/10 rounded-full text-tijwal-blue font-bold">+</div>
              <div>
                <h4 className="font-bold mb-1">خصومات العقود طويلة المدى</h4>
                <p className="text-sm text-tijwal-gray">تواصل معنا للحصول على أفضل الأسعار للعقود الشهرية والسنوية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{enterprisePlan.name}</h3>
                <p className="text-tijwal-gray mb-6">{enterprisePlan.description}</p>
                <ul className="space-y-4 mb-8">
                  {enterprisePlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 flex-shrink-0">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-tijwal-orange/10">
                          <Check className="h-3 w-3 text-tijwal-orange" />
                        </span>
                      </div>
                      <span className="mr-3 text-tijwal-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="image-placeholder aspect-square h-40 w-40 rounded-full mx-auto mb-6">
                  <span className="text-xs font-medium">شعار حلول الشركات</span>
                </div>
                <p className="text-tijwal-gray mb-6">أسعار تنافسية للعقود الشهرية والسنوية</p>
                <TijwalButton variant="primary" size="lg">
                  تواصل معنا للحصول على عرض سعر
                </TijwalButton>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-tijwal-gray mb-4">لديك أسئلة حول خدماتنا وأسعارنا؟</p>
          <a href="#faq" className="text-tijwal-orange hover:underline font-medium">تعرف على المزيد من خلال الأسئلة الشائعة</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
