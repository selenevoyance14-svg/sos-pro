import { MetadataRoute } from "next";
import { metiers, categories } from "@/data/metiers";
import { villes } from "@/data/villes";
import { articles } from "@/data/articles";

const BASE_URL = "https://sos-pro.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  });

  // Categories
  for (const cat of categories) {
    entries.push({
      url: `${BASE_URL}/categorie/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Metier pages
  for (const m of metiers) {
    entries.push({
      url: `${BASE_URL}/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Metier x Ville pages
  for (const m of metiers) {
    for (const v of villes) {
      entries.push({
        url: `${BASE_URL}/${m.slug}/${v.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Blog index
  entries.push({
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  });

  // Blog articles
  for (const a of articles) {
    entries.push({
      url: `${BASE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
