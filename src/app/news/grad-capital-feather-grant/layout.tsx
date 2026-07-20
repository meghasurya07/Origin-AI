import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Origin AI receives $3,000 Feather Grant from Grad Capital — Origin AI",
  description:
    "Origin AI has been awarded the Feather Grant by Grad Capital — a $3,000 non-dilutive grant to support ambitious startups building at the frontier of technology.",
  openGraph: {
    title:
      "Origin AI receives $3,000 Feather Grant from Grad Capital",
    description:
      "Origin AI has been awarded the Feather Grant by Grad Capital — a $3,000 non-dilutive grant to support ambitious startups building at the frontier of technology.",
    url: "https://originai.in/news/grad-capital-feather-grant",
    type: "article",
    publishedTime: "2026-07-01T00:00:00Z",
    authors: ["Origin AI"],
  },
  twitter: {
    title:
      "Origin AI receives $3,000 Feather Grant from Grad Capital",
    description:
      "Origin AI has been awarded the Feather Grant by Grad Capital — a $3,000 non-dilutive grant to support ambitious startups building at the frontier of technology.",
  },
  alternates: {
    canonical:
      "https://originai.in/news/grad-capital-feather-grant",
  },
};

// JSON-LD structured data for the article
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Origin AI receives $3,000 Feather Grant from Grad Capital",
  datePublished: "2026-07-01T00:00:00Z",
  author: {
    "@type": "Organization",
    name: "Origin AI",
    url: "https://originai.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Origin AI",
    url: "https://originai.in",
    logo: {
      "@type": "ImageObject",
      url: "https://originai.in/og-image.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://originai.in/news/grad-capital-feather-grant",
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
      item: "https://originai.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "News",
      item: "https://originai.in/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Feather Grant from Grad Capital",
      item: "https://originai.in/news/grad-capital-feather-grant",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
