import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Origin AI",
  description:
    "Latest announcements, research updates, and milestones from Origin AI.",
  openGraph: {
    title: "News — Origin AI",
    description:
      "Latest announcements, research updates, and milestones from Origin AI.",
    url: "https://www.originai.in/news",
  },
  twitter: {
    title: "News — Origin AI",
    description:
      "Latest announcements, research updates, and milestones from Origin AI.",
  },
  alternates: {
    canonical: "https://www.originai.in/news",
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
  ],
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
