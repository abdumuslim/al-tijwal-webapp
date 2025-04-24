
import { Monitor, Battery, Volume2, Wifi } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const TechnicalSpecsSection = () => {
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
        rootMargin: '-50px',
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
    <section ref={sectionRef} className="py-16 bg-background dark:bg-[hsl(var(--card))]/30"> {/* Explicit dark background */}
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4"> {/* Use secondary */}
            المواصفات التقنية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">شاشات متطورة بمواصفات عالية</h2> {/* Use text-foreground */}
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Use text-muted-foreground */}
            نستخدم أحدث التقنيات في شاشاتنا المتنقلة لضمان أفضل تجربة عرض ممكنة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Monitor className="h-6 w-6 text-primary" />, // Use primary
              title: "الشاشة",
              description1: "شاشة 32 بوصة",
              description2: "دقة عالية Full HD",
              description3: "1920 × 1080 بكسل"
            },
            {
              icon: <Volume2 className="h-6 w-6 text-primary" />, // Use primary
              title: "الصوت",
              description1: "سماعات مدمجة عالية الجودة للعرض الصوتي المرافق للفيديو"
            },
            {
              icon: <Battery className="h-6 w-6 text-primary" />, // Use primary
              title: "البطارية",
              description1: "بطاريات قابلة للشحن تدوم لمدة 7 ساعات من التشغيل المتواصل"
            },
            {
              icon: <Wifi className="h-6 w-6 text-primary" />, // Use primary
              title: "الاتصال",
              description1: "اتصال 4G عبر شريحة SIM من شركة زين",
              description2: "نظام تتبع GPS"
            }
          ].map((spec, index) => (
            <div
              key={index}
              className={`glass-card p-6 text-center transition-all duration-700 dark:bg-card/60 dark:backdrop-blur-lg ${isVisible ? 'opacity-100 translate-y-0 hover:shadow-lg hover:-translate-y-2' : 'opacity-0 translate-y-10'}`} // Refined dark glass effect
              style={{ transitionDelay: `${index * 150}ms`, transition: 'all 0.5s ease' }}
            >
              <div className={`mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 ${isVisible ? 'scale-100 animate-pulse-soft' : 'scale-0'}`} // Use primary
                   style={{ transitionDelay: `${(index * 150) + 100}ms` }}>
                <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
                     style={{ transitionDelay: `${(index * 150) + 250}ms` }}>
                  {spec.icon}
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-2 text-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} // Use text-foreground
                  style={{ transitionDelay: `${(index * 150) + 300}ms` }}>
                {spec.title}
              </h3>
              <p className={`text-muted-foreground mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} // Use text-muted-foreground
                 style={{ transitionDelay: `${(index * 150) + 350}ms` }}>
                {spec.description1}
              </p>
              {spec.description2 && (
                <p className={`text-muted-foreground mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} // Use text-muted-foreground
                   style={{ transitionDelay: `${(index * 150) + 400}ms` }}>
                  {spec.description2}
                </p>
              )}
              {spec.description3 && (
                <p className={`text-muted-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} // Use text-muted-foreground
                   style={{ transitionDelay: `${(index * 150) + 450}ms` }}>
                  {spec.description3}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TechnicalSpecsSection;
