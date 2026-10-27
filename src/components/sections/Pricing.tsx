"use client";

import React, { useState } from "react";
import Link from "next/link";
import { pricingPlans, planComparison, PricingPlan } from "@/content/pricing";

export default function Pricing() {
  const [mobilePlanFilter, setMobilePlanFilter] = useState<
    "starter" | "standard" | "business"
  >("standard");
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Transparent Pricing
          </div>
          <h2 className="heading-section">
            Choose a plan for the way you run your business.
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Simple, honest monthly pricing in Bangladeshi Taka. No hidden setup fees or surprise charges.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F8FC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A]">
            <span>Monthly billing in BDT (৳)</span>
            <span>•</span>
            <span className="text-[#2563EB]">Free onboarding trial available</span>
          </div>
        </div>

        {/* 3 Aligned Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {pricingPlans.map((plan) => {
            const isStandard = plan.id === "standard";
            return (
              <div
                key={plan.id}
                className={`rounded-2xl border p-6 lg:p-8 flex flex-col justify-between transition-shadow relative ${
                  isStandard
                    ? "border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/20 bg-white"
                    : "border-[#E2E8F0] shadow-xs bg-[#FAFBFD]"
                }`}
              >
                {/* Most Recommended Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className={`pb-5 mb-5 border-b ${isStandard ? "border-blue-100" : "border-[#E2E8F0]"}`}>
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 min-h-[34px]">
                      {plan.headline}
                    </p>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl lg:text-4xl font-extrabold text-[#0F172A]">
                        ৳{plan.price.toLocaleString("en-BD")}
                      </span>
                      <span className="text-xs text-[#64748B] font-medium">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Plan Operational Limits */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-xs font-semibold p-2.5 rounded-lg bg-white border border-[#E2E8F0]">
                      <span className="text-[#64748B]">Branches</span>
                      <span className="text-[#0F172A]">{plan.branches}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold p-2.5 rounded-lg bg-white border border-[#E2E8F0]">
                      <span className="text-[#64748B]">Team Users</span>
                      <span className="text-[#0F172A]">{plan.users}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold p-2.5 rounded-lg bg-white border border-[#E2E8F0]">
                      <span className="text-[#64748B]">Product SKUs</span>
                      <span className="text-[#0F172A]">{plan.products}</span>
                    </div>
                  </div>

                  {/* Core Highlights */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-2">
                      Included Capabilities:
                    </span>
                    {plan.coreHighlights.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0F172A]">
                        <svg
                          className="w-4 h-4 text-[#0AC79E] shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions: Request Free Demo passes plan context */}
                <div className="space-y-2 pt-4 border-t border-[#F1F5F9]">
                  <a
                    href={`/#demo?plan=${plan.id}`}
                    className={`w-full ${
                      isStandard ? "btn-primary" : "btn-secondary"
                    } text-center text-sm`}
                  >
                    <span>Request Free Demo</span>
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>

                  {/* Preserved Direct Signup Link */}
                  <div className="text-center">
                    <Link
                      href={plan.signupUrl}
                      className="text-[11px] text-[#64748B] hover:text-[#2563EB] hover:underline"
                    >
                      Or start online account ({plan.name}) →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Plan Line: More than 10 branches */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <div>
            <h4 className="text-base font-bold text-[#0F172A]">
              Operating more than 10 retail branches?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
              We arrange custom high-capacity configurations, dedicated onboarding, and multi-outlet migration assistance.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-secondary text-sm shrink-0 min-h-[44px]"
          >
            <span>Contact Us for Custom Scale</span>
          </Link>
        </div>

        {/* Plan Comparison Table Section */}
        <div className="border border-[#E2E8F0] rounded-2xl p-6 lg:p-8 bg-white shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E2E8F0]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                Detailed Plan Feature Matrix
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                Side-by-side breakdown of limits and confirmed module entitlements.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{showComparison ? "Hide full comparison" : "Expand comparison table"}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${showComparison ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {showComparison && (
            <div>
              {/* Mobile Plan Selector for Responsive Comparison */}
              <div className="block lg:hidden mb-6">
                <span className="text-xs font-semibold text-[#64748B] block mb-2">
                  Select plan to inspect:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(["starter", "standard", "business"] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setMobilePlanFilter(p)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border capitalize ${
                        mobilePlanFilter === p
                          ? "bg-[#2563EB] text-white border-[#2563EB]"
                          : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Full Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-xs font-bold text-[#64748B] uppercase">
                      <th className="py-3 px-4">Feature / Metric</th>
                      <th className="py-3 px-4">Starter (৳999/mo)</th>
                      <th className="py-3 px-4 bg-blue-50/50 text-[#2563EB]">
                        Standard (৳2,999/mo)
                      </th>
                      <th className="py-3 px-4">Business (৳5,999/mo)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F5F9] text-xs sm:text-sm">
                    {planComparison.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="py-3 px-4 font-semibold text-[#0F172A]">
                          {row.feature}
                        </td>
                        <td className="py-3 px-4 text-[#475569]">
                          {row.starter}
                        </td>
                        <td className="py-3 px-4 bg-blue-50/30 font-medium text-[#0F172A]">
                          {row.standard}
                        </td>
                        <td className="py-3 px-4 text-[#475569]">
                          {row.business}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Responsive Plan View (No squished 3-column table) */}
              <div className="block lg:hidden divide-y divide-[#E2E8F0]">
                {planComparison.map((row, i) => (
                  <div key={i} className="py-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0F172A]">
                      {row.feature}
                    </span>
                    <span className="text-[#2563EB] font-bold">
                      {row[mobilePlanFilter]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
