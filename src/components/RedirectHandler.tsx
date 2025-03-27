import { useEffect } from 'react';

interface RedirectHandlerProps {
  to: string;
}

const RedirectHandler = ({ to }: RedirectHandlerProps) => {
  useEffect(() => {
    // Use replace to avoid adding the redirecting page to browser history
    window.location.replace(to);
  }, [to]);

  // Render null or a loading indicator while redirecting
  return null; 
};

export default RedirectHandler;