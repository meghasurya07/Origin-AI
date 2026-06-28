"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "exists">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 mt-32 md:mt-64"
    >
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 md:mb-10">
        Pure Insight. Zero Noise. <br className="hidden sm:block" />
      </h2>

      <form
        onSubmit={handleSubmit}
        className="liquid-glass flex items-center w-full max-w-xl sm:max-w-2xl rounded-full pl-6 pr-1.5 py-1.5"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your favorite email?"
          required
          disabled={status === "loading"}
          className="flex-1 bg-transparent text-white text-sm sm:text-base placeholder:text-white/40 outline-none border-none py-2 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`text-xs sm:text-sm font-bold uppercase tracking-[0.05em] sm:tracking-[0.15em] px-4 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all whitespace-nowrap disabled:opacity-50 ${
            status === "success"
              ? "bg-emerald-500/60 text-white"
              : status === "error"
              ? "bg-red-500/60 text-white"
              : status === "exists"
              ? "bg-amber-500/60 text-white"
              : "bg-black/60 hover:bg-black/80 text-white"
          }`}
        >
          {status === "loading"
            ? "..."
            : status === "success"
            ? "✓ Subscribed"
            : status === "exists"
            ? "Already In!"
            : status === "error"
            ? "Try Again"
            : "Stay Notified"}
        </button>
      </form>

      {/* Status message */}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 text-sm ${
            status === "success"
              ? "text-emerald-400"
              : status === "error"
              ? "text-red-400"
              : "text-amber-400"
          }`}
        >
          {message}
        </motion.p>
      )}
    </motion.section>
  );
}
