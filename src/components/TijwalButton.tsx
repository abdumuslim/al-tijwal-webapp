
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface TijwalButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const TijwalButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: TijwalButtonProps) => {
  
  const getVariantClass = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-tijwal-blue text-white hover:bg-tijwal-blue/90 shadow-md shadow-tijwal-blue/20 hover:shadow-lg hover:shadow-tijwal-blue/30';
      case 'secondary':
        return 'bg-white text-tijwal-orange border border-tijwal-orange hover:bg-tijwal-orange/5 shadow-sm hover:shadow-md';
      case 'accent':
        return 'bg-tijwal-orange text-white hover:bg-tijwal-orange/90 shadow-md shadow-tijwal-orange/20 hover:shadow-lg hover:shadow-tijwal-orange/30';
      case 'gradient':
        return 'bg-gradient-to-r from-tijwal-blue to-tijwal-orange text-white hover:opacity-95';
      default:
        return 'bg-tijwal-blue text-white hover:bg-tijwal-blue/90 shadow-md shadow-tijwal-blue/20 hover:shadow-lg hover:shadow-tijwal-blue/30';
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2 rounded-lg';
      case 'md':
        return 'text-base px-6 py-3 rounded-xl';
      case 'lg':
        return 'text-lg px-8 py-4 rounded-xl';
      default:
        return 'text-base px-6 py-3 rounded-xl';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Create ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 1000);
    
    // Call the provided onClick handler
    if (onClick) onClick();
  };

  return (
    <button
      type={type}
      className={cn(
        "relative inline-flex items-center justify-center font-medium transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden",
        getVariantClass(),
        getSizeClass(),
        disabled && 'opacity-50 cursor-not-allowed hover:transform-none',
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default TijwalButton;
