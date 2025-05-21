import React from 'react';
import { Brain, Activity, Loader2, Zap } from 'lucide-react';

type LoaderVariant = 'throb' | 'spinner' | 'dots' | 'brain' | 'activity' | 'neural-scan' | 'synapse-spark' | 'brain-glow';

interface LoaderProps {
  variant?: LoaderVariant;
}

export const Loader: React.FC<LoaderProps> = ({ variant = 'throb' }) => {
  switch (variant) {
    case 'throb':
      return <span className="w-3 h-3 bg-primary rounded-full animate-throb-pulse will-change-[transform,opacity]" />;
    case 'spinner':
      return <Loader2 className="h-5 w-5 text-primary animate-spin will-change-transform" />;
    case 'dots':
      return (
        <div className="flex items-center gap-1.5">
          {[0, 20, 40].map((delay, i) => (
            <span
              key={i}
              style={{ '--dot-delay': delay } as React.CSSProperties}
              className="w-2 h-2 bg-primary rounded-full animate-dot-typing will-change-opacity"
            />
          ))}
        </div>
      );
    case 'brain':
      return <Brain className="h-4 w-4 text-primary animate-opacity-pulse-strong will-change-opacity" />;
    case 'brain-glow':
      return <Brain className="h-7 w-7 text-primary animate-brain-glow will-change-[opacity,box-shadow] rounded-full" />; {/* Added rounded-full for better shadow rendering */}
    case 'activity':
      return <Activity className="h-5 w-5 text-primary animate-throb-pulse will-change-[transform,opacity]" />;
    case 'neural-scan':
      return (
        <div className="w-16 h-1.5 bg-primary/30 rounded-full overflow-hidden relative will-change-transform">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full animate-neural-scan" />
        </div>
      );
    case 'synapse-spark':
      return (
        <div className="flex items-center justify-center w-8 h-8 relative">
          {[...Array(3)].map((_, i) => (
            <Zap
              key={i}
              className="absolute h-3 w-3 text-primary animate-synapse-spark will-change-[transform,opacity]"
              style={{
                animationDelay: `${i * 0.15}s`,
                transform: `rotate(${i * 120}deg) translateX(8px) rotate(-${i * 120}deg)`, // Spread them out
              }}
            />
          ))}
        </div>
      );
    default:
      // Fallback to dots or null if a variant is somehow incorrect
      return (
        <div className="flex items-center gap-1.5">
          {[0, 20, 40].map((delay, i) => (
            <span
              key={i}
              style={{ '--dot-delay': delay } as React.CSSProperties}
              className="w-2 h-2 bg-primary rounded-full animate-dot-typing will-change-opacity"
            />
          ))}
        </div>
      );
  }
};