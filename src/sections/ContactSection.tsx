
import { Mail, Phone, MapPin } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-tijwal-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نحن هنا للإجابة على استفساراتك</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            تواصل معنا اليوم للاستفسار عن خدماتنا أو للحصول على استشارة مجانية حول كيفية تحسين حملتك الإعلانية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6 text-center">بيانات الاتصال</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="bg-tijwal-orange/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-tijwal-orange" />
                </div>
                <span className="text-tijwal-gray">بغداد - المنصور</span>
              </li>
              <li className="flex items-center gap-4">
                <a 
                  href="tel:+9647849567837" 
                  className="flex items-center gap-4 text-tijwal-gray hover:text-tijwal-orange transition-colors duration-300 w-full"
                >
                  <div className="bg-tijwal-orange/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-tijwal-orange" />
                  </div>
                  <span>07849567837</span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <a 
                  href="mailto:contact@al-tijwal.com" 
                  className="flex items-center gap-4 text-tijwal-gray hover:text-tijwal-orange transition-colors duration-300 w-full"
                >
                  <div className="bg-tijwal-orange/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-tijwal-orange" />
                  </div>
                  <span>contact@al-tijwal.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">ساعات العمل</h3>
              <p className="text-center text-tijwal-gray">يومياً: 9:00 ص - 9:00 م</p>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/Altijwal" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tijwal-blue/10 flex items-center justify-center hover:bg-tijwal-blue transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-tijwal-blue">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/al.tijwal/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tijwal-orange/10 flex items-center justify-center hover:bg-tijwal-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-tijwal-orange">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="http://wa.me/9647849567837" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-600 hover:text-white">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                  <path d="M9.5 13.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold mb-6 text-center">تواصل معنا مباشرة</h3>
              <p className="text-tijwal-gray mb-8 text-center">
                للحصول على استشارة مجانية أو للاستفسار عن الباقات والعروض، تواصل معنا الآن عبر واتساب
              </p>
              <div className="flex flex-col gap-4 mt-auto">
                <a 
                  href="http://wa.me/9647849567837" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tijwal-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-tijwal-orange/90 transition-colors duration-300 text-center"
                >
                  تواصل عبر واتساب
                </a>
                <a 
                  href="tel:+9647849567837" 
                  className="inline-block bg-tijwal-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-tijwal-blue/90 transition-colors duration-300 text-center"
                >
                  اتصل بنا مباشرة
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
