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
    default: "Origin AI — Frontier AI Research Lab from India",
    template: "%s — Origin AI",
  },
  description:
    "Origin AI is an Indian AI research lab founded in 2025, building safe general-purpose intelligence and foundational AI models. Competing with the world's leading AI labs to advance India's leadership in the global AI race.",
  keywords: [
    "Origin AI",
    "Origin AI India",
    "originai.in",
    "AI research lab India",
    "artificial general intelligence",
    "frontier AI research",
    "Indian AI startup",
    "AGI research",
    "Origin AI research",
    "safe AI India",
  ],
  metadataBase: new URL("https://www.originai.in"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Origin AI — Frontier AI Research Lab from India",
    description:
      "Origin AI is an Indian AI research lab building safe general-purpose intelligence and foundational AI models to advance India's leadership in the global AI race.",
    url: "https://www.originai.in",
    siteName: "Origin AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Origin AI — Frontier AI Research Lab from India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origin AI — Frontier AI Research Lab from India",
    description:
      "Indian AI research lab building safe general-purpose intelligence and foundational AI models.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.originai.in",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

// ── Organization structured data (entity disambiguation) ──────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "@id": "https://www.originai.in/#organization",
  name: "Origin AI",
  alternateName: ["Origin AI India", "Origin AI Research", "originai.in"],
  legalName: "Origin AI",
  url: "https://www.originai.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.originai.in/og-image.png",
    width: 1200,
    height: 630,
  },
  image: "https://www.originai.in/og-image.png",
  description:
    "Origin AI is an Indian AI research lab founded in 2025, building safe general-purpose intelligence and foundational AI models to advance India's leadership in the global AI race.",
  foundingDate: "2025",
  foundingLocation: {
    "@type": "Place",
    name: "India",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Artificial General Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "AI Safety",
    "Foundation Models",
    "Large Language Models",
  ],
  knowsLanguage: ["en", "hi"],
  founders: [
    {
      "@type": "Person",
      "@id": "https://www.originai.in/#megha",
      name: "Megha Surya Bodepudi",
      jobTitle: "Co-Founder",
      url: "https://www.originai.in/about",
      sameAs: [
        "https://www.linkedin.com/in/megha-surya-bodepudi-2b292b316/",
      ],
      worksFor: {
        "@id": "https://www.originai.in/#organization",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.originai.in/#mahesh",
      name: "Mahesh Bodepudi",
      jobTitle: "Co-Founder",
      url: "https://www.originai.in/about",
      sameAs: ["https://www.linkedin.com/in/maheshbodepudi/"],
      worksFor: {
        "@id": "https://www.originai.in/#organization",
      },
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/originailabs/",
    "https://www.linkedin.com/in/megha-surya-bodepudi-2b292b316/",
    "https://www.linkedin.com/in/maheshbodepudi/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "megha@originai.in",
    contactType: "general",
  },
};

// ── WebSite schema (linked to Organization) ───────────────────────
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.originai.in/#website",
  name: "Origin AI",
  alternateName: "Origin AI India",
  url: "https://www.originai.in",
  publisher: {
    "@id": "https://www.originai.in/#organization",
  },
  inLanguage: "en",
};

// ── SiteNavigationElement — tells Google which pages matter ───────
const navigationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      name: "About Origin AI",
      url: "https://www.originai.in/about",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Origin AI Careers",
      url: "https://www.originai.in/careers",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Origin AI News",
      url: "https://www.originai.in/news",
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
