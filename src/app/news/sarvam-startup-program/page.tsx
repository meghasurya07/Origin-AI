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

export default function SarvamStartupProgramArticle() {
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

      {/* ── Navbar ───────────────────────────── */}
      <Navbar />

      {/* ── Dark overlay ─────────────────────── */}
      <div className="fixed inset-0 bg-black/70 z-[1]" />

      {/* ── Article ──────────────────────────── */}
      <article className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/news"
              className="hover:text-white/60 transition-colors"
            >
              News
            </Link>
            <span>/</span>
            <span className="text-white/50">Sarvam AI Startup Program</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <time
              dateTime="2026-08"
              className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40"
            >
              August 2026
            </time>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-[10px] sm:text-xs uppercase tracking-widest font-medium">
              Partnership
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
            Origin AI selected for the Sarvam AI Startup Program
          </h1>

          {/* Hero image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Origin_AI_x_Sarvam.png"
            alt="Origin AI x Sarvam AI"
            width="1456"
            height="816"
            className="w-full rounded-2xl mb-10"
          />

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-10" />

          {/* Body */}
          <div className="prose-custom flex flex-col gap-6 text-white/70 text-[15px] sm:text-base leading-relaxed">
            <p>
              We&apos;re excited to announce that Origin AI has been selected for the{" "}
              <strong className="text-white/90">Sarvam AI Startup Program</strong> — an
              initiative designed to support early-stage companies building
              AI-powered products on India&apos;s sovereign AI infrastructure.
            </p>

            <p>
              <a
                href="https://www.sarvam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-colors"
              >
                Sarvam AI
              </a>{" "}
              is building full-stack AI infrastructure from India — including
              large language models, speech-to-text, text-to-speech, and
              document intelligence APIs — all natively optimized for 22 Indian
              languages and English. Their mission to build sovereign, world-class
              AI from India deeply resonates with our own vision at Origin AI.
            </p>

            <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mt-4">
              What this means for us
            </h2>

            <p>
              As part of the program, Origin AI receives:
            </p>

            <ul className="list-disc list-outside ml-5 flex flex-col gap-2.5 text-white/70">
              <li>
                <strong className="text-white/90">API credits</strong> — 6 to 12
                months of access to Sarvam&apos;s production-grade APIs, including
                speech, language, and document intelligence endpoints.
              </li>
              <li>
                <strong className="text-white/90">Priority engineering support</strong>{" "}
                — Direct access to Sarvam&apos;s engineering team for integration,
                optimization, and scaling guidance.
              </li>
              <li>
                <strong className="text-white/90">Production-ready infrastructure</strong>{" "}
                — Enterprise-grade AI infrastructure built for reliability and
                scale, purpose-built for the Indian context.
              </li>
              <li>
                <strong className="text-white/90">Launch visibility</strong> —
                Opportunities for co-branded case studies and ecosystem
                amplification.
              </li>
            </ul>

            <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mt-4">
              Why this matters
            </h2>

            <p>
              At Origin AI, we believe the next wave of transformative AI will
              be built by teams who understand local context deeply. Sarvam&apos;s
              sovereign AI stack — trained on Indian languages and optimized for
              Indian use cases — gives us infrastructure that aligns with the
              problems we&apos;re solving.
            </p>

            <p>
              This partnership accelerates our ability to build intelligent
              systems that are not just technically advanced, but genuinely
              accessible to the people they serve. From multilingual
              capabilities to production-grade reliability, Sarvam&apos;s
              infrastructure complements our research-first approach to AI
              development.
            </p>

            <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mt-4">
              Looking ahead
            </h2>

            <p>
              Being part of the Sarvam Startup Program is a meaningful milestone
              for Origin AI. It validates our direction and gives us the tools to
              move faster. We&apos;re grateful to the Sarvam team for their support and
              look forward to building together.
            </p>

            <p className="text-white/50 mt-4 text-sm">
              Learn more about the{" "}
              <a
                href="https://www.sarvam.ai/startup-program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-colors"
              >
                Sarvam AI Startup Program
              </a>
              .
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
