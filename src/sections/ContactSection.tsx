
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl shadow-xl">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-tijwal-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tijwal-blue/10 rounded-full blur-3xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 z-10 relative">
            {/* Contact Image - Takes 2/5 of the space on desktop */}
            <div className="md:col-span-2 order-2 md:order-1 overflow-hidden">
              <img 
                src="/lovable-uploads/74c985b0-fd1c-4129-bbdf-9cc9c13fc92a.png" 
                alt="فريق التجوال" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Contact Information - Takes 3/5 of the space on desktop */}
            <div className="md:col-span-3 order-1 md:order-2 bg-white p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8 text-tijwal-dark">تواصل معنا مباشرة</h3>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-tijwal-orange/20 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-tijwal-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tijwal-dark mb-1">العنوان</h4>
                    <p className="text-tijwal-gray">بغداد - المنصور</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-tijwal-orange/20 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-tijwal-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tijwal-dark mb-1">رقم الهاتف</h4>
                    <a 
                      href="tel:+9647849567837" 
                      className="text-tijwal-gray hover:text-tijwal-orange transition-colors duration-300"
                    >
                      07849567837
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-tijwal-orange/20 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-tijwal-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tijwal-dark mb-1">البريد الإلكتروني</h4>
                    <a 
                      href="mailto:contact@al-tijwal.com" 
                      className="text-tijwal-gray hover:text-tijwal-orange transition-colors duration-300"
                    >
                      contact@al-tijwal.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-tijwal-dark mb-2">تواصل مباشرة عبر</h4>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="http://wa.me/9647849567837" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                      <path d="M9.5 13.5h.01" />
                    </svg>
                    واتساب
                  </a>
                  <a 
                    href="tel:+9647849567837" 
                    className="flex-1 bg-tijwal-blue text-white px-4 py-3 rounded-lg font-medium hover:bg-tijwal-blue/90 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    اتصال
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-semibold text-tijwal-dark mb-4">ساعات العمل</h4>
                <p className="text-tijwal-gray">يومياً: 9:00 ص - 9:00 م</p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-tijwal-dark mb-4">تابعنا على</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/Altijwal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-tijwal-blue/10 flex items-center justify-center hover:bg-tijwal-blue hover:text-white transition-colors duration-300"
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
                    className="w-10 h-10 rounded-full bg-tijwal-orange/10 flex items-center justify-center hover:bg-tijwal-orange hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-tijwal-orange">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
