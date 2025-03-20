
import { MapPin, Navigation } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const LocationsSection = () => {
  const locations = [
    { name: "المنصور", type: "منطقة تجارية", popularity: "عالية جداً" },
    { name: "الكرادة", type: "منطقة تجارية", popularity: "عالية جداً" },
    { name: "شارع فلسطين", type: "شارع رئيسي", popularity: "عالية" },
    { name: "زيونة", type: "منطقة تسوق", popularity: "عالية" },
    { name: "الأعظمية", type: "منطقة سكنية/تجارية", popularity: "متوسطة" },
    { name: "الحارثية", type: "منطقة مكاتب/تجارية", popularity: "عالية" },
    { name: "العرصات", type: "منطقة راقية", popularity: "عالية" },
    { name: "الجادرية", type: "منطقة سكنية", popularity: "متوسطة" },
    { name: "البياع", type: "منطقة سكنية/تجارية", popularity: "متوسطة" },
    { name: "الدورة", type: "منطقة سكنية/تجارية", popularity: "متوسطة" },
    { name: "الكاظمية", type: "منطقة دينية/تجارية", popularity: "عالية" },
    { name: "جسر الجمهورية", type: "شارع رئيسي", popularity: "عالية" }
  ];

  const filters = [
    "المناطق التجارية",
    "المناطق السكنية",
    "أماكن التسوق",
    "الشوارع الرئيسية"
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            مناطق خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">استهداف استراتيجي في بغداد</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            نوفر خدمة الإعلان المتنقل في مناطق مختارة بعناية في بغداد، مع التركيز على المناطق ذات الكثافة السكانية العالية والمراكز التجارية والترفيهية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
              <h3 className="text-xl font-bold mb-6 text-tijwal-dark">تصفية المواقع</h3>
              
              <div className="space-y-4 mb-8">
                {filters.map((filter, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`filter-${index}`}
                      className="h-5 w-5 rounded border-gray-300 text-tijwal-orange focus:ring-tijwal-orange/25"
                    />
                    <label htmlFor={`filter-${index}`} className="mr-3 text-tijwal-gray">
                      {filter}
                    </label>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-tijwal-dark">احتاج مساعدة في اختيار المواقع المناسبة</h3>
              <p className="text-tijwal-gray mb-6 text-sm">
                فريقنا المتخصص يساعدك في اختيار المواقع المناسبة لنشاطك التجاري وجمهورك المستهدف
              </p>
              <TijwalButton variant="primary" className="w-full">
                تواصل مع فريق المبيعات
              </TijwalButton>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            {/* Simple Rectangle Map Placeholder */}
            <div className="glass-card p-1 rounded-2xl shadow-xl mb-8">
              <div className="image-placeholder aspect-[16/9] rounded-xl relative overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Navigation className="h-12 w-12 text-tijwal-orange mb-4" />
                  <span className="text-sm font-medium bg-white/70 px-4 py-2 rounded-full">
                    خريطة مواقع التجوال في بغداد
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 text-tijwal-dark">المواقع المتاحة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-2">
                    <MapPin className="h-5 w-5 text-tijwal-orange mt-1 ml-2" />
                    <div>
                      <h4 className="font-bold text-tijwal-dark">{location.name}</h4>
                      <p className="text-tijwal-gray text-xs">{location.type}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-tijwal-gray">شعبية:</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      location.popularity === "عالية جداً" 
                        ? "bg-tijwal-orange/10 text-tijwal-orange" 
                        : location.popularity === "عالية"
                        ? "bg-tijwal-blue/10 text-tijwal-blue" 
                        : "bg-tijwal-blue/10 text-tijwal-blue"
                    }`}>
                      {location.popularity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-tijwal-gray mb-4">هذه قائمة بالمواقع المتاحة في بغداد. يمكننا أيضًا تخصيص مسارات محددة وفقًا لاحتياجات عملك.</p>
              <TijwalButton variant="secondary">
                الحصول على تفاصيل أكثر عن المواقع
              </TijwalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
