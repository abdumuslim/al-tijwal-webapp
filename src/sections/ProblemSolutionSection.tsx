
import { Check, X } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">مشاكل الإعلان التقليدي وحلول التجوال</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            نقدم حلولاً مبتكرة للتحديات التي تواجه الإعلانات التقليدية، مما يجعل علامتك التجارية أكثر وضوحاً وتأثيراً
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Traditional Advertising Problems */}
          <div className="glass-card p-8 bg-gradient-to-br from-red-50 to-white border-red-100">
            <div className="mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <X className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-tijwal-dark mr-4">الإعلان التقليدي</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <X className="h-4 w-4 text-red-500" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">ضعف جذب الانتباه</h4>
                  <p className="text-tijwal-gray">
                    اللوحات الإعلانية الثابتة هي الطريقة الأقل فعالية لجذب انتباه المشاهدين، حيث تندمج مع الخلفية وغالباً ما يتجاهلها المارة.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <X className="h-4 w-4 text-red-500" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">انعدام قياس الأداء الفعلي</h4>
                  <p className="text-tijwal-gray">
                    الإعلانات التقليدية لا توفر بيانات دقيقة عن عدد المشاهدات أو تأثير الحملة الإعلانية.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <X className="h-4 w-4 text-red-500" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">محدودية الانتشار</h4>
                  <p className="text-tijwal-gray">
                    تقتصر البيلبورد التقليدية على أماكن ثابتة محددة، مما يحد من وصولها للجمهور المستهدف.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <X className="h-4 w-4 text-red-500" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">ارتفاع التكلفة</h4>
                  <p className="text-tijwal-gray">
                    تكاليف عالية مع عوائد غير مضمونة وعدم وجود طرق دقيقة لقياس العائد على الاستثمار.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <X className="h-4 w-4 text-red-500" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">عدم المرونة</h4>
                  <p className="text-tijwal-gray">
                    صعوبة تغيير المحتوى الإعلاني أو تحديثه استجابة للتغيرات في السوق أو الحملات الموسمية.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Al-Tijwal Solutions */}
          <div className="glass-card p-8 bg-gradient-to-br from-blue-50 to-white border-blue-100 transform transition-all duration-300 hover:shadow-xl">
            <div className="mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-tijwal-blue/20 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-tijwal-blue" />
              </div>
              <h3 className="text-2xl font-bold text-tijwal-blue mr-4">حلول التجوال</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tijwal-blue/20">
                    <Check className="h-4 w-4 text-tijwal-blue" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">جذب انتباه طبيعي</h4>
                  <p className="text-tijwal-gray">
                    العين البشرية مبرمجة على ملاحظة الحركة وتجاهل الأشياء الثابتة، لذا فإن شاشاتنا المتحركة تجذب الانتباه بشكل طبيعي وتلقائي.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tijwal-blue/20">
                    <Check className="h-4 w-4 text-tijwal-blue" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">قياس دقيق للأداء</h4>
                  <p className="text-tijwal-gray">
                    تقنية عين التجوال توفر بيانات دقيقة عن عدد المشاهدات ومدة المشاهدة لتقييم فعالية الحملة.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tijwal-blue/20">
                    <Check className="h-4 w-4 text-tijwal-blue" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">وصول أوسع وأكثر استهدافاً</h4>
                  <p className="text-tijwal-gray">
                    شاشات متنقلة تصل لمناطق متعددة واستهداف الأماكن المزدحمة في الأوقات المناسبة.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tijwal-blue/20">
                    <Check className="h-4 w-4 text-tijwal-blue" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">تكلفة فعالة</h4>
                  <p className="text-tijwal-gray">
                    باقات سعرية متنوعة تناسب كافة الميزانيات مع إمكانية قياس العائد على الاستثمار.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tijwal-blue/20">
                    <Check className="h-4 w-4 text-tijwal-blue" />
                  </span>
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold mb-1">مرونة كاملة</h4>
                  <p className="text-tijwal-gray">
                    سهولة تغيير المحتوى وتحديثه والتكيف مع الحملات الموسمية والعروض الخاصة.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
