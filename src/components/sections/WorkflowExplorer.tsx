"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { heroSampleSale, duesSampleSale } from "@/content/sampleFixtures";

type WorkflowStepId = "sell" | "stock" | "dues" | "reports";

export default function WorkflowExplorer() {
  const [activeStep, setActiveStep] = useState<WorkflowStepId>("sell");
  const [isDuesScenario, setIsDuesScenario] = useState<boolean>(false);
  const [isEnlargeOpen, setIsEnlargeOpen] = useState<boolean>(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const enlargeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

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

  // Open modal and store trigger for focus return
  const openEnlargeDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
    enlargeTriggerRef.current = e.currentTarget;
    setIsEnlargeOpen(true);
  };

  // Close modal and return focus
  const closeEnlargeDialog = () => {
    setIsEnlargeOpen(false);
    setTimeout(() => {
      enlargeTriggerRef.current?.focus();
    }, 50);
  };

  // Escape key and focus trapping inside modal dialog
  useEffect(() => {
    if (!isEnlargeOpen) return;

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeEnlargeDialog();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    modalCloseButtonRef.current?.focus();

    // Prevent body background scroll while dialog is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
      document.body.style.overflow = "";
    };
  }, [isEnlargeOpen]);

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
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg border border-[#CBD5E1] bg-white text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                Reset to Full Payment (৳900 Cash)
              </button>
            )}
            <button
              onClick={openEnlargeDialog}
              aria-label="Enlarge detailed transaction table"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2563EB]/30 bg-blue-50 text-[#2563EB] text-xs font-semibold hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              <span>Click to Enlarge Table</span>
            </button>
          </div>
        </div>

        {/* 4 Interactive Controls */}
        <div
          role="tablist"
          aria-label="Transaction Lifecycle Steps"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          {steps.map((step, index) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                id={`tab-${step.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${step.id}`}
                onClick={() => handleSelectStep(step.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`relative p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                  isSelected
                    ? "bg-white border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/20"
                    : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#CBD5E1] text-[#475569]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
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
                  <div className="text-xs text-[#64748B]">Grand Total</div>
                  <div className="text-base font-bold text-[#2563EB]">
                    ৳{currentSale.total}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#64748B]">Cash Received</div>
                  <div className="text-base font-bold text-[#065F46]">
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
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    Real-Time Inventory Movement
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    Stock Deductions for Invoice #{currentSale.invoiceNumber}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-blue-50 text-[#2563EB] font-semibold">
                  3 Products Updated Instantly
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentSale.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F172A]">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#64748B]">
                        {item.unit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#E2E8F0] text-center">
                      <div>
                        <span className="text-[10px] text-[#64748B] block uppercase">
                          Previous
                        </span>
                        <span className="text-base font-semibold text-[#64748B]">
                          {item.initialStock}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        - {item.quantity} sold
                      </span>
                      <div>
                        <span className="text-[10px] text-[#2563EB] block uppercase font-semibold">
                          Current
                        </span>
                        <span className="text-base font-bold text-[#2563EB]">
                          {item.updatedStock}
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#0AC79E] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0AC79E]" />
                      <span>Ledger verified & shelf balance in sync</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-[#1E3A8A]">
                <strong>No manual stock counting:</strong> Every checkout immediately decreases active inventory so cashiers never sell out-of-stock items.
              </div>
            </div>
          )}

          {/* STEP 3: TRACK DUES */}
          {activeStep === "dues" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Alternative Payment Example
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    Partial Payment (Paid ৳700, Due ৳200)
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                  Customer Due Scenario
                </span>
              </div>

              <div className="bg-amber-50/50 rounded-xl border border-amber-200/80 p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
            <Link
              href="/#demo"
              className="font-semibold text-[#2563EB] hover:underline"
            >
              Request a tailored demo for your store →
            </Link>
          </div>
        </div>
      </div>

      {/* Accessible Click to Enlarge Dialog with Escape handling, Focus Trapping, and Focus Return */}
      {isEnlargeOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeEnlargeDialog}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enlarge-dialog-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 space-y-6"
          >
            {/* Dialog Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  High-Resolution Transaction Ledger
                </span>
                <h3 id="enlarge-dialog-title" className="text-xl font-bold text-[#0F172A] mt-0.5">
                  Invoice #{currentSale.invoiceNumber} Audit & Inventory Trail
                </h3>
              </div>
              <button
                ref={modalCloseButtonRef}
                onClick={closeEnlargeDialog}
                aria-label="Close dialog"
                className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Desktop Detailed Multi-Column Table View */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-xs font-bold text-[#64748B] bg-[#F8FAFC]">
                    <th className="p-3">SKU / Item</th>
                    <th className="p-3 text-center">Unit</th>
                    <th className="p-3 text-center">Qty Sold</th>
                    <th className="p-3 text-right">Unit Price</th>
                    <th className="p-3 text-right">Line Total</th>
                    <th className="p-3 text-center">Prev Stock</th>
                    <th className="p-3 text-center">Post Stock</th>
                    <th className="p-3 text-right">Stock Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {currentSale.items.map((item) => (
                    <tr key={item.id} className="text-[#0F172A]">
                      <td className="p-3 font-semibold">{item.name}</td>
                      <td className="p-3 text-center text-[#64748B]">{item.unit}</td>
                      <td className="p-3 text-center font-bold">{item.quantity}</td>
                      <td className="p-3 text-right text-[#64748B]">৳{item.unitPrice}</td>
                      <td className="p-3 text-right font-bold text-[#0F172A]">৳{item.total}</td>
                      <td className="p-3 text-center text-[#64748B]">{item.initialStock}</td>
                      <td className="p-3 text-center font-bold text-[#2563EB]">{item.updatedStock}</td>
                      <td className="p-3 text-right">
                        <span className="text-xs px-2 py-0.5 rounded bg-[#E6FAF5] text-[#065F46] font-semibold">
                          Deducted
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Summary Cards (Rather than a 1600px table reduced to a 320px blur) */}
            <div className="block sm:hidden space-y-3">
              {currentSale.items.map((item) => (
                <div key={item.id} className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-2 text-xs">
                  <div className="flex justify-between font-bold text-sm text-[#0F172A]">
                    <span>{item.name}</span>
                    <span>৳{item.total}</span>
                  </div>
                  <div className="flex justify-between text-[#64748B]">
                    <span>{item.quantity} × ৳{item.unitPrice} ({item.unit})</span>
                    <span>Stock: {item.initialStock} → {item.updatedStock}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Ledger Reconciled Summary */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-xs text-[#64748B] block">Subtotal</span>
                <span className="text-base font-bold text-[#0F172A]">৳{currentSale.subtotal}</span>
              </div>
              <div>
                <span className="text-xs text-[#64748B] block">Discount</span>
                <span className="text-base font-bold text-[#0F172A]">৳{currentSale.discount}</span>
              </div>
              <div>
                <span className="text-xs text-[#64748B] block">Paid Amount</span>
                <span className="text-base font-bold text-[#065F46]">৳{currentSale.paid}</span>
              </div>
              <div>
                <span className="text-xs text-[#64748B] block">Remaining Due</span>
                <span className="text-base font-bold text-[#E11D48]">৳{currentSale.due}</span>
              </div>
            </div>

            {/* Dialog Footer Actions */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#64748B]">Press Escape or click Close to return</span>
              <button
                onClick={closeEnlargeDialog}
                className="btn-primary text-xs py-2 px-4 cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
