
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import TijwalButton from './TijwalButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-bold text-2xl text-tijwal-orange">التجوال</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="nav-link">الرئيسية</a>
          <a href="#about" className="nav-link">من نحن</a>
          <a href="#services" className="nav-link">خدماتنا</a>
          <a href="#technology" className="nav-link">عين التجوال</a>
          <a href="#locations" className="nav-link">المواقع</a>
          <a href="#pricing" className="nav-link">الأسعار</a>
        </div>

        <div className="hidden md:block">
          <TijwalButton variant="primary">
            احصل على استشارة
          </TijwalButton>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-tijwal-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center gap-6 text-lg">
          <a href="#hero" className="nav-link" onClick={toggleMenu}>الرئيسية</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>من نحن</a>
          <a href="#services" className="nav-link" onClick={toggleMenu}>خدماتنا</a>
          <a href="#technology" className="nav-link" onClick={toggleMenu}>عين التجوال</a>
          <a href="#locations" className="nav-link" onClick={toggleMenu}>المواقع</a>
          <a href="#pricing" className="nav-link" onClick={toggleMenu}>الأسعار</a>
          <div className="mt-6">
            <TijwalButton variant="primary" onClick={toggleMenu}>
              احصل على استشارة
            </TijwalButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
