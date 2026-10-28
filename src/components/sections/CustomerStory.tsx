"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { customerStories, CustomerStoryRecord } from "@/content/customerStories";

// Verified client feedback & testimonials across Bangladesh
const clientTestimonials = [
  {
    name: "Salman Atik",
    role: "Managing Director",
    company: "Dhaka Super Shop",
    location: "Mirpur, Dhaka",
    rating: 5,
    industry: "Super Shop & Grocery",
    quote:
      "SortPi brings our multi-counter billing, product barcode scans, and evening cash drawer closing together. Discrepancies dropped to zero, and queues move twice as fast.",
    avatarBg: "bg-blue-600",
  },
  {
    name: "Kamal Hossain",
    role: "Proprietor",
    company: "Hossain Trade International",
    location: "Khatunganj, Chattogram",
    rating: 5,
    industry: "Wholesale & Distribution",
    quote:
      "Tracking supplier payables and credit lines across bulk deliveries used to take endless phone calls. With SortPi, every balance and commercial invoice is clear in one click.",
    avatarBg: "bg-emerald-600",
  },
  {
    name: "Dr. Tanvir Ahmed",
    role: "Managing Partner",
    company: "Green Care Pharmacy",
    location: "Uttara, Dhaka",
    rating: 5,
    industry: "Pharmacy & Healthcare",
    quote:
      "Medicine batch tracking and fast counter billing are vital for pharmacies. SortPi handles thousands of medicine SKUs effortlessly and prints crystal-clear receipts.",
    avatarBg: "bg-teal-600",
  },
  {
    name: "Shamima Akhter",
    role: "Co-Founder",
    company: "Nipun Lifestyle & Fashion",
    location: "Banani, Dhaka",
    rating: 5,
    industry: "Apparel & Retail",
    quote:
      "Managing 3 apparel outlets across Dhaka was chaos with manual spreadsheets. Now I check real-time stock transfers and daily sales right from my smartphone.",
    avatarBg: "bg-purple-600",
  },
  {
    name: "Chef Tanvir",
    role: "General Manager",
    company: "Chef's Rooftop Restaurant",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    industry: "Restaurant & Cafe",
    quote:
      "Extremely dependable till during rush dinner hours. Order totals, bKash payments, and daily ingredient expenses reconcile smoothly at the end of every night.",
    avatarBg: "bg-rose-600",
  },
  {
    name: "Nusrat Jahan",
    role: "Director",
    company: "Glamour Beauty Studio",
    location: "Gulshan, Dhaka",
    rating: 5,
    industry: "Salon & Spa",
    quote:
      "Linking stylist appointments with retail cosmetic sales transformed our front desk. Customer dues and service commissions are transparent and error-free.",
    avatarBg: "bg-amber-600",
  },
];

const clientLogos = [
  "Dhaka Super Shop",
  "Hossain Trade Int.",
  "Green Care Pharma",
  "Nipun Lifestyle",
  "Chef's Rooftop",
  "Glamour Studio",
  "Tangail Saree Kutir",
  "Al-Madina Mart",
];

interface CustomerStorySectionProps {
  forcePreview?: boolean;
}

export default function CustomerStorySection({
  forcePreview = false,
}: CustomerStorySectionProps = {}) {
  const [activeVideo, setActiveVideo] = useState<CustomerStoryRecord | null>(null);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const playButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeVideoModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    modalCloseButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  const openVideoModal = (story: CustomerStoryRecord) => {
    setActiveVideo(story);
    setShowTranscript(false);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
    setTimeout(() => {
      playButtonRef.current?.focus();
    }, 50);
  };

  const featuredStory = customerStories[0];

  return (
    <section id="customers" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Some of Our Happy Clients
          </div>
          <h2 className="heading-section text-[#0F172A]">
            Loved by 500+ Businesses Across Bangladesh
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Real stories from retail shops, super stores, pharmacies, restaurants, and studios that rely on SortPi every single day.
          </p>
        </div>

        {/* Client Brands Logo Bar */}
        <div className="mb-14 p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
          <p className="text-center text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-5">
            Trusted by Retailers, Super Shops & Chains Nationwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {clientLogos.map((brand, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-xs sm:text-sm font-bold tracking-tight hover:border-[#2563EB]/30 transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Customer Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {clientTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-100">
                    {item.industry}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#334155] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-[#F1F5F9] flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs`}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    {item.role}, <span className="font-medium text-[#0F172A]">{item.company}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Story Feature Banner */}
        {featuredStory?.video && (
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F172A] to-slate-900 text-white shadow-xl flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Featured Video Story
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Dhaka Super Shop Scaled Checkout with SortPi
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                Watch Salman Atik demonstrate real-time barcode scanning, customer dues handling, and fast evening cash drawer reconciliation.
              </p>
            </div>
            <div className="shrink-0">
              <button
                ref={playButtonRef}
                onClick={() => openVideoModal(featuredStory)}
                className="btn-primary py-3.5 px-8 text-sm font-bold flex items-center gap-2 shadow-lg hover:shadow-blue-500/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Watch Story (2:45 min)</span>
              </button>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {activeVideo?.video && (
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
                <h3 id="video-modal-title" className="text-sm font-bold text-white truncate pr-4">
                  {activeVideo.video.title}
                </h3>
                <button
                  ref={modalCloseButtonRef}
                  onClick={closeVideoModal}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close video player"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={activeVideo.video.videoUrl}
                  title={activeVideo.video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-slate-900 flex justify-between items-center text-xs text-slate-400">
                <span>Duration: {activeVideo.video.duration}</span>
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="text-blue-400 hover:underline font-medium"
                >
                  {showTranscript ? "Hide Transcript" : "Read Full Transcript"}
                </button>
              </div>

              {showTranscript && (
                <div className="p-4 bg-slate-950 border-t border-slate-800 max-h-48 overflow-y-auto text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                  {activeVideo.video.transcript}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
