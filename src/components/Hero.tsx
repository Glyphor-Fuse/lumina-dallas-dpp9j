import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-headliner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,15,0.9)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-6 py-1 px-4 text-sm font-bold tracking-[0.3em] uppercase rounded-none">
            Deep Ellum Residency
          </Badge>
          
          <h1 className="text-7xl md:text-[10rem] font-display font-black tracking-tighter text-foreground leading-[0.85] uppercase mb-8 italic">
            Neon <br/><span className="text-primary drop-shadow-[0_0_30px_rgba(188,44,255,0.6)]">Pulse</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground font-medium mb-10 leading-relaxed uppercase tracking-wide">
            The fusion of Vegas spectacle and Dallas grit. An immersive EDM journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="group h-16 px-10 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-none flex items-center gap-3">
              <Star className="w-6 h-6" />
              Get Tickets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold border-border/20 hover:bg-background/10 rounded-none text-foreground">
              View Calendar
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
