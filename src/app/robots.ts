import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: "https://sos-pro.fr/sitemap.xml",
    host: "https://sos-pro.fr",
  };
}
