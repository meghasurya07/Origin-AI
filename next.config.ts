import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/news/grad-capital-feather-grant",
        destination: "/news",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
