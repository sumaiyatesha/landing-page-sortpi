"use client";

import React, { useState } from "react";
import Image from "next/image";
import { industryOptions, IndustryOption } from "@/content/industries";

export default function IndustrySolutions() {
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
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6FAF5] text-[#065F46] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]" />
            POS solutions for your business
          </div>
          <h2 className="heading-section">
            POS Software for Shops and Growing Businesses in Bangladesh
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Explore how SortPi brings billing, inventory, customer dues and
            business reports together for your daily operations.
          </p>
        </div>

        {/* 6 Illustrated Cards: Balanced 3-column desktop grid, 2-column tablet, 1-column mobile */}
        <div
          role="tablist"
          aria-label="SortPi Industry Solutions in Bangladesh"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {industryOptions.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <div
                key={ind.id}
                className={`group rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isSelected
                    ? "bg-[#F8FAFC] border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/15"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-sm"
                }`}
              >
                <div>
                  {/* Matching 3D Industry Illustration (640x640 Master) */}
                  <div className="w-full h-44 sm:h-48 mb-5 flex items-center justify-center rounded-xl bg-slate-50/70 p-4 transition-transform duration-200 group-hover:scale-[1.02]">
                    <Image
                      src={ind.illustration}
                      alt="" // Decorative: adjacent H3 communicates meaning
                      width={180}
                      height={180}
                      className="max-h-full w-auto object-contain drop-shadow-sm"
                    />
                  </div>

                  {/* Descriptive H3 */}
                  <h3 className="text-xl font-bold text-[#0F172A] leading-snug">
                    {ind.name}
                  </h3>

                  {/* Short Benefit Paragraph */}
                  <p className="text-sm text-[#475569] mt-2.5 leading-relaxed">
                    {ind.benefitParagraph}
                  </p>
                </div>

                {/* Accessible "Explore this solution" Control */}
                <div className="pt-6 mt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <button
                    role="tab"
                    id={`ind-tab-${ind.id}`}
                    aria-selected={isSelected}
                    aria-controls={`ind-panel-${ind.id}`}
                    onClick={() => {
                      setSelectedIndustry(ind);
                      // Smooth scroll down to detail panel if needed on small screens
                      const panel = document.getElementById("industry-detail-panel");
                      if (panel && window.innerWidth < 768) {
                        panel.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className={`inline-flex items-center gap-2 text-sm font-semibold rounded-lg py-2 px-3 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isSelected
                        ? "text-[#2563EB] bg-blue-50 font-bold"
                        : "text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50"
                    }`}
                  >
                    <span>{isSelected ? "Active workflow view" : "Explore this solution"}</span>
                    <svg
                      aria-hidden="true"
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? "translate-x-0.5 text-[#2563EB]" : "text-slate-400 group-hover:text-[#2563EB]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {isSelected && (
                    <span className="text-[11px] font-bold text-[#065F46] bg-[#E6FAF5] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Detail Panel Revealed Beneath Grid */}
        <div
          id="industry-detail-panel"
          role="tabpanel"
          aria-labelledby={`ind-tab-${selectedIndustry.id}`}
          aria-live="polite"
          className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Selected Business Type & 3 Verified Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">
                <span>Selected Solution</span>
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
                Verified Relevant Capabilities:
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
                className="btn-primary text-sm min-h-[48px]"
              >
                <span>Request Free Demo</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
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

              <a
                href="#features"
                className="text-xs font-semibold text-[#2563EB] hover:underline"
              >
                Compare against all 10 core features →
              </a>
            </div>
          </div>

          {/* Right: Corresponding Product UI Preview Panel */}
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
      </div>
    </section>
  );
}
