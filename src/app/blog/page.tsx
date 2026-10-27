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

        <div className="p-8 rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-base font-bold text-[#0F172A]">
            Articles are being curated by our editorial team
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto">
            New retail guides and operational case studies will appear here. In the meantime, explore how SortPi works or request a free demo for your store.
          </p>
          <div className="pt-2">
            <a href="/#demo" className="btn-primary text-xs py-2 px-4">
              <span>Request Free Demo</span>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
