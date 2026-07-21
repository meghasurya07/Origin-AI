"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BG_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4",
];

export default function GradCapitalGrantArticle() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const index = Math.floor(Math.random() * BG_VIDEOS.length);
      videoRef.current.src = BG_VIDEOS[index];
      videoRef.current.loop = index !== 0;
    }
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* ── Background Video ─────────────────── */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        autoPlay
        muted
        playsInline
        preload="metadata"
      />
      <div className="fixed inset-0 bg-black/70 z-[1]" />

      {/* ── Navbar ───────────────────────────── */}
      <Navbar />

      {/* ── Article ──────────────────────────── */}
      <article className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-16 sm:pb-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs sm:text-sm transition-colors mb-8 sm:mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to News
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 sm:mb-14"
        >
          {/* Meta */}
          <div className="flex items-center gap-3 mb-5">
            <time dateTime="2026-07" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40">
              July 2026
            </time>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-[10px] sm:text-xs uppercase tracking-widest font-medium">
              Funding
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight">
            Origin AI receives $3,000 Feather Grant from Grad Capital
          </h1>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-white/60 text-sm sm:text-base leading-[1.8]">
            We are excited to announce that Origin AI has been selected as a
            recipient of the{" "}
            <span className="text-white font-medium">
              Feather Grant by Grad Capital
            </span>{" "}
            — a $3,000 non-dilutive grant awarded to ambitious, early-stage
            startups building at the frontier of technology.
          </p>

          <p className="text-white/60 text-sm sm:text-base leading-[1.8]">
            The Feather Grant is part of Grad Capital&apos;s mission to identify
            and support the next generation of founders who are tackling
            bold, high-impact problems. This grant comes with no equity
            dilution, reflecting Grad Capital&apos;s belief in founder-first
            support during the earliest and most critical stages of a
            company&apos;s journey.
          </p>

          {/* Divider */}
          <div className="py-2">
            <div className="w-12 h-px bg-gradient-to-r from-[#F97316]/40 to-transparent" />
          </div>

          <h2 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
            What this means for Origin AI
          </h2>

          <p className="text-white/60 text-sm sm:text-base leading-[1.8]">
            This grant validates our vision of building safe, general-purpose
            artificial intelligence out of India. The funding will be directed
            toward our core research infrastructure — specifically, advancing
            our foundational model training pipeline and scaling our compute
            capabilities during this critical stealth phase.
          </p>

          <p className="text-white/60 text-sm sm:text-base leading-[1.8]">
            More than the capital, this grant represents a vote of confidence
            from one of India&apos;s most forward-thinking early-stage
            investors. Grad Capital&apos;s network and ecosystem will be
            invaluable as we continue to build at the intersection of
            fundamental AI research and real-world impact.
          </p>

          {/* Divider */}
          <div className="py-2">
            <div className="w-12 h-px bg-gradient-to-r from-[#F97316]/40 to-transparent" />
          </div>

          <h2 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
            About Grad Capital
          </h2>

          <p className="text-white/60 text-sm sm:text-base leading-[1.8]">
            <a
              href="https://www.gradcapital.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-colors"
            >
              Grad Capital
            </a>{" "}
            is an early-stage fund that backs student and young founders
            building across deep tech, AI, fintech, and consumer sectors. Their
            Feather Grant program provides non-dilutive capital to help founders
            turn ambitious ideas into reality without giving up ownership.
          </p>

          {/* Closing */}
          <p className="text-white/60 text-sm sm:text-base leading-[1.8]">
            We are grateful to the Grad Capital team for believing in our
            mission. This is the beginning — and we are just getting started.
          </p>

          {/* Sign-off */}
          <div className="pt-4">
            <p className="text-white/40 text-xs sm:text-sm italic">
              — The Origin AI Team
            </p>
          </div>
        </motion.div>
      </article>

      {/* ── Footer ───────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <Footer />
      </div>
    </main>
  );
}
