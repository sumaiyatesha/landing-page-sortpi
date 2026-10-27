"use client";

import React, { useState } from "react";
import Link from "next/link";
import { industryOptions, IndustryOption } from "@/content/industries";

export default function IndustrySelector() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryOption>(
    industryOptions[0]
  );

  return (
    <section
      id="solutions"
      className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6FAF5] text-[#065F46] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]" />
            Industry Workflows
          </div>
          <h2 className="heading-section">
            Built around the way your business sells.
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Whether you operate a fast-paced grocery counter, manage fashion retail dues, or oversee multiple outlets, SortPi shapes around your daily routine.
          </p>
        </div>

        {/* 6 Industry Selector Buttons (Visible selection not dependent on color alone) */}
        <div
          role="tablist"
          aria-label="Supported Business Types in Bangladesh"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {industryOptions.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                role="tab"
                id={`ind-tab-${ind.id}`}
                aria-selected={isSelected}
                aria-controls={`ind-panel-${ind.id}`}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[96px] ${
                  isSelected
                    ? "bg-[#F8FAFC] border-[#2563EB] shadow-xs ring-2 ring-[#2563EB]/15"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]/50 text-[#475569]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-[#2563EB]" : "bg-slate-300"
                    }`}
                    aria-hidden="true"
                  />
                  {isSelected && (
                    <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">
                      Active
                    </span>
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A] leading-tight">
                    {ind.name}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                    {ind.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card with Accessible Live Region */}
        <div
          id={`ind-panel-${selectedIndustry.id}`}
          role="tabpanel"
          aria-labelledby={`ind-tab-${selectedIndustry.id}`}
          aria-live="polite"
          className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 lg:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Use Case & 3 Confirmed Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">
                <span>Selected Sector</span>
                <span>•</span>
                <span>{selectedIndustry.name}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                {selectedIndustry.tagline}
              </h3>
              <p className="body-base text-[#475569] mt-2">
                {selectedIndustry.useCase}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                Key Capabilities for this Business:
              </span>
              <ul className="space-y-2.5">
                {selectedIndustry.capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-[#0F172A] font-medium"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#E6FAF5] text-[#065F46] flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#0AC79E]"
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
                    </div>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`/#demo?industry=${encodeURIComponent(
                  selectedIndustry.name
                )}`}
                className="btn-primary text-sm min-h-[44px]"
              >
                <span>Request {selectedIndustry.name} Demo</span>
              </a>

              <a
                href="#features"
                className="text-xs font-semibold text-[#2563EB] hover:underline"
              >
                Explore all core features →
              </a>
            </div>
          </div>

          {/* Right: Focused Sample Screen Preview */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
              <span className="text-xs font-semibold text-[#64748B]">
                {selectedIndustry.screenDetail.title}
              </span>
              <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Sample UI
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedIndustry.screenDetail.metrics.map((m, i) => (
                <div key={i} className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                  <div className="text-[11px] text-[#64748B]">{m.label}</div>
                  <div className="text-sm font-bold text-[#0F172A] mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-[#1E3A8A] leading-relaxed">
              <strong>Operational Focus:</strong> {selectedIndustry.screenDetail.highlight}
            </div>

            <div className="text-[11px] text-[#64748B] text-center">
              Tailored workflow demonstration • No unconfirmed third-party integrations
            </div>
          </div>
        </div>

        {/* Module Link to Focus #features */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#475569]">
            Looking for complete inventory management, dues tracking, or multi-branch features?{" "}
            <a
              href="#features"
              className="text-[#2563EB] font-semibold hover:underline"
            >
              See all 10 core SortPi modules in detail ↓
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
