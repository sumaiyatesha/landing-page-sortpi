"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { validateAndNormalizeBDPhone } from "@/lib/phone";
import { trackEvent } from "@/lib/analytics";

export interface DemoContactFormProps {
  intent?: "demo" | "contact";
  initialPlan?: string;
  initialIndustry?: string;
  submitLabel?: string;
}

export default function DemoContactForm({
  intent = "demo",
  initialPlan,
  initialIndustry,
  submitLabel,
}: DemoContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState(
    () => initialIndustry || "Retail shops"
  );
  const [branchesCount, setBranchesCount] = useState("1");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(() => initialPlan || "");
  const [showNoteField, setShowNoteField] = useState(false);

  // Honeypot field for bot protection
  const [websiteUrl, setWebsiteUrl] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const validateForm = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    if (!businessName.trim()) {
      errs.businessName = "Please enter your shop or business name.";
    }

    if (!businessType) {
      errs.businessType = "Please select your business type.";
    }

    const phoneCheck = validateAndNormalizeBDPhone(phoneNumber);
    if (!phoneCheck.isValid) {
      errs.phoneNumber =
        phoneCheck.error || "Enter a valid Bangladeshi phone number.";
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errs.email = "Please enter a valid email address.";
      }
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      // Announce and move focus to error summary
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) {
      trackEvent("demo_form_error", {
        section: intent,
        plan: selectedPlan,
      });
      return;
    }

    setIsSubmitting(true);
    trackEvent("demo_form_submit", {
      section: intent,
      plan: selectedPlan,
      industry: businessType,
    });

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          businessName,
          businessType,
          branchesCount,
          email,
          note,
          selectedPlan,
          website_url: websiteUrl,
          intent,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setSuccessMessage(
          data.message ||
            "Your request has been received. The SortPi team will contact you using the details you provided."
        );
        trackEvent("demo_form_success", {
          section: intent,
          plan: selectedPlan,
        });
      } else {
        setServerError(
          data.error ||
            "We could not send your request. Please try again or contact us directly."
        );
        trackEvent("demo_form_error", {
          section: intent,
        });
      }
    } catch {
      setServerError(
        "We could not send your request. Please try again or contact us directly at contact@sortpi.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="p-8 rounded-2xl bg-[#E6FAF5] border border-[#A7F3D0] text-[#065F46] space-y-4"
      >
        <div className="w-12 h-12 rounded-full bg-[#0AC79E] text-white flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0F172A]">
          Request Received Successfully
        </h3>
        <p className="text-sm text-[#065F46] leading-relaxed">
          {successMessage}
        </p>
        <div className="pt-2 text-xs text-[#065F46]">
          Direct helpline:{" "}
          <a href="tel:+8801341869125" className="font-bold underline">
            +88 01341869125
          </a>
        </div>
      </div>
    );
  }

  const defaultSubmitText =
    intent === "contact" ? "Send enquiry" : "Request Free Demo";
  const buttonText = submitLabel || defaultSubmitText;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 shadow-sm space-y-6"
      aria-label="Demo Request Form"
    >
      {/* Honeypot field (hidden from assistive tech and humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url">Do not fill this field</label>
        <input
          type="text"
          id="website_url"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
      </div>

      {/* Selected Plan indicator if passed from pricing */}
      {selectedPlan && (
        <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
          <div>
            <span className="text-[#64748B]">Selected Plan: </span>
            <strong className="text-[#2563EB] capitalize">
              {selectedPlan} Plan
            </strong>
          </div>
          <button
            type="button"
            onClick={() => setSelectedPlan("")}
            className="text-[11px] text-[#64748B] hover:text-[#0F172A] underline cursor-pointer"
          >
            Change
          </button>
        </div>
      )}

      {/* Server Error Alert */}
      {serverError && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-live="polite"
          className="p-4 rounded-xl bg-[#FFE4E6] border border-[#FECDD3] text-[#9F1239] text-xs sm:text-sm flex items-start gap-3 focus:outline-none"
        >
          <svg
            className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div className="space-y-1">
            <strong>Unable to submit:</strong>
            <div>{serverError}</div>
          </div>
        </div>
      )}

      {/* Row 1: Full Name & Bangladeshi Phone (2 cols on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-[#0F172A] mb-1.5"
          >
            Full name <span className="text-[#2563EB]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Rafiqul Islam"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) {
                setErrors((prev) => ({ ...prev, fullName: "" }));
              }
            }}
            className={`form-input ${errors.fullName ? "is-invalid" : ""}`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-[#E11D48] font-medium mt-1">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-[#0F172A] mb-1.5"
          >
            Phone number <span className="text-[#2563EB]">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            placeholder="017XXXXXXXX"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              if (errors.phoneNumber) {
                setErrors((prev) => ({ ...prev, phoneNumber: "" }));
              }
            }}
            className={`form-input ${errors.phoneNumber ? "is-invalid" : ""}`}
            aria-invalid={!!errors.phoneNumber}
            aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
          />
          {errors.phoneNumber && (
            <p id="phoneNumber-error" className="text-xs text-[#E11D48] font-medium mt-1">
              {errors.phoneNumber}
            </p>
          )}
          <span className="text-[11px] text-[#64748B] mt-1 block">
            Accepts 01XXXXXXXXX or +8801XXXXXXXXX
          </span>
        </div>
      </div>

      {/* Row 2: Business Name & Business Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-semibold text-[#0F172A] mb-1.5"
          >
            Business name <span className="text-[#2563EB]">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            autoComplete="organization"
            placeholder="e.g. Shapla Super Shop"
            value={businessName}
            onChange={(e) => {
              setBusinessName(e.target.value);
              if (errors.businessName) {
                setErrors((prev) => ({ ...prev, businessName: "" }));
              }
            }}
            className={`form-input ${errors.businessName ? "is-invalid" : ""}`}
            aria-invalid={!!errors.businessName}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
          />
          {errors.businessName && (
            <p id="businessName-error" className="text-xs text-[#E11D48] font-medium mt-1">
              {errors.businessName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessType"
            className="block text-sm font-semibold text-[#0F172A] mb-1.5"
          >
            Business type <span className="text-[#2563EB]">*</span>
          </label>
          <select
            id="businessType"
            name="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="form-input cursor-pointer"
          >
            <option value="Retail shops">Retail shops (Clothing, Electronics, Goods)</option>
            <option value="Super shops and grocery">Super shops and grocery</option>
            <option value="Restaurants">Restaurants & Cafes</option>
            <option value="Pharmacies">Pharmacies & Medicine counters</option>
            <option value="Wholesale">Wholesale & Bulk Trade</option>
            <option value="Multi branch businesses">Multi branch businesses</option>
            <option value="Other">Other Retail Business</option>
          </select>
        </div>
      </div>

      {/* Row 3: Optional Branches Count & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="branchesCount"
            className="block text-sm font-semibold text-[#0F172A] mb-1.5"
          >
            Number of branches <span className="text-xs text-[#64748B] font-normal">(Optional)</span>
          </label>
          <select
            id="branchesCount"
            name="branchesCount"
            value={branchesCount}
            onChange={(e) => setBranchesCount(e.target.value)}
            className="form-input cursor-pointer"
          >
            <option value="1">1 branch (Single store)</option>
            <option value="2 to 3">2 to 3 branches</option>
            <option value="4 to 10">4 to 10 branches</option>
            <option value="More than 10">More than 10 branches</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[#0F172A] mb-1.5"
          >
            Email address <span className="text-xs text-[#64748B] font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
            className={`form-input ${errors.email ? "is-invalid" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-[#E11D48] font-medium mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Optional Collapsed Note / Context field */}
      <div>
        {!showNoteField ? (
          <button
            type="button"
            onClick={() => setShowNoteField(true)}
            className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>+ Add a note or question for the team</span>
          </button>
        ) : (
          <div>
            <label
              htmlFor="note"
              className="block text-sm font-semibold text-[#0F172A] mb-1.5"
            >
              Note or workflow question <span className="text-xs text-[#64748B] font-normal">(Optional)</span>
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              placeholder="Tell us about specific items, registers, or questions you have..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="form-input min-h-[80px]"
            />
          </div>
        )}
      </div>

      {/* Submit Button & Quiet Privacy Policy Copy */}
      <div className="pt-2 space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-base font-semibold py-3 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Submitting request...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-1.5">
              <span>{buttonText}</span>
              <svg
                aria-hidden="true"
                className="w-4 h-4"
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
            </span>
          )}
        </button>

        <p className="text-xs text-[#64748B] text-center leading-relaxed">
          Your details are used strictly to respond to this demo enquiry. Read our{" "}
          <Link href="/privacy" className="text-[#0F172A] underline hover:text-[#2563EB]">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
