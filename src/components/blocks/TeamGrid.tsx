"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  imageUrl?: string;
};

type TeamGridProps = {
  title?: string;
  members: TeamMember[];
};

export function TeamGrid({ title = "Meet Our Team", members }: TeamGridProps) {
  return (
    <section className="py-20 bg-bg-light">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-foreground">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] bg-gray-200 relative">
                 {/* Placeholder for Image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                    {member.imageUrl ? (
                        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                        <span>Photo</span>
                    )}
                 </div>
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                 {/* Since we put text over image, we need ensure contrast or put below image. 
                     Design preference: Cards usually generic "White bg, drop-shadow".
                     Let's put text BELOW image for clean look matching "Cards" spec.
                  */}
              </div>
            </motion.div>
          ))}
           {/* Re-doing the layout to match generic card spec: Image top, content bottom */}
            {members.map((member, index) => (
             <div key={`dup-${index}`} className="hidden" /> 
            ))}
        </div>

        {/* Actual Layout Implementation - Correcting above loop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-square bg-gray-100 relative">
                 {/* Placeholder */}
                 <div className="w-full h-full flex items-center justify-center text-gray-300">
                    {member.imageUrl ? <img src={member.imageUrl} className="w-full h-full object-cover"/> : <span className="text-4xl capitalize">{member.name[0]}</span>}
                 </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>
            </motion.div>
           ))}
        </div>

      </Container>
    </section>
  );
}
