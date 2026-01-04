"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

type GalleryItem = {
  src: string;
  alt: string;
  span?: "normal" | "wide" | "tall";
};

type GalleryGridProps = {
  title?: string;
  items: GalleryItem[];
};

export function GalleryGrid({ title = "Our Moments", items }: GalleryGridProps) {
  // Simple Mock Masonry Layout (CSS Grid based)
  return (
    <section className="py-20 bg-white">
      <Container>
        {title && (
            <div className="text-center mb-16">
                 <h2 className="font-display text-4xl font-bold mb-4 text-foreground">{title}</h2>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
             {items.map((item, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative rounded-xl overflow-hidden group ${
                        item.span === "wide" ? "md:col-span-2" : 
                        item.span === "tall" ? "md:row-span-2" : ""
                    }`}
                 >
                    {/* Placeholder Logic */}
                    <div className={`w-full h-full ${
                        index % 3 === 0 ? "bg-blue-100" :
                        index % 3 === 1 ? "bg-indigo-100" : "bg-purple-100"
                    } flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500`}>
                        {item.src ? (
                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                        ) : (
                            <span>{item.alt || "Gallery Item"}</span>
                        )}
                    </div>
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {item.alt}
                        </p>
                    </div>
                 </motion.div>
             ))}
        </div>
      </Container>
    </section>
  );
}
