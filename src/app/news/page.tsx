"use client";

import Link from "next/link";
import { motion } from "motion/react";
import PageShell from "../components/PageShell";

/** News article entries. Add new items here as they are published. */
const NEWS_ITEMS = [
  {
    slug: "sarvam-startup-program",
    date: "August 2026",
    tag: "Partnership",
    title: "Origin AI selected for Sarvam AI Startup Program",
    excerpt:
      "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to sovereign AI infrastructure, API credits, and priority engineering support.",
  },
] as const;

export default function NewsPage() {
  return (
    <PageShell>
      {/* ── Content ──────────────────────────── */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Page heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Latest from Origin AI
          </h1>
          <p className="text-white/50 text-sm sm:text-base mb-16 max-w-lg">
            Announcements, milestones, and updates from Origin AI.
          </p>

          {/* News list */}
          <div className="flex flex-col gap-6">
            {NEWS_ITEMS.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`}>
                <div className="liquid-glass rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-300">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-4">
                    <time dateTime="2026-08" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40">
                      {item.date}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-[10px] sm:text-xs uppercase tracking-widest font-medium">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                    {item.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="inline-block mt-5 text-xs sm:text-sm uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
