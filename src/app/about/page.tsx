"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BG_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4",
];

export default function AboutPage() {
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
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            <span className="w-10 sm:w-14 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,#fbbf24_40%,#f97316)] shadow-[0_0_8px_1px_rgba(251,191,36,0.4)]" />
            <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
              About Origin AI
            </span>
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Building the future of{" "}
            <span className="bg-[linear-gradient(90deg,#0ea5e9,#7dd3fc,#0ea5e9)] bg-clip-text text-transparent">
              intelligence
            </span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            Origin AI is on a mission to build safe, general-purpose artificial
            intelligence. We believe India can lead the global AI race — not
            just participate in it. We&apos;re building foundational AI systems
            that will transform industries and push the boundaries of what
            machines can do.
          </p>
        </motion.div>
      </section>

      {/* ── Mission ──────────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="liquid-glass rounded-2xl p-6 sm:p-10 md:p-12"
        >
          <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mb-4">
            Our Mission
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
            The race to artificial general intelligence will define the next era
            of human progress. Origin AI exists to ensure that India has a seat
            at the table — not as a follower, but as a leader. We&apos;re
            building the research, the models, and the products that will
            compete at the frontier alongside the world&apos;s most ambitious AI
            labs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                label: "Research",
                value:
                  "Advancing foundational AI research in machine learning, NLP, and computer vision.",
              },
              {
                label: "Safety",
                value:
                  "Developing AI systems that are aligned, transparent, and beneficial to humanity.",
              },
              {
                label: "Impact",
                value:
                  "Making cutting-edge AI accessible and driving India's leadership in the global AI race.",
              },
            ].map((item) => (
              <div key={item.label} className="border-t border-white/10 pt-4">
                <p className="text-white text-sm font-semibold uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Founding Team ────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-10">
            Team
          </h2>

          {/* Co-Founder Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Megha */}
            <div className="liquid-glass rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-4">
              <div className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden ring-1 ring-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Linkedin Profile.png"
                  alt="Megha Surya Bodepudi"
                  width="200"
                  height="200"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                  Megha Surya Bodepudi
                </h3>
                <p className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-xs sm:text-sm font-medium uppercase tracking-wider mt-1 mb-3">
                  Co-Founder
                </p>
                <a
                  href="https://www.linkedin.com/in/megha-surya-bodepudi-2b292b316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Mahesh */}
            <div className="liquid-glass rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-4">
              <div className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden ring-1 ring-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Mahesh.jpg"
                  alt="Mahesh Bodepudi"
                  width="200"
                  height="200"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                  Mahesh Bodepudi
                </h3>
                <p className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-xs sm:text-sm font-medium uppercase tracking-wider mt-1 mb-3">
                  Co-Founder
                </p>
                <a
                  href="https://www.linkedin.com/in/maheshbodepudi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ───────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <Footer />
      </div>
    </main>
  );
}
