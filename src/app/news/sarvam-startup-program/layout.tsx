import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Origin AI selected for Sarvam AI Startup Program — Origin AI",
  description:
    "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to India's sovereign AI infrastructure, API credits, and priority engineering support to accelerate frontier AI development.",
  openGraph: {
    title:
      "Origin AI selected for Sarvam AI Startup Program",
    description:
      "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to India's sovereign AI infrastructure and priority engineering support.",
    url: "https://www.originai.in/news/sarvam-startup-program",
    type: "article",
    publishedTime: "2026-08-30T00:00:00Z",
    authors: ["Origin AI"],
    images: [
      {
        url: "/Origin_AI_x_Sarvam.png",
        width: 1456,
        height: 816,
        alt: "Origin AI x Sarvam AI",
      },
    ],
  },
  twitter: {
    title:
      "Origin AI selected for Sarvam AI Startup Program",
    description:
      "Origin AI has been selected for the Sarvam AI Startup Program, gaining access to India's sovereign AI infrastructure and priority engineering support.",
    images: ["/Origin_AI_x_Sarvam.png"],
  },
  alternates: {
    canonical:
      "https://www.originai.in/news/sarvam-startup-program",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Origin AI selected for Sarvam AI Startup Program",
  datePublished: "2026-08-30T00:00:00Z",
  author: {
    "@type": "Organization",
    name: "Origin AI",
    url: "https://www.originai.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Origin AI",
    url: "https://www.originai.in",
    logo: {
      "@type": "ImageObject",
      url: "https://www.originai.in/og-image.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.originai.in/news/sarvam-startup-program",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.originai.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "News",
      item: "https://www.originai.in/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sarvam AI Startup Program",
      item: "https://www.originai.in/news/sarvam-startup-program",
    },
  ],
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
