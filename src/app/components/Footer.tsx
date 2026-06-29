"use client";

import { motion } from "motion/react";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
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

const researchLinks = [
  "Research Overview",
  "Research Areas",
  "Publications",
  "Technical Reports",
  "Benchmarks",
];

const companyLinks = [
  "About",
  "Mission",
  "Team",
  "Careers",
  "Contact",
];

const safetyLinks = [
  "Safety Approach",
  "Transparency",
  "Research Ethics",
  "Responsible AI",
  "Privacy Policy",
];

const socialIcons = [
  { Icon: XIcon, label: "X" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
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
          <div className="mb-2 overflow-hidden h-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Origin AI.png"
              alt="Origin AI"
              width="600"
              height="400"
              className="h-40 w-auto -mt-14 -ml-14"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Origin AI is dedicated to developing the next generation of intelligent systems while ensuring their benefits are widely accessible.
          </p>
        </div>

        {/* Links Section */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
          {/* Research */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
              Research
            </h3>
            <ul className="space-y-2">
              {researchLinks.map((link) => (
                <li key={link}>
                  <span
                    className="text-xs cursor-default select-none"
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <span
                    className="text-xs cursor-default select-none"
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Governance */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
              Safety & Governance
            </h3>
            <ul className="space-y-2">
              {safetyLinks.map((link) => (
                <li key={link}>
                  <span
                    className="text-xs cursor-default select-none"
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────── */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <p className="text-[10px] uppercase tracking-widest opacity-50">
          © 2026 Origin AI. All rights reserved.
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