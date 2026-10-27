import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | SortPi",
  description: "Privacy terms and data protection policies for SortPi users and website visitors in Bangladesh.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 py-14 max-w-3xl mx-auto px-5">
        <h1 className="heading-section mb-6">Privacy Policy</h1>
        <div className="prose text-sm text-[#475569] space-y-4 leading-relaxed">
          <p>
            Last updated: October 27, 2026. SortPi is built and operated by GeekSSort in Dhaka, Bangladesh.
          </p>
          <h2 className="text-base font-bold text-[#0F172A] mt-6">1. Information We Collect</h2>
          <p>
            When you request a demo or submit an inquiry, we collect your full name, phone number, business name, and optional details such as branch count and email address. We do not sell or rent your personal contact information to any third parties.
          </p>
          <h2 className="text-base font-bold text-[#0F172A] mt-6">2. How We Use Your Data</h2>
          <p>
            Submitted contact details are used strictly to respond to your demo request, answer workflow questions, and provide customer support.
          </p>
          <h2 className="text-base font-bold text-[#0F172A] mt-6">3. Contacting Us</h2>
          <p>
            For privacy inquiries, please contact us directly at{" "}
            <a href="mailto:contact@sortpi.com" className="text-[#2563EB] underline">
              contact@sortpi.com
            </a>{" "}
            or call <a href="tel:+8801341869125" className="text-[#2563EB] underline">+8801341869125</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
