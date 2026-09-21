import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*{search_term_string}*"],
      },
    ],
    sitemap: "https://www.originai.in/sitemap.xml",
  };
}
