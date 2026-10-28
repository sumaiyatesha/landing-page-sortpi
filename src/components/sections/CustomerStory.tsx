"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { customerStories, CustomerStoryRecord } from "@/content/customerStories";

interface CustomerStorySectionProps {
  forcePreview?: boolean;
}

export default function CustomerStorySection({
  forcePreview = false,
}: CustomerStorySectionProps) {
  // Gating check: In strict production without preview mode, show ONLY confirmed stories
  const isPreviewMode =
    forcePreview ||
    process.env.NEXT_PUBLIC_PREVIEW_MODE === "true" ||
    process.env.NODE_ENV !== "production";

  const approvedStories = isPreviewMode
    ? customerStories
    : customerStories.filter((story) => story.permissionConfirmed);

  const [activeVideo, setActiveVideo] = useState<CustomerStoryRecord | null>(null);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const playButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Focus management and Escape key handling for accessible video modal
  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeVideoModal();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
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

  // If no stories are approved and preview is not allowed, omit section completely
  if (approvedStories.length === 0) {
    return null;
  }

  const featuredStory = approvedStories.find((s) => s.video) || approvedStories[0];
  const writtenStories = approvedStories.filter((s) => s.id !== featuredStory.id);

  return (
    <section
      id="customers"
      className="py-20 lg:py-28 bg-[#F6F8FC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Customer experiences
          </div>
          <h2 className="heading-section">
            Customer Reviews and Stories About SortPi POS
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Hear from business owners about how they use SortPi to manage sales,
            inventory and daily operations.
          </p>
        </div>

        {/* Desktop Composition: Left featured video (16:9), Right written feedback cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Video Card (Left Column - approx. 58%) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col justify-between">
            {/* 16:9 Poster with Visible HTML Play Button */}
            <div className="relative aspect-video w-full bg-[#0F172A] overflow-hidden group">
              {featuredStory.video?.poster && (
                <Image
                  src={featuredStory.video.poster}
                  alt="" // Decorative poster graphic; title below announces video
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                />
              )}

              {/* Accessible HTML Play Button Overlay */}
              <button
                ref={playButtonRef}
                onClick={() => openVideoModal(featuredStory)}
                aria-label={`Play customer interview: ${featuredStory.video?.title || featuredStory.customerName}`}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group-focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-xl shadow-blue-900/40 transform transition-transform group-hover:scale-110">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>

              {/* Video Duration Badge */}
              {featuredStory.video?.duration && (
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#0F172A]/85 text-white text-xs font-mono font-semibold backdrop-blur-xs">
                  {featuredStory.video.duration} MIN
                </span>
              )}
            </div>

            {/* Video Metadata & Story Title */}
            <div className="p-6 sm:p-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Featured Owner Interview
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-1">
                  {featuredStory.video?.title || "Operational Walkthrough"}
                </h3>
              </div>

              <blockquote className="text-sm sm:text-base text-[#475569] leading-relaxed italic border-l-3 border-[#2563EB] pl-4">
                “{featuredStory.quote}”
              </blockquote>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#F1F5F9] gap-3 text-xs">
                <div>
                  <strong className="text-[#0F172A] block text-sm">
                    {featuredStory.customerName}
                  </strong>
                  <span className="text-[#64748B]">
                    {featuredStory.role}, {featuredStory.businessName}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[#475569] font-medium w-fit">
                  {featuredStory.industry}
                </span>
              </div>
            </div>
          </div>

          {/* Written Feedback Cards (Right Column - approx. 42%) */}
          <div className="lg:col-span-5 space-y-6">
            {writtenStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full">
                    {story.industry}
                  </span>
                  {story.numericalEvidence && (
                    <span className="text-[11px] text-[#065F46] font-medium bg-[#E6FAF5] px-2 py-0.5 rounded">
                      Verified workflow
                    </span>
                  )}
                </div>

                <blockquote className="text-sm text-[#0F172A] leading-relaxed font-medium">
                  “{story.quote}”
                </blockquote>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-[#0F172A]">
                      {story.customerName}
                    </div>
                    <div className="text-[#64748B]">
                      {story.role}, {story.businessName}
                    </div>
                  </div>

                  <a
                    href="#solutions"
                    className="text-[#2563EB] font-semibold hover:underline"
                  >
                    View solution →
                  </a>
                </div>
              </div>
            ))}

            {/* Note on genuine reviews verification */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-[#1E3A8A] leading-relaxed">
              <strong>Authentic Business Context:</strong> SortPi interviews shop owners directly on their daily operations. Testimonials are published only with signed media consent.
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Video Modal Player (Zero embed downloads until click) */}
      {activeVideo && activeVideo.video && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeVideoModal}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-3xl w-full border border-[#E2E8F0] shadow-2xl overflow-hidden space-y-4 p-5 sm:p-6"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Customer Interview
                </span>
                <h3 id="video-modal-title" className="text-lg font-bold text-[#0F172A] mt-0.5">
                  {activeVideo.video.title}
                </h3>
              </div>
              <button
                ref={modalCloseButtonRef}
                onClick={closeVideoModal}
                aria-label="Close video player"
                className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Responsive 16:9 Video Frame */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
              <iframe
                src={`${activeVideo.video.videoUrl}?autoplay=1&rel=0`}
                title={activeVideo.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Transcript & Captions Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="text-xs font-semibold text-[#2563EB] hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <span>{showTranscript ? "Hide Transcript" : "Read Full Video Transcript"}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      showTranscript ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <span className="text-[11px] text-[#64748B]">Press Escape to close</span>
              </div>

              {showTranscript && (
                <div className="mt-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] leading-relaxed max-h-48 overflow-y-auto whitespace-pre-line font-mono">
                  {activeVideo.video.transcript}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
