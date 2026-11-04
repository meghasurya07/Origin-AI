/**
 * Schema.org structured data objects for the root layout.
 * Extracted from layout.tsx to keep the layout component lean.
 */

const BASE_URL = "https://www.originai.in";

/** Organization entity (with ResearchOrganization subtype). */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  additionalType: "https://schema.org/ResearchOrganization",
  "@id": `${BASE_URL}/#organization`,
  name: "Origin AI",
  alternateName: [
    "Origin AI India",
    "Origin AI Research",
    "Origin AI Research Lab",
    "originai.in",
  ],
  legalName: "Origin AI",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  image: `${BASE_URL}/og-image.png`,
  description:
    "Origin AI is an Indian AI research lab founded in 2025 by Megha Surya Bodepudi and Mahesh Bodepudi. Building safe general-purpose intelligence and foundational AI models from India, competing with the world's leading AI labs to advance India's leadership in the global AI race.",
  foundingDate: "2025",
  foundingLocation: {
    "@type": "Place",
    name: "India",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Artificial General Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "AI Safety",
    "Foundation Models",
    "Large Language Models",
  ],
  knowsLanguage: ["en", "hi"],
  founders: [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#megha`,
      name: "Megha Surya Bodepudi",
      jobTitle: "Co-Founder",
      url: `${BASE_URL}/about`,
      sameAs: [
        "https://www.linkedin.com/in/megha-surya-bodepudi-2b292b316/",
      ],
      worksFor: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#mahesh`,
      name: "Mahesh Bodepudi",
      jobTitle: "Co-Founder",
      url: `${BASE_URL}/about`,
      sameAs: ["https://www.linkedin.com/in/maheshbodepudi/"],
      worksFor: { "@id": `${BASE_URL}/#organization` },
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/originailabs/",
    "https://www.linkedin.com/in/megha-surya-bodepudi-2b292b316/",
    "https://www.linkedin.com/in/maheshbodepudi/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "megha@originai.in",
    contactType: "general",
  },
};

/** WebSite schema linked to the Organization. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Origin AI",
  alternateName: ["Origin AI India", "originai.in"],
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.google.com/search?q=site%3Aoriginai.in+{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

/** SiteNavigationElement graph for primary nav links. */
export const navigationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      name: "About Origin AI",
      url: `${BASE_URL}/about`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Origin AI Careers",
      url: `${BASE_URL}/careers`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Origin AI News",
      url: `${BASE_URL}/news`,
    },
  ],
};
