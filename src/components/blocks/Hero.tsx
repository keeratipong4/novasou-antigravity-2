"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroProps = {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
};

export function Hero({
  headline = "The Future of Work is Here",
  subheadline = "Novasou empowers businesses with cutting-edge technology and human-centric design solutions.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundImage,
  layout = "center",
  image,
}: HeroProps & { layout?: "center" | "split"; image?: string }) {
  const isSplit = layout === "split";

  return (
    <section className={cn(
      "relative w-full overflow-hidden bg-primary text-white",
      isSplit ? "pt-32 pb-20 min-h-[80vh]" : "min-h-screen flex items-center justify-center pt-20"
    )}>
       {/* Background Dotted Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none">
      {/* Animated Background Shapes */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none"> */}
        <motion.div
           className="absolute -top-[10%] -right-[10%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-br from-gradient-start to-gradient-end opacity-30 blur-[100px]"
           animate={{
             y: [0, 50, 0],
             scale: [1, 1.2, 1],
           }}
           transition={{
             duration: 10,
             repeat: Infinity,
             ease: "easeInOut",
           }}
        />
        <motion.div
           className="absolute top-[40%] -left-[10%] w-[40vh] h-[40vh] rounded-full bg-primary opacity-20 blur-[120px]"
           animate={{
             x: [0, 30, 0],
             scale: [1, 1.1, 1],
           }}
           transition={{
             duration: 15,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 2,
           }}
        />
      </div>

      <Container className="relative z-10 h-full">
        {isSplit ? (
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
              {/* Left Content */}
              <div className="flex flex-col items-start text-left">
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
                  >
                    {headline}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/80 max-w-lg mb-8 font-light"
                  >
                    {subheadline}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex gap-4"
                  >
                    {ctaText && (
                        <Button variant="primary" size="lg" href={ctaLink} className="shadow-blue-900/50 shadow-2xl rounded-full px-8">
                          {ctaText}
                        </Button>
                    )}
                    <Button variant="secondary" size="lg" href="/careers" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                       Opening Positions
                    </Button>
                  </motion.div>
              </div>
              
              {/* Right Image */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                 className="relative"
              >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                      {image ? (
                           <img src={image} alt={headline} className="w-full h-full object-cover" />
                      ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                              <span className="text-white/20 font-display text-2xl">Hero Image</span>
                          </div>
                      )}
                      
                      {/* Decorative Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-transparent to-transparent opacity-60" />
                  </div>
              </motion.div>
           </div>
        ) : (
          /* Centered Layout (Original) */
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
            >
              {headline}
            </motion.h1>
    
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-white/80 max-w-2xl mb-10 font-light"
            >
              {subheadline}
            </motion.p>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {ctaText && (
                <Button variant="primary" size="lg" href={ctaLink} className="shadow-blue-900/50 shadow-2xl">
                    {ctaText}
                </Button>
              )}
            </motion.div>
          </div>
        )}
      </Container>
    </section>
  );
}
