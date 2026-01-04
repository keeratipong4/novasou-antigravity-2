"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

type AboutIntroProps = {
  leftTitle: string;
  leftContent: string;
  rightTitle: string;
  rightContent: string;
  imageUrl: string;
};

export function AboutIntro({ leftTitle, leftContent, rightTitle, rightContent, imageUrl }: AboutIntroProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-left"
          >
             <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-[#04184C] uppercase tracking-wide">
                {leftTitle}
             </h2>
             <div 
               className="text-text-secondary leading-relaxed space-y-4"
               dangerouslySetInnerHTML={{ __html: leftContent }}
             />
          </motion.div>

          {/* Center Image */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative mx-auto w-full max-w-[400px]"
          >
             <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={imageUrl} alt="About Us" className="w-full h-full object-cover" />
                
                {/* Play Button Overlay (Decorative as per design) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg group">
                        <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                    </div>
                </div>
             </div>
             
             {/* Decorative Background Dots Pattern */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 opacity-20 bg-[radial-gradient(#04184C_1px,transparent_1px)] [background-size:8px_8px]" />
             <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 opacity-20 bg-[radial-gradient(#04184C_1px,transparent_1px)] [background-size:8px_8px]" />

          </motion.div>

          {/* Right Column */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="text-left"
          >
             <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-[#04184C] uppercase tracking-wide">
                {rightTitle}
             </h2>
              <div 
               className="text-text-secondary leading-relaxed space-y-4"
               dangerouslySetInnerHTML={{ __html: rightContent }}
             />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
