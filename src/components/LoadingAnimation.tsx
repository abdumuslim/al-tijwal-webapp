
import { Loader2 } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader2 className="animate-spin h-12 w-12 text-tijwal-orange" />
    </div>
  );
};

export default LoadingAnimation;
