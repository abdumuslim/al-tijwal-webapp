
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tijwal-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">التجوال</h3>
            <p className="text-gray-300 mb-6">
              نبتكر في عالم الإعلان بدمج أحدث التقنيات في شاشاتنا المتنقلة لتحقيق نتائج استثنائية لعملائنا.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tijwal-orange transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tijwal-orange transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tijwal-orange transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
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
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">باقات الأسعار</a>
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
                <div className="bg-tijwal-orange/20 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-tijwal-orange" />
                </div>
                <span className="text-gray-300">هاتف: 07849567837</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-tijwal-orange/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-tijwal-orange" />
                </div>
                <span className="text-gray-300">contact@al-tijwal.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">ساعات العمل</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">الأحد - الخميس: 9:00 ص - 5:00 م</li>
              <li className="text-gray-300">الجمعة: 9:00 ص - 1:00 م</li>
              <li className="text-gray-300">السبت: مغلق</li>
            </ul>
            <div className="mt-6">
              <a 
                href="#contact" 
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
