import React from "react";
import Link from "next/link";
import { siteSettings } from "@/content/siteSettings";

export default function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-white text-[#0F172A] border-t border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand & Mission Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[#0F172A] font-bold text-xl tracking-tight"
            >
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-xs">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  <path d="M6 14h2a2 2 0 0 1 2 2v2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#0F172A]">
                Sort<span className="text-[#2563EB]">Pi</span>
              </span>
            </Link>

            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              Sales, stock and business clarity in one place. Built specifically for retail shops, super shops, grocery stores, pharmacies, and multi-branch businesses in Bangladesh.
            </p>

            <div className="text-xs text-[#64748B] pt-2">
              <span>{siteSettings.creator}</span>
              <span> • Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F172A] mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475569]">
              <li>
                <Link href="/#features" className="hover:text-[#2563EB] transition-colors">
                  Core Features
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-[#2563EB] transition-colors">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#2563EB] transition-colors">
                  Monthly Pricing
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-[#2563EB] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#2563EB] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F172A] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475569]">
              <li>
                <Link href="/contact" className="hover:text-[#2563EB] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#2563EB] transition-colors">
                  Blog & Updates
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-[#2563EB] transition-colors">
                  Request Free Demo
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-[#2563EB] transition-colors">
                  Account Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F172A] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2563EB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${siteSettings.contact.email}`}
                  className="hover:text-[#2563EB] transition-colors font-medium"
                >
                  {siteSettings.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2563EB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${siteSettings.contact.phone}`}
                  className="hover:text-[#2563EB] transition-colors font-medium"
                >
                  {siteSettings.contact.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-xs text-[#64748B] space-y-1">
              <div>Dhaka, Bangladesh</div>
              <div>Operating Sunday – Thursday</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Preserved Policies */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#64748B] gap-4">
          <div>
            © {currentYear} SortPi. All rights reserved. Built by GeekSSort.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#0F172A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#0F172A] transition-colors">
              Terms of Service
            </Link>
            <Link href="/#demo" className="hover:text-[#2563EB] font-medium transition-colors">
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
