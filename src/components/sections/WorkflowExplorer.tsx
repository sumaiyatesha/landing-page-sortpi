"use client";

import React, { useState, useRef } from "react";
import { heroSampleSale, duesSampleSale } from "@/content/sampleFixtures";

type WorkflowStepId = "sell" | "stock" | "dues" | "reports";

export default function WorkflowExplorer() {
  const [activeStep, setActiveStep] = useState<WorkflowStepId>("sell");
  const [isDuesScenario, setIsDuesScenario] = useState<boolean>(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // When dues tab is selected, activate the dues scenario
  const handleSelectStep = (step: WorkflowStepId) => {
    setActiveStep(step);
    if (step === "dues") {
      setIsDuesScenario(true);
    }
  };

  const handleReset = () => {
    setIsDuesScenario(false);
    setActiveStep("sell");
  };

  const currentSale = isDuesScenario ? duesSampleSale : heroSampleSale;

  const steps: {
    id: WorkflowStepId;
    stepNumber: string;
    title: string;
    tagline: string;
    badge: string;
  }[] = [
    {
      id: "sell",
      stepNumber: "01",
      title: "Sell & Bill",
      tagline: "Cart with 3 items totaling ৳900",
      badge: "Counter Checkout",
    },
    {
      id: "stock",
      stepNumber: "02",
      title: "Update Stock",
      tagline: "Exact deductions on 3 grocery SKUs",
      badge: "Real-time Inventory",
    },
    {
      id: "dues",
      stepNumber: "03",
      title: "Track Dues",
      tagline: "Paid ৳700, balance ৳200 recorded",
      badge: "Customer Ledger",
    },
    {
      id: "reports",
      stepNumber: "04",
      title: "Review Reports",
      tagline: "Reconciled sales, cash & dues in daily reports",
      badge: "Daily Owner View",
    },
  ];

  // Arrow key navigation for tablist accessibility
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % steps.length;
      tabRefs.current[nextIndex]?.focus();
      handleSelectStep(steps[nextIndex].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + steps.length) % steps.length;
      tabRefs.current[prevIndex]?.focus();
      handleSelectStep(steps[prevIndex].id);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F6F8FC] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Workflow Demonstration
            </div>
            <h2 className="heading-section">
              See what happens after every sale.
            </h2>
            <p className="body-large text-[#475569] mt-3">
              Follow how a single ৳900 grocery transaction flows through billing, stock movement, dues tracking, and owner reports.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {isDuesScenario && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#2563EB] bg-white border border-[#CBD5E1] hover:bg-blue-50 transition-colors shadow-xs"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <span>Reset to Full Payment (৳900)</span>
              </button>
            )}
            <span className="text-xs text-[#64748B] bg-white px-2.5 py-1.5 rounded-lg border border-[#E2E8F0]">
              Sample data • Not live account
            </span>
          </div>
        </div>

        {/* Tab Controls (Numbered 1-4 with visible active states) */}
        <div
          role="tablist"
          aria-label="Daily sales lifecycle steps"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
        >
          {steps.map((step, idx) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                role="tab"
                id={`tab-${step.id}`}
                aria-controls={`panel-${step.id}`}
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleSelectStep(step.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer relative ${
                  isSelected
                    ? "bg-white border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/10"
                    : "bg-white/80 border-[#E2E8F0] hover:bg-white text-[#475569]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-[#2563EB] text-white"
                        : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    Step {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-[#065F46] bg-[#E6FAF5] px-2 py-0.5 rounded-full">
                    {step.badge}
                  </span>
                </div>
                <div className="text-base font-bold text-[#0F172A]">
                  {step.title}
                </div>
                <div className="text-xs text-[#64748B] mt-1 line-clamp-1">
                  {step.tagline}
                </div>

                {/* Thin visual connector indicator for selected tab on desktop */}
                {isSelected && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-[#2563EB]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stable Interactive Panel */}
        <div
          role="tabpanel"
          id={`panel-${activeStep}`}
          aria-labelledby={`tab-${activeStep}`}
          className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 lg:p-8 min-h-[460px] flex flex-col justify-between"
        >
          {/* STEP 1: SELL & BILL */}
          {activeStep === "sell" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    Active Point of Sale Screen
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    Invoice #{currentSale.invoiceNumber} — Ready to Print
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded bg-[#E6FAF5] text-[#065F46] font-semibold">
                    Payment Method: {currentSale.paymentMethod}
                  </span>
                  <span className="text-xs text-[#64748B]">
                    {currentSale.timestamp}
                  </span>
                </div>
              </div>

              {/* Exact BDT 900 Grocery Fixture */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#F1F5F9] text-xs font-bold text-[#64748B]">
                      <th className="pb-3">Item Description</th>
                      <th className="pb-3 text-center">Unit</th>
                      <th className="pb-3 text-center">Quantity</th>
                      <th className="pb-3 text-right">Unit Price</th>
                      <th className="pb-3 text-right">Line Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F8FAFC]">
                    {currentSale.items.map((item) => (
                      <tr key={item.id} className="text-[#0F172A]">
                        <td className="py-3 font-semibold">{item.name}</td>
                        <td className="py-3 text-center text-[#64748B]">
                          {item.unit}
                        </td>
                        <td className="py-3 text-center font-bold">
                          {item.quantity}
                        </td>
                        <td className="py-3 text-right text-[#64748B]">
                          ৳{item.unitPrice}
                        </td>
                        <td className="py-3 text-right font-bold">
                          ৳{item.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xs text-[#64748B]">Subtotal</div>
                  <div className="text-base font-bold text-[#0F172A]">
                    ৳{currentSale.subtotal}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#64748B]">Discount</div>
                  <div className="text-base font-bold text-[#0F172A]">
                    ৳{currentSale.discount}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#2563EB] font-semibold">
                    Total Due
                  </div>
                  <div className="text-lg font-bold text-[#2563EB]">
                    ৳{currentSale.total}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#065F46] font-semibold">
                    Received (Cash)
                  </div>
                  <div className="text-lg font-bold text-[#065F46]">
                    ৳{currentSale.paid}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: UPDATE STOCK */}
          {activeStep === "stock" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0AC79E]">
                    Inventory Ledger Synced
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    Exact Stock Movements from Invoice #{currentSale.invoiceNumber}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-blue-50 text-[#2563EB] font-semibold">
                  Automatic deduction on bill print
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentSale.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#64748B]">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                        -{item.quantity} sold
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A]">
                      {item.name}
                    </h4>
                    <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-sm">
                      <div className="text-[#64748B]">
                        Previous: <strong className="text-[#0F172A]">{item.initialStock}</strong>
                      </div>
                      <div className="text-[#2563EB] font-bold">
                        → New: <span className="text-base">{item.updatedStock}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#E6FAF5] border border-[#A7F3D0] text-xs text-[#065F46] flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0AC79E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  No manual stock registers required. When Nazirshail Rice fell to 17 packs, SortPi recorded the exact timestamp and cashier ID.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: TRACK DUES */}
          {activeStep === "dues" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    Customer Credit (Baki) Ledger
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    Alternative Payment Example: Paid ৳700, Due ৳200
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                  Partial Payment Scenario
                </span>
              </div>

              <div className="bg-[#FFFBEB] p-5 rounded-xl border border-[#FDE68A] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-amber-800 font-semibold">
                      Customer Profile
                    </span>
                    <div className="text-base font-bold text-[#0F172A]">
                      {duesSampleSale.customer.name}
                    </div>
                    <div className="text-xs text-[#64748B]">
                      Phone: {duesSampleSale.customer.phone}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-amber-800 font-semibold">
                      Total Invoice Amount
                    </span>
                    <div className="text-lg font-bold text-[#0F172A]">৳900</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-amber-200 text-sm">
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <div className="text-xs text-[#64748B]">Cash Received</div>
                    <div className="text-base font-bold text-[#065F46]">৳700</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <div className="text-xs text-[#64748B]">Outstanding Due</div>
                    <div className="text-base font-bold text-[#E11D48]">৳200</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-white p-3 rounded-lg border border-amber-200">
                    <div className="text-xs text-[#64748B]">Ledger Action</div>
                    <div className="text-xs font-semibold text-[#2563EB] mt-1">
                      Added to Customer Balance
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#475569] leading-relaxed">
                SortPi links the ৳200 balance directly to Alim Uddin’s contact record. Next time he shops, his pending balance appears on the cashier screen automatically.
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW REPORTS */}
          {activeStep === "reports" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    Daily Business Reconciled Report
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    End-of-Day Summary Reflecting Selected Example
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-[#F1F5F9] text-[#475569] font-mono">
                  Branch: Gulshan 01
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-xs text-[#64748B]">Gross Sales</span>
                  <div className="text-xl font-bold text-[#0F172A] mt-1">৳900</div>
                  <span className="text-[11px] text-[#64748B]">3 items sold</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-xs text-[#64748B]">Cash in Drawer</span>
                  <div className="text-xl font-bold text-[#065F46] mt-1">
                    ৳{currentSale.paid}
                  </div>
                  <span className="text-[11px] text-[#065F46]">Verified payment</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-xs text-[#64748B]">Customer Dues Logged</span>
                  <div className="text-xl font-bold text-[#E11D48] mt-1">
                    ৳{currentSale.due}
                  </div>
                  <span className="text-[11px] text-[#64748B]">
                    {currentSale.due > 0 ? "Pending collection" : "Zero due"}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-xs text-[#64748B]">Items Deducted</span>
                  <div className="text-xl font-bold text-[#2563EB] mt-1">4 units</div>
                  <span className="text-[11px] text-[#2563EB]">Rice, Oil & Tea</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#475569] flex items-center justify-between">
                <span>
                  All figures correspond with the active demo transaction (৳900 total).
                </span>
                <span className="font-semibold text-[#0F172A]">
                  Print & PDF Download Available
                </span>
              </div>
            </div>
          )}

          {/* Bottom Clarification Notice */}
          <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#64748B] gap-2">
            <span>
              Interactive demonstration: Demonstrates real data flow without connecting a live payment gateway or scanner.
            </span>
            <a
              href="/#demo"
              className="font-semibold text-[#2563EB] hover:underline"
            >
              Request a tailored demo for your store →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
