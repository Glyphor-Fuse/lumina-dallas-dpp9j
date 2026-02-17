import React from 'react';
import { motion } from 'framer-motion';

const GALLERY = [
  { url: '/images/atmosphere-crowd.jpg', title: 'Main Stage', size: 'col-span-2 row-span-2' },
  { url: '/images/atmosphere-lasers.jpg', title: 'Visual Arts', size: 'col-span-1 row-span-1' },
  { url: '/images/cocktail.jpg', title: 'Bar Service', size: 'col-span-1 row-span-1' },
  { url: '/images/event-dj1.jpg', title: 'Residency', size: 'col-span-1 row-span-2' },
  { url: '/images/event-dj2.jpg', title: 'The Headliner', size: 'col-span-1 row-span-1' },
];

export const AtmosphereGallery = () => {
  return (
    <section id="atmosphere" className="py-32 bg-muted border-y border-border/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-foreground uppercase tracking-tighter italic mb-4 leading-none">
              Visual <span className="text-accent">Archive</span>
            </h2>
            <p className="text-muted-foreground text-lg uppercase tracking-[0.3em] font-bold">
              Immersive. Brutal. Electric.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-6 h-[900px]">
          {GALLERY.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 0.98, rotate: idx % 2 === 0 ? 0.5 : -0.5 }}
              className={`relative overflow-hidden group border border-border/10 ${item.size}`}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-foreground font-black uppercase tracking-[0.4em] text-sm italic">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtmosphereGallery;
