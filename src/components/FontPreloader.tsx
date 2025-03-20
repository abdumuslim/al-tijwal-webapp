
import { useEffect, useState } from 'react';
import LoadingAnimation from './LoadingAnimation';

interface FontPreloaderProps {
  children: React.ReactNode;
}

const FontPreloader: React.FC<FontPreloaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    // Use FontFace API to ensure fonts are loaded
    Promise.all([
      new FontFace('Al-Jazeera', 'url(https://hsymczmjhelckkojourg.supabase.co/storage/v1/object/public/fonts/Al-Jazeera-Arabic-Regular.ttf)').load(),
      new FontFace('Al-Jazeera', 'url(https://hsymczmjhelckkojourg.supabase.co/storage/v1/object/public/fonts/Al-Jazeera-Arabic-Bold.ttf)', { weight: 'bold' }).load(),
      new FontFace('Al-Jazeera', 'url(https://hsymczmjhelckkojourg.supabase.co/storage/v1/object/public/fonts/Al-Jazeera-Arabic-Light.ttf)', { weight: '300' }).load(),
    ]).then(fonts => {
      // Add fonts to document
      fonts.forEach(font => document.fonts.add(font));
      // Set a slight delay to ensure a smooth transition
      setTimeout(() => {
        setFontsLoaded(true);
      }, 500);
    }).catch(err => {
      console.error('Failed to load fonts:', err);
      setFontsLoaded(true); // Continue anyway to avoid blank screen
    });
  }, []);

  // Show the loading animation while fonts are loading
  if (!fontsLoaded) {
    return <LoadingAnimation />;
  }

  return <>{children}</>;
};

export default FontPreloader;
