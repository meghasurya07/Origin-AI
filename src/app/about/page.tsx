"use client";

import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import FooterWrapper from "../components/FooterWrapper";
import BackgroundVideo from "../components/BackgroundVideo";
import { LinkedInFilledIcon, MailIcon } from "../components/Icons";

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

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* ── Background Video ─────────────────── */}
      <BackgroundVideo />
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="liquid-glass rounded-2xl p-6 sm:p-10 md:p-12"
        >
          <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mb-4">
            Our Mission
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
            The race to AGI will define human progress, and Origin AI exists to ensure India leads this frontier rather than follows it. We are building safe, general-purpose intelligence and foundational models to transform industries and push the boundaries of what is possible, competing directly with the world&apos;s most ambitious labs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {PILLARS.map((item) => (
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

      {/* ── Footer ───────────────────────────── */}
      <FooterWrapper />
    </main>
  );
}
