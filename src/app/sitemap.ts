import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sortpi.com";
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    "",
    "/contact",
    "/blog",
    "/signup",
    "/privacy",
    "/terms",
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
