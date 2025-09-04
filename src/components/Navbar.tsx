
import { useState, useEffect, useRef } from 'react'; // Import useRef
import { Menu, X, ArrowUp } from 'lucide-react';
import TijwalButton from './TijwalButton';
import { ThemeToggle } from './ThemeToggle'; // Import ThemeToggle

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const touchStartX = useRef(0); // For swipe gesture
  const touchEndX = useRef(0); // For swipe gesture
  const menuRef = useRef<HTMLDivElement>(null); // Ref for menu element

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
    // Redirect to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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

  // --- Swipe Gesture Handlers ---
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX; // Reset endX on new touch
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!menuRef.current) return;

    const swipeThreshold = 50; // Minimum pixels to swipe
    const swipeDistance = touchEndX.current - touchStartX.current;

    // Check if swiping left (closing the menu)
    if (swipeDistance < -swipeThreshold) { // Check for negative distance (swipe left)
      toggleMenu();
    }

    // Reset touch points
    touchStartX.current = 0;
    touchEndX.current = 0;
  };
  // --- End Swipe Gesture Handlers ---


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-background/80 backdrop-blur-lg shadow-md dark:shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <img 
                src="/lovable-uploads/f5296d76-7e51-4c9f-8151-7e8785243d39.webp" 
                alt="التجوال" 
                className="h-12 md:h-14"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#about" className="nav-link">المميزات</a>
            <a href="/#locations" className="nav-link">الأماكن</a>
            <a href="/#clients" className="nav-link">عملاؤنا</a>
            <a href="/#pricing" className="nav-link">الباقات</a>
            <a href="/#faq" className="nav-link">الأسئلة الشائعة</a>
            <a
              href="https://ai.al-tijwal.com"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              المساعد الذكي
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4"> {/* Changed md:block to md:flex */}
            <TijwalButton variant="primary" onClick={handleContactClick}>
              تواصل معنا
            </TijwalButton>
            <ThemeToggle /> {/* Add ThemeToggle here */}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle /> {/* Add ThemeToggle here for mobile */}
            <button
              className="text-foreground" // Removed md:hidden as the parent div handles it
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef} // Add ref
          className={`fixed inset-y-0 left-0 bg-white dark:bg-card z-40 pt-5 px-4 transition-transform duration-300 ease-in-out transform ${ // Changed right-0 to left-0
            isMenuOpen ? 'translate-x-0' : '-translate-x-full' // Changed translate-x-full to -translate-x-full
          } md:hidden`}
          style={{
            height: '100vh', // Use 100dvh for better mobile compatibility if needed
            // position: 'fixed', // Already fixed via className
            // top: 0, // Already fixed via className
            // left: 0, // Added via className
            width: '80%', // Optional: make it not full width
            maxWidth: '300px', // Optional: max width
            overflowY: 'auto', // Changed to Y axis only
            boxShadow: '5px 0 15px rgba(0,0,0,0.1)', // Changed shadow direction
          }}
          onTouchStart={handleTouchStart} // Add touch handler
          onTouchMove={handleTouchMove}   // Add touch handler
          onTouchEnd={handleTouchEnd}     // Add touch handler
        >
          {/* Close Button Inside Menu */}
          <button
            className="absolute top-5 left-5 text-foreground md:hidden z-50 p-2" // Changed right-5 to left-5
            onClick={toggleMenu}
            aria-label="إغلاق القائمة"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Logo Inside Menu */}
          <div className="flex justify-center mb-8 mt-4"> {/* Adjusted margins */}
             <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); toggleMenu(); }}>
               <img
                 src="/lovable-uploads/f5296d76-7e51-4c9f-8151-7e8785243d39.webp"
                 alt="التجوال"
                 className="h-12" // Slightly smaller logo for mobile menu
               />
             </a>
          </div>

          <div className="flex flex-col items-center gap-6 text-lg">
             {/* Links will now close the menu via toggleMenu (already updated) */}
            <a href="/#about" className="nav-link dark:text-foreground" onClick={toggleMenu}>المميزات</a>
            <a href="/#locations" className="nav-link dark:text-foreground" onClick={toggleMenu}>الأماكن</a>
            <a href="/#clients" className="nav-link dark:text-foreground" onClick={toggleMenu}>عملاؤنا</a>
            <a href="/#pricing" className="nav-link dark:text-foreground" onClick={toggleMenu}>الباقات</a>
            <a href="/#faq" className="nav-link dark:text-foreground" onClick={toggleMenu}>الأسئلة الشائعة</a>
            <a
              href="https://ai.al-tijwal.com"
              className="nav-link dark:text-foreground"
              onClick={toggleMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tijwal AI
            </a>
            <div className="mt-6">
              {/* handleContactClick already closes the menu */}
              <TijwalButton variant="primary" onClick={handleContactClick}>
                تواصل معنا
              </TijwalButton>
            </div>
            {/* ThemeToggle removed from here */}
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 animate-fade-in" // Use primary colors
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default Navbar;
