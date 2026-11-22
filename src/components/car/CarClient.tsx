"use client";

import Image from "next/image";
import { useEffect } from "react";
import { naira, packages, SINGLE_PRICE, type PackageId } from "@/data/car";
import { PICK_EVENT } from "./OrderForm";

function pick(id: PackageId) {
  window.dispatchEvent(new CustomEvent(PICK_EVENT, { detail: id }));
}

/** Fires Meta's ViewContent once per visit. Renders nothing. */
export function PixelViewContent() {
  useEffect(() => {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void };
    w.fbq?.("track", "ViewContent", { content_name: "DUSKWAY 2-in-1 Visor", value: SINGLE_PRICE, currency: "NGN" });
  }, []);
  return null;
}

// Layout after 21st.dev "Pricing Plan Card" (@cnippet-dev): name row, big price,
// divider, checklist, full-width button, heavy border + badge on the highlighted plan.
export function BundleCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
      {packages.map((p) => {
        const featured = p.id === "2";
        const each = Math.round(p.price / p.visors);
        const perks = [
          p.visors > 1 ? `${naira(each)} per visor` : "One visor for your car",
          p.was ? `You save ${naira(p.was - p.price)}` : "Free delivery to your door",
          "Pay on delivery",
          "Money-back guarantee",
        ];
        return (
          <div
            key={p.id}
            className={`relative flex flex-col rounded-3xl bg-white p-6 ${
              featured ? "border-[3px] border-dw-ink shadow-[0_24px_60px_-24px_rgba(0,154,222,0.7)] md:-translate-y-3" : "border border-dw-ink/15"
            }`}
          >
            {p.tag && (
              <span
                className={`absolute -top-3 right-5 rounded-md px-2 py-1 text-xs font-bold ${featured ? "bg-dw-ink text-white" : "bg-dw-amber text-dw-ink"}`}
              >
                {p.tag}
              </span>
            )}
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-dw-paper">
                <Image src="/images/car/car9.webp" alt="" fill sizes="48px" className="object-contain p-1" />
              </span>
              <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
            </div>
            <p className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold tracking-tight tabular-nums">{naira(p.price)}</span>
              {p.was && <span className="text-base text-dw-ink/45 line-through tabular-nums">{naira(p.was)}</span>}
            </p>
            <hr className="my-5 border-dw-ink/10" />
            <ul className="flex-1 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-[15px]">
                  <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-emerald-600">
                    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>
            <a
              href="#order"
              onClick={() => pick(p.id)}
              data-testid={`pick-${p.id}`}
              className={`mt-6 rounded-xl px-4 py-3.5 text-center text-base font-extrabold shadow-sm ${
                featured ? "bg-dw-amber text-dw-ink" : "bg-dw-ink text-white"
              }`}
            >
              Choose {p.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}
