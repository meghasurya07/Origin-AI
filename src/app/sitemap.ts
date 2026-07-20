import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://originai.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news/grad-capital-feather-grant`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
