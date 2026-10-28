import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteSettings } from "@/content/siteSettings";

export default function Hero() {
  const industries = [
    { label: "Retail & Apparel", icon: "🛍️" },
    { label: "Super Shop & Grocery", icon: "🛒" },
    { label: "Restaurant & Cafe", icon: "🍽️" },
    { label: "Pharmacy & Care", icon: "💊" },
    { label: "Salon & Spa", icon: "💈" },
    { label: "Wholesale Trade", icon: "📦" },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-22 bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-[#E2E8F0]">
      {/* Subtle Background Lighting Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-20 w-[400px] h-[400px] bg-emerald-50/60 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1240px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Punchy Headline, Badges, Quick Industry Pills, and High-Converting CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#2563EB]">
              <span className="w-2 h-2 rounded-full bg-[#0AC79E] animate-pulse" />
              <span>#1 Cloud POS & Business Management for Bangladesh</span>
            </div>

            {/* H1 Heading - Strong, punchy, less text */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#0F172A] leading-[1.12]">
              Sell Faster.
              <br />
              Track Every Taka.
              <br />
              <span className="text-[#2563EB]">Grow Your Whole Shop.</span>
            </h1>

            {/* Short 1-sentence subtitle */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Smart barcode billing, real-time stock sync, phone-linked customer dues (baki), and multi-branch control built specifically for Bangladeshi merchants.
            </p>

            {/* Industry quick pill buttons */}
            <div className="pt-1">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2.5">
                Solutions for your business type:
              </span>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, i) => (
                  <Link
                    key={i}
                    href="#industries"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#334155] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/50 transition-all shadow-2xs"
                  >
                    <span>{ind.icon}</span>
                    <span>{ind.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link href="/#demo" className="btn-primary text-base py-3.5 px-7 shadow-lg shadow-blue-500/20">
                <span>Request Free Demo</span>
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <a
                href="tel:+8801341869125"
                className="btn-secondary text-base py-3.5 px-6 flex items-center justify-center gap-2 border-[#CBD5E1]"
              >
                <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call +880 1341-869125</span>
              </a>
            </div>

            {/* Social Proof Line */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#475569]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-[#0F172A]">4.9/5 Rating</span>
              <span>•</span>
              <span>Trusted by 500+ Shops in Bangladesh</span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual POS Showcase with Live Screen and Floating Action Chips */}
          <div className="lg:col-span-6 relative">
            {/* The Main High-Resolution Retail Counter Mockup */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white">
              {/* Top Window Bar */}
              <div className="bg-[#0F172A] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-300 ml-2">SortPi POS Terminal • Live Register</span>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  ● Online (Dhaka Central)
                </span>
              </div>

              {/* High-Resolution Counter Scene Image */}
              <div className="relative aspect-[16/10] w-full bg-slate-900">
                <Image
                  src="/assets/hero-pos-counter.jpg"
                  alt="Modern Retail POS System Counter with Touchscreen and Barcode Scanner"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Live Interactive POS Quick-Sale Overlay Box */}
                <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-xl">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-slate-800">Fast Barcode Checkout</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600">Inv #SP-2026-849</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-slate-50 p-2 rounded-xl">
                      <span className="text-[10px] text-slate-500 block">Scanned Item</span>
                      <span className="font-bold text-slate-800 truncate block">Miniket Rice 5kg</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl">
                      <span className="text-[10px] text-slate-500 block">Payment Mode</span>
                      <span className="font-bold text-emerald-600 block">bKash + Cash</span>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-xl">
                      <span className="text-[10px] text-blue-600 block">Total Billed</span>
                      <span className="font-bold text-blue-700 block">৳ 4,850</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Metric Cards around the POS image */}
            <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                ৳
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Today's Sales</span>
                <span className="text-sm font-extrabold text-slate-900">৳84,250 <span className="text-xs font-semibold text-emerald-600">↑ 18%</span></span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Stock Deduction</span>
                <span className="text-sm font-extrabold text-slate-900">100% Real-Time Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
