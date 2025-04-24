
import { ReactNode, CSSProperties } from 'react';
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
  style?: CSSProperties;
}

const TijwalButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  style,
}: TijwalButtonProps) => {
  
  const getVariantClass = (): string => {
    switch (variant) {
      case 'primary':
        // Maps to primary theme color
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
      case 'secondary':
        // Maps to secondary theme color (outline style)
        return 'bg-card text-secondary border border-secondary hover:bg-secondary/10 dark:hover:bg-secondary/20';
      case 'accent':
         // Maps to secondary theme color (filled style)
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/90';
      case 'gradient':
        // Keep gradient class, but update inner span below
        return 'animated-gradient-btn';
      default:
        // Default to primary
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
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
      style={style}
    >
      {variant === 'gradient' ? (
        // Update inner span for gradient button to use theme colors
        <span className="flex items-center justify-center w-full h-full px-5 py-2.5 bg-card rounded-lg text-primary font-medium">
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default TijwalButton;
