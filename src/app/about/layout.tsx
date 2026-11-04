import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { makeBreadcrumbJsonLd } from "../lib/breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Origin AI — an Indian AI research lab founded in 2025 by Megha Surya Bodepudi and Mahesh Bodepudi. Building safe, general-purpose artificial intelligence from India to compete at the frontier.",
  openGraph: {
    title: "About Origin AI — Mission, Team & Vision",
    description:
      "Origin AI is an Indian AI research lab building safe, general-purpose artificial intelligence. Meet the founding team and learn about our mission.",
    url: "https://www.originai.in/about",
  },
  twitter: {
    title: "About Origin AI — Mission, Team & Vision",
    description:
      "Indian AI research lab building safe AGI. Meet the founding team and learn about our mission.",
  },
  alternates: {
    canonical: "https://www.originai.in/about",
  },
};

const breadcrumbJsonLd = makeBreadcrumbJsonLd([
  { name: "About", path: "/about" },
]);

// FAQ structured data for AEO (Answer Engine Optimization)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Origin AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Origin AI is an Indian AI research lab founded in 2025, building safe general-purpose intelligence and foundational AI models. Based in India, Origin AI is dedicated to advancing India's leadership in the global AI race while ensuring the benefits of AI are widely accessible.",
      },
    },
    {
      "@type": "Question",
      name: "Who founded Origin AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Origin AI was co-founded by Megha Surya Bodepudi and Mahesh Bodepudi in 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Origin AI based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Origin AI is based in India. The company is building sovereign AI infrastructure and foundational models to advance India's leadership in the global AI race.",
      },
    },
    {
      "@type": "Question",
      name: "What does Origin AI do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Origin AI focuses on foundational AI research spanning machine learning, natural language processing, and computer vision. The lab is building safe, general-purpose intelligence (AGI) and foundational AI models, with a strong emphasis on AI safety, alignment, and responsible development.",
      },
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
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      {children}
    </>
  );
}
