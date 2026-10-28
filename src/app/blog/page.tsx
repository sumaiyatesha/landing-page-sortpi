import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Blog & Updates | SortPi",
  description:
    "Business insights, POS best practices, and retail management advice for shop owners in Bangladesh.",
};

import { blogPosts } from "@/content/blogPosts";

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 py-14 max-w-4xl mx-auto px-5 w-full">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#2563EB]">
            SortPi Insights
          </span>
          <h1 className="heading-section mt-1">Retail & POS Knowledge Hub</h1>
          <p className="body-large text-[#475569] mt-2">
            Practical articles on inventory management, reducing dues, and streamlining store checkout in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-3">
                  <span className="font-semibold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-base font-bold text-[#0F172A] leading-snug mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#2563EB] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                <span className="text-[#64748B]">{post.publishedAt}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-[#2563EB] hover:underline"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-3">
          <h3 className="text-base font-bold text-[#0F172A]">
            Have questions about applying these workflows to your shop?
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto">
            Our team assists grocery, retail, restaurant, and multi-branch owners across Bangladesh with walkthroughs and configuration advice.
          </p>
          <div className="pt-2">
            <Link href="/#demo" className="btn-primary text-xs py-2 px-5">
              <span>Request Free Demo</span>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
