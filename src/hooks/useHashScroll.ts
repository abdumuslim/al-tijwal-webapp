import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the '#' character
      const id = hash.substring(1);
      // Use setTimeout to ensure the element is rendered, especially after initial load or route changes
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.warn(`Element with id "${id}" not found for scrolling.`);
        }
      }, 100); // Small delay might be needed
    }
  }, [location.hash]); // Re-run effect when hash changes
};

export default useHashScroll;