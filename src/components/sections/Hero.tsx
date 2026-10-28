import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const services = [
    { label: "Retail POS", icon: "🛍️", href: "/#industries" },
    { label: "Pharmacy POS", icon: "💊", href: "/#industries" },
    { label: "Restaurant POS", icon: "🍽️", href: "/#industries" },
    { label: "Super Shop", icon: "🛒", href: "/#industries" },
    { label: "Salon & Spa", icon: "💈", href: "/#industries" },
    { label: "Distribution", icon: "📦", href: "/#industries" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-[#FAFCFF] border-b border-[#E2E8F0]">
      {/* Soft Background Spotlight inspired by Mediasoft */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[650px] lg:w-[850px] h-[650px] lg:h-[850px] bg-radial from-blue-400/10 via-blue-200/5 to-transparent rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            {/* Main Headline */}
            <div>
              <span className="block text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#2563EB] tracking-tight leading-[1.1]">
                Best POS Software
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mt-1">
                in Bangladesh
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5F6B7A] leading-relaxed max-w-xl">
              The Smartest Retail Software & Solutions Provider in Bangladesh. Streamline counter billing, stock tracking, customer dues, and multi-branch operations with cloud ease.
            </p>

            {/* Interactive Services Grid Pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-3">
                {services.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group inline-flex items-center gap-2.5 py-1.5 pr-4 pl-1.5 bg-white/90 hover:bg-white backdrop-blur-md border border-blue-200/60 hover:border-[#2563EB] rounded-full text-xs sm:text-sm font-bold text-[#10213A] hover:text-[#2563EB] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#2563EB] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span>Request Free Demo</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-[#CBD5E1] hover:border-[#2563EB] font-bold text-sm sm:text-base transition-all duration-300"
              >
                <span>Contact Now</span>
                <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* 3 Core Trust Badges below buttons */}
            <div className="pt-4 border-t border-[#E2E8F0] grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#0F172A]">Secure</strong>
                  <span className="text-[11px] text-[#64748B] block">Bank-Grade Data</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#0F172A]">24/7</strong>
                  <span className="text-[11px] text-[#64748B] block">Dhaka Support</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#0F172A]">Real-Time</strong>
                  <span className="text-[11px] text-[#64748B] block">Cloud & Offline</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONNECTED CLOUD ECOSYSTEM VISUAL */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/assets/hero-ecosystem.webp"
                alt="SortPi Connected Cloud POS Software Ecosystem in Bangladesh"
                width={1254}
                height={1254}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
