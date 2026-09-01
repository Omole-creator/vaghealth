import Link from "next/link";
import type { ReactNode } from "react";

export function CTAButton({
  href,
  children,
  variant = "solid",
  className = "",
  testId = "cta-button",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  /** Purchase-intent buttons keep the default "cta-button" testid the Playwright
   * suite checks against the checkout URL. Soft, in-page scroll anchors (like the
   * hero's secondary button) pass "nav-button" so they aren't held to that contract. */
  testId?: "cta-button" | "nav-button";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-center font-heading font-bold transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const styles =
    variant === "solid"
      ? "bg-cta text-white shadow-lg shadow-cta/30"
      : "border border-white/30 text-white hover:bg-white/10";

  return (
    <Link
      href={href}
      data-testid={testId}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
