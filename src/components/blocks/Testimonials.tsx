"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

type TestimonialsProps = {
  title?: string;
  items: Testimonial[];
};

export function Testimonials({ title = "Trusted by Industry Leaders", items, layout = "slider" }: TestimonialsProps & { layout?: "slider" | "grid" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  if (layout === "grid") {
    return (
      <section className="py-20 bg-dark-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <div className="text-center mb-16">
             <h2 className="font-display text-4xl font-bold uppercase tracking-widest">{title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
              >
                 <Quote className="text-primary/40 mb-4" size={40} />
                 <p className="text-lg font-light italic mb-6 leading-relaxed text-white/90">
                    "{item.quote}"
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center font-bold text-sm">
                        {item.author[0]}
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">{item.author}</h4>
                        <p className="text-white/60 text-xs">{item.role}{item.company && `, ${item.company}`}</p>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Default Slider Layout
  return (
    <section className="py-20 bg-dark-blue text-white overflow-hidden relative">
       {/* Background accents */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
       
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold">{title}</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 opacity-20">
             <Quote size={80} />
          </div>

          <div className="relative z-10 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                  <p className="text-xl md:text-3xl font-light italic mb-8 leading-relaxed">
                    "{items[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-display text-xl font-bold">{items[currentIndex].author}</h4>
                    <p className="text-white/60">{items[currentIndex].role}{items[currentIndex].company && `, ${items[currentIndex].company}`}</p>
                  </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
