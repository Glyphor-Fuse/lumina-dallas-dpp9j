import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight, Star } from 'lucide-react';

const EVENTS = [
  {
    date: 'FRI, OCT 27',
    headliner: 'Tritonal',
    support: 'Lumina Residents',
    img: '/images/event-dj1.jpg',
    status: 'Selling Fast',
    price: '$45'
  },
  {
    date: 'SAT, OCT 28',
    headliner: 'Charlotte de Witte',
    support: 'Special Guest TBA',
    img: '/images/event-dj2.jpg',
    status: 'Limited Tickets',
    price: '$65'
  },
  {
    date: 'THU, OCT 31',
    headliner: 'Hallow-Lumina',
    support: 'Costume Contest',
    img: '/images/atmosphere-lasers.jpg',
    status: 'On Sale',
    price: '$40'
  }
];

export const EventCalendar = () => {
  return (
    <section id="events" className="py-32 bg-card border-y border-border/5 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-foreground uppercase tracking-tighter mb-4 italic">
              The <span className="text-accent">Lineup</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg uppercase tracking-widest font-bold border-l-2 border-accent pl-4">
              Securing the biggest names in electronic music.
            </p>
          </div>
          <Button variant="ghost" className="text-accent hover:text-accent/80 hover:bg-accent/5 p-0 h-auto text-lg font-black uppercase tracking-widest">
            Full Calendar <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <Card className="bg-background border-border overflow-hidden relative rounded-none h-full flex flex-col group-hover:border-primary/50 transition-colors shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={event.img} 
                    alt={event.headliner} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold rounded-none px-4 py-1">
                    {event.status}
                  </Badge>
                </div>
                
                <CardContent className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-accent font-black mb-4 tracking-tighter">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg uppercase italic">{event.date}</span>
                    </div>
                    <h3 className="text-4xl font-display font-bold text-foreground mb-1 leading-[0.9] uppercase italic tracking-tighter group-hover:text-primary transition-colors">{event.headliner}</h3>
                    <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mt-2 mb-8">{event.support}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/5">
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Start from</span>
                      <span className="text-2xl font-black text-foreground">{event.price}</span>
                    </div>
                    <Button className="bg-foreground text-background hover:bg-primary hover:text-foreground font-black rounded-none h-12 px-6">
                      <Star className="w-5 h-5 mr-2" />
                      BUY
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
