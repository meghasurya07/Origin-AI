import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { makeBreadcrumbJsonLd } from "../lib/breadcrumbs";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest announcements, partnerships, research updates, and milestones from Origin AI — India's frontier AI research lab.",
  openGraph: {
    title: "Origin AI News — Announcements & Updates",
    description:
      "Latest announcements, partnerships, and milestones from Origin AI.",
    url: "https://www.originai.in/news",
  },
  twitter: {
    title: "Origin AI News — Announcements & Updates",
    description:
      "Latest announcements, partnerships, and milestones from Origin AI.",
  },
  alternates: {
    canonical: "https://www.originai.in/news",
  },
};

const breadcrumbJsonLd = makeBreadcrumbJsonLd([
  { name: "News", path: "/news" },
]);

export default function NewsLayout({
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
