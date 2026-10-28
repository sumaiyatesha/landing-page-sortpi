import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blogPosts";

export default function BlogSection() {
  // Show top 3 featured guides on homepage matching reference image
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 lg:py-24 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Guides & Business Insights
            </div>
            <h2 className="heading-section">
              Practical Guides for Running a Smoother Shop
            </h2>
            <p className="body-large text-[#475569] mt-3">
              Actionable advice on counter billing, inventory management, staff productivity, and growing sales.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
            >
              <span>View all articles</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* 3-Column Card Grid Matching Reference Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col">
              {/* Rounded 16:10 Aspect Card Cover */}
              <Link
                href={`/blog/${post.slug}`}
                className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100"
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </Link>

              {/* Bold Headline */}
              <h3 className="mt-5 text-xl font-bold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">
                <Link href={`/blog/${post.slug}`} className="line-clamp-2">
                  {post.title}
                </Link>
              </h3>

              {/* Subtle Two-Line Excerpt */}
              <p className="mt-2 text-sm text-[#64748B] leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
