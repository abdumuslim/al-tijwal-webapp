
import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  size = 'md', 
  className = '' 
}) => {
  // Define size classes
  const sizeClasses = {
    sm: variant === 'full' ? 'h-8' : 'h-6',
    md: variant === 'full' ? 'h-12' : 'h-10',
    lg: variant === 'full' ? 'h-16' : 'h-14',
  };

  // Choose the correct logo based on variant
  const logoSrc = variant === 'full' 
    ? '/lovable-uploads/c50e0dac-65ae-4d86-929a-77ddbfad6258.png' 
    : '/lovable-uploads/4c549c51-c0d7-45d3-863d-9c214c527b99.png';

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src={logoSrc} 
        alt="التجوال للدعاية والاعلان" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;
