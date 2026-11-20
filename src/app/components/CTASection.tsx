"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FADE_UP } from "../lib/animations";
import { captureUtmParams, getClientTelemetry } from "../lib/telemetry";
import { validateEmail } from "../lib/email-validator";

// ── Status config ─────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error" | "exists";

const BUTTON_STYLES: Record<SubmitStatus, string> = {
  idle: "bg-black/60 hover:bg-black/80 text-white",
  loading: "bg-black/60 text-white",
  success: "bg-emerald-500/60 text-white",
  error: "bg-red-500/60 text-white",
  exists: "bg-amber-500/60 text-white",
};

const BUTTON_LABELS: Record<SubmitStatus, string> = {
  idle: "Stay Notified",
  loading: "...",
  success: "✓ Subscribed",
  error: "Try Again",
  exists: "Already In!",
};

const MESSAGE_COLORS: Record<string, string> = {
  success: "text-emerald-400",
  error: "text-red-400",
};

// ── Component ─────────────────────────────────────────────────────────

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [mountedAt] = useState(() => Date.now());

  useEffect(() => {
    captureUtmParams();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    // Bot honeypot defense
    if (honeypot.trim() !== "") {
      setStatus("error");
      setMessage("Submission could not be processed.");
      return;
    }

    // Instant client-side validation (syntax, test/fake emails, disposable domains, typos)
    const localCheck = await validateEmail(email, { checkDns: false });
    if (!localCheck.valid) {
      setStatus("error");
      setMessage(localCheck.reason || "Please enter a valid email address.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
      return;
    }

    setStatus("loading");

    try {
      const interactionTimeMs = Date.now() - mountedAt;
      const telemetry = getClientTelemetry();
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          interactionTimeMs,
          website_url: honeypot,
          ...telemetry,
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("success");
        setMessage("You're in! We'll keep you posted.");
        setEmail("");
      } else if (res.status === 200) {
        setStatus("exists");
        setMessage(data.message || "You're already subscribed!");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }

    // Reset status after 4 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 4000);
  };

  return (
    <motion.section
      initial={FADE_UP.initial}
      whileInView={FADE_UP.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 mt-32 md:mt-64"
    >
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 md:mb-10">
        Pure Insight. Zero Noise. <br className="hidden sm:block" />
      </h2>

      <form
        onSubmit={handleSubmit}
        className="liquid-glass flex items-center w-full max-w-xl sm:max-w-2xl rounded-full pl-3 sm:pl-6 pr-1.5 py-1.5"
      >
        {/* Anti-bot honeypot field - invisible to human users */}
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute -left-[9999px] opacity-0 pointer-events-none w-0 h-0"
          aria-hidden="true"
        />
        <label htmlFor="cta-email" className="sr-only">
          Email address
        </label>
        <input
          id="cta-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your favorite email?"
          required
          autoComplete="email"
          disabled={status === "loading"}
          className="flex-1 bg-transparent text-white text-sm sm:text-base placeholder:text-white/40 outline-none border-none py-2 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`text-xs sm:text-sm font-bold uppercase tracking-[0.05em] sm:tracking-[0.15em] px-4 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all whitespace-nowrap disabled:opacity-50 ${BUTTON_STYLES[status]}`}
        >
          {BUTTON_LABELS[status]}
        </button>
      </form>

      {/* Status message */}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 text-sm ${MESSAGE_COLORS[status] ?? "text-amber-400"}`}
        >
          {message}
        </motion.p>
      )}
    </motion.section>
  );
}
