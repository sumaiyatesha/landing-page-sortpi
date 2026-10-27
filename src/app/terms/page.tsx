import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | SortPi",
  description: "Terms and conditions for using SortPi POS software in Bangladesh.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 py-14 max-w-3xl mx-auto px-5">
        <h1 className="heading-section mb-6">Terms of Service</h1>
        <div className="prose text-sm text-[#475569] space-y-4 leading-relaxed">
          <p>
            Last updated: October 27, 2026. SortPi is operated by GeekSSort in Dhaka, Bangladesh.
          </p>
          <h2 className="text-base font-bold text-[#0F172A] mt-6">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the SortPi marketing website, demo registration, or related services, you agree to these Terms of Service and applicable laws in Bangladesh.
          </p>
          <h2 className="text-base font-bold text-[#0F172A] mt-6">2. Subscription & Demo Service</h2>
          <p>
            Demo requests are provided without purchase obligations to help shop owners explore software capabilities. Subscriptions are billed monthly in BDT according to chosen branch and product tiers.
          </p>
          <h2 className="text-base font-bold text-[#0F172A] mt-6">3. Inquiries & Support</h2>
          <p>
            For subscription questions or assistance, reach us at{" "}
            <a href="mailto:contact@sortpi.com" className="text-[#2563EB] underline">
              contact@sortpi.com
            </a>{" "}
            or <a href="tel:+8801341869125" className="text-[#2563EB] underline">+8801341869125</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
