import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Deleted article ─────────────────────────────
      {
        source: "/news/grad-capital-feather-grant",
        destination: "/news",
        permanent: true,
      },
      // ── Coming-soon pages (redirect to relevant sections) ──
      {
        source: "/research",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/research/:path*",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/products",
        destination: "/",
        permanent: false,
      },
      {
        source: "/try-origin",
        destination: "/",
        permanent: false,
      },
      {
        source: "/publications",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/reports",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/benchmarks",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/safety",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/transparency",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/ethics",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/responsible-ai",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "/about",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
