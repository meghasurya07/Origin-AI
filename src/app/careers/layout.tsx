import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Origin AI",
  description:
    "Join Origin AI and help build the future of artificial general intelligence. Explore open roles and opportunities.",
  openGraph: {
    title: "Careers — Origin AI",
    description:
      "Join Origin AI and help build the future of artificial general intelligence.",
    url: "https://www.originai.in/careers",
  },
  twitter: {
    title: "Careers — Origin AI",
    description:
      "Join Origin AI and help build the future of artificial general intelligence.",
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
