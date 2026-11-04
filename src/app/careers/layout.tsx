import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { makeBreadcrumbJsonLd } from "../lib/breadcrumbs";

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

const breadcrumbJsonLd = makeBreadcrumbJsonLd([
  { name: "Careers", path: "/careers" },
]);

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
