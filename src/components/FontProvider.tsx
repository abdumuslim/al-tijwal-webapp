
import React from 'react';

interface FontProviderProps {
  children: React.ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  return (
    <div style={{ fontFamily: 'Cairo, sans-serif' }} className="font-cairo">
      {children}
    </div>
  );
};

export default FontProvider;
