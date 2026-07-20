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

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
