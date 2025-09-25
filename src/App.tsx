import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VirtualTours from "./pages/VirtualTours";
import InteractiveMap from "./pages/InteractiveMap";
import DigitalArchives from "./pages/DigitalArchives";
import AudioGuide from "./pages/AudioGuide";
import CulturalCalendar from "./pages/CulturalCalendar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours" element={<VirtualTours />} />
          <Route path="/map" element={<InteractiveMap />} />
          <Route path="/archives" element={<DigitalArchives />} />
          <Route path="/audio" element={<AudioGuide />} />
          <Route path="/calendar" element={<CulturalCalendar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
