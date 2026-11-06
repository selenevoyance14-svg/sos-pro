import { MetadataRoute } from "next";
import { metiers, categories } from "@/data/metiers";
import { articles } from "@/data/articles";

const BASE_URL = "https://sos-pro.fr";
const REVIEW_DATE = new Date("2026-10-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: BASE_URL,
    lastModified: new Date("2026-11-06"),
    changeFrequency: "weekly",
    priority: 1,
  });

  // Categories
  for (const cat of categories) {
    entries.push({
      url: `${BASE_URL}/categorie/${cat.slug}`,
      lastModified: REVIEW_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Metier pages
  for (const m of metiers) {
    entries.push({
      url: `${BASE_URL}/${m.slug}`,
      lastModified: REVIEW_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Blog index
  entries.push({
    url: `${BASE_URL}/blog`,
    lastModified: new Date("2026-11-06"),
    changeFrequency: "weekly",
    priority: 0.7,
  });

  // Blog articles
  for (const a of articles) {
    entries.push({
      url: `${BASE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.updated || a.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const path of [
    "/methode-editoriale",
    "/mentions-legales",
    "/affiliation",
    "/confidentialite",
    "/contact",
  ]) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: REVIEW_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  return entries;
}
