"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteSettings, mainNavigation } from "@/content/siteSettings";
import LanguageToggle from "./LanguageToggle";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key and focus management for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Move focus into the drawer
      setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Filter navigation links based on proof approval
  const visibleNav = mainNavigation.filter((item) => {
    if (item.requiresProof && !siteSettings.hasApprovedCustomerLogos) {
      return false;
    }
    return true;
  });

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-[#E2E8F0] ${
        isScrolled ? "shadow-sm shadow-slate-900/5" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#0F172A] font-bold text-xl tracking-tight focus-visible:outline-2 focus-visible:outline-[#2563EB] rounded-lg"
          aria-label="SortPi Homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-sm shadow-blue-600/30">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#475569]"
        >
          {visibleNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-[#0F172A] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#2563EB] rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Area (Strict labels from Image 1) */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F6F8FC] border border-[#E2E8F0] transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/#demo"
            className="inline-flex items-center gap-1.5 min-h-[44px] px-5 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm shadow-blue-600/20 transition-all hover:-translate-y-0.5"
          >
            <span>Request Free Demo</span>
            <svg
              aria-hidden="true"
              className="w-3.5 h-3.5"
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
        </div>

        {/* Mobile Hamburger Button with Label */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[#0F172A] hover:bg-[#F6F8FC] border border-[#E2E8F0] focus-visible:outline-2 focus-visible:outline-[#2563EB]"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
            {mobileMenuOpen ? "Close" : "Menu"}
          </span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Focus Managed Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-16 z-50 md:hidden flex flex-col bg-white"
        >
          {/* Backdrop Click Close */}
          <div
            ref={drawerRef}
            className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                Navigation
              </span>
              <nav className="flex flex-col space-y-3">
                {visibleNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold text-[#0F172A] hover:text-[#2563EB] py-2 border-b border-[#F1F5F9]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-semibold text-[#64748B]">Language:</span>
                <LanguageToggle />
              </div>
              <Link
                href="/#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-primary text-center"
              >
                <span>Request Free Demo</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
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

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-secondary text-center"
              >
                <span>Contact Us</span>
              </Link>

              <div className="text-center pt-2">
                <span className="text-xs text-[#64748B]">
                  {siteSettings.creator} • Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
