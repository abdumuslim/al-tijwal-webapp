import { useMemo, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  // Track (the pill) classes
  const trackCls = cn(
    'group relative flex items-center h-10 w-20 rounded-full p-1 transition-colors',
    isDark
      ? 'bg-tijwal-blue/20 hover:bg-tijwal-blue/30'
      : 'bg-tijwal-orange/20 hover:bg-tijwal-orange/30'
  );

  // Thumb (the circle) classes
  const thumbCls = cn(
    'absolute inset-y-1 left-1 h-8 w-8 rounded-full bg-white shadow-lg',
    'transform transition-transform duration-300 ease-in-out',
    'group-hover:scale-105 group-active:scale-95',
    isDark && 'translate-x-10'
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={trackCls}
    >
      {/* Icons on either side */}
      <Sun
        className={cn(
          'h-5 w-5 transition-colors',
          isDark ? 'text-muted-foreground' : 'text-tijwal-orange'
        )}
      />
      <Moon
        className={cn(
          'h-5 w-5 transition-colors',
          isDark ? 'text-tijwal-blue' : 'text-muted-foreground'
        )}
      />

      {/* Sliding thumb */}
      <span className={thumbCls} />
    </Button>
  );
}
