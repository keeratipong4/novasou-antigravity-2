'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-[#04184C]/90">
      <motion.div
        className="relative flex h-24 w-24 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Outer Ring */}
        <motion.span
          className="absolute h-full w-full rounded-full border-4 border-dashed border-[#284BE3]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner Ring */}
        <motion.span
          className="absolute h-16 w-16 rounded-full border-4 border-t-transparent border-l-transparent border-[#04184C] dark:border-white"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center Dot */}
        <motion.div
          className="h-4 w-4 rounded-full bg-[#284BE3]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}
