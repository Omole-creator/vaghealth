"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { CAR_DELIVERY_PROMISE, CAR_ORDER_WHATSAPP, WEB3FORMS_KEY } from "@/lib/config";
import { deliveryTimes, naira, nigerianStates, packages, type PackageId } from "@/data/car";

export const PICK_EVENT = "duskway:pick";

type Fields = {
  name: string;
  whatsapp: string;
  phone2: string;
  email: string;
  address: string;
  state: string;
  time: string;
  confirm: boolean;
};

const empty: Fields = {
  name: "",
  whatsapp: "",
  phone2: "",
  email: "",
  address: "",
  state: "",
  time: deliveryTimes[0],
  confirm: false,
};

const NG_PHONE = /^(?:\+?234|0)[789][01]\d{8}$/;
const cleanPhone = (v: string) => v.replace(/[\s\-()]/g, "");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** The order as Web3Forms receives it. Key order is the order the fields show in the email. */
export function buildOrderFields(pkgId: PackageId, f: Fields) {
  const pkg = packages.find((p) => p.id === pkgId)!;
  const v = (x: string) => x.trim() || "-";
  return {
    "Full name": v(f.name),
    "WhatsApp number": v(f.whatsapp),
    "Other phone number": v(f.phone2),
    Email: v(f.email),
    "Delivery address": v(f.address),
    State: v(f.state),
    Package: `${pkg.title} (${pkg.visors} visor${pkg.visors > 1 ? "s" : ""})`,
    Total: naira(pkg.price),
    "Best time to deliver": v(f.time),
    Payment: "Pay on delivery",
    Delivery: "FREE",
  };
}

type Errors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().split(/\s+/).length < 2) e.name = "Please enter your first name and surname.";
  if (!NG_PHONE.test(cleanPhone(f.whatsapp))) e.whatsapp = "Enter a valid Nigerian number, like 0803 123 4567.";
  if (f.phone2.trim() && !NG_PHONE.test(cleanPhone(f.phone2))) e.phone2 = "This number doesn't look right.";
  if (!EMAIL.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.address.trim().length < 6) e.address = "Please enter your full delivery address.";
  if (!f.state) e.state = "Please choose your state.";
  if (!f.confirm) e.confirm = "Please tick this box so we know you'll be around.";
  return e;
}

const input =
  "mt-1.5 w-full rounded-xl border border-dw-ink/15 bg-white px-4 py-3 text-base text-dw-ink outline-none transition focus:border-dw-blue focus:ring-4 focus:ring-dw-blue/15 aria-[invalid=true]:border-red-500";

function Field({
  label,
  name,
  optional,
  error,
  hint,
  children,
}: {
  label: string;
  name: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-dw-ink">
        {label} {optional && <span className="font-normal text-dw-ink/50">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-dw-ink/55">{hint}</p>}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function OrderForm() {
  const [pkg, setPkg] = useState<PackageId>("2");
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [tracked, setTracked] = useState(false);
  // Honeypot: hidden from people, bots fill it, Web3Forms then drops the submission.
  const [botcheck, setBotcheck] = useState(false);

  // Bundle cards higher up the page pre-select a package here before scrolling down.
  useEffect(() => {
    const onPick = (e: Event) => setPkg((e as CustomEvent<PackageId>).detail);
    window.addEventListener(PICK_EVENT, onPick);
    return () => window.removeEventListener(PICK_EVENT, onPick);
  }, []);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const a11y = (k: keyof Fields) => ({
    id: k,
    name: k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  const chosen = packages.find((p) => p.id === pkg)!;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(f);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    if (status === "sending") return;
    setStatus("sending");
    try {
      const fields = buildOrderFields(pkg, f);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New DUSKWAY order: ${chosen.title}, ${f.state}`,
          from_name: "DUSKWAY order form",
          replyto: f.email.trim(),
          botcheck: botcheck,
          ...fields,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !data.success) throw new Error("not saved");
    } catch {
      setStatus("failed");
      return;
    }
    // Purchase, not Lead, by the owner's choice: ads optimise for buyers. Only after the order
    // is saved, and once per visit, so a second order from the same visitor isn't a second sale.
    if (!tracked) {
      const w = window as unknown as { fbq?: (...args: unknown[]) => void };
      w.fbq?.("track", "Purchase", {
        value: chosen.price,
        currency: "NGN",
        content_name: "DUSKWAY 2-in-1 Visor",
        num_items: chosen.visors,
      });
      setTracked(true);
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div data-testid="order-done" role="status" className="rounded-2xl border border-emerald-600/30 bg-emerald-50 p-6 text-center">
        <p className="text-2xl font-extrabold text-dw-ink">Thank you, {f.name.trim().split(/\s+/)[0]}. Your order is in.</p>
        <p className="mt-3 text-dw-ink/80">
          We&apos;ll call or WhatsApp you on {f.whatsapp.trim()} to confirm, then deliver {CAR_DELIVERY_PROMISE}. You pay {naira(chosen.price)} when it
          arrives.
        </p>
        <button
          type="button"
          onClick={() => {
            setF(empty);
            setStatus("idle");
          }}
          className="mt-5 text-sm font-semibold text-dw-blue underline underline-offset-4"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate data-testid="order-form" className="space-y-6">
      <fieldset className="space-y-4">
        <legend className="mb-1 text-sm font-semibold text-dw-ink">Your details</legend>
        <Field label="Full name" name="name" error={errors.name}>
          <input {...a11y("name")} autoComplete="name" className={input} value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Chinedu Okafor" />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="WhatsApp number" name="whatsapp" error={errors.whatsapp} hint="We'll confirm your order here.">
            <input {...a11y("whatsapp")} type="tel" inputMode="tel" autoComplete="tel" className={input} value={f.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="0803 123 4567" />
          </Field>
          <Field label="Other phone number" name="phone2" optional error={errors.phone2} hint="In case we can't reach the first one.">
            <input {...a11y("phone2")} type="tel" inputMode="tel" className={input} value={f.phone2} onChange={(e) => set("phone2", e.target.value)} placeholder="0901 234 5678" />
          </Field>
        </div>
        <Field label="Email" name="email" error={errors.email}>
          <input {...a11y("email")} type="email" inputMode="email" autoComplete="email" className={input} value={f.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" />
        </Field>
        <Field label="Delivery address" name="address" error={errors.address}>
          <input {...a11y("address")} autoComplete="street-address" className={input} value={f.address} onChange={(e) => set("address", e.target.value)} placeholder="House number, street and area" />
        </Field>
        <Field label="State" name="state" error={errors.state}>
          <select {...a11y("state")} className={input} value={f.state} onChange={(e) => set("state", e.target.value)}>
            <option value="">Choose your state</option>
            {nigerianStates.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        {/* Package: adapted from 21st.dev "Choice Cards" (@felipemenezes098), as native radios */}
        <fieldset>
          <legend className="text-sm font-semibold text-dw-ink">Choose your package</legend>
          <div className="mt-2 grid gap-3">
            {packages.map((p) => {
              const active = p.id === pkg;
              return (
                <label
                  key={p.id}
                  className={`relative flex cursor-pointer items-center gap-3 rounded-2xl border-2 bg-white p-3 pr-4 transition ${
                    active ? "border-dw-blue shadow-[0_8px_24px_-8px_rgba(0,154,222,0.5)]" : "border-dw-ink/10 hover:border-dw-ink/25"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value={p.id}
                    checked={active}
                    onChange={() => setPkg(p.id)}
                    className="peer sr-only"
                    data-testid={`package-${p.id}`}
                  />
                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 peer-focus-visible:ring-4 peer-focus-visible:ring-dw-blue/30 ${
                      active ? "border-dw-blue bg-dw-blue" : "border-dw-ink/25"
                    }`}
                  >
                    {active && <span className="h-2 w-2 rounded-full bg-white" />}
                  </span>
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-dw-paper">
                    <Image src="/images/car/car9.webp" alt="" fill sizes="48px" className="object-contain p-1" />
                    <span className="absolute bottom-0.5 right-0.5 rounded-md bg-dw-ink px-1 text-[10px] font-bold text-white">
                      ×{p.visors}
                    </span>
                  </span>
                  <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-bold">{p.title}</span>
                    {p.tag && (
                      <span className="rounded-full bg-dw-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-dw-ink">
                        {p.tag}
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-lg font-extrabold tabular-nums">{naira(p.price)}</span>
                    {p.was && <span className="block text-xs text-dw-ink/45 line-through tabular-nums">{naira(p.was)}</span>}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <Field label="Best time to deliver" name="time">
          <select {...a11y("time")} className={input} value={f.time} onChange={(e) => set("time", e.target.value)}>
            {deliveryTimes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </fieldset>

      <div className="rounded-2xl border border-dw-blue/25 bg-dw-blue/5 p-4">
        <dl className="grid grid-cols-2 gap-y-2 text-sm">
          <dt className="text-dw-ink/60">Package</dt>
          <dd className="text-right font-semibold">{chosen.title}</dd>
          <dt className="text-dw-ink/60">Payment</dt>
          <dd className="text-right font-semibold">Pay on delivery</dd>
          <dt className="text-dw-ink/60">Delivery</dt>
          <dd className="text-right font-semibold text-emerald-700">FREE, {CAR_DELIVERY_PROMISE}</dd>
          <dt className="border-t border-dw-ink/10 pt-2 font-bold">You pay on delivery</dt>
          <dd className="border-t border-dw-ink/10 pt-2 text-right text-xl font-extrabold tabular-nums" data-testid="order-total">
            {naira(chosen.price)}
          </dd>
        </dl>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug">
          <input
            {...a11y("confirm")}
            type="checkbox"
            checked={f.confirm}
            onChange={(e) => set("confirm", e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-dw-blue"
          />
          <span>I&apos;ll be available to receive my order and pay on delivery.</span>
        </label>
        {errors.confirm && (
          <p id="confirm-error" className="mt-1 text-sm font-medium text-red-600">
            {errors.confirm}
          </p>
        )}
      </div>

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
      />

      {status === "failed" && (
        <p role="alert" data-testid="order-failed" className="rounded-xl bg-red-50 p-3 text-center text-sm font-medium text-red-700">
          Your order didn&apos;t go through. Check your network and press the button again, or{" "}
          <a className="underline" href={`https://wa.me/${CAR_ORDER_WHATSAPP}`}>
            send it to us on WhatsApp
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        data-testid="order-submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-dw-amber px-4 py-4 text-base font-extrabold sm:text-lg text-dw-ink shadow-[0_12px_30px_-8px_rgba(255,180,0,0.7)] transition hover:brightness-105 active:scale-[0.99] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dw-blue"
      >
        {status === "sending" ? "Sending your order…" : "Place My Order"}
      </button>
      <p className="text-center text-xs text-dw-ink/55">No payment now. You pay when the visor arrives.</p>
    </form>
  );
}
