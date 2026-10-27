import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DemoContactForm from "@/components/forms/DemoContactForm";
import { siteSettings } from "@/content/siteSettings";

export const metadata: Metadata = {
  title: "Contact Us | SortPi Bangladesh",
  description:
    "Have a question about features, pricing or your shop's workflow? Talk to the SortPi team in Dhaka, Bangladesh.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumbs" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#64748B]">
              <li>
                <Link href="/" className="hover:text-[#2563EB]">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0F172A]">Contact</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left: Contact Info & Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Customer Support & Enquiries
              </div>

              <h1 className="heading-section">
                Let’s talk about your business.
              </h1>

              <p className="body-large text-[#475569]">
                Have a question about features, pricing or your shop’s workflow? Talk to the SortPi team.
              </p>

              {/* Primary Demo Link */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-[#1E3A8A] flex items-center justify-between">
                <span>Looking for an interactive walkthrough?</span>
                <a
                  href="/#demo"
                  className="font-bold text-[#2563EB] hover:underline shrink-0"
                >
                  Request Free Demo →
                </a>
              </div>

              {/* Two Direct Contact Cards */}
              <div className="space-y-4 pt-2">
                {/* Phone Card */}
                <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-[#64748B]">
                      Phone Support (Direct Call)
                    </h2>
                    <a
                      href={`tel:${siteSettings.contact.phone}`}
                      className="text-base font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors block mt-0.5"
                    >
                      {siteSettings.contact.phoneDisplay}
                    </a>
                    <span className="text-xs text-[#64748B] mt-0.5 block">
                      Sunday – Thursday, 10:00 AM – 7:00 PM
                    </span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0AC79E] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-[#64748B]">
                      Email Enquiries
                    </h2>
                    <a
                      href={`mailto:${siteSettings.contact.email}`}
                      className="text-base font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors block mt-0.5"
                    >
                      {siteSettings.contact.email}
                    </a>
                    <span className="text-xs text-[#64748B] mt-0.5 block">
                      Guaranteed response within one business day
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Location Notice */}
              <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] text-xs text-[#64748B]">
                <strong className="text-[#0F172A] block mb-1">
                  Dhaka Operations Office:
                </strong>
                <span>
                  GeekSSort Development Hub, Dhaka, Bangladesh. Visits by prior appointment.
                </span>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2 px-1">
                Direct Message to SortPi Team
              </div>
              <DemoContactForm
                intent="contact"
                submitLabel="Send enquiry"
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
