
import { Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 300);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-6">
      <div className="animate-float flex flex-col items-center justify-center">
        <div className="text-tijwal-orange text-3xl md:text-4xl font-bold mb-2">التجـوال</div>
        <div className="text-tijwal-blue text-sm">للإعلان المتنقل</div>
      </div>
      
      <div className="w-full max-w-md px-2">
        <Progress value={progress} className="h-2 bg-gray-200" />
      </div>
      
      <div className="flex items-center gap-3 text-tijwal-gray">
        <Loader2 className="animate-spin h-5 w-5 text-tijwal-orange" />
        <span>جاري تحميل الخطوط...</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4 max-w-md w-full mt-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} className="h-12 w-full bg-tijwal-orange/10" />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
