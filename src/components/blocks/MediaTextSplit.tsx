"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type MediaTextSplitProps = {
  mediaUrl: string;
  mediaType?: "image" | "video";
  title: string;
  content: string;
  alignment?: "left" | "right";
};

export function MediaTextSplit({
  mediaUrl,
  mediaType = "image",
  title,
  content,
  alignment = "left",
}: MediaTextSplitProps) {
  const isRight = alignment === "right";

  return (
    <section className="py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Side */}
          <motion.div 
            className={cn("flex-1", isRight ? "lg:order-1" : "lg:order-2")}
             initial={{ opacity: 0, x: isRight ? -50 : 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            <div className="prose prose-lg text-text-secondary">
              <p>{content}</p>
            </div>
          </motion.div>

          {/* Media Side */}
          <motion.div 
            className={cn("flex-1 w-full", isRight ? "lg:order-2" : "lg:order-1")}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {/* Fallback pattern if no image, or actual image */}
              {mediaUrl ? (
                 /* In a real app, use next/image with generic loader or remote patterns */
                 <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <img src={mediaUrl} alt={title} className="w-full h-full object-cover" />
                 </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Image Placeholder</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
