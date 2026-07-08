import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import WhoWeServe from "./pages/WhoWeServe";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { ContentProvider } from "./contexts/ContentContext";
import { EnergyCore } from "@/components/ui/EnergyCore";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { useIsMobile } from "@/hooks/use-mobile";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();

  return (
  <QueryClientProvider client={queryClient}>
    <CustomCursor />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ContentProvider>
        <BrowserRouter>

          {/* GLOBAL BACKGROUND — 3D sphere on desktop only (heavy on mobile GPUs) */}
          <div className="fixed inset-0 z-0 pointer-events-none bg-obsidian-900">
            {!isMobile && <EnergyCore />}
            <div className="absolute inset-0 z-0 mix-blend-screen">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08)_0%,transparent_70%)] blur-[80px]" />
              <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(255,179,0,0.05)_0%,transparent_70%)] blur-[80px]" />
              {isMobile && (
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)] blur-[60px]" />
              )}
            </div>
          </div>

          {/* MAIN CONTENT LAYER */}
          <div className="relative z-10 min-h-screen text-white selection:bg-plasma selection:text-black">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

        </BrowserRouter>
      </ContentProvider>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
