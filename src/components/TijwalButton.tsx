
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
        return 'tijwal-btn';
      case 'secondary':
        return 'tijwal-btn-secondary';
      case 'accent':
        return 'tijwal-btn-accent';
      case 'gradient':
        return 'animated-gradient-btn';
      default:
        return 'tijwal-btn';
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2';
      case 'md':
        return 'text-base px-6 py-3';
      case 'lg':
        return 'text-lg px-8 py-4';
      default:
        return 'text-base px-6 py-3';
    }
  };

  return (
    <button
      type={type}
      className={cn(
        getVariantClass(),
        getSizeClass(),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {variant === 'gradient' ? (
        <span className="flex items-center justify-center w-full h-full px-5 py-2.5 bg-white rounded-lg text-tijwal-blue font-medium">
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default TijwalButton;
