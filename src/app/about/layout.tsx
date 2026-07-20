import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Origin AI",
  description:
    "Learn about Origin AI's mission to build safe, general-purpose artificial intelligence from India, and meet the founding team.",
  openGraph: {
    title: "About — Origin AI",
    description:
      "Learn about Origin AI's mission to build safe, general-purpose artificial intelligence from India.",
    url: "https://originai.in/about",
  },
  twitter: {
    title: "About — Origin AI",
    description:
      "Learn about Origin AI's mission to build safe, general-purpose artificial intelligence from India.",
  },
  alternates: {
    canonical: "https://originai.in/about",
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
      name: "About",
      item: "https://originai.in/about",
    },
  ],
};

export default function AboutLayout({
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
