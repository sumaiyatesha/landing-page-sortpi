import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sortpi.com";
  const currentDate = new Date().toISOString();

  // Preserved static & dynamic paths
  const routes = [
    "",
    "/contact",
    "/blog",
    "/blog/how-to-manage-pos-inventory",
    "/blog/retail-dues-tracking-guide",
    "/blog/super-shop-pos-setup",
    "/signup",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
