import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-32 pb-16 border-t border-border/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <span className="text-5xl font-display font-black tracking-tighter text-foreground uppercase italic mb-8 block leading-none">
              Lumina<span className="text-primary">.</span>Dallas
            </span>
            <p className="text-muted-foreground text-xl max-w-md mb-10 font-medium leading-relaxed">
              The sanctuary of sound. A temple of light. Deep Ellum's premiere electronic music destination.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <Button key={i} variant="outline" size="icon" className="w-12 h-12 rounded-none border-border/10 hover:border-primary hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-black uppercase tracking-[0.2em] mb-10 italic text-sm border-b border-primary/20 pb-4">Navigation</h4>
            <ul className="space-y-6 text-muted-foreground font-bold uppercase tracking-widest text-xs">
              <li><a href="#" className="hover:text-primary transition-colors">Calendar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VIP Tables</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Private Hire</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Entry Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-black uppercase tracking-[0.2em] mb-10 italic text-sm border-b border-accent/20 pb-4">Priority Access</h4>
            <p className="text-xs text-muted-foreground mb-6 uppercase tracking-widest leading-relaxed">Join the inner circle for headliner drops and secret show alerts.</p>
            <div className="space-y-4">
              <Input 
                placeholder="EMAIL ADDRESS" 
                className="bg-card border-border text-foreground rounded-none h-14 font-black tracking-widest placeholder:text-muted-foreground/30 focus:ring-primary"
              />
              <Button className="w-full bg-accent text-accent-foreground font-black uppercase tracking-[0.3em] rounded-none h-14 hover:bg-background hover:text-foreground">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-black border-t border-border/5 pt-16">
          <p>© 2024 LUMINA DALLAS. ENGINEERED FOR SOUND.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
