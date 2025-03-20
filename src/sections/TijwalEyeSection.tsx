
import { Eye, BarChart3, Users, Clock } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const TijwalEyeSection = () => {
  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-white to-tijwal-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            تقنية حصرية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تقنية عين التجوال</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            تقنية ذكاء اصطناعي متطورة تقيس عدد المشاهدات ومدة المشاهدة لإعلاناتك، مما يتيح قياس أداء الحملة بدقة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-tijwal-dark">كيف تعمل عين التجوال؟</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-tijwal-orange/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-tijwal-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">تحليل المشاهدات</h4>
                  <p className="text-tijwal-gray">
                    تستخدم كاميرات متطورة مع تقنية التعرف على الوجه لإحصاء عدد المشاهدين بدقة (مع الحفاظ التام على خصوصية الأفراد).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-tijwal-orange/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-tijwal-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">قياس مدة المشاهدة</h4>
                  <p className="text-tijwal-gray">
                    تقيس التقنية المدة التي يقضيها المشاهد في النظر إلى الإعلان، مما يوفر معلومات قيمة عن مدى جاذبية المحتوى.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-tijwal-orange/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-tijwal-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">تحليل الديموغرافيا</h4>
                  <p className="text-tijwal-gray">
                    تقدم تحليلاً تقريبياً للفئات العمرية والجنس، مما يساعد في تحسين استهداف الحملات المستقبلية.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-tijwal-orange/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-tijwal-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">تقارير أداء مفصلة</h4>
                  <p className="text-tijwal-gray">
                    تقارير يومية وأسبوعية وشهرية تعرض بيانات الأداء بطريقة سهلة الفهم من خلال لوحة تحكم خاصة بك.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <TijwalButton variant="primary">تعرف على المزيد</TijwalButton>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative glass-card p-1 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
                {/* Image Placeholder for Tijwal Eye Technology */}
                <div className="image-placeholder aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-tijwal-orange/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-tijwal-orange/20 animate-pulse flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-tijwal-orange/30 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-tijwal-orange/40 flex items-center justify-center">
                          <Eye className="h-12 w-12 text-tijwal-orange" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="absolute bottom-4 text-xs text-tijwal-gray/70">صورة توضيحية لتقنية عين التجوال</span>
                  {/* Animated elements */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-tijwal-orange rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-tijwal-blue rounded-full animate-ping opacity-75"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-tijwal-teal rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-tijwal-orange/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-tijwal-orange" />
                  </div>
                  <div>
                    <p className="text-tijwal-gray text-sm">دقة التحليل</p>
                    <p className="font-bold text-tijwal-dark">98.5%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 glass-card px-6 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-tijwal-orange/10 p-2 rounded-full">
                    <BarChart3 className="h-5 w-5 text-tijwal-orange" />
                  </div>
                  <div>
                    <p className="text-tijwal-gray text-sm">تحسين أداء الحملات</p>
                    <p className="font-bold text-tijwal-dark">+65%</p>
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
