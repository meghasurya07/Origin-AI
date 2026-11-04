"use client";

import Navbar from "./Navbar";
import FooterWrapper from "./FooterWrapper";
import BackgroundVideo from "./BackgroundVideo";

interface PageShellProps {
  children: React.ReactNode;
}

/**
 * Standard page shell used by inner pages (about, careers, news, articles).
 * Provides background video with dark overlay, navbar, and footer in a
 * consistent layout — keeping each page focused on its unique content.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      <BackgroundVideo />
      <div className="fixed inset-0 bg-black/70 z-[1]" />
      <Navbar />
      {children}
      <FooterWrapper />
    </main>
  );
}
