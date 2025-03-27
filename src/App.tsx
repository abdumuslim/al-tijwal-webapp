
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FontPreloader from "./components/FontPreloader";
import useHashScroll from "./hooks/useHashScroll";
import RedirectHandler from "./components/RedirectHandler"; // Import RedirectHandler
import { redirects } from "./data/redirects"; // Import redirects data

const queryClient = new QueryClient();

// Create a new component to contain the routes and call the hook
const AppContent = () => {
  useHashScroll(); // Call the hook here

  return (
    <>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Add redirect routes */}
        {redirects.map((redirect) => (
          <Route
            key={redirect.path}
            path={redirect.path}
            element={<RedirectHandler to={redirect.to} />}
          />
        ))}
        {/* Existing routes */}
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <FontPreloader>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toaster and Sonner can stay outside BrowserRouter if they don't need routing context */}
        {/* <Toaster /> */}
        {/* <Sonner /> */}
        <BrowserRouter>
          {/* Render the component that uses the hook inside BrowserRouter */}
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </FontPreloader>
);

export default App;
