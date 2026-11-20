"use client";

import { motion } from "motion/react";
import PageShell from "../components/PageShell";
import SectionLabel from "../components/SectionLabel";
import PillarGrid from "../components/PillarGrid";
import { LinkedInFilledIcon, MailIcon } from "../components/Icons";
import { FADE_UP, easeOutTransition } from "../lib/animations";

// ── Data ──────────────────────────────────────────────────────────────

/** Team member data for the co-founder cards. */
const TEAM = [
  {
    name: "Megha Surya Bodepudi",
    role: "Co-Founder",
    image: "/Linkedin Profile.png",
    linkedin: "https://www.linkedin.com/in/megha-surya-bodepudi-2b292b316/",
    email: "megha@originai.in",
  },
  {
    name: "Mahesh Bodepudi",
    role: "Co-Founder",
    image: "/Mahesh.jpg",
    linkedin: "https://www.linkedin.com/in/maheshbodepudi/",
    email: "mahesh@originai.in",
  },
] as const;

/** Mission pillar data. */
const PILLARS = [
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
] as const;

// ── Component ─────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <PageShell>
      {/* ── Hero ─────────────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <motion.div {...FADE_UP} transition={easeOutTransition()}>
          <SectionLabel text="About Origin AI" />
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            <span className="sr-only">Origin AI: </span>
            Building the future of{" "}
            <span className="bg-[linear-gradient(90deg,#0ea5e9,#7dd3fc,#0ea5e9)] bg-clip-text text-transparent">
              intelligence
            </span>
          </h1>
        </motion.div>
      </section>

      {/* ── Mission ──────────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pb-16 sm:pb-20">
        <motion.div
          {...FADE_UP}
          transition={easeOutTransition(0.15)}
          className="liquid-glass rounded-2xl p-6 sm:p-10 md:p-12"
        >
          <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mb-4">
            Our Mission
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
            The race to AGI will define human progress, and Origin AI exists to ensure India leads this frontier rather than follows it. We are building safe, general-purpose intelligence and foundational models to transform industries and push the boundaries of what is possible, competing directly with the world&apos;s most ambitious labs.
          </p>
          <PillarGrid items={PILLARS} />
        </motion.div>
      </section>

      {/* ── Founding Team ────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pb-16 sm:pb-20">
        <motion.div {...FADE_UP} transition={easeOutTransition(0.3)}>
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-10">
            Team
          </h2>

          {/* Co-Founder Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="liquid-glass rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-4"
              >
                <div className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden ring-1 ring-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    width="200"
                    height="200"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-xs sm:text-sm font-medium uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-1">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="text-white/40 hover:text-white/70 transition-colors"
                    >
                      <LinkedInFilledIcon size={16} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="text-white/40 hover:text-white/70 transition-colors"
                    >
                      <MailIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
