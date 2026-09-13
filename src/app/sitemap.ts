import type { MetadataRoute } from "next";

import { expeditions } from "@/data/expeditions";
import { getOperationalDepartures } from "@/data/operations";

const siteUrl = "https://boreal-route.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/expeditions`, changeFrequency: "monthly", priority: 0.9 },
    ...expeditions.map(({ slug }) => ({
      url: `${siteUrl}/expeditions/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${siteUrl}/operations`, changeFrequency: "monthly", priority: 0.6 },
    ...getOperationalDepartures().map(({ departure }) => ({
      url: `${siteUrl}/operations/departures/${departure.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
