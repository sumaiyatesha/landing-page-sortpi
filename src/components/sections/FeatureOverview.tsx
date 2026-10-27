"use client";

import React, { useState } from "react";
import { coreFeatureModules, FeatureModule } from "@/content/features";

export default function FeatureOverview() {
  const [showAllModules, setShowAllModules] = useState(false);

  const largeModules = coreFeatureModules.filter((m) => m.isLarge);
  const standardModules = coreFeatureModules.filter((m) => !m.isLarge);
  
  // Show first 4 standard modules initially, disclose the rest on demand
  const visibleStandard = showAllModules
    ? standardModules
    : standardModules.slice(0, 4);

  return (
    <section
      id="features"
      className="py-20 lg:py-28 bg-[#F6F8FC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Complete Feature Set
          </div>
          <h2 className="heading-section">
            Everything your shop needs to stay organised.
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Ten core modules designed around daily retail operations. Each module delivers a concrete business outcome without unnecessary complexity.
          </p>
        </div>

        {/* 2 Primary Lead Cards: Sales & Billing and Inventory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {largeModules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full">
                    Core Module
                  </span>
                  <span className="text-xs font-medium text-[#065F46] bg-[#E6FAF5] px-2 py-0.5 rounded-md">
                    {module.uiDetail.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
                  {module.name}
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                  {module.summary}
                </p>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
                  <strong className="text-xs uppercase tracking-wider font-semibold text-[#0F172A] block mb-1">
                    Operational Outcome:
                  </strong>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    {module.concreteOutcome}
                  </p>
                </div>
              </div>

              {/* Miniature UI Detail */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between text-xs font-semibold text-[#64748B] pb-2 border-b border-slate-100 mb-2.5">
                  <span>{module.uiDetail.label}</span>
                  <span className="text-[11px] text-[#2563EB]">Verified UI</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#0F172A]">
                  {module.uiDetail.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E] shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 8 Compact Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8">
          {visibleStandard.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:bg-[#FAFBFD] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {module.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#065F46] bg-[#E6FAF5] px-2 py-0.5 rounded-full">
                    {module.uiDetail.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] mb-3 leading-relaxed">
                  {module.summary}
                </p>

                <div className="text-xs text-[#0F172A] bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0] mb-3">
                  <span className="font-semibold text-[#2563EB]">Outcome: </span>
                  {module.concreteOutcome}
                </div>
              </div>

              {/* Miniature details list */}
              <div className="pt-2 border-t border-[#F1F5F9]">
                <ul className="space-y-1 text-xs text-[#64748B]">
                  {module.uiDetail.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible See All Features Disclosure */}
        <div className="text-center pt-2">
          <button
            type="button"
            aria-expanded={showAllModules}
            onClick={() => setShowAllModules(!showAllModules)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm font-semibold text-[#0F172A] hover:bg-slate-50 transition-colors shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2563EB]"
          >
            <span>
              {showAllModules
                ? "Collapse extra modules"
                : `See all 10 core modules (${standardModules.length - 4} more)`}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                showAllModules ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
