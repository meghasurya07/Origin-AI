import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Origin AI",
  description:
    "Join Origin AI and help build the future of artificial general intelligence. Explore open roles and opportunities.",
  openGraph: {
    title: "Careers — Origin AI",
    description:
      "Join Origin AI and help build the future of artificial general intelligence.",
    url: "https://originai.in/careers",
  },
  twitter: {
    title: "Careers — Origin AI",
    description:
      "Join Origin AI and help build the future of artificial general intelligence.",
  },
  alternates: {
    canonical: "https://originai.in/careers",
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
      name: "Careers",
      item: "https://originai.in/careers",
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
