import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newhasubeautycare.example.com";
  const routes = ["", "/about", "/services", "/booking", "/gallery", "/blog", "/contact", "/awards"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
