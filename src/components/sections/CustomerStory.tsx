"use client";

import React from "react";
import { customerStories } from "@/content/customerStories";

export default function CustomerStorySection() {
  // Filter for quotes with confirmed written consent
  const approvedStories = customerStories.filter(
    (story) => story.permissionConfirmed
  );

  // If no stories have confirmed permission, do not render fabricated quotes or empty boxes
  if (approvedStories.length === 0) {
    return null;
  }

  // If one story is approved, render a clean editorial quote layout (no carousel)
  const story = approvedStories[0];

  return (
    <section className="py-20 bg-[#F6F8FC] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 lg:p-12 rounded-2xl border border-[#E2E8F0] shadow-sm text-center">
          <blockquote className="text-lg lg:text-xl font-medium text-[#0F172A] leading-relaxed italic">
            “{story.quote}”
          </blockquote>
          <div className="mt-6 pt-6 border-t border-[#F1F5F9]">
            <div className="font-bold text-[#0F172A]">{story.author}</div>
            <div className="text-xs text-[#64748B] mt-0.5">{story.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
