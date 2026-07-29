import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.originai.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
