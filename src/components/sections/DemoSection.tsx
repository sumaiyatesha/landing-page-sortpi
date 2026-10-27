"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DemoContactForm from "@/components/forms/DemoContactForm";

function DemoSectionInner() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || undefined;
  const initialIndustry = searchParams.get("industry") || undefined;

  return (
    <section
      id="demo"
      className="py-20 lg:py-28 bg-[#F6F8FC] border-b border-[#E2E8F0] relative overflow-hidden"
    >
      {/* Subtle Dot Pattern Backing inspired by Image 3 */}
      <div
        aria-hidden="true"
        className="dot-pattern absolute inset-0 opacity-40 pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Concise Explanation & Direct Trust Points */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Schedule a Walkthrough
            </div>

            <h2 className="heading-section">
              See how SortPi fits your shop.
            </h2>

            <p className="body-large text-[#475569]">
              Tell us a little about your business. Our team will help you explore the workflows that matter to you.
            </p>

            {/* Direct Value Cards */}
            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Focused 15-Minute Software Tour
                  </h3>
                  <p className="text-xs text-[#475569] mt-0.5">
                    We demo the exact screens relevant to your business type (grocery, retail, pharmacy, or multi-branch).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#0AC79E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Local Bengali-Speaking Team
                  </h3>
                  <p className="text-xs text-[#475569] mt-0.5">
                    Our team understands Dhaka retail, suburban shops, and daily operational challenges in Bangladesh.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#64748B]">
              Prefer to call right now? Reach us directly at{" "}
              <a href="tel:+8801341869125" className="font-semibold text-[#0F172A] hover:text-[#2563EB]">
                +88 01341869125
              </a>
            </div>
          </div>

          {/* Right Column: Form with Spacing Discipline of Image 2 */}
          <div className="lg:col-span-7">
            {/* Small Descriptor above form (Image 2 discipline) */}
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2 px-1">
              Point of Sale and Business Management
            </div>

            <DemoContactForm
              intent="demo"
              initialPlan={initialPlan}
              initialIndustry={initialIndustry}
              submitLabel="Request Free Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DemoSection() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-slate-400">Loading demo section...</div>}>
      <DemoSectionInner />
    </Suspense>
  );
}
