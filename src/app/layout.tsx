import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Origin AI",
    template: "%s",
  },
  description:
    "AI research and products that advance intelligence at the frontier. Origin AI is dedicated to developing the next generation of intelligent systems while ensuring their benefits are widely accessible.",
  metadataBase: new URL("https://www.originai.in"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Origin AI",
    description:
      "AI research and products that advance intelligence at the frontier.",
    url: "https://www.originai.in",
    siteName: "Origin AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Origin AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origin AI",
    description:
      "AI research and products that advance intelligence at the frontier.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.originai.in",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
};

// Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Origin AI",
  url: "https://www.originai.in",
  logo: "https://www.originai.in/og-image.png",
  description:
    "AI research and products that advance intelligence at the frontier.",
  foundingDate: "2025",
  founders: [
    {
      "@type": "Person",
      name: "Megha Surya Bodepudi",
      jobTitle: "Co-Founder",
    },
    {
      "@type": "Person",
      name: "Mahesh Bodepudi",
      jobTitle: "Co-Founder",
    },
  ],
  sameAs: [
    "https://x.com",
    "https://linkedin.com",
    "https://instagram.com",
    "https://youtube.com",
    "https://discord.gg",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Origin AI",
  url: "https://www.originai.in",
};

// SiteNavigationElement — tells Google which pages matter for sitelinks
const navigationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      name: "About",
      url: "https://www.originai.in/about",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Careers",
      url: "https://www.originai.in/careers",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
