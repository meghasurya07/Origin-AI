"use client";

import Navbar from "./components/Navbar";

const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4";

export default function Home() {
  return (
    <div className="relative w-full h-screen min-h-[500px] overflow-hidden">
      {/* ── Background Video ──────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        src={BG_VIDEO}
      />

      {/* ── Navbar ────────────────────────────────────── */}
      <Navbar />

      {/* ── Gradient overlay for text readability ───── */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 lg:h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

      {/* ── Hero Content ──────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end lg:justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-10 sm:pb-14 md:pb-14 lg:pb-16 pt-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-5 lg:gap-16">
          {/* Headline */}
          <div className="lg:max-w-[55%] shrink-0">
            <p className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-3 sm:mb-4">
              <span className="w-10 sm:w-14 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,#fbbf24_40%,#f97316)] shadow-[0_0_8px_1px_rgba(251,191,36,0.4)]" />
              <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">Pioneering the future of AI</span>
            </p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.15] sm:leading-[1.1] md:leading-[1.08] tracking-tight">
              AI research and products that advance intelligence at the{" "}
              <span className="bg-[linear-gradient(90deg,#0ea5e9,#7dd3fc,#0ea5e9)] bg-clip-text text-transparent">frontier</span>
            </h1>
          </div>

          {/* Paragraph */}
          <div className="lg:max-w-md">
            <p className="text-white/70 text-xs sm:text-sm lg:text-lg leading-relaxed max-w-lg lg:max-w-none">
              AI will transform every industry and every aspect of human life.
              Origin AI is dedicated to developing the next generation
              of intelligent systems while ensuring their benefits are widely
              accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
