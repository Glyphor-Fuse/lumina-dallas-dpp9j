import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-border/5"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-display font-black tracking-tighter text-foreground uppercase italic">
          Lumina<span className="text-primary">.</span>Dallas
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        <a href="#events" className="hover:text-primary transition-colors">Calendar</a>
        <a href="#vip" className="hover:text-primary transition-colors">VIP Tables</a>
        <a href="#atmosphere" className="hover:text-primary transition-colors">Atmosphere</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden sm:flex border-primary/40 text-primary hover:bg-primary/10 rounded-none h-10">
          Member Login
        </Button>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_rgba(188,44,255,0.4)] rounded-none h-10 px-6">
          Book VIP
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
