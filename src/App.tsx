import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventCalendar } from "@/components/EventCalendar";
import { VIPPulse } from "@/components/VIPPulse";
import { AtmosphereGallery } from "@/components/AtmosphereGallery";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-body">
          <Navbar />
          <Hero />
          <EventCalendar />
          <VIPPulse />
          <AtmosphereGallery />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;