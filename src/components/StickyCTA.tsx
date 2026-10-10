"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { CHECKOUT_URL } from "@/lib/config";

// Slides up once the reader is past the hero, so anyone already convinced by the
// ad can buy from wherever they are in the letter instead of hunting for a button.
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-primary/20 bg-background/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <p className="hidden flex-1 text-sm leading-tight text-charcoal/80 sm:block">
          Both guides, instant access.{" "}
          <span className="text-charcoal/50">7-day money-back guarantee.</span>
        </p>
        <CTAButton
          href={CHECKOUT_URL}
          className="w-full !py-3 sm:w-auto"
        >
          Get Both Guides, ₦5,000
        </CTAButton>
      </div>
    </div>
  );
}
