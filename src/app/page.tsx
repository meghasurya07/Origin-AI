"use client";

import Navbar from "./components/Navbar";
import SupportedBy from "./components/SupportedBy";
import CTASection from "./components/CTASection";
import FooterWrapper from "./components/FooterWrapper";
import BackgroundVideo from "./components/BackgroundVideo";

export default function Home() {
  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* ── Fixed Background Video ─────────────────── */}
      <BackgroundVideo />

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
              <span className="sr-only">Origin AI — </span>
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
            <div className="flex items-center gap-4 mt-4 lg:mt-5">
              <a className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/50" href="/about">Our Mission</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/50" href="/news">Latest News</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/50" href="/careers">Careers</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── About Origin AI (crawlable content for SEO) ── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 mt-20 sm:mt-28 md:mt-36">
        <div className="liquid-glass rounded-2xl p-6 sm:p-10 md:p-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            What is Origin AI?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
            Origin AI is an Indian AI research lab founded in 2026, building safe general-purpose intelligence and foundational AI models. Based in India, Origin AI is competing directly with the world&apos;s leading AI labs — including OpenAI and Anthropic — to advance India&apos;s leadership in the global AI race.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="border-t border-white/10 pt-4">
              <p className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Frontier Research</p>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                Origin AI conducts foundational research in machine learning, natural language processing, and computer vision to push the boundaries of artificial general intelligence.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-white text-sm font-semibold uppercase tracking-wider mb-2">AI Safety</p>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                Origin AI prioritises building AI systems that are aligned, transparent, and beneficial to humanity — ensuring responsible development at every stage.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Made in India</p>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                Founded by Megha Surya Bodepudi and Mahesh Bodepudi, Origin AI is building sovereign AI infrastructure from India, for the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Supported By ──────────────────────────── */}
      <SupportedBy />

      {/* ── CTA Section ─────────────────────────────── */}
      <CTASection />

      {/* ── Footer ──────────────────────────────────── */}
      <FooterWrapper />
    </main>
  );
}
