"use client";

import React, { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function LanguageToggle() {
  const [locale, setLocale] = useState<"en" | "bn">(() => {
    if (typeof document !== "undefined") {
      const saved = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1];
      if (saved === "bn" || saved === "en") return saved;
    }
    return "en";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "bn" : "en";
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    trackEvent("language_change", { language: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch language to ${locale === "en" ? "Bangla" : "English"}`}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-[#0F172A] hover:bg-slate-100 border border-[#E2E8F0] transition-colors cursor-pointer"
    >
      <span className="text-[11px] text-[#64748B]">🌐</span>
      <span>{locale === "en" ? "বাংলা" : "EN"}</span>
    </button>
  );
}
