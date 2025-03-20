import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-tijwal-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="/icon-logo.png" 
                alt="التجوال" 
                className="h-16 w-16"
              />
            </div>
            <p className="text-gray-300 mb-6">
              نبتكر في عالم الإعلان بدمج أحدث التقنيات في شاشاتنا المتنقلة المحمولة لتحقيق نتائج استثنائية وقابلة للقياس لعملائنا.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="https://www.facebook.com/Altijwal" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tijwal-orange transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/al.tijwal/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tijwal-orange transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="http://wa.me/9647849567837" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tijwal-orange transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                  <path d="M9.5 13.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">من نحن</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">خدماتنا</a>
              </li>
              <li>
                <a href="#technology" className="text-gray-300 hover:text-white transition-colors duration-300">تقنية عين التجوال</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-300 hover:text-white transition-colors duration-300">مناطق الخدمة</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">باقات العروض</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">معلومات الاتصال</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-tijwal-orange/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-tijwal-orange" />
                </div>
                <span className="text-gray-300">بغداد - المنصور</span>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="tel:+9647849567837" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <div className="bg-tijwal-orange/20 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-tijwal-orange" />
                  </div>
                  <span>07849567837</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="http://wa.me/9647849567837" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <div className="bg-tijwal-orange/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-tijwal-orange">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                      <path d="M9.5 13.5h.01" />
                    </svg>
                  </div>
                  <span>تواصل عبر واتساب</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="mailto:contact@al-tijwal.com" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <div className="bg-tijwal-orange/20 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-tijwal-orange" />
                  </div>
                  <span>contact@al-tijwal.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">ساعات العمل</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">يومياً: 9:00 ص - 9:00 م</li>
            </ul>
            <div className="mt-6">
              <a 
                href="http://wa.me/9647849567837" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-tijwal-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-tijwal-orange/90 transition-colors duration-300"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="text-center text-gray-400 text-sm">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} التجوال</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
