
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import TijwalButton from './TijwalButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    // Redirect to footer section
    const footerSection = document.getElementById('contact');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="transition-transform duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/f5296d76-7e51-4c9f-8151-7e8785243d39.png" 
                alt="التجوال" 
                className="h-12 md:h-14"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link">المميزات</a>
            <a href="#locations" className="nav-link">الأماكن</a>
            <a href="#clients" className="nav-link">عملاؤنا</a>
            <a href="#pricing" className="nav-link">الباقات</a>
            <a href="#faq" className="nav-link">الأسئلة الشائعة</a>
          </div>

          <div className="hidden md:block">
            <TijwalButton variant="primary" onClick={handleContactClick}>
              تواصل معنا
            </TijwalButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-tijwal-dark p-2 rounded-lg hover:bg-tijwal-blue/10 transition-colors duration-300" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 pt-20 px-4 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ 
            height: '100vh',
            position: 'fixed',
            top: 0,
            overflow: 'auto'
          }}
        >
          <div className="flex flex-col items-center gap-8 text-lg">
            <a href="#about" className="nav-link text-xl" onClick={toggleMenu}>المميزات</a>
            <a href="#locations" className="nav-link text-xl" onClick={toggleMenu}>الأماكن</a>
            <a href="#clients" className="nav-link text-xl" onClick={toggleMenu}>عملاؤنا</a>
            <a href="#pricing" className="nav-link text-xl" onClick={toggleMenu}>الباقات</a>
            <a href="#faq" className="nav-link text-xl" onClick={toggleMenu}>الأسئلة الشائعة</a>
            <div className="mt-6">
              <TijwalButton variant="primary" onClick={handleContactClick}>
                تواصل معنا
              </TijwalButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-tijwal-blue text-white p-3 rounded-full shadow-md shadow-tijwal-blue/20 hover:shadow-lg hover:shadow-tijwal-blue/30 hover:bg-tijwal-blue/90 transition-all duration-300 animate-fade-in"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default Navbar;
