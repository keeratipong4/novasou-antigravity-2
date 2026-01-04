"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, Shield, Zap, Users, Globe, Layers, Briefcase, GraduationCap, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FeatureItem = {
  icon: string;
  title: string;
  description?: string;
  image?: string;
};

type FeatureGridProps = {
  title?: string;
  subtitle?: string;
  items: FeatureItem[];
  variant?: "icon-card" | "image-card" | "icon-minimal";
  columns?: 2 | 3 | 4 | 5;
};

const ICON_MAP: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
  laptop: <Laptop className="w-6 h-6" />,
  default: <ArrowUpRight className="w-6 h-6" />,
};

export function FeatureGrid({ 
  title, 
  subtitle, 
  items, 
  variant = "icon-card",
  columns = 3 
}: FeatureGridProps) {
  
  const getGridCols = (cols: number) => {
    switch (cols) {
      case 2: return "lg:grid-cols-2";
      case 4: return "lg:grid-cols-4";
      case 5: return "lg:grid-cols-5";
      default: return "lg:grid-cols-3"; // 3 is default
    }
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold mb-4 text-foreground uppercase tracking-widest"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8",
          getGridCols(columns)
        )}>
          {items?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "transition-all duration-300",
                variant === "icon-card" && "group p-8 rounded-2xl bg-[#F8FAFC] hover:shadow-lg",
                variant === "image-card" && "group relative h-[300px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl",
                variant === "icon-minimal" && "flex flex-col items-center text-center p-4 hover:-translate-y-1"
              )}
            >
              {variant === "icon-card" && (
                <>
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {ICON_MAP[item.icon] || ICON_MAP.default}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">{item.description}</p>
                </>
              )}

              {variant === "image-card" && (
                <>
                  <div className="absolute inset-0">
                    {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                        <div className={`w-full h-full ${index % 2 === 0 ? "bg-blue-900" : "bg-blue-800"}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
                      <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {item.description}
                      </p>
                  </div>
                </>
              )}

               {variant === "icon-minimal" && (
                <>
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 text-3xl">
                     {/* Simplified icon map direct rendering or mapping */}
                     {React.isValidElement(ICON_MAP[item.icon]) 
                        ? React.cloneElement(ICON_MAP[item.icon] as React.ReactElement<any>, { className: "w-8 h-8" }) 
                        : <ArrowUpRight className="w-8 h-8"/>
                     }
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                   {item.description && <p className="text-xs text-text-secondary mt-1">{item.description}</p>}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
