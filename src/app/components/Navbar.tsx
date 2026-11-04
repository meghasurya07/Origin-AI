"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  dropdown?: true;
}

const NAV_LINKS: NavItem[] = [
  { label: "Research", href: "/research" },
  { label: "Products", href: "/products", dropdown: true },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

// ── Sub-components ────────────────────────────────────────────────────

/** Shared nav link used by both desktop pill and mobile drawer. */
function NavLink({
  item,
  isActive,
  className,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  className: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      className={`${className} ${
        isActive ? "bg-white/15 text-white" : "text-white/70 hover:text-white"
      }`}
      onClick={onClick}
    >
      {item.label}
      {item.dropdown && <ChevronDown size={13} className="mt-px" />}
    </Link>
  );
}

// ── Main Component ────────────────────────────────────────────────────

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ── Left: Logo ─────────────────────────────── */}
      <div className="absolute top-2 sm:top-3 md:top-5 -left-4 sm:-left-1 md:left-0 z-30 overflow-hidden h-10 sm:h-14 md:h-20 flex items-center">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Origin AI.png"
            alt="Origin AI — Frontier AI Research Lab from India"
            width="600"
            height="400"
            className="h-28 sm:h-36 md:h-48 w-auto -my-4 sm:-my-6 md:-my-8"
          />
        </Link>
      </div>

      {/* ── Center: Nav pill ───────────────────────── */}
      <nav aria-label="Main navigation" className="hidden md:flex absolute top-5 left-1/2 -translate-x-1/2 z-30">
        <div className="liquid-glass flex items-center gap-0.5 lg:gap-1 rounded-xl px-1.5 lg:px-2 py-1.5 lg:py-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              item={link}
              isActive={pathname === link.href}
              className="flex items-center gap-0.5 px-2 lg:px-3 py-1.5 rounded-md text-xs lg:text-sm whitespace-nowrap transition-colors"
            />
          ))}
        </div>
      </nav>

      {/* ── Right: CTA + Mobile toggle ─────────────── */}
      <div className="absolute top-2 sm:top-3 md:top-5 right-2 sm:right-6 md:right-8 z-30 flex items-center gap-2 sm:gap-3">
        <Link
          href="/try-origin"
          className="hidden md:block bg-white text-black text-xs lg:text-sm font-medium px-3 lg:px-4 py-2 lg:py-2.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
        >
          Try Origin
        </Link>

        <button
          className="md:hidden liquid-glass text-white p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ── Mobile Menu ────────────────────────────── */}
      {menuOpen && (
        <div className="absolute top-[52px] sm:top-[68px] left-3 right-3 sm:left-4 sm:right-4 z-40 md:hidden">
          <div className="liquid-glass rounded-2xl p-3 sm:p-4">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  item={link}
                  isActive={pathname === link.href}
                  className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm transition-colors"
                  onClick={() => setMenuOpen(false)}
                />
              ))}

              <div className="flex gap-2 mt-1.5 sm:mt-2 pt-2.5 sm:pt-3 border-t border-white/10">
                <Link
                  href="/try-origin"
                  className="flex-1 text-center bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Try Origin
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
