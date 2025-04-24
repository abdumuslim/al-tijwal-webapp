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
    'group relative flex items-center h-8 w-16 rounded-full p-1 transition-colors', // Reduced height and width
    isDark
      ? 'bg-tijwal-blue/20 hover:bg-tijwal-blue/30'
      : 'bg-tijwal-orange/20 hover:bg-tijwal-orange/30'
  );

  // Thumb (the circle) classes
  const thumbCls = cn(
    'absolute inset-y-1 left-1 h-6 w-6 rounded-full bg-white shadow-lg', // Reduced thumb size
    'transform transition-transform duration-300 ease-in-out',
    'group-hover:scale-105 group-active:scale-95',
    isDark && 'translate-x-8' // Reduced translation distance
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
          'h-4 w-4 transition-colors', // Reduced icon size
          isDark ? 'text-muted-foreground' : 'text-tijwal-orange'
        )}
      />
      <Moon
        className={cn(
          'h-4 w-4 transition-colors', // Reduced icon size
          isDark ? 'text-tijwal-blue' : 'text-muted-foreground'
        )}
      />

      {/* Sliding thumb */}
      <span className={thumbCls} />
    </Button>
  );
}
