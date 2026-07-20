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
  title: "Origin AI",
  description:
    "AI research and products that advance intelligence at the frontier. Origin AI is dedicated to developing the next generation of intelligent systems while ensuring their benefits are widely accessible.",
  metadataBase: new URL("https://originai.in"),
  openGraph: {
    title: "Origin AI",
    description:
      "AI research and products that advance intelligence at the frontier.",
    url: "https://originai.in",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
