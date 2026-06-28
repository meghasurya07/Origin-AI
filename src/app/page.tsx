"use client";

import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

const BG_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4",
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const index = Math.floor(Math.random() * BG_VIDEOS.length);
      videoRef.current.src = BG_VIDEOS[index];
      videoRef.current.loop = index !== 0;
    }
  }, []);

  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* ── Fixed Background Video ─────────────────── */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        autoPlay
        muted
        playsInline
      />

      {/* ── Navbar ────────────────────────────────────── */}
      <Navbar />

      {/* ── Gradient overlay for text readability ───── */}
      <div className="fixed inset-x-0 bottom-0 h-2/3 lg:h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[1] pointer-events-none" />

      {/* ── Hero Content (independent, full-width) ───── */}
      <div className="relative z-10 w-full h-[100dvh] min-h-[480px] flex flex-col justify-center md:justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-14 md:pb-14 lg:pb-16 pt-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-5 lg:gap-16">
          {/* Headline */}
          <div className="lg:max-w-[55%] shrink-0">
            <p className="flex items-center gap-3 text-sm sm:text-sm uppercase tracking-[0.2em] font-medium mb-3 sm:mb-4">
              <span className="w-10 sm:w-14 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,#fbbf24_40%,#f97316)] shadow-[0_0_8px_1px_rgba(251,191,36,0.4)]" />
              <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
                Pioneering the future of AI
              </span>
            </p>
            <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.15] sm:leading-[1.1] md:leading-[1.08] tracking-tight">
              AI research and products that advance intelligence at the{" "}
              <span className="bg-[linear-gradient(90deg,#0ea5e9,#7dd3fc,#0ea5e9)] bg-clip-text text-transparent">
                frontier
              </span>
            </h1>
          </div>

          {/* Paragraph */}
          <div className="lg:max-w-md">
            <p className="text-white/70 text-sm sm:text-sm lg:text-lg leading-relaxed max-w-lg lg:max-w-none">
              AI will transform every industry and every aspect of human life.
              Origin AI is dedicated to developing the next generation of
              intelligent systems while ensuring their benefits are widely
              accessible.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA Section ─────────────────────────────── */}
      <CTASection />

      {/* ── Footer (independent, max-w-7xl) ──────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <Footer />
      </div>
    </main>
  );
}
