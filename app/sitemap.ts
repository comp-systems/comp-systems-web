import type { MetadataRoute } from "next";
import { getEntries } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.compsystems.net",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.compsystems.net/service",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.compsystems.net/journal",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getEntries().map((e) => ({
      url: `https://www.compsystems.net/journal/${e.slug}`,
      lastModified: new Date(e.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: "https://www.compsystems.net/careers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.compsystems.net/company",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
