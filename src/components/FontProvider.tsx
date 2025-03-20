
import React from 'react';

interface FontProviderProps {
  children: React.ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  return (
    <div style={{ fontFamily: 'Al-Jazeera, sans-serif' }} className="font-aljazeera">
      {children}
    </div>
  );
};

export default FontProvider;
