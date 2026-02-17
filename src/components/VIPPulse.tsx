import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Info, Crown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const TIERS = [
  {
    name: "Main Floor Platinum",
    id: "platinum",
    price: "$1,500 Min",
    guests: "Up to 10 Guests",
    features: ["Dedicated Server", "Front Row View", "Expedited Entry"],
    accentClass: "text-primary",
    video: "/videos/vip-lounge.mp4",
    availability: 2
  },
  {
    name: "Mezzanine Skybox",
    id: "skybox",
    price: "$2,500 Min",
    guests: "Up to 15 Guests",
    features: ["Private Balcony", "Bottle Service Pro", "Top Shelf Only"],
    accentClass: "text-accent",
    video: "/videos/vip-lounge.mp4",
    availability: 1
  },
  {
    name: "Stage Side Ultra",
    id: "ultra",
    price: "$5,000 Min",
    guests: "Up to 8 Guests",
    features: ["On-Stage Access", "Artist Meet & Greet*", "Security Detail"],
    accentClass: "text-foreground",
    video: "/videos/vip-lounge.mp4",
    availability: 4
  }
];

export const VIPPulse = () => {
  const [activeTier, setActiveTier] = useState(TIERS[0]);

  return (
    <section id="vip" className="py-32 relative overflow-hidden bg-background">
      {/* Background Glow using mapped classes */}
      <div className={cn(
        "absolute inset-0 blur-[120px] transition-all duration-1000 opacity-10",
        activeTier.id === 'platinum' && "bg-primary",
        activeTier.id === 'skybox' && "bg-accent",
        activeTier.id === 'ultra' && "bg-foreground"
      )} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <Badge className="mb-6 bg-background/10 text-foreground border-border/20 px-6 py-1 tracking-[0.4em] uppercase font-bold rounded-none">The Pulse</Badge>
          <h2 className="text-6xl md:text-[8rem] font-display font-black text-foreground uppercase tracking-tighter italic mb-4 leading-none">
            VIP <span className="text-primary">Tier</span> Selection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mt-4 uppercase tracking-[0.1em] font-medium">
            Interactive floorplan preview. Hover to pulse the light and check availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="grid grid-cols-1 gap-6">
            {TIERS.map((tier) => (
              <motion.div
                key={tier.id}
                onMouseEnter={() => setActiveTier(tier)}
                className={cn(
                  "relative group cursor-pointer border-2 transition-all duration-500 p-10 rounded-none flex items-center justify-between",
                  activeTier.id === tier.id 
                  ? "bg-card border-primary/50 shadow-[0_0_60px_rgba(188,44,255,0.15)]" 
                  : "bg-card/30 border-border/5 hover:border-border/20"
                )}
              >
                <div className="flex items-center gap-8">
                  <div className={cn(
                    "w-16 h-16 rounded-none flex items-center justify-center bg-background border border-border/10",
                    tier.accentClass
                  )}>
                    <Crown className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-black text-foreground uppercase italic tracking-tighter">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-bold mt-1">{tier.price} • {tier.guests}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  {tier.availability < 3 && (
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/40 font-bold rounded-none">
                      {tier.availability} LEFT
                    </Badge>
                  )}
                  <Info className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative aspect-[3/4] lg:aspect-square bg-card border border-border/5 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover grayscale brightness-75"
                >
                  <source src={activeTier.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h4 className="text-4xl font-display font-black text-foreground uppercase italic tracking-tighter mb-6">{activeTier.name}</h4>
                  <div className="grid grid-cols-1 gap-4 mb-10">
                    {activeTier.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-foreground/80 font-bold uppercase tracking-widest text-sm">
                        <Check className="w-5 h-5 text-accent" />
                        {feat}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full h-16 text-xl font-black bg-primary text-primary-foreground uppercase tracking-[0.2em] rounded-none hover:bg-background hover:text-foreground transition-all group">
                    Book Now <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPPulse;
