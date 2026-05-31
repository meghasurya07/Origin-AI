"use client";

import { motion } from "motion/react";

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const discoverLinks = [
  "Labs & Workshops",
  "Deep Dive Series",
  "Global Circle",
  "Resource Vault",
  "Future Roadmap",
];

const missionLinks = [
  "Origin Story",
  "The Collective",
  "Newsroom Hub",
  "Join the Team",
];

const conciergeLinks = [
  "Get in Touch",
  "Legal Privacy",
  "User Agreement",
  "Report Concern",
];

const socialIcons = [
  { Icon: TwitterIcon, label: "Twitter" },
  { Icon: YoutubeIcon, label: "Youtube" },
  { Icon: InstagramIcon, label: "Instagram" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="liquid-glass font-helvetica w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64"
    >
      {/* ── Top Grid ──────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
        {/* Brand Column */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
              fill="currentColor"
              className="text-white"
            >
              <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
            </svg>
            <span className="text-xl font-medium text-white">Origin AI</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Origin AI is dedicated to developing the next generation of intelligent systems while ensuring their benefits are widely accessible.
          </p>
        </div>

        {/* Links Section */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
          {/* Discover */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
              Discover
            </h4>
            <ul className="space-y-2">
              {discoverLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The Mission */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
              The Mission
            </h4>
            <ul className="space-y-2">
              {missionLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
              Concierge
            </h4>
            <ul className="space-y-2">
              {conciergeLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────── */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <p className="text-[10px] uppercase tracking-widest opacity-50">
          Curated by @GotInGeorgiG
        </p>

        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest opacity-50">
            Join the Journey:
          </span>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="opacity-70 hover:opacity-100 transition-colors hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
