import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export async function generateStaticParams() {
  return [
    { slug: "how-to-manage-pos-inventory" },
    { slug: "retail-dues-tracking-guide" },
    { slug: "super-shop-pos-setup" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, " ");
  return {
    title: `${formatted.charAt(0).toUpperCase() + formatted.slice(1)} | SortPi Blog`,
    description: "Retail business insights and software best practices from SortPi.",
  };
}

async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <article className="prose text-sm text-[#475569] leading-relaxed space-y-4">
      <h1 className="heading-section text-[#0F172A] mb-4">{formattedTitle}</h1>
      <div className="text-xs text-[#64748B] mb-8 pb-4 border-b border-[#E2E8F0]">
        Published by SortPi Editorial Team • GeekSSort
      </div>
      <p>
        This article is part of our ongoing retail insights series helping shop owners across Bangladesh simplify billing, maintain real-time inventory counts, and improve customer dues collections.
      </p>
      <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 mt-8">
        <h3 className="text-base font-bold text-[#0F172A] mb-1">
          Want to see SortPi in action for your store?
        </h3>
        <p className="text-xs text-[#475569] mb-4">
          Schedule a personalized 15-minute product walkthrough with our local team.
        </p>
        <a href="/#demo" className="btn-primary text-xs py-2 px-4">
          <span>Request Free Demo</span>
        </a>
      </div>
    </article>
  );
}

export default function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 py-14 max-w-3xl mx-auto px-5 w-full">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#64748B]">
            <li>
              <Link href="/" className="hover:text-[#2563EB]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[#2563EB]">
                Blog
              </Link>
            </li>
          </ol>
        </nav>

        <Suspense fallback={<div className="py-12 text-sm text-slate-400">Loading article...</div>}>
          <BlogPostContent params={props.params} />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
