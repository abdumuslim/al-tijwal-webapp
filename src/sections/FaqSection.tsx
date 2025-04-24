
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqs: FaqItem[] = [
    {
      question: "ما هي تقنية عين التجوال؟",
      answer: "عين التجوال هي تقنية ذكاء اصطناعي متطورة تقيس عدد المشاهدات ومدة المشاهدة لإعلاناتك على شاشاتنا المتنقلة. تستخدم نظام داشكام متطور وخوارزميات متقدمة لتحليل البيانات وتوفير معلومات دقيقة عن أداء حملتك الإعلانية، مع الحفاظ التام على خصوصية المشاهدين."
    },
    {
      question: "كيف يمكنني تتبع أداء حملتي الإعلانية؟",
      answer: "نوفر لك لوحة تحكم خاصة تتضمن تقارير يومية مفصلة عن أداء حملتك الإعلانية. يمكنك أيضاً تتبع مواقع المندوبين والشاشات المتنقلة في الوقت الفعلي باستخدام تقنية GPS، بالإضافة إلى إمكانية الاطلاع على بيانات عين التجوال التي تقدم معلومات عن عدد المشاهدات ومدة المشاهدة."
    },
    {
      question: "ما هي المناطق التي تغطيها خدمات التجوال؟",
      answer: "نقدم خدماتنا في مناطق رئيسية في بغداد، مع التركيز على المناطق التجارية والترفيهية ومناطق التسوق الأكثر ازدحاماً مثل المنصور، الكرادة، زيونة، وغيرها. كما يمكننا تخصيص المناطق حسب احتياجات حملتك الإعلانية واستهداف الجمهور المناسب لك."
    },
    {
      question: "ما هي مدة الحملة الإعلانية؟",
      answer: "نقدم باقات متنوعة تبدأ من يوم واحد وحتى شهر كامل أو أكثر. يمكنك اختيار المدة المناسبة لحملتك الإعلانية حسب أهدافك وميزانيتك. كما نقدم خصومات خاصة للحملات طويلة المدى والعملاء المستمرين."
    },
    {
      question: "ما هي أنواع المحتوى التي يمكن عرضها على شاشات التجوال؟",
      answer: "يمكن عرض أنواع متعددة من المحتوى على شاشاتنا المتنقلة، بما في ذلك الصور الثابتة، والفيديوهات القصيرة، والعروض المتحركة، والإعلانات التفاعلية. نحن نساعدك أيضاً في إعداد المحتوى المناسب لشاشاتنا لضمان أفضل تأثير وانطباع لدى الجمهور."
    },
    {
      question: "هل يمكنني تغيير محتوى الإعلان خلال فترة الحملة؟",
      answer: "نعم، نوفر مرونة كاملة في تغيير المحتوى الإعلاني خلال فترة الحملة. يمكنك تحديث محتواك استجابة للأحداث الجارية، أو تغيير العروض، أو تبديل الرسائل الإعلانية حسب استجابة الجمهور، وذلك بتكلفة إضافية بسيطة أو مجاناً حسب الباقة المختارة."
    },
    {
      question: "أين يقع المقر الرئيسي للتجوال؟",
      answer: "يقع المقر الرئيسي لشركة التجوال في منطقة المنصور في بغداد، العراق. تم تأسيس الشركة رسمياً في 20 سبتمبر 2023 ونحن أول من أدخل تقنية الشاشات المحمولة مع نظام عين التجوال في السوق العراقي."
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-20 bg-muted/50 dark:bg-[hsl(var(--card))]/30"> {/* Explicit dark background */}
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4"> {/* Use secondary */}
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">كل ما تحتاج معرفته</h2> {/* Use text-foreground */}
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Use text-muted-foreground */}
            إليك أجوبة لأكثر الأسئلة شيوعاً حول خدماتنا. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-border last:border-0 transition-all duration-300 ${ // Use border-border
                openIndex === index ? 'pb-6' : 'pb-0'
              } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`
              }}
            >
              <button
                className="flex justify-between items-center w-full py-6 text-right"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3> {/* Use text-foreground */}
                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-secondary" /> // Use text-secondary
                  ) : (
                    <ChevronDown className="h-6 w-6 text-muted-foreground" /> // Use text-muted-foreground
                  )}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-foreground/90 pb-4">{faq.answer}</p> {/* Use text-foreground/90 for slightly softer but readable text */}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FaqSection;
