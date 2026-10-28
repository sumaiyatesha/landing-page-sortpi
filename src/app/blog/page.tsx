import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { blogPosts } from "@/content/blogPosts";

export const metadata: Metadata = {
  title: "Blog & Guides | SortPi",
  description:
    "Practical business insights, POS best practices, and retail management advice for shop and studio owners in Bangladesh.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 py-14 lg:py-20 max-w-[1240px] mx-auto px-5 lg:px-8 w-full">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            SortPi Insights
          </div>
          <h1 className="heading-section">
            Retail & Business Management Guides
          </h1>
          <p className="body-large text-[#475569] mt-3">
            Practical strategies for store and studio owners: streamline counter billing, track customer dues, and control inventory without friction.
          </p>
        </div>

        {/* 3-Column Card Grid Matching Reference Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col">
              {/* Rounded 16:10 Aspect Card Cover with Smooth Hover Zoom */}
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
              <h2 className="mt-5 text-xl font-bold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">
                <Link href={`/blog/${post.slug}`} className="line-clamp-2">
                  {post.title}
                </Link>
              </h2>

              {/* Subtle Two-Line Excerpt */}
              <p className="mt-2 text-sm text-[#64748B] leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-3">
          <h3 className="text-lg font-bold text-[#0F172A]">
            Have questions about applying these workflows to your business?
          </h3>
          <p className="text-sm text-[#475569] max-w-xl mx-auto">
            Our team assists grocery, retail, restaurant, studio, and multi-branch owners across Bangladesh with walkthroughs and configuration advice.
          </p>
          <div className="pt-2">
            <Link href="/#demo" className="btn-primary inline-flex text-sm py-2.5 px-6">
              <span>Request Free Demo</span>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
