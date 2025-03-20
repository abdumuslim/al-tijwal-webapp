
import { useState, useEffect } from 'react';
import { MapPin, Navigation, Check } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const LocationsSection = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [animatingItems, setAnimatingItems] = useState<string[]>([]);
  
  const allLocations = [
    { id: "loc1", name: "المنصور", type: "منطقة تجارية", popularity: "عالية جداً" },
    { id: "loc2", name: "الكرادة", type: "منطقة تجارية", popularity: "عالية جداً" },
    { id: "loc3", name: "شارع فلسطين", type: "شارع رئيسي", popularity: "عالية" },
    { id: "loc4", name: "زيونة", type: "منطقة تسوق", popularity: "عالية" },
    { id: "loc5", name: "الأعظمية", type: "منطقة سكنية/تجارية", popularity: "متوسطة" },
    { id: "loc6", name: "الحارثية", type: "منطقة مكاتب/تجارية", popularity: "عالية" },
    { id: "loc7", name: "العرصات", type: "منطقة راقية", popularity: "عالية" },
    { id: "loc8", name: "الجادرية", type: "منطقة سكنية", popularity: "متوسطة" },
    { id: "loc9", name: "البياع", type: "منطقة سكنية/تجارية", popularity: "متوسطة" },
    { id: "loc10", name: "الدورة", type: "منطقة سكنية/تجارية", popularity: "متوسطة" },
    { id: "loc11", name: "الكاظمية", type: "منطقة دينية/تجارية", popularity: "عالية" },
    { id: "loc12", name: "جسر الجمهورية", type: "شارع رئيسي", popularity: "عالية" }
  ];

  const filters = [
    { id: "commercial", name: "المناطق التجارية", types: ["منطقة تجارية", "منطقة مكاتب/تجارية", "منطقة راقية", "منطقة دينية/تجارية"] },
    { id: "residential", name: "المناطق السكنية", types: ["منطقة سكنية", "منطقة سكنية/تجارية"] },
    { id: "shopping", name: "أماكن التسوق", types: ["منطقة تسوق"] },
    { id: "main-streets", name: "الشوارع الرئيسية", types: ["شارع رئيسي"] }
  ];

  useEffect(() => {
    // Initialize all locations as visible
    setAnimatingItems(allLocations.map(loc => loc.id));
  }, []);

  const handleFilterChange = (filterId: string) => {
    setSelectedFilters(prev => {
      if (prev.includes(filterId)) {
        return prev.filter(id => id !== filterId);
      } else {
        return [...prev, filterId];
      }
    });
  };

  const filteredLocations = selectedFilters.length === 0 
    ? allLocations 
    : allLocations.filter(location => {
        const relevantFilters = filters.filter(filter => selectedFilters.includes(filter.id));
        return relevantFilters.some(filter => filter.types.includes(location.type));
      });
      
  useEffect(() => {
    // When filters change, update animating items
    const newVisibleIds = filteredLocations.map(loc => loc.id);
    
    // Clear animations first
    setAnimatingItems([]);
    
    // Then add them back with a small delay to trigger animations
    setTimeout(() => {
      setAnimatingItems(newVisibleIds);
    }, 50);
  }, [selectedFilters]);

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

              <div className="glass-card p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-tijwal-dark">استراتيجية اختيار المواقع</h3>
                <p className="text-tijwal-gray mb-4">
                  نختار مواقعنا بعناية بناءً على معايير محددة لضمان أقصى تأثير للحملات الإعلانية:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1 ml-2 flex-shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-tijwal-orange/20">
                        <Check className="h-3 w-3 text-tijwal-orange" />
                      </span>
                    </div>
                    <span>المناطق التجارية: المنصور، الكرادة، وشوارع التسوق الرئيسية</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 ml-2 flex-shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-tijwal-orange/20">
                        <Check className="h-3 w-3 text-tijwal-orange" />
                      </span>
                    </div>
                    <span>أماكن التجمعات: بالقرب من مراكز التسوق والمطاعم والمقاهي الشهيرة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 ml-2 flex-shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-tijwal-orange/20">
                        <Check className="h-3 w-3 text-tijwal-orange" />
                      </span>
                    </div>
                    <span>مراكز النقل: بالقرب من محطات الباصات ومواقف سيارات الأجرة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 ml-2 flex-shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-tijwal-orange/20">
                        <Check className="h-3 w-3 text-tijwal-orange" />
                      </span>
                    </div>
                    <span>المناسبات الخاصة: بالقرب من الفعاليات والمهرجانات والحفلات</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4 mb-8">
                {filters.map((filter, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`filter-${filter.id}`}
                      className="h-5 w-5 rounded border-gray-300 text-tijwal-orange focus:ring-tijwal-orange/25 location-filter-checkbox"
                      checked={selectedFilters.includes(filter.id)}
                      onChange={() => handleFilterChange(filter.id)}
                    />
                    <label 
                      htmlFor={`filter-${filter.id}`} 
                      className={`mr-3 transition-all duration-300 border-b-2 border-transparent pb-1 ${
                        selectedFilters.includes(filter.id) ? 'text-tijwal-orange border-tijwal-orange' : 'text-tijwal-gray'
                      }`}
                    >
                      {filter.name}
                    </label>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-tijwal-dark">احتاج مساعدة في اختيار المواقع المناسبة</h3>
              <p className="text-tijwal-gray mb-6 text-sm">
                فريقنا المتخصص يساعدك في اختيار المواقع المناسبة لنشاطك التجاري وجمهورك المستهدف
              </p>
              <TijwalButton 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  window.open('http://wa.me/9647849567837', '_blank');
                }}
              >
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
            <div className="location-grid">
              {allLocations.map((location) => {
                const isVisible = animatingItems.includes(location.id) && filteredLocations.some(loc => loc.id === location.id);
                const animationDelay = `${(Array.from(animatingItems).indexOf(location.id) * 0.05)}s`;
                
                return (
                  <div 
                    key={location.id} 
                    className={`bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 location-item ${isVisible ? '' : 'location-item-hidden'}`}
                    style={{ animationDelay }}
                  >
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
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-tijwal-gray mb-4">هذه قائمة بالمواقع المتاحة في بغداد. يمكننا أيضًا تخصيص مسارات محددة وفقًا لاحتياجات عملك.</p>
              <TijwalButton 
                variant="secondary"
                onClick={() => {
                  window.open('http://wa.me/9647849567837', '_blank');
                }}
              >
                استفسر عن مواقع محددة
              </TijwalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
