"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  YoutubeIcon,
  DiscordIcon,
} from "./Icons";

// ── Data ──────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

interface LinkColumn {
  title: string;
  links: NavLink[];
}

const FOOTER_COLUMNS: LinkColumn[] = [
  {
    title: "Research",
    links: [
      { label: "Research Overview", href: "/research" },
      { label: "Research Areas", href: "/research/areas" },
      { label: "Publications", href: "/publications" },
      { label: "Technical Reports", href: "/reports" },
      { label: "Benchmarks", href: "/benchmarks" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Mission", href: "/about" },
      { label: "Team", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Safety & Governance",
    links: [
      { label: "Safety Approach", href: "/safety" },
      { label: "Transparency", href: "/transparency" },
      { label: "Research Ethics", href: "/ethics" },
      { label: "Responsible AI", href: "/responsible-ai" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

// TODO: Replace placeholder social links with actual Origin AI profile URLs when available
const SOCIAL_ICONS = [
  { Icon: XIcon, label: "X", href: "https://x.com" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/originailabs/" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { Icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
  { Icon: DiscordIcon, label: "Discord", href: "https://discord.gg" },
] as const;

// ── Component ─────────────────────────────────────────────────────────

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
              alt="Origin AI - Frontier AI Research Lab from India"
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
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            {SOCIAL_ICONS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
