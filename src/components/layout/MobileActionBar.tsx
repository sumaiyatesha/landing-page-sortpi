"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const demoElement = document.getElementById("demo");

      // Check if hero has scrolled past (e.g. 400px)
      const pastHero = scrollY > 400;

      // Check if #demo section is in viewport
      let demoInView = false;
      if (demoElement) {
        const rect = demoElement.getBoundingClientRect();
        // If top of demo is above bottom of screen and bottom of demo is below top of screen
        demoInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setIsVisible(pastHero && !demoInView);
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT")
      ) {
        setIsInputFocused(true);
      }
    };

    const handleFocusOut = () => {
      setIsInputFocused(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  if (!isVisible || isInputFocused) {
    return null;
  }

  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] p-3 px-5 shadow-lg shadow-slate-900/10 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2.5">
        <a
          href="/#demo"
          className="flex-1 btn-primary text-xs py-2.5 min-h-[42px] font-bold"
        >
          <span>Request Free Demo</span>
        </a>
        <Link
          href="/contact"
          className="btn-secondary text-xs py-2.5 min-h-[42px] font-bold px-4"
        >
          <span>Contact Us</span>
        </Link>
      </div>
    </aside>
  );
}
