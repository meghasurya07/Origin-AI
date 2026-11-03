import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Origin AI — India's frontier AI research lab. We're building a world-class team of researchers, engineers, and builders to develop safe general-purpose intelligence.",
  openGraph: {
    title: "Careers at Origin AI — Join India's Frontier AI Lab",
    description:
      "Join Origin AI and help build the future of artificial general intelligence from India.",
    url: "https://www.originai.in/careers",
  },
  twitter: {
    title: "Careers at Origin AI — Join India's Frontier AI Lab",
    description:
      "Join Origin AI and help build the future of artificial general intelligence from India.",
  },
  alternates: {
    canonical: "https://www.originai.in/careers",
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
      name: "Careers",
      item: "https://www.originai.in/careers",
    },
  ],
};

export default function CareersLayout({
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
