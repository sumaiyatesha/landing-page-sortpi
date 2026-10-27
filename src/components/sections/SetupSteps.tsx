"use client";

import React from "react";
import Link from "next/link";

export default function SetupSteps() {
  const steps = [
    {
      step: "01",
      title: "Set up your business",
      desc: "Add your store name, outlet address, currency, and receipt header details in minutes.",
    },
    {
      step: "02",
      title: "Add products & inventory",
      desc: "Organize items by category, input barcode numbers, unit prices, and initial stock quantities.",
    },
    {
      step: "03",
      title: "Configure access & roles",
      desc: "Assign cashiers to billing registers while keeping financial reports and expenses private to owners.",
    },
    {
      step: "04",
      title: "Start selling & tracking",
      desc: "Scan barcodes or tap products, collect cash or mobile wallet payments, and print customer slips.",
    },
    {
      step: "05",
      title: "Review reports & improve",
      desc: "Inspect daily sales, verified cash in drawer, customer dues, and low stock warnings at closing.",
    },
  ];

  const outcomes = [
    {
      label: "Zero Lost Paper Registers",
      detail: "Every sale, customer due, and return stays permanently logged and searchable.",
    },
    {
      label: "Reconciled Evening Cash",
      detail: "Compare cash in the drawer against recorded receipts with zero guesswork.",
    },
    {
      label: "Same-Day Branch Visibility",
      detail: "Check outlet performance and stock transfers from any web-connected screen.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6FAF5] text-[#065F46] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]" />
            Practical Onboarding
          </div>
          <h2 className="heading-section">
            Start with your daily workflow, then bring the rest of your operation together.
          </h2>
          <p className="body-large text-[#475569] mt-3">
            You don't need days of complex training. SortPi is structured so your counter can start billing right away, adding inventory and reporting modules at your own pace.
          </p>
        </div>

        {/* 5 Sequential Steps: Horizontal on Desktop, Numbered Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-14">
          {/* Subtle connecting line across desktop headers */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-7 left-8 right-8 h-0.5 bg-[#E2E8F0] -z-0"
          />

          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 relative z-10 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#2563EB] text-[#2563EB] font-bold font-mono text-sm flex items-center justify-center mb-4 shadow-xs">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] text-[#64748B]">
                Step {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>

        {/* Setup Help Banner */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
              Guided Implementation
            </span>
            <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
              Need help organizing your products or configuring branch registers?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Our team assists Bangladeshi shop owners with setup advice, workflow configuration, and demo walkthroughs.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-xl bg-white text-sm font-semibold text-[#0F172A] border border-[#CBD5E1] hover:bg-slate-50 transition-colors shrink-0 shadow-xs"
          >
            Talk to onboarding team →
          </Link>
        </div>

        {/* Operational Outcomes Strip (Truthful replacement for unverified numeric counters) */}
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-4 text-center">
            Operational Results Bangladeshi Retailers Count On
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#E6FAF5] text-[#065F46] flex items-center justify-center mx-auto mb-3">
                  <svg className="w-4 h-4 text-[#0AC79E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
