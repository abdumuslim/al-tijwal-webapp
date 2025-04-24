import { useState, useEffect } from 'react';
import { MapPin, Check } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const LocationsSection = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [animatingItems, setAnimatingItems] = useState<string[]>([]);
  
  const allLocations = [
    { id: "loc1", name: "المنصور", popularity: "عالية جداً" },
    { id: "loc2", name: "المتنبي", popularity: "عالية جداً" },
    { id: "loc3", name: "14 رمضان", popularity: "عالية" },
    { id: "loc4", name: "الحارثية", popularity: "عالية" },
    { id: "loc5", name: "الأعظمية", popularity: "عالية" },
    { id: "loc6", name: "زيونة", popularity: "عالية" },
    { id: "loc7", name: "العامرية", popularity: "عالية" },
    { id: "loc8", name: "السيدية", popularity: "متوسطة" },
    { id: "loc9", name: "الكرادة داخل", popularity: "متوسطة" }
  ];

  const filters = [
    { id: "high-very", name: "شعبية عالية جداً", popularityTypes: ["عالية جداً"] },
    { id: "high", name: "شعبية عالية", popularityTypes: ["عالية"] },
    { id: "medium", name: "شعبية متوسطة", popularityTypes: ["متوسطة"] }
  ];

  useEffect(() => {
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

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredLocations = selectedFilters.length === 0 
    ? allLocations 
    : allLocations.filter(location => {
        const relevantFilters = filters.filter(filter => selectedFilters.includes(filter.id));
        return relevantFilters.some(filter => filter.popularityTypes.includes(location.popularity));
      });
      
  useEffect(() => {
    const newVisibleIds = filteredLocations.map(loc => loc.id);
    
    setAnimatingItems([]);
    
    setTimeout(() => {
      setAnimatingItems(newVisibleIds);
    }, 50);
  }, [selectedFilters]);

  return (
    <section id="locations" className="py-20 bg-background dark:bg-[hsl(var(--card))]/30"> {/* Explicit dark background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"> {/* Use primary */}
            مناطق خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">استهداف استراتيجي في بغداد</h2> {/* Use text-foreground */}
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Use text-muted-foreground */}
            نوفر خدمة الإعلان المتنقل في مناطق مختارة بعناية في بغداد، مع التركيز على المناطق ذات الكثافة السكانية العالية والمراكز التجارية والترفيهية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div className="col-span-1">
            <div className="bg-card rounded-xl shadow-lg p-6 sticky top-20"> {/* Use bg-card */}
              <h3 className="text-xl font-bold mb-6 text-foreground">تصفية المواقع</h3> {/* Use text-foreground */}

              <div className="glass-card p-6 mb-8 bg-muted/50 dark:bg-muted/20 dark:backdrop-blur-lg rounded-lg"> {/* Added dark:backdrop-blur */}
                <h3 className="text-xl font-bold mb-4 text-foreground">استراتيجية اختيار المواقع</h3> {/* Use text-foreground */}
                <p className="text-muted-foreground mb-4"> {/* Use text-muted-foreground */}
                  نختار مواقعنا بعناية بناءً على معايير محددة لضمان أقصى تأثير للحملات الإعلانية:
                </p>
                <ul className="space-y-2 text-muted-foreground"> {/* Use text-muted-foreground */}
                  <li className="flex items-start">
                    <div className="mt-1 ml-2 flex-shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10"> {/* Use primary */}
                        <Check className="h-3 w-3 text-primary" /> {/* Use primary */}
                      </span>
                    </div>
                    <span>المناطق التجارية: المنصور، الكرادة، وشوارع التسوق الرئيسية</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 ml-2 flex-shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10"> {/* Use primary */}
                        <Check className="h-3 w-3 text-primary" /> {/* Use primary */}
                      </span>
                    </div>
                    <span>أماكن التجمعات: بالقرب من مراكز التسوق والمطاعم والمقاهي الشهيرة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 ml-2 flex-shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10"> {/* Use primary */}
                        <Check className="h-3 w-3 text-primary" /> {/* Use primary */}
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
                      className="h-5 w-5 rounded border-border text-primary focus:ring-primary/25 dark:accent-primary location-filter-checkbox" // Use theme colors, add dark:accent
                      checked={selectedFilters.includes(filter.id)}
                      onChange={() => handleFilterChange(filter.id)}
                    />
                    <label
                      htmlFor={`filter-${filter.id}`}
                      className={`mr-3 transition-all duration-300 border-b-2 border-transparent pb-1 ${
                        selectedFilters.includes(filter.id) ? 'text-primary border-primary' : 'text-muted-foreground' // Use theme colors
                      }`}
                    >
                      {filter.name}
                    </label>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">احتاج مساعدة في اختيار المواقع المناسبة</h3> {/* Use text-foreground */}
              <p className="text-muted-foreground mb-6 text-sm"> {/* Use text-muted-foreground */}
                فريقنا المتخصص يساعدك في اختيار المواقع المناسبة لنشاطك التجاري وجمهورك المستهدف
              </p>
              <TijwalButton 
                variant="primary" 
                className="w-full"
                onClick={handleContactClick}
              >
                تواصل مع فريق المبيعات
              </TijwalButton>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="glass-card p-1 rounded-2xl shadow-xl mb-8 dark:bg-card/60 dark:backdrop-blur-lg"> {/* Added dark glass effect */}
              <div className="relative rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1ktBrIpaMmmRgekTrYzKKfAQhdZPMv8o&ehbc=2E312F&noprof=1" 
                  width="100%" 
                  height="450"
                  title="مواقع خدمات التجوال في بغداد"
                  className="border-0 w-full"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 text-foreground">المواقع المتاحة</h3> {/* Use text-foreground */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allLocations.map((location) => {
                const isVisible = animatingItems.includes(location.id) && filteredLocations.some(loc => loc.id === location.id);
                const animationDelay = `${(Array.from(animatingItems).indexOf(location.id) * 0.05)}s`;
                
                return (
                  <div
                    key={location.id}
                    className={`bg-card rounded-lg border border-border p-4 shadow-sm hover:shadow-md transition-all duration-300 location-item ${isVisible ? '' : 'location-item-hidden'}`}
                    style={{ animationDelay }}
                  >
                    <div className="flex items-start mb-2">
                      <MapPin className="h-5 w-5 text-primary mt-1 ml-2" /> {/* Use primary */}
                      <div>
                        <h4 className="font-bold text-foreground">{location.name}</h4> {/* Use text-foreground */}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-muted-foreground">شعبية:</span> {/* Use text-muted-foreground */}
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        location.popularity === "عالية جداً"
                          ? "bg-primary/10 text-primary" // Use primary
                          : location.popularity === "عالية"
                          ? "bg-secondary/10 text-secondary" // Use secondary
                          : "bg-emerald-400/10 text-emerald-600 dark:bg-emerald-600/20 dark:text-emerald-400" // Keep emerald, add dark variant
                      }`}>
                        {location.popularity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">هذه قائمة بالمواقع المتاحة في بغداد. يمكننا أيضًا تخصيص مسارات محددة وفقًا لاحتياجات عملك.</p> {/* Use text-muted-foreground */}
              <TijwalButton
                variant="secondary"
                onClick={handleContactClick}
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

