import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { makeBreadcrumbJsonLd } from "../../lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Origin AI selected for Sarvam AI Startup Program",
  description:
    "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to India's sovereign AI infrastructure, API credits, and priority engineering support to accelerate frontier AI development.",
  openGraph: {
    title: "Origin AI selected for Sarvam AI Startup Program",
    description:
      "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to India's sovereign AI infrastructure and priority engineering support.",
    url: "https://www.originai.in/news/sarvam-startup-program",
    type: "article",
    publishedTime: "2026-08-30T00:00:00Z",
    modifiedTime: "2026-08-30T00:00:00Z",
    authors: ["Origin AI"],
    images: [
      {
        url: "/Origin_AI_x_Sarvam.png",
        width: 1456,
        height: 816,
        alt: "Origin AI x Sarvam AI partnership",
      },
    ],
  },
  twitter: {
    title: "Origin AI selected for Sarvam AI Startup Program",
    description:
      "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to India's sovereign AI infrastructure and priority engineering support.",
    images: ["/Origin_AI_x_Sarvam.png"],
  },
  alternates: {
    canonical: "https://www.originai.in/news/sarvam-startup-program",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Origin AI selected for Sarvam AI Startup Program",
  description:
    "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to India's sovereign AI infrastructure, API credits, and priority engineering support.",
  datePublished: "2026-08-30T00:00:00Z",
  dateModified: "2026-08-30T00:00:00Z",
  image: {
    "@type": "ImageObject",
    url: "https://www.originai.in/Origin_AI_x_Sarvam.png",
    width: 1456,
    height: 816,
  },
  author: {
    "@type": "Organization",
    name: "Origin AI",
    url: "https://www.originai.in",
    "@id": "https://www.originai.in/#organization",
  },
  publisher: {
    "@type": "Organization",
    name: "Origin AI",
    url: "https://www.originai.in",
    "@id": "https://www.originai.in/#organization",
    logo: {
      "@type": "ImageObject",
      url: "https://www.originai.in/og-image.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.originai.in/news/sarvam-startup-program",
  },
  keywords: [
    "Origin AI",
    "Sarvam AI",
    "Sarvam Startup Program",
    "Indian AI startup",
    "sovereign AI India",
  ],
};

const breadcrumbJsonLd = makeBreadcrumbJsonLd([
  { name: "News", path: "/news" },
  { name: "Sarvam AI Startup Program", path: "/news/sarvam-startup-program" },
]);

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
