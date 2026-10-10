import type { ReactNode } from "react";

// Server-rendered and visible by default. The fade/slide-up is driven by the tiny
// inline script in layout.tsx (no React, no animation library), so a slow phone
// never scrolls into blank space while the JS bundle is still downloading.
export function RevealSection({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <section
      id={id}
      data-reveal=""
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </section>
  );
}
