"use client";

import { useEffect, useRef } from "react";

// Muted, looping clip that only downloads and plays once it is near the screen, and
// pauses when it leaves. Visitors with reduced motion get the poster and play controls.
export function AutoVideo({
  name,
  label,
  className = "",
}: {
  name: "night" | "day" | "install";
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // React does not write `muted` into the HTML, and iOS needs it to autoplay
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.controls = true;
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().catch((err: DOMException) => {
            // AbortError only means we paused it again before it started.
            if (err.name !== "AbortError") v.controls = true;
          });
        } else v.pause();
      },
      { rootMargin: "100px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={`/videos/car/${name}.jpg`}
      src={`/videos/car/${name}.mp4`}
      aria-label={label}
      preload="none"
      muted
      loop
      playsInline
    />
  );
}
