
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 dark:bg-card dark:text-card-foreground pt-12 pb-8"> {/* Refined dark bg to card */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c7ecb791-6f0b-49db-baf0-2f7610d5a376.webp" 
                alt="التجوال" 
                className="h-16 w-16"
              />
            </div>
            {/* Use card-foreground for better contrast on card background */}
            <p className="text-gray-300 dark:text-card-foreground/80 mb-6">
              نبتكر في عالم الإعلان بدمج أحدث التقنيات في شاشاتنا المتنقلة المحمولة لتحقيق نتائج استثنائية وقابلة للقياس لعملائنا.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="text-gray-300 dark:text-card-foreground/80 hover:text-white dark:hover:text-card-foreground transition-colors duration-300">من نحن</a>
              </li>
              <li>
                <a href="/#tijwal-eye" className="text-gray-300 dark:text-card-foreground/80 hover:text-white dark:hover:text-card-foreground transition-colors duration-300">تقنية عين التجوال</a>
              </li>
              <li>
                <a href="/#locations" className="text-gray-300 dark:text-card-foreground/80 hover:text-white dark:hover:text-card-foreground transition-colors duration-300">مناطق الخدمة</a>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-300 dark:text-card-foreground/80 hover:text-white dark:hover:text-card-foreground transition-colors duration-300">باقات العروض</a>
              </li>
              <li>
                <a href="/#faq" className="text-gray-300 dark:text-card-foreground/80 hover:text-white dark:hover:text-card-foreground transition-colors duration-300">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 dark:text-card-foreground/80 hover:text-white dark:hover:text-card-foreground transition-colors duration-300">تواصل معنا</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 dark:text-card-foreground/80 hover:text-white dark:hover:text-card-foreground transition-colors duration-300">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">التجوال</h3>
            <p className="text-gray-300 dark:text-card-foreground/80 mb-6"> {/* Use card-foreground */}
              نحن رواد الإعلان المتنقل في العراق، نجمع بين الابتكار والتكنولوجيا لتقديم تجربة إعلانية فريدة وفعالة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://www.facebook.com/Altijwal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-background/50 flex items-center justify-center hover:bg-primary transition-colors duration-300" // Use background/50 and primary hover
                aria-label="زيارة صفحتنا على فيسبوك"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/al.tijwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-background/50 flex items-center justify-center hover:bg-primary transition-colors duration-300" // Use background/50 and primary hover
                aria-label="زيارة صفحتنا على انستغرام"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="http://wa.me/9647849567837"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-background/50 flex items-center justify-center hover:bg-primary transition-colors duration-300" // Use background/50 and primary hover
                aria-label="التواصل معنا عبر واتساب"
              >
                {/* WhatsApp Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                  <path d="M9.5 13.5h.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/10 dark:border-border my-8" /> {/* Use border-border */}

        <div className="text-center text-gray-400 dark:text-muted-foreground text-sm"> {/* Use muted-foreground */}
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} التجوال</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
