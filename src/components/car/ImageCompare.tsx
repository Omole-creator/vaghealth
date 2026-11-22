"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { GlareScene, type Mode } from "./GlareScene";

// Adapted from 21st.dev "Image Compare" (@0xuser64bit): same pointer-capture drag and
// range-input fallback for keyboard / screen readers, restyled in Tailwind, and taking
// any two layers (here, the drawn glare scene) instead of two <img> sources.
function Compare({
  before,
  after,
  beforeLabel,
  afterLabel,
  label,
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel: string;
  afterLabel: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [value, setValue] = useState(50);

  const update = (x: number) => {
    const r = ref.current!.getBoundingClientRect();
    if (r.width) setValue(Math.round(Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100))));
  };

  return (
    <figure className="w-full">
      <div
        ref={ref}
        className="relative aspect-[8/5] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-3xl bg-black shadow-2xl"
        onPointerDown={(e) => {
          if (e.button !== 0) return;
          e.currentTarget.setPointerCapture(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) update(e.clientX);
        }}
        onPointerUp={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
        }}
      >
        <div className="absolute inset-0">{before}</div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${value}%)` }}>
          {after}
        </div>
        <span className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]" style={{ left: `${value}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dw-ink shadow-lg">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M5 4L1 8l4 4M11 4l4 4-4 4" />
            </svg>
          </span>
        </span>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-dw-amber px-3 py-1 text-xs font-bold text-dw-ink">
          {afterLabel}
        </span>
      </div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-valuetext={`${100 - value}% ${afterLabel}`}
        className="mt-4 w-full accent-dw-blue"
      />
    </figure>
  );
}

export function GlareCompare() {
  const [mode, setMode] = useState<Mode>("day");
  return (
    <div>
      <div className="mb-4 flex justify-center">
        <div className="flex rounded-full border border-dw-ink/10 bg-white p-1 shadow-sm" role="group" aria-label="Driving time">
          {(["day", "night"] as const).map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                mode === m ? (m === "day" ? "bg-dw-blue text-white" : "bg-dw-ink text-dw-amber") : "text-dw-ink/60"
              }`}
            >
              {m === "day" ? "☀ Day, grey lens" : "☾ Night, amber lens"}
            </button>
          ))}
        </div>
      </div>
      <Compare
        label={`Compare ${mode} glare with and without the DUSKWAY lens`}
        beforeLabel="Without"
        afterLabel="With DUSKWAY"
        before={<GlareScene id={`cmp-${mode}-a`} mode={mode} lensOn={false} />}
        after={<GlareScene id={`cmp-${mode}-b`} mode={mode} lensOn />}
      />
    </div>
  );
}
