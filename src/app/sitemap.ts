import { MetadataRoute } from "next";
import { metiers, categories } from "@/data/metiers";
import { villes } from "@/data/villes";
import { articles } from "@/data/articles";
import { isIndexableLocationPage } from "@/data/seo";

const BASE_URL = "https://sos-pro.fr";
const REVIEW_DATE = new Date("2026-07-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: BASE_URL,
    lastModified: REVIEW_DATE,
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

  // Metier x Ville pages
  for (const m of metiers) {
    for (const v of villes) {
      if (!isIndexableLocationPage(m, v)) continue;
      entries.push({
        url: `${BASE_URL}/${m.slug}/${v.slug}`,
        lastModified: REVIEW_DATE,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Blog index
  entries.push({
    url: `${BASE_URL}/blog`,
    lastModified: REVIEW_DATE,
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

  for (const path of [
    "/methode-editoriale",
    "/mentions-legales",
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
