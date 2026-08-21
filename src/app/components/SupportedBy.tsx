"use client";

import { motion } from "motion/react";

export default function SupportedBy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
      className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 mt-28 sm:mt-40 md:mt-52"
    >
      {/* Heading with decorative lines */}
      <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14">
        <span className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-white/20" />
        <h2 className="text-white text-lg sm:text-xl md:text-2xl uppercase tracking-[0.3em] font-semibold">
          Supported by
        </h2>
        <span className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-white/20" />
      </div>

      {/* Logo card */}
      <div className="flex items-center justify-center gap-8 sm:gap-12">
        <a
          href="https://www.sarvam.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group liquid-glass rounded-2xl px-8 sm:px-12 py-5 sm:py-6 hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sarvam_logo.svg"
            alt="Sarvam AI"
            width="120"
            height="120"
            className="h-20 sm:h-24 md:h-[100px] w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>
    </motion.section>
  );
}
