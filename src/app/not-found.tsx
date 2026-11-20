"use client";

import "./not-found.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackgroundVideo from "./components/BackgroundVideo";
import { NOT_FOUND_VIDEOS } from "./lib/constants";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-[100svh] w-full bg-black overflow-x-hidden">
      {/* ── Background Video ─────────────────── */}
      <BackgroundVideo
        videos={NOT_FOUND_VIDEOS}
        alwaysLoop
        position="absolute"
      />

      {/* ── Logo ─────────────────────────────── */}
      <div className="absolute top-2 sm:top-3 md:top-5 -left-4 sm:-left-1 md:left-0 z-[2] overflow-hidden h-10 sm:h-14 md:h-20 flex items-center">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Origin AI.png"
            alt="Origin AI"
            width="600"
            height="400"
            className="h-28 sm:h-36 md:h-48 w-auto -my-4 sm:-my-6 md:-my-8"
          />
        </Link>
      </div>

      {/* ── Centered 404 Content ──────────────── */}
      <div className="nf-content">
        {/* 404 Heading */}
        <h1 className="nf-heading">404</h1>

        {/* Divider */}
        <div className="nf-divider" />

        {/* Message */}
        <p className="nf-message">
          The path may be broken, but the journey isn&apos;t. Let&apos;s get you back.
        </p>

        {/* Buttons */}
        <div className="nf-buttons">
          <Link href="/" className="nf-btn">
            Home
          </Link>
          <button onClick={() => router.back()} className="nf-btn nf-btn-outline">
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
