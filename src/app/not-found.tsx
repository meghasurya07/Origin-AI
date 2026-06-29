"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";

const BG_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4",
];

export default function NotFound() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const index = Math.floor(Math.random() * BG_VIDEOS.length);
      videoRef.current.src = BG_VIDEOS[index];
      videoRef.current.loop = index !== 0;
    }
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-white/20 selection:text-white">
      {/* ── Background Video ─────────────────── */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        autoPlay
        muted
        playsInline
      />

      {/* ── Dark overlay ─────────────────────── */}
      <div className="fixed inset-0 bg-black/60 z-[1]" />

      {/* ── Navbar ───────────────────────────── */}
      <Navbar />

      {/* ── Content ──────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Glowing 404 */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[120px] sm:text-[180px] md:text-[220px] font-bold leading-none tracking-tighter bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent select-none"
        >
          404
        </motion.p>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="liquid-glass rounded-2xl px-8 sm:px-12 py-8 sm:py-10 -mt-6 sm:-mt-8 max-w-lg"
        >
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-3 sm:mb-4">
            Uh oh, you&apos;re off the map.
          </h1>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
            This page has either been moved, removed, or is still under
            construction. We&apos;re building fast — check back soon.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
