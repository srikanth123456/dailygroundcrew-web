import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dailygroundcrew.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hire-construction-workers`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/construction-equipment-rental`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/buy-construction-materials`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/construction-estimator`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/buy-rent-sell-property`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/construction-contracts`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/delete-account`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
