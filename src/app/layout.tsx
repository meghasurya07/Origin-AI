import type { Metadata } from "next";
import { Geist } from "next/font/google";
import JsonLd from "./components/JsonLd";
import {
  organizationJsonLd,
  websiteJsonLd,
  navigationJsonLd,
} from "./lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Origin AI - Frontier AI Research Lab from India",
    template: "%s — Origin AI",
  },
  description:
    "Origin AI is an Indian AI research lab founded in 2025 by Megha Surya Bodepudi and Mahesh Bodepudi. Building safe general-purpose intelligence and foundational AI models from India, competing with OpenAI and Anthropic. Visit originai.in.",
  keywords: [
    "Origin AI",
    "Origin AI India",
    "originai.in",
    "Origin AI research lab",
    "AI research lab India",
    "artificial general intelligence",
    "frontier AI research",
    "Indian AI startup",
    "AGI research India",
    "Origin AI research",
    "safe AI India",
    "Megha Surya Bodepudi",
    "Mahesh Bodepudi",
    "Origin AI founders",
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
    title: "Origin AI - Frontier AI Research Lab from India | originai.in",
    description:
      "Origin AI is an Indian AI research lab founded in 2025, building safe general-purpose intelligence and foundational AI models. Competing with OpenAI and Anthropic to advance India's leadership in the global AI race.",
    url: "https://www.originai.in",
    siteName: "Origin AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Origin AI - Frontier AI Research Lab from India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origin AI - Frontier AI Research Lab from India",
    description:
      "Indian AI research lab building safe general-purpose intelligence and foundational AI models. Founded 2025.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.originai.in",
    languages: {
      "en-IN": "https://www.originai.in",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="alternate" hrefLang="en-IN" href="https://www.originai.in" />
      </head>
      <body className="bg-black">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={navigationJsonLd} />
        {children}
      </body>
    </html>
  );
}
