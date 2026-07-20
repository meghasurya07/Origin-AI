import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Origin AI",
  description:
    "Latest announcements, research updates, and milestones from Origin AI.",
  openGraph: {
    title: "News — Origin AI",
    description:
      "Latest announcements, research updates, and milestones from Origin AI.",
    url: "https://originai.in/news",
  },
  twitter: {
    title: "News — Origin AI",
    description:
      "Latest announcements, research updates, and milestones from Origin AI.",
  },
  alternates: {
    canonical: "https://originai.in/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
