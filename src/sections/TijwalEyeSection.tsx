
import { Eye, BarChart3, Users, Clock } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const TijwalEyeSection = () => {
  // Function to scroll to footer when button is clicked
  const handleContactClick = () => {
    const footerSection = document.getElementById('contact');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tijwal-eye" className="py-24 bg-gradient-radial from-white via-tijwal-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag">
            تقنية حصرية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tijwal-dark modern-header">تقنية عين التجوال</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto mt-8">
            تقنية ذكاء اصطناعي متطورة تقيس عدد المشاهدات ومدة المشاهدة لإعلاناتك، مما يتيح قياس أداء الحملة بدقة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal stagger-1">
            <h3 className="text-2xl font-bold mb-8 text-tijwal-blue">كيف تعمل عين التجوال؟</h3>

            <div className="space-y-8">
              <div className="flex gap-6 reveal stagger-2">
                <div className="bg-tijwal-blue/10 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="h-7 w-7 text-tijwal-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-tijwal-dark">تحليل المشاهدات</h4>
                  <p className="text-tijwal-gray">
                    تستخدم نظام داشكام متطور مع خوارزميات الذكاء الاصطناعي لتحديد عدد الأشخاص الذين ينظرون إلى الإعلان مع الحفاظ التام على خصوصية الأفراد.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 reveal stagger-3">
                <div className="bg-tijwal-blue/10 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-7 w-7 text-tijwal-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-tijwal-dark">قياس مدة المشاهدة</h4>
                  <p className="text-tijwal-gray">
                    تقيس التقنية المدة التي يقضيها المشاهد في النظر إلى الإعلان، مما يوفر معلومات قيمة عن مدى جاذبية المحتوى.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 reveal stagger-4">
                <div className="bg-tijwal-blue/10 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-7 w-7 text-tijwal-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-tijwal-dark">تحسين الاستهداف <span className="text-xs text-tijwal-orange bg-tijwal-orange/10 px-2 py-1 rounded-full ml-2">قريباً</span></h4>
                  <p className="text-tijwal-gray">
                    نعمل على تطوير إمكانيات تحليلية إضافية لفهم أفضل للجمهور، مما سيساعد في تحسين استهداف الحملات المستقبلية.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 reveal stagger-5">
                <div className="bg-tijwal-blue/10 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="h-7 w-7 text-tijwal-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-tijwal-dark">تقارير أداء مفصلة</h4>
                  <p className="text-tijwal-gray">
                    تقارير يومية وأسبوعية وشهرية تعرض بيانات الأداء بطريقة سهلة الفهم من خلال لوحة تحكم خاصة بك.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 reveal stagger-6">
              <TijwalButton variant="primary" onClick={handleContactClick}>تعرف على المزيد</TijwalButton>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-radial from-tijwal-blue/20 to-transparent blur-xl rounded-full transform scale-150"></div>
              <div className="relative glass-card p-3 rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-tijwal-blue/20 overflow-visible">
                <img 
                  src="/lovable-uploads/51fb4261-5cde-4486-a976-0b3ec174ce35.png" 
                  alt="تقنية عين التجوال في العمل" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 shadow-lg reveal stagger-2">
                <div className="flex items-center gap-3">
                  <div className="bg-tijwal-blue/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-tijwal-blue" />
                  </div>
                  <div>
                    <p className="text-tijwal-gray text-sm">دقة التحليل</p>
                    <p className="font-bold text-tijwal-blue">98.5%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 glass-card px-6 py-4 shadow-lg reveal stagger-3">
                <div className="flex items-center gap-3">
                  <div className="bg-tijwal-blue/10 p-2 rounded-full">
                    <BarChart3 className="h-5 w-5 text-tijwal-blue" />
                  </div>
                  <div>
                    <p className="text-tijwal-gray text-sm">تحسين أداء الحملات</p>
                    <p className="font-bold text-tijwal-blue">+65%</p>
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
