
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
        return 'bg-tijwal-orange text-white hover:bg-tijwal-orange/90';
      case 'secondary':
        return 'bg-white text-tijwal-blue border border-tijwal-blue hover:bg-tijwal-blue/5';
      case 'accent':
        return 'bg-tijwal-blue text-white hover:bg-tijwal-blue/90';
      case 'gradient':
        return 'animated-gradient-btn';
      default:
        return 'bg-tijwal-orange text-white hover:bg-tijwal-orange/90';
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2 rounded-md';
      case 'md':
        return 'text-base px-6 py-3 rounded-lg';
      case 'lg':
        return 'text-lg px-8 py-4 rounded-lg';
      default:
        return 'text-base px-6 py-3 rounded-lg';
    }
  };

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2",
        getVariantClass(),
        getSizeClass(),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {variant === 'gradient' ? (
        <span className="flex items-center justify-center w-full h-full px-5 py-2.5 bg-white rounded-lg text-tijwal-orange font-medium">
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default TijwalButton;
