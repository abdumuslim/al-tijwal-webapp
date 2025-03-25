
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import TijwalButton from '@/components/TijwalButton';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم استلام رسالتك",
        description: "سنقوم بالتواصل معك في أقرب وقت ممكن",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-tijwal-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-tijwal-orange/10 text-tijwal-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نحن هنا لمساعدتك</h2>
          <p className="text-tijwal-gray max-w-2xl mx-auto">
            فريقنا جاهز للإجابة على استفساراتك وتقديم المساعدة في اختيار الباقة المناسبة لاحتياجاتك
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-tijwal-dark">أرسل لنا رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-tijwal-gray mb-1">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tijwal-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tijwal-gray mb-1">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tijwal-orange focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-tijwal-gray mb-1">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tijwal-orange focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-tijwal-gray mb-1">
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tijwal-orange focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <TijwalButton 
                    type="submit" 
                    variant="primary" 
                    className="w-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                    <Send className="h-4 w-4" />
                  </TijwalButton>
                </div>
              </form>
            </div>
            
            {/* Contact Info and Image */}
            <div className="bg-gradient-to-br from-tijwal-blue/90 to-tijwal-blue relative overflow-hidden">
              {/* Semi-transparent team image overlay */}
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/lovable-uploads/6658d55f-18fd-45c8-aab6-dbe66c7f0552.png" 
                  alt="فريق التجوال" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 p-8 md:p-12 text-white h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8">معلومات التواصل</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">اتصل بنا</h4>
                      <p className="mt-2">+964 771 234 5678</p>
                      <p>+964 771 876 5432</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">راسلنا</h4>
                      <p className="mt-2">info@tijwal.iq</p>
                      <p>sales@tijwal.iq</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">زورنا</h4>
                      <p className="mt-2">بغداد، العراق</p>
                      <p>شارع المتنبي، قرب ساحة الميدان</p>
                    </div>
                  </div>
                </div>
                
                {/* Full Team Image at Bottom */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
                  <img 
                    src="/lovable-uploads/6658d55f-18fd-45c8-aab6-dbe66c7f0552.png" 
                    alt="فريق التجوال" 
                    className="w-full h-auto"
                  />
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

