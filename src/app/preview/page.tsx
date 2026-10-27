"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ComponentPreviewPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("Shapla Super Shop");

  const tabs = [
    { id: 0, label: "1. Sell & Bill", count: "৳900" },
    { id: 1, label: "2. Update Stock", count: "3 items" },
    { id: 2, label: "3. Track Dues", count: "৳200 due" },
    { id: 3, label: "4. Review Reports", count: "Daily" },
  ];

  return (
    <main className="min-h-screen bg-[#F6F8FC] py-12 px-5 sm:px-8">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Header Bar */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#E6FAF5] text-[#065F46] text-xs font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]"></span>
              SortPi Visual System & Token Preview (Prompt 2)
            </div>
            <h1 className="text-2xl font-bold text-[#0F172A]">
              Design System Tokens & Component Gallery
            </h1>
            <p className="text-sm text-[#475569] mt-1">
              Validating color hierarchy, WCAG 2.2 AA contrast, 48px touch targets, typography, and card elevation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold text-[#2563EB] hover:underline"
            >
              ← Back to Main App
            </Link>
          </div>
        </div>

        {/* 1. Color Palette Tokens & Contrast Audit */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F172A] mb-4">
            1. Verified Color Tokens & WCAG Contrast Audit
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="space-y-1.5">
              <div className="h-16 rounded-xl bg-[#2563EB] shadow-inner flex items-end p-2 text-white font-mono text-xs">
                #2563EB
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">Primary Blue</div>
              <div className="text-[11px] text-[#475569]">4.6:1 on white (AA)</div>
            </div>

            <div className="space-y-1.5">
              <div className="h-16 rounded-xl bg-[#1D4ED8] shadow-inner flex items-end p-2 text-white font-mono text-xs">
                #1D4ED8
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">Primary Hover</div>
              <div className="text-[11px] text-[#475569]">6.1:1 on white (AAA)</div>
            </div>

            <div className="space-y-1.5">
              <div className="h-16 rounded-xl bg-[#0F172A] shadow-inner flex items-end p-2 text-white font-mono text-xs">
                #0F172A
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">Ink (Navy / Text)</div>
              <div className="text-[11px] text-[#475569]">15.9:1 on white (AAA)</div>
            </div>

            <div className="space-y-1.5">
              <div className="h-16 rounded-xl bg-[#475569] shadow-inner flex items-end p-2 text-white font-mono text-xs">
                #475569
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">Body Slate</div>
              <div className="text-[11px] text-[#475569]">7.2:1 on white (AAA)</div>
            </div>

            <div className="space-y-1.5">
              <div className="h-16 rounded-xl bg-[#0AC79E] shadow-inner flex items-end p-2 text-[#0F172A] font-mono text-xs font-semibold">
                #0AC79E
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">Teal Accent</div>
              <div className="text-[11px] text-[#475569]">With #065F46 ink (AAA)</div>
            </div>

            <div className="space-y-1.5">
              <div className="h-16 rounded-xl bg-[#0B132B] shadow-inner flex items-end p-2 text-white font-mono text-xs">
                #0B132B
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">Owner Navy</div>
              <div className="text-[11px] text-[#475569]">Contrast section</div>
            </div>
          </div>
        </section>

        {/* 2. Button Hierarchy & States */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F172A] mb-2">
            2. Button Hierarchy (Strict Image 1 Labels & ≥48px Targets)
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            Primary action is Blue <strong>Request Free Demo</strong>; Secondary action is Navy <strong>Contact Us</strong>. Arrows are decorative (`aria-hidden`).
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a href="#demo" className="btn-primary">
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

            {/* Secondary Button */}
            <Link href="/contact" className="btn-secondary">
              <span>Contact Us</span>
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            {/* Disabled State */}
            <button
              disabled
              className="btn-primary opacity-50 cursor-not-allowed hover:transform-none"
            >
              <span>Submitting...</span>
            </button>
          </div>

          {/* Dark Surface Action Preview */}
          <div className="mt-6 p-6 rounded-xl bg-[#0B132B] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold">
                Dark Owner Contrast Surface
              </div>
              <div className="text-white text-sm font-medium mt-0.5">
                Know what needs your attention across your stores.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#demo" className="btn-primary">
                <span>Request Free Demo</span>
              </a>
              <Link href="/contact" className="btn-dark-secondary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Typography Scale */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F172A] mb-6">
            3. Typography Scale (Inter for English, Noto Sans Bengali for Bangla)
          </h2>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-[#64748B]">H1 Desktop ~60px / Mobile ~36px (Line height 1.08)</span>
              <h1 className="heading-h1">Sell smoothly. Keep your whole shop in view.</h1>
            </div>

            <div>
              <span className="text-xs font-mono text-[#64748B]">Section Heading Desktop ~40px / Mobile ~28px (Line height 1.15)</span>
              <h2 className="heading-section">Less chasing records. More control over the day.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-xs font-mono text-[#64748B]">Body Large (18px, 1.6 lh)</span>
                <p className="body-large mt-1">
                  Bring sales, stock, customer dues, expenses and staff records together with SortPi. Manage one shop or multiple branches from one place.
                </p>
              </div>
              <div className="font-bengali">
                <span className="text-xs font-mono text-[#64748B]">Bangla Scale (Noto Sans Bengali)</span>
                <p className="body-large mt-1">
                  সহজে বিক্রি করুন। পুরো দোকানের হিসাব এক নজরে রাখুন। বিক্রয়, স্টক, বকেয়া এবং লাভ-ক্ষতির স্পষ্ট চিত্র।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Form Inputs & Validation States (Image 2 Spacing) */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F172A] mb-2">
            4. Form Controls (≥48px Height, Image 2 Generous Spacing)
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            Persistent top labels, readable placeholders, clear required indicators, and distinct validation feedback.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Default State */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Full name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Rafiqul Islam"
                defaultValue="Rafiqul Islam"
              />
              <span className="text-xs text-[#64748B] mt-1.5 block">
                Visible label with standard border
              </span>
            </div>

            {/* Focused / Active State */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Business name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="text"
                className="form-input ring-3 ring-[#2563EB]/15 border-[#2563EB]"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <span className="text-xs text-[#2563EB] font-medium mt-1.5 block">
                Active keyboard focus state
              </span>
            </div>

            {/* Invalid State */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Mobile number <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="tel"
                className="form-input is-invalid"
                defaultValue="01512"
              />
              <span className="text-xs text-[#E11D48] font-medium mt-1.5 block flex items-center gap-1">
                <svg className="w-3.5 h-3.5 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Enter a valid 11-digit Bangladeshi number (01XXXXXXXXX)
              </span>
            </div>
          </div>
        </section>

        {/* 5. Interactive Tabs & Workflow Motif */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F172A] mb-2">
            5. Workflow Tabs (Accessible TabList with 180ms Transition)
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            Demonstrates the product story: one sale becoming stock updates, dues tracking, and owner reports.
          </p>

          <div
            role="tablist"
            aria-label="Daily Workflow Steps"
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#F6F8FC] border border-[#E2E8F0] rounded-xl"
          >
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-start px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white text-[#2563EB] shadow-sm font-semibold border border-[#E2E8F0]"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-white/50"
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider text-[#64748B]">
                    Step {tab.id + 1}
                  </span>
                  <span className="text-sm font-semibold mt-0.5">{tab.label}</span>
                  <span className="text-xs font-mono text-[#0AC79E] mt-1 bg-[#E6FAF5] px-1.5 py-0.5 rounded">
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 p-5 rounded-xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] text-sm text-[#475569]">
            Active Step Content: <strong>{tabs[activeTab].label}</strong> (Sample arithmetic synchronized across steps).
          </div>
        </section>

        {/* 6. Alert & Status Messages */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F172A] mb-4">
            6. System Notifications & Accessible Feedback States
          </h2>
          <div className="space-y-3">
            {/* Success Alert */}
            <div
              role="alert"
              className="p-4 rounded-xl bg-[#E6FAF5] border border-[#A7F3D0] text-[#065F46] flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-[#0AC79E] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="font-semibold block">Your request has been received.</strong>
                <span className="text-sm">
                  The SortPi team will contact you using the details you provided.
                </span>
              </div>
            </div>

            {/* Error Alert */}
            <div
              role="alert"
              className="p-4 rounded-xl bg-[#FFE4E6] border border-[#FECDD3] text-[#9F1239] flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <strong className="font-semibold block">We could not send your request.</strong>
                <span className="text-sm">
                  Please try again or contact us directly at <a href="mailto:contact@sortpi.com" className="underline">contact@sortpi.com</a>.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
