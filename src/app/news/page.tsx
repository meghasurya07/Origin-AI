"use client";

import Link from "next/link";
import { motion } from "motion/react";
import PageShell from "../components/PageShell";
import ArticleMeta from "../components/ArticleMeta";
import { FADE_UP_SUBTLE } from "../lib/animations";

/** News article entries. Add new items here as they are published. */
const NEWS_ITEMS = [
  {
    slug: "sarvam-startup-program",
    dateTime: "2026-08",
    dateLabel: "August 2026",
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
        <motion.div {...FADE_UP_SUBTLE} transition={{ duration: 0.8 }}>
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
                  <div className="mb-4">
                    <ArticleMeta
                      dateTime={item.dateTime}
                      dateLabel={item.dateLabel}
                      tag={item.tag}
                    />
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
