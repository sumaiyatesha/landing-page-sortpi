"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

function SignupInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "starter";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 py-14 max-w-xl mx-auto px-5">
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 shadow-xs">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] block mb-2 font-bold">
            SortPi Account Portal (Preserved Route)
          </span>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
            Create Your Store Account
          </h1>
          <p className="text-sm text-[#475569] mb-6">
            Selected Tier: <strong className="text-[#2563EB] capitalize">{selectedPlan} Plan</strong>
          </p>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#1E3A8A] mb-6 leading-relaxed">
            New customers in Bangladesh typically prefer a guided 15-minute walkthrough before creating account credentials. You can also{" "}
            <Link href={`/#demo?plan=${selectedPlan}`} className="underline font-bold">
              schedule a free walkthrough here
            </Link>
            .
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/#demo?plan=${selectedPlan}`);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-1">
                Owner Mobile Number
              </label>
              <input
                type="tel"
                className="form-input"
                placeholder="017XXXXXXXX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-1">
                Shop Name
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Dhaka General Store"
                required
              />
            </div>

            <button type="submit" className="w-full btn-primary mt-2">
              <span>Continue to Free Trial Demo</span>
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-[#64748B]">
            Already have an active account?{" "}
            <a href="mailto:contact@sortpi.com" className="text-[#2563EB] font-semibold hover:underline">
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading signup...</div>}>
      <SignupInner />
    </Suspense>
  );
}
