
import { Loader2 } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-float flex flex-col items-center justify-center mb-8">
        <div className="text-tijwal-orange text-3xl md:text-4xl font-bold mb-2">التجـوال</div>
        <div className="text-tijwal-blue text-sm">للإعلان المتنقل</div>
      </div>
      
      <Loader2 className="animate-spin h-12 w-12 text-tijwal-orange" />
    </div>
  );
};

export default LoadingAnimation;
