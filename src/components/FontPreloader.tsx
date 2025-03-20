
import { useEffect, useState } from 'react';

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
      setFontsLoaded(true);
    }).catch(err => {
      console.error('Failed to load fonts:', err);
      setFontsLoaded(true); // Continue anyway to avoid blank screen
    });
  }, []);

  // Optional: Show a loading indicator while fonts are loading
  if (!fontsLoaded) {
    return <div className="flex items-center justify-center h-screen">جاري تحميل الخطوط...</div>;
  }

  return <>{children}</>;
};

export default FontPreloader;
