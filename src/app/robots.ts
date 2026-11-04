import type { MetadataRoute } from "next";

/** AI / LLM crawlers explicitly allowed for AIO/GEO. */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "PerplexityBot",
  "Applebot-Extended",
  "anthropic-ai",
  "Bytespider",
  "cohere-ai",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*{search_term_string}*"],
      },
      ...AI_CRAWLERS.map((bot) => ({
        userAgent: bot,
        allow: "/" as const,
      })),
    ],
    sitemap: "https://www.originai.in/sitemap.xml",
  };
}
