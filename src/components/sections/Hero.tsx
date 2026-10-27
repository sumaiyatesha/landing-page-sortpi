import React from "react";
import Link from "next/link";
import { siteSettings } from "@/content/siteSettings";
import { heroSampleSale } from "@/content/sampleFixtures";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      {/* Background Accent Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 w-[360px] h-[360px] bg-emerald-50/50 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (approx. 44%) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F6F8FC] border border-[#E2E8F0] text-xs font-semibold text-[#2563EB]">
              <span className="w-2 h-2 rounded-full bg-[#0AC79E] animate-pulse" />
              <span>POS and business management for Bangladesh.</span>
            </div>

            {/* H1 Heading */}
            <h1 className="heading-h1">
              Sell smoothly.
              <br className="hidden sm:inline" />
              Keep your whole shop in view.
            </h1>

            {/* Supporting Copy */}
            <p className="body-large text-[#475569]">
              Bring sales, stock, customer dues, expenses and staff records
              together with SortPi. Manage one shop or multiple branches from one
              place.
            </p>

            {/* Two Exact CTAs from Image 1 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link href="/#demo" className="btn-primary text-base">
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
              </Link>

              <Link href="/contact" className="btn-secondary text-base">
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
            </div>

            {/* Quiet Factual Line */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#64748B]">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-[#2563EB]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{siteSettings.creator}</span>
              <span>•</span>
              <span>Tailored for Bangladeshi shops & multi-branch retail</span>
            </div>
          </div>

          {/* Right Column: Upright Legible Reconstructed Screen (approx. 56%) */}
          <div className="lg:col-span-7 relative">
            {/* Main Application Device Frame */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl shadow-slate-900/8 overflow-hidden">
              {/* Software Header Bar */}
              <div className="bg-[#0F172A] text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 hidden sm:inline">
                    SortPi POS v2.4
                  </span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-xs font-medium text-slate-200">
                    {heroSampleSale.branch}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Mandatory Sample Data Indicator */}
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Sample data
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    Cashier: {heroSampleSale.cashier}
                  </span>
                </div>
              </div>

              {/* POS Interface Body */}
              <div className="p-4 sm:p-5 bg-[#F6F8FC] space-y-4">
                {/* Active Cart & Transaction Summary */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <div>
                      <span className="text-xs font-semibold text-[#64748B]">
                        Active Cart
                      </span>
                      <h2 className="text-sm font-bold text-[#0F172A]">
                        Invoice #{heroSampleSale.invoiceNumber}
                      </h2>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#E6FAF5] text-[#065F46] font-semibold">
                      Payment Ready (Cash)
                    </span>
                  </div>

                  {/* Item Rows: exact Prompt 3 arithmetic */}
                  <div className="divide-y divide-[#F8FAFC] my-2">
                    {heroSampleSale.items.map((item) => (
                      <div
                        key={item.id}
                        className="py-2.5 flex items-center justify-between text-xs sm:text-sm"
                      >
                        <div className="space-y-0.5">
                          <div className="font-semibold text-[#0F172A]">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#64748B]">
                            {item.quantity} × ৳{item.unitPrice} ({item.unit})
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#0F172A]">
                            ৳{item.total}
                          </div>
                          <div className="text-[11px] text-[#0AC79E] font-medium">
                            Stock: {item.initialStock} → {item.updatedStock}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Arithmetic Reconciled Totals */}
                  <div className="pt-3 border-t border-[#E2E8F0] space-y-1.5 text-xs sm:text-sm">
                    <div className="flex justify-between text-[#64748B]">
                      <span>Subtotal</span>
                      <span>৳{heroSampleSale.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[#64748B]">
                      <span>Discount</span>
                      <span>৳{heroSampleSale.discount}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-[#0F172A] pt-1.5 border-t border-[#F1F5F9]">
                      <span>Total Amount</span>
                      <span className="text-[#2563EB]">
                        ৳{heroSampleSale.total}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-[#065F46] font-semibold pt-1">
                      <span>Paid: ৳{heroSampleSale.paid}</span>
                      <span>Due: ৳{heroSampleSale.due}</span>
                    </div>
                  </div>
                </div>

                {/* Supporting Inventory Movement Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {heroSampleSale.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg p-2.5 border border-[#E2E8F0] text-xs"
                    >
                      <div className="text-[#64748B] truncate font-medium">
                        {item.name}
                      </div>
                      <div className="flex items-baseline justify-between mt-1">
                        <span className="text-xs font-bold text-[#0F172A]">
                          {item.updatedStock} in stock
                        </span>
                        <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded">
                          - {item.quantity} sold
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="px-4 py-2 bg-white border-t border-[#E2E8F0] text-[11px] text-[#64748B] flex items-center justify-between">
                <span>
                  Sample arithmetic: ৳420 + (2 × ৳180) + ৳120 = ৳900 total
                </span>
                <span className="text-[#2563EB] font-medium hidden sm:inline">
                  Instant stock deduction
                </span>
              </div>
            </div>

            {/* Subtle Overlay Badge: Live Transaction Notification */}
            <div
              aria-hidden="true"
              className="hidden lg:flex items-center gap-3 absolute -bottom-5 -left-6 bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-lg shadow-slate-900/5 text-xs max-w-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#E6FAF5] text-[#065F46] flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-[#0AC79E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <strong className="font-semibold text-[#0F172A] block">
                  Receipt #{heroSampleSale.invoiceNumber} Printed
                </strong>
                <span className="text-[#64748B]">
                  ৳{heroSampleSale.total} recorded • Inventory updated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
