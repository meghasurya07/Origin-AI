"use client";

import Navbar from "./components/Navbar";
import SupportedBy from "./components/SupportedBy";
import CTASection from "./components/CTASection";
import FooterWrapper from "./components/FooterWrapper";
import BackgroundVideo from "./components/BackgroundVideo";
import SectionLabel from "./components/SectionLabel";
import PillarGrid from "./components/PillarGrid";

// ── Data ──────────────────────────────────────────────────────────────

/** Hero quick-links shown below the sub-heading. */
const HERO_LINKS = [
  { label: "Our Mission", href: "/about" },
  { label: "Latest News", href: "/news" },
  { label: "Careers", href: "/careers" },
] as const;

const HERO_LINK_CLASS =
  "text-white/50 hover:text-white text-xs sm:text-sm transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/50";

/** SEO pillar cards in the "What is Origin AI?" section. */
const ORIGIN_AI_PILLARS = [
  {
    title: "Frontier Research",
    description:
      "Origin AI conducts foundational research in machine learning, natural language processing, and computer vision to push the boundaries of artificial general intelligence.",
  },
  {
    title: "AI Safety",
    description:
      "Origin AI prioritises building AI systems that are aligned, transparent, and beneficial to humanity — ensuring responsible development at every stage.",
  },
  {
    title: "Made in India",
    description:
      "Founded by Megha Surya Bodepudi and Mahesh Bodepudi, Origin AI is building sovereign AI infrastructure from India, for the world.",
  },
] as const;

// ── Component ─────────────────────────────────────────────────────────

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
            <SectionLabel
              text="Pioneering the future of AI"
              className="mb-3 sm:mb-4"
            />
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
              {HERO_LINKS.map((link, i) => (
                <span key={link.href} className="contents">
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                  )}
                  <a className={HERO_LINK_CLASS} href={link.href}>
                    {link.label}
                  </a>
                </span>
              ))}
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
            Origin AI is an Indian AI research lab founded in 2025, building safe general-purpose intelligence and foundational AI models. Based in India, Origin AI is competing directly with the world&apos;s leading AI labs — including OpenAI and Anthropic — to advance India&apos;s leadership in the global AI race.
          </p>
          <PillarGrid items={ORIGIN_AI_PILLARS} />
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
