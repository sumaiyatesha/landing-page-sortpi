"use client";

import React from "react";

export default function ProblemSolution() {
  const pairs = [
    {
      num: "01",
      problem: "Separate sales notebook and stock register",
      problemDetail:
        "Sales happen at the counter while stock is calculated later on paper or memory, causing discrepancies and lost revenue.",
      outcome: "Connected transactions in real time",
      outcomeDetail:
        "Every item scanned or entered immediately reduces shelf inventory and logs the exact cash, card, or mobile wallet received.",
      badge: "Real-time sync",
    },
    {
      num: "02",
      problem: "Uncertain customer dues and unrecorded credit",
      problemDetail:
        "Baki (due) written across scattered slips leads to disputes, missed collections, and forgotten balances.",
      outcome: "Transparent customer balances",
      outcomeDetail:
        "Every due is tied to a customer phone number and invoice history. Send polite reminders and see total receivables at a glance.",
      badge: "Instant balance ledger",
    },
    {
      num: "03",
      problem: "Unclear store spending and margin leaks",
      problemDetail:
        "Shop expenses, staff advances, and small daily payouts get mixed with register cash, obscuring real profit.",
      outcome: "Income and expense visibility",
      outcomeDetail:
        "Log operational costs as they happen. Always know actual net profit, cash in hand, and where money is flowing.",
      badge: "Clean cash flow",
    },
    {
      num: "04",
      problem: "Branch phone calls to verify daily numbers",
      problemDetail:
        "Managing multiple shops requires calling cashiers every evening to ask what sold, what ran out, and how much cash was deposited.",
      outcome: "Branch-level reporting from any phone",
      outcomeDetail:
        "Open your dashboard to see individual branch sales, stock levels, and staff shifts—or view all outlets combined.",
      badge: "Multi-branch oversight",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6FAF5] text-[#065F46] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]" />
            Business Clarity
          </div>
          <h2 className="heading-section">
            Less chasing records.
            <br />
            More control over the day.
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Running a shop in Bangladesh is demanding. SortPi replaces disconnected paperwork with a unified system that works as hard as you do.
          </p>
        </div>

        {/* 4 Problem-Solution Pairs in Clean Asymmetric Rows */}
        <div className="space-y-4">
          {pairs.map((item) => (
            <div
              key={item.num}
              className="bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-2xl p-6 lg:p-7 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Problem Column (Left) */}
              <div className="lg:col-span-5 flex items-start gap-4">
                <span className="font-mono text-xs font-bold text-[#94A3B8] bg-white px-2 py-1 rounded-md border border-[#E2E8F0] shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E11D48] flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                    Friction point
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {item.problem}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                    {item.problemDetail}
                  </p>
                </div>
              </div>

              {/* Transition Indicator (Center) */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <div className="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#2563EB] shadow-xs">
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Outcome Column (Right) */}
              <div className="lg:col-span-6 bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#065F46] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]" />
                    With SortPi
                  </span>
                  <span className="text-[11px] font-semibold bg-[#E6FAF5] text-[#065F46] px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {item.outcome}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                  {item.outcomeDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
