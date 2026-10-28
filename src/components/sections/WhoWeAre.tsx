import React from "react";
import Link from "next/link";

export default function WhoWeAre() {
  const pillars = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Built for Bangladeshi Commerce",
      description:
        "Engineered specifically for local retail workflows: native BDT currency, bKash & Nagad payment records, and hassle-free customer credit (baki) tracking.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "High-Speed Reliability",
      description:
        "Lightning-fast barcode scans and instant thermal receipts. Even during peak rush hours, counters stay responsive with zero queue delay.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Dedicated Local Support",
      description:
        "Direct phone, WhatsApp, and remote desktop assistance from our engineering and onboarding hub in Dhaka. You are never left without guidance.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Bank-Grade Security & Controls",
      description:
        "Role-based permissions keep sensitive margins and costs private to owners, while cashier logs safeguard your daily cash drawer from discrepancies.",
    },
  ];

  return (
    <section id="who-we-are" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Who We Are
          </div>
          <h2 className="heading-section text-[#0F172A]">
            The Modern Commerce Platform for Bangladesh
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Built by GeekSSort, SortPi empowers retailers, super stores, pharmacies, restaurants, and salons to replace cluttered notebooks with effortless cloud control.
          </p>
        </div>

        {/* 2-Column Story & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Mission & Vision Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">Our Mission</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-1">
                Make Store Operations Simple, Transparent & Profitable
              </h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mt-2">
                Running a retail business in Bangladesh involves high walk-in foot traffic, supplier payments, and complex credit ledgers. We build practical, lightning-fast software that gives store owners total visibility without technical headaches.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9]">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Our Vision</span>
              <h4 className="text-lg font-bold text-[#0F172A] mt-1">
                Digitalizing 50,000+ Retail Merchants Across All 64 Districts
              </h4>
              <p className="text-[#64748B] text-sm leading-relaxed mt-2">
                From single-counter neighborhood shops to multi-branch regional chains, SortPi bridges the gap between everyday counter sales and back-office financial growth.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/#demo" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Request Free Demo</span>
              </Link>
              <Link href="/contact" className="btn-secondary text-xs sm:text-sm py-2.5 px-6">
                <span>Contact Our Dhaka Team</span>
              </Link>
            </div>
          </div>

          {/* Key Metric Highlights Visual Box */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-[#0F172A] text-white p-6 rounded-2xl flex flex-col justify-between">
              <span className="text-xs text-slate-400 font-medium">Active Outlets</span>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">500+</span>
                <p className="text-xs text-slate-300 mt-1">Stores & branches across BD</p>
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold">↑ Growing daily</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <span className="text-xs text-[#64748B] font-medium">System Uptime</span>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2563EB]">99.98%</span>
                <p className="text-xs text-[#64748B] mt-1">Cloud & offline resiliency</p>
              </div>
              <span className="text-[11px] text-[#2563EB] font-semibold">24/7 Monitored</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <span className="text-xs text-[#64748B] font-medium">Geographic Reach</span>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">64</span>
                <p className="text-xs text-[#64748B] mt-1">Districts supported in BD</p>
              </div>
              <span className="text-[11px] text-purple-600 font-semibold">Nationwide service</span>
            </div>

            <div className="bg-gradient-to-br from-[#2563EB] to-blue-700 text-white p-6 rounded-2xl flex flex-col justify-between">
              <span className="text-xs text-blue-100 font-medium">Customer Support</span>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">24/7</span>
                <p className="text-xs text-blue-100 mt-1">Local hotline & WhatsApp</p>
              </div>
              <span className="text-[11px] text-emerald-300 font-semibold">Zero Wait Time</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-colors shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className="font-bold text-base text-[#0F172A] mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
