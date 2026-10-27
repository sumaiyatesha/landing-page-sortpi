import React from "react";
import { siteSettings } from "@/content/siteSettings";

export default function CapabilityAnchors() {
  // If authentic customer logos are approved in the future, render them
  if (siteSettings.hasApprovedCustomerLogos) {
    return (
      <section
        id="customers"
        className="py-12 border-y border-[#E2E8F0] bg-[#F6F8FC]"
        aria-label="Client Shops"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#64748B] mb-6">
            Trusted by retail and super shops in Bangladesh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Real verified client logos would render here */}
          </div>
        </div>
      </section>
    );
  }

  // Without approved customer proof: 3 factual capability anchors (NOT labeled as customer proof, NO fake stars)
  return (
    <section
      aria-label="Core Business Pillars"
      className="py-10 lg:py-14 border-y border-[#E2E8F0] bg-[#F6F8FC]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 1: Sales and billing */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold text-[#0F172A]">
                Sales and billing
              </h2>
              <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                Barcode scanning, recorded cash, card, bKash & Nagad payments, and instant customer receipts.
              </p>
            </div>
          </div>

          {/* Pillar 2: Stock and purchases */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#0AC79E] flex items-center justify-center shrink-0">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold text-[#0F172A]">
                Stock and purchases
              </h2>
              <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                Automatic stock reduction per sale, supplier purchases, and early warnings before items run out.
              </p>
            </div>
          </div>

          {/* Pillar 3: Reports and branch visibility */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold text-[#0F172A]">
                Reports and branch visibility
              </h2>
              <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                Daily sales totals, profit margins, customer dues, and individual or multi-branch oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
