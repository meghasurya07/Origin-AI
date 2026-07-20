"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BG_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4",
];

const newsItems = [
  {
    slug: "grad-capital-feather-grant",
    date: "July 2026",
    tag: "Funding",
    title: "Origin AI receives $3,000 Feather Grant from Grad Capital",
    excerpt:
      "We are thrilled to announce that Origin AI has been awarded the Feather Grant by Grad Capital — a $3,000 non-dilutive grant designed to support ambitious student-led startups building at the frontier of technology.",
  },
];

export default function NewsPage() {
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
      />
      <div className="fixed inset-0 bg-black/70 z-[1]" />

      {/* ── Navbar ───────────────────────────── */}
      <Navbar />

      {/* ── Hero ─────────────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            <span className="w-10 sm:w-14 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,#fbbf24_40%,#f97316)] shadow-[0_0_8px_1px_rgba(251,191,36,0.4)]" />
            <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
              Newsroom
            </span>
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            Latest from{" "}
            <span className="bg-[linear-gradient(90deg,#0ea5e9,#7dd3fc,#0ea5e9)] bg-clip-text text-transparent">
              Origin AI
            </span>
          </h1>
        </motion.div>
      </section>

      {/* ── News List ────────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pb-16 sm:pb-20">
        <div className="space-y-6">
          {newsItems.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: "easeOut",
              }}
            >
              <Link href={`/news/${item.slug}`} className="block group">
                <div className="liquid-glass rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-300">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-4">
                    <time dateTime="2026-07" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40">
                      {item.date}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-[10px] sm:text-xs uppercase tracking-widest font-medium">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-tight mb-3 group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-3xl mb-5">
                    {item.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-1.5 text-white/40 group-hover:text-white/70 text-xs sm:text-sm transition-colors">
                    Read more
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
                      className="group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <Footer />
      </div>
    </main>
  );
}
