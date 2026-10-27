"use client";

import React, { useState } from "react";
import Link from "next/link";

type OwnerMetricId = "sales" | "dues" | "low_stock";

export default function OwnerDashboard() {
  const [selectedBranch, setSelectedBranch] = useState("Gulshan Main Branch");
  const [activeMetric, setActiveMetric] = useState<OwnerMetricId>("sales");

  const branches = [
    "Gulshan Main Branch",
    "Dhanmondi Outlet",
    "Uttara Branch",
    "All Branches Combined",
  ];

  const callouts: Record<
    OwnerMetricId,
    { title: string; explanation: string; actionText: string }
  > = {
    sales: {
      title: "Peak Sales Insight (Gulshan 01)",
      explanation:
        "Peak checkout volume occurred between 4:30 PM and 7:00 PM today. Cash accounted for ৳31,250 and recorded mobile wallets (bKash/Nagad) totaled ৳17,000.",
      actionText: "Review hourly sales report →",
    },
    dues: {
      title: "Customer Credit Breakdown",
      explanation:
        "৳14,200 total due across 12 verified customers. 3 accounts hold ৳8,500 of the total balance with overdue dates exceeding 14 days.",
      actionText: "View phone-linked dues ledger →",
    },
    low_stock: {
      title: "Urgent Inventory Reorder Warning",
      explanation:
        "8 products are currently beneath their minimum safety threshold (including Nazirshail Rice and Soybean Oil). Supplier purchase orders should be issued before weekend traffic.",
      actionText: "Generate supplier purchase order →",
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white border-b border-[#1E293B]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-3 border border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]" />
              Executive Visibility
            </div>
            <h2 className="heading-section text-white">
              Know what needs your attention.
            </h2>
            <p className="body-large text-[#94A3B8] mt-3">
              A clear, unified view built for shop owners. Monitor cash flow, customer dues, and inventory alerts across one store or your entire network.
            </p>
          </div>

          {/* Understated Branch Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label
              htmlFor="owner-branch-select"
              className="text-xs font-semibold text-[#94A3B8]"
            >
              Viewing Store:
            </label>
            <select
              id="owner-branch-select"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="bg-[#111C38] text-slate-200 border border-[#233463] rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#2563EB] cursor-pointer"
            >
              {branches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-[#111C38] rounded-2xl border border-[#233463] p-6 lg:p-8 shadow-2xl space-y-8">
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#1E293B]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0AC79E] animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Live Overview: {selectedBranch}
              </span>
              <span className="text-xs text-[#94A3B8] hidden sm:inline">
                • Updated 2 minutes ago
              </span>
            </div>

            {/* Mandatory Sample Data Badge */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded">
                Sample data
              </span>
              <span className="text-xs text-[#94A3B8]">
                Illustrative owner view
              </span>
            </div>
          </div>

          {/* 3 Interactive Highlight Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Metric 1: Sales */}
            <button
              type="button"
              onClick={() => setActiveMetric("sales")}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                activeMetric === "sales"
                  ? "bg-[#18254A] border-[#2563EB] ring-2 ring-[#2563EB]/30 shadow-lg"
                  : "bg-[#0E172F] border-[#1E293B] hover:bg-[#15203F] text-slate-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-2">
                <span>Today's Total Sales</span>
                <span className="text-[11px] text-[#0AC79E] font-semibold bg-[#0AC79E]/10 px-2 py-0.5 rounded">
                  84 bills
                </span>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-white">
                ৳48,250
              </div>
              <div className="text-xs text-[#94A3B8] mt-2 flex items-center justify-between">
                <span>Avg. ticket: ৳574</span>
                <span className="text-[#2563EB] font-semibold">
                  {activeMetric === "sales" ? "● Selected" : "Click to view"}
                </span>
              </div>
            </button>

            {/* Metric 2: Customer Dues */}
            <button
              type="button"
              onClick={() => setActiveMetric("dues")}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                activeMetric === "dues"
                  ? "bg-[#18254A] border-amber-500 ring-2 ring-amber-500/30 shadow-lg"
                  : "bg-[#0E172F] border-[#1E293B] hover:bg-[#15203F] text-slate-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-2">
                <span>Customer Dues (Baki)</span>
                <span className="text-[11px] text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded">
                  12 accounts
                </span>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-amber-400">
                ৳14,200
              </div>
              <div className="text-xs text-[#94A3B8] mt-2 flex items-center justify-between">
                <span>Receivables logged</span>
                <span className="text-amber-400 font-semibold">
                  {activeMetric === "dues" ? "● Selected" : "Click to view"}
                </span>
              </div>
            </button>

            {/* Metric 3: Low Stock */}
            <button
              type="button"
              onClick={() => setActiveMetric("low_stock")}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                activeMetric === "low_stock"
                  ? "bg-[#18254A] border-rose-500 ring-2 ring-rose-500/30 shadow-lg"
                  : "bg-[#0E172F] border-[#1E293B] hover:bg-[#15203F] text-slate-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-2">
                <span>Low Stock Warnings</span>
                <span className="text-[11px] text-rose-400 font-semibold bg-rose-400/10 px-2 py-0.5 rounded">
                  Reorder needed
                </span>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-rose-400">
                8 Items
              </div>
              <div className="text-xs text-[#94A3B8] mt-2 flex items-center justify-between">
                <span>Below reorder level</span>
                <span className="text-rose-400 font-semibold">
                  {activeMetric === "low_stock" ? "● Selected" : "Click to view"}
                </span>
              </div>
            </button>
          </div>

          {/* Meaningful Contextual Callout Panel */}
          <div className="bg-[#18254A] rounded-xl border border-[#233463] p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0AC79E] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0AC79E]" />
                {callouts[activeMetric].title}
              </span>
              <span className="text-xs text-[#94A3B8]">
                Metric Focus: {activeMetric.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {callouts[activeMetric].explanation}
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[#233463]/60 text-xs">
              <span className="text-[#94A3B8]">
                Data automatically synthesized from register invoices.
              </span>
              <a
                href="#demo"
                className="text-[#0AC79E] hover:underline font-semibold"
              >
                {callouts[activeMetric].actionText}
              </a>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="text-xs text-[#94A3B8]">
              Realistic sample figures. SortPi delivers practical daily clarity without fabricated claims.
            </div>
            <div className="flex items-center gap-3">
              <a href="/#demo" className="btn-primary text-sm min-h-[44px]">
                <span>Request Free Demo</span>
              </a>
              <Link href="/contact" className="btn-dark-secondary text-sm min-h-[44px]">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
