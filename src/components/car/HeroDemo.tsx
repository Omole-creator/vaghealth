"use client";

import { useEffect, useState } from "react";
import { GlareScene, type Mode } from "./GlareScene";

// The hero "demo video": a looping, drawn demonstration instead of a hosted clip.
// Day glare -> grey lens drops -> night headlights -> amber lens drops -> repeat.
// Tapping Day / Night or the lens switch hands control to the visitor and stops the loop.
// Night first: the page sells against full light at night; the day lens is the bonus.
const TIMELINE: { mode: Mode; lensOn: boolean; ms: number }[] = [
  { mode: "night", lensOn: false, ms: 1800 },
  { mode: "night", lensOn: true, ms: 2800 },
  { mode: "day", lensOn: false, ms: 1600 },
  { mode: "day", lensOn: true, ms: 2600 },
];

const CAPTIONS: Record<Mode, [string, string]> = {
  night: ["Full light from the other side. Your windscreen turns white.", "Amber lens down. The flash is softer, and the road is still there."],
  day: ["Evening sun under your visor, straight in your eyes.", "Grey lens down. Now you can see the car in front."],
};

export function HeroDemo() {
  const [step, setStep] = useState(0);
  const [manual, setManual] = useState<{ mode: Mode; lensOn: boolean } | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setManual({ mode: "night", lensOn: true });
    }
  }, []);

  useEffect(() => {
    if (manual) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % TIMELINE.length), TIMELINE[step].ms);
    return () => clearTimeout(t);
  }, [step, manual]);

  const { mode, lensOn } = manual ?? TIMELINE[step];
  const caption = CAPTIONS[mode][lensOn ? 1 : 0];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_80px_-20px_rgba(0,154,222,0.45)]">
        <div className="aspect-[8/5] w-full">
          <GlareScene id="hero" mode={mode} lensOn={lensOn} />
        </div>

        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${manual ? "bg-white/50" : "animate-pulse bg-red-500"}`} />
          {manual ? "Your view" : "Live demo"}
        </div>

        <p
          aria-live="polite"
          className="absolute inset-x-3 bottom-3 rounded-xl bg-black/70 px-3 py-2 text-center text-[13px] font-medium leading-snug text-white backdrop-blur sm:text-sm"
        >
          {caption}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex rounded-full border border-white/15 bg-white/5 p-1" role="group" aria-label="Driving time">
          {(["day", "night"] as const).map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => setManual({ mode: m, lensOn })}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-colors ${
                mode === m ? (m === "day" ? "bg-dw-blue text-white" : "bg-dw-amber text-dw-ink") : "text-white/70 hover:text-white"
              }`}
            >
              {m === "day" ? "☀ Day" : "☾ Night"}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-pressed={lensOn}
          onClick={() => setManual({ mode, lensOn: !lensOn })}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          {lensOn ? "Flip lens up" : "Flip lens down"}
        </button>
      </div>
    </div>
  );
}
