"use client";

import { motion } from "motion/react";
import PageShell from "../components/PageShell";
import SectionLabel from "../components/SectionLabel";
import { MailIcon } from "../components/Icons";

export default function CareersPage() {
  return (
    <PageShell>
      {/* ── Hero ─────────────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel text="Careers" />
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Join the mission to shape{" "}
            <span className="bg-[linear-gradient(90deg,#0ea5e9,#7dd3fc,#0ea5e9)] bg-clip-text text-transparent">
              intelligence
            </span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            We are assembling a world-class team of researchers, engineers, and
            builders to push the frontier of general intelligence. If you want to
            solve the most important technical challenge of our time, you belong here.
          </p>
        </motion.div>
      </section>

      {/* ── Opportunities Card ───────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="liquid-glass rounded-2xl p-6 sm:p-10 md:p-12 text-center flex flex-col items-center"
        >
          <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mb-4">
            Build with Us
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            While we are currently operating in stealth and not actively listing specific roles, we are always looking for exceptional researchers and engineers who think from first principles. If you thrive in high-ownership environments and want to work on pioneering AGI systems, we want to hear from you.
          </p>
          <a
            href="mailto:megha@originai.in"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            <MailIcon size={16} className="mt-0.5" />
            Send Speculative Application
          </a>
        </motion.div>
      </section>
    </PageShell>
  );
}
