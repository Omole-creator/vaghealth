"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { CHECKOUT_URL } from "@/lib/config";

export function StickyFooterCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="sticky-footer-cta"
      hidden={!visible}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/20 bg-background/95 p-3 backdrop-blur-sm transition-transform"
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <p className="hidden font-heading text-sm font-bold text-charcoal sm:block">
          Ready to finally understand what's going on?
        </p>
        <CTAButton href={CHECKOUT_URL} className="w-full sm:w-auto">
          Claim Your Offer Now
        </CTAButton>
      </div>
    </div>
  );
}
