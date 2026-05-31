"use client";

import { motion } from "motion/react";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 mt-32 md:mt-64"
    >
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 md:mb-10">
        Pure Insight. Zero Noise.
      </h2>
      <div className="liquid-glass flex items-center w-full max-w-xl sm:max-w-2xl rounded-full pl-6 pr-1.5 py-1.5">
        <input
          type="email"
          placeholder="Your favorite email?"
          className="flex-1 bg-transparent text-white text-sm sm:text-base placeholder:text-white/40 outline-none border-none py-2"
        />
        <button className="bg-black/60 hover:bg-black/80 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.15em] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors whitespace-nowrap">
          Stay Notified
        </button>
      </div>
    </motion.section>
  );
}
