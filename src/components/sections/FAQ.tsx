"use client";

import React, { useState } from "react";
import { faqs } from "@/content/faqs";

export default function FAQ() {
  // First item open by default per Prompt 6
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#F6F8FC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Frequently Asked Questions
          </div>
          <h2 className="heading-section">
            Common questions about SortPi.
          </h2>
          <p className="body-large text-[#475569] mt-3">
            Straightforward answers about our platform, features, multi-branch support, and getting started.
          </p>
        </div>

        {/* Semantic Accessible Accordion */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0F172A] hover:text-[#2563EB] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2563EB]"
                >
                  <span>{faq.question}</span>
                  <div
                    aria-hidden="true"
                    className={`w-7 h-7 rounded-full bg-[#F6F8FC] border border-[#E2E8F0] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-[#2563EB] border-blue-200" : "text-[#64748B]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`btn-${faq.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#F8FAFC]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet Help Clarification */}
        <div className="text-center mt-12 text-xs text-[#64748B]">
          Have a question specific to your retail setup?{" "}
          <a href="/contact" className="text-[#2563EB] font-semibold hover:underline">
            Contact our team
          </a>{" "}
          or{" "}
          <a href="/#demo" className="text-[#2563EB] font-semibold hover:underline">
            Request a free demo
          </a>
          .
        </div>
      </div>
    </section>
  );
}
