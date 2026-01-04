"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

type StatItem = {
  value: string;
  label: string;
};

type StatsRowProps = {
  stats: StatItem[];
};

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-dark-blue to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2 bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-200">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium tracking-wide">
                {stat.label.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
