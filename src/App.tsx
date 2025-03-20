
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FontPreloader from "./components/FontPreloader";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Set favicon dynamically
  useEffect(() => {
    // Create link element for favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/lovable-uploads/4c549c51-c0d7-45d3-863d-9c214c527b99.png';
    favicon.type = 'image/png';
    
    // Remove existing favicon if present
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }
    
    // Add new favicon
    document.head.appendChild(favicon);
  }, []);
  
  return (
    <FontPreloader>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </FontPreloader>
  );
};

export default App;
