"use client";

import "./not-found.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-[100svh] w-full bg-black overflow-x-hidden">
      {/* ── Background Video ─────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_001207_ec20d138-aa45-4b2b-ab8c-bdc71607f240.mp4"
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
