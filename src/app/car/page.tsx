import Image from "next/image";
import type { ReactNode } from "react";
import { RevealSection } from "@/components/RevealSection";
import { HeroDemo } from "@/components/car/HeroDemo";
import { GlareCompare } from "@/components/car/ImageCompare";
import { OrderForm } from "@/components/car/OrderForm";
import { BundleCards, StickyOrderBar } from "@/components/car/CarClient";
import { faqs, features, installSteps, testimonials } from "@/data/car";
import { CAR_DELIVERY_PROMISE, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/config";

// Section order and wording follow CAR-SALES-COPY.md. Change copy there first.

// Button after 21st.dev "Gradient CTA Banner" (@shadcnspace): pill with a circled arrow
// that nudges on hover.
function OrderCTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href="#order"
      data-testid="car-cta"
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-dw-amber py-2 pl-7 pr-2 text-center text-lg font-extrabold text-dw-ink shadow-[0_12px_30px_-8px_rgba(255,180,0,0.7)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dw-blue ${className}`}
    >
      {children}
      <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dw-ink text-dw-amber transition-transform group-hover:translate-x-0.5 group-hover:-rotate-45">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}

function TrustRow({ dark = false }: { dark?: boolean }) {
  const items = ["Pay on delivery", `Free delivery ${CAR_DELIVERY_PROMISE}`, "Money-back guarantee"];
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-sm ${dark ? "text-white/75" : "text-dw-ink/70"}`}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-1.5">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-dw-blue">
            <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t}
        </li>
      ))}
    </ul>
  );
}

const Prose = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-2xl space-y-5 px-4 text-[17px] leading-relaxed text-dw-ink/85 sm:text-lg ${className}`}>{children}</div>
);

const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-dw-ink sm:text-4xl ${className}`}>{children}</h2>
);

const Mark = ({ children }: { children: ReactNode }) => (
  <span className="rounded bg-dw-blue/12 px-1 font-semibold text-dw-ink [box-decoration-break:clone]">{children}</span>
);

export default function CarPage() {
  return (
    <main className="overflow-x-clip">
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden bg-dw-ink text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 0%, rgba(0,154,222,0.35), transparent 70%), radial-gradient(50% 45% at 95% 85%, rgba(255,180,0,0.22), transparent 70%)",
          }}
        />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-5">
          <span className="text-lg font-extrabold tracking-tight">
            Omo<span className="text-dw-amber">Stores</span>
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80">
            Free delivery · Pay on delivery
          </span>
        </div>

        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-7 px-4 pb-14 pt-8 lg:grid-cols-2 lg:items-center lg:pb-20 lg:pt-14">
          <div className="hero-in">
            <p className="text-sm font-semibold text-dw-amber sm:text-base">
              If the sun or someone&apos;s full headlights has ever blinded you on the road, even for two seconds, read this.
            </p>
            <h1 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              Your Car&apos;s Sun Visor Was Never Built To Stop This Glare
            </h1>
          </div>

          <div className="hero-in lg:col-start-2 lg:row-span-2 lg:row-start-1" style={{ animationDelay: "0.12s" }}>
            <div className="relative isolate">
              {/* Dusk orb, after 21st.dev "GlowingHero background" (@dhileepkumargm), recoloured blue-to-amber */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, transparent 40%, rgba(0,154,222,0.55) 53%, rgba(255,180,0,0.6) 63%, rgba(255,240,210,0.35) 68%, transparent 71%)",
                }}
              />
              <HeroDemo />
              <div className="float absolute -right-3 -top-10 hidden w-28 rounded-2xl bg-white p-2 shadow-2xl sm:block lg:-right-8 lg:w-32">
                <Image src="/images/car/car9.webp" alt="The DUSKWAY 2-in-1 visor" width={160} height={160} className="h-auto w-full" priority />
                <p className="mt-1 text-center text-[11px] font-bold text-dw-ink">The actual visor</p>
              </div>
            </div>
          </div>

          <div className="hero-in space-y-6" style={{ animationDelay: "0.22s" }}>
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              The low evening sun and the full headlights at night both get in under it. The DUSKWAY 2-in-1 clips on and covers that gap, with a{" "}
              <span className="font-semibold text-sky-300">grey lens for the day</span> and an{" "}
              <span className="font-semibold text-dw-amber">amber lens for the night</span>.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <OrderCTA>Order Now, Pay On Delivery</OrderCTA>
              <p className="text-sm text-white/60">
                From <span className="font-bold text-white">₦15,000</span>
              </p>
            </div>
            <TrustRow dark />
          </div>
        </div>
      </header>

      {/* ===== LEAD ===== */}
      <RevealSection className="py-14 sm:py-20">
        <Prose>
          <p className="text-xl font-semibold text-dw-ink">It&apos;s twenty to six in the evening, and you&apos;re on your way home.</p>
          <p>The road turns west, and the sun is sitting low, right at the level of your eyes.</p>
          <p>You pull the visor down, and it does nothing, because the sun isn&apos;t above it. It&apos;s under it.</p>
          <p>So you squint, put one hand up, and slow down, hoping the car in front hasn&apos;t stopped.</p>
          <p className="font-semibold text-dw-ink">For two or three seconds, you&apos;re driving on faith.</p>
          <p>Then night comes, and it&apos;s a different problem.</p>
          <p>A car or a trailer comes the other way with its full lights on. That white flash hits you, and for a moment the road in front of you is gone.</p>
          <p>
            You can&apos;t see the pothole. You can&apos;t see the okada. You can&apos;t see the man crossing in dark clothes.
          </p>
          <p>You just see spots, and you wait for your eyes to come back.</p>
          <p>If you&apos;ve driven in Nigeria for more than a week, you know exactly what I mean.</p>
        </Prose>

        <figure className="mx-auto mt-12 max-w-3xl px-4">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/car/car8.webp"
              alt="The DUSKWAY visor clipped to a car's sun visor, grey lens down, with the road clearly visible through it"
              width={960}
              height={960}
              sizes="(max-width: 768px) 100vw, 768px"
              className="aspect-[4/3] h-auto w-full object-cover object-center"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-dw-ink/60">
            Grey lens down, amber lens folded up above it. The road is still clear through the lens.
          </figcaption>
        </figure>
      </RevealSection>

      {/* ===== VILLAIN / PROBLEM MECHANISM ===== */}
      <RevealSection className="bg-white py-14 sm:py-20">
        <Prose>
          <H2>It Isn&apos;t Your Eyes</H2>
          <p>A lot of drivers start to think their eyes are getting weak.</p>
          <p>Most of the time, that isn&apos;t the problem.</p>
          <p>
            The visor in your car was made to block light coming from straight above you. It&apos;s a solid board, so the further you pull it down, the more of the road it hides as well.
          </p>
          <p>
            So you stop it halfway. And the glare comes in through <Mark>the gap between the bottom of your visor and your eyes.</Mark>
          </p>
          <div className="grid gap-3 py-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-dw-blue/20 bg-dw-blue/5 p-4">
              <p className="text-sm font-bold uppercase tracking-wide text-dw-blue">By day</p>
              <p className="mt-1 text-base">That gap is exactly where the low sun sits in the morning and evening.</p>
            </div>
            <div className="rounded-2xl border border-dw-amber/40 bg-dw-amber/10 p-4">
              <p className="text-sm font-bold uppercase tracking-wide text-amber-700">By night</p>
              <p className="mt-1 text-base">It&apos;s also exactly where oncoming headlights shine at night.</p>
            </div>
          </div>
          <p>
            And the nights are getting harder. More cars now come with very bright white LED lights, and plenty of drivers leave their full lights on, or fit brighter bulbs than the car came with.
          </p>
          <p>You can&apos;t control what the other driver does.</p>
          <p className="font-semibold text-dw-ink">And it&apos;s not your fault that your car came with a visor that only handles half the problem.</p>
        </Prose>
      </RevealSection>

      {/* ===== SOLUTION MECHANISM + DEMO ===== */}
      <RevealSection className="py-14 sm:py-20">
        <Prose>
          <H2>What Actually Covers The Gap</H2>
          <p>What you need is something that sits in that gap, but that you can still see through.</p>
          <p>That&apos;s the whole idea behind the DUSKWAY 2-in-1 visor.</p>
          <p>It clips onto the visor you already have, and it holds two see-through lenses right at the level of your eyes.</p>
          <p className="font-semibold text-dw-ink">You flip down the one you need. You still see the road through it. You just see it without the sting.</p>
        </Prose>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 px-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white">
            <span className="inline-block rounded-full bg-dw-blue px-3 py-1 text-xs font-bold uppercase tracking-wide">☀ Day</span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight">The smoke-grey lens</h3>
            <p className="mt-2 leading-relaxed text-white/80">
              Think of it like sunglasses for your windscreen. It cuts the brightness of the low sun, so you can stop squinting and see the cars ahead.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-amber-300 to-dw-amber p-6 text-dw-ink">
            <span className="inline-block rounded-full bg-dw-ink px-3 py-1 text-xs font-bold uppercase tracking-wide text-dw-amber">☾ Night</span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight">The amber lens</h3>
            <p className="mt-2 leading-relaxed text-dw-ink/80">
              When a car comes with full white lights, the amber lens softens that harsh white flash, so it doesn&apos;t hit you as hard.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl px-4">
          <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-dw-blue">See it for yourself</p>
          <H2 className="mb-6 text-center">Drag The Line Across</H2>
          <GlareCompare />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl items-center gap-8 px-4 sm:grid-cols-[1fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <Image
              src="/images/car/car7.webp"
              alt="Close-up of the hinge: each lens flips up or down on its own"
              width={894}
              height={894}
              sizes="(max-width: 640px) 100vw, 420px"
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-4 text-[17px] leading-relaxed text-dw-ink/85">
            <p className="font-semibold text-dw-ink">
              There&apos;s one thing about the night lens you should know before you buy, and most sellers leave it out.
            </p>
            <p>Any tint lets in a little less light.</p>
            <p>
              So use the amber lens when headlights are coming at you, and flip it up when the road is dark and empty. Each lens moves on its own, so it takes one second either way.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ===== PRODUCT / FEATURES ===== */}
      <RevealSection className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <H2 className="text-center">Here&apos;s What You Get</H2>
          {/* Layout after 21st.dev "Feature Bento" (@uilayout.contact) */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-white to-amber-100 md:col-span-2 md:row-span-2">
              <Image
                src="/images/car/car2.webp"
                alt="The DUSKWAY 2-in-1 visor with the amber lens up and the grey lens down"
                width={894}
                height={895}
                sizes="(max-width: 768px) 100vw, 640px"
                className="mx-auto h-auto w-full max-w-md mix-blend-multiply md:absolute md:-right-4 md:top-0 md:w-[52%]"
              />
              <div className="relative p-6 md:absolute md:bottom-0 md:left-0 md:max-w-[52%] md:p-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-dw-ink/80 px-3 py-1 text-xs font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-dw-amber" /> 2-in-1, day and night
                </span>
                <h3 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">{features[0].title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-dw-ink/75">{features[0].body}</p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-dw-blue p-6 text-white">
              <p className="text-4xl font-extrabold tracking-tight">32 × 12 cm</p>
              <p className="mt-1 text-sm font-medium text-white/85">Each lens, wide enough for your side of the windscreen</p>
            </div>
            <div className="rounded-3xl border border-dw-ink/10 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-dw-blue text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <h3 className="mt-4 text-xl font-bold">{features[1].title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-dw-ink/65">{features[1].body}</p>
            </div>
            <a href="#order" className="group relative flex min-h-[150px] flex-col justify-end rounded-3xl bg-gradient-to-br from-zinc-800 to-dw-ink p-6 text-white">
              <span className="absolute left-6 top-6 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">Order now</span>
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-dw-amber group-hover:text-dw-ink">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </span>
              <span className="text-xl font-bold leading-tight">Get yours, and pay when it arrives</span>
            </a>
            <div className="flex min-h-[150px] flex-col justify-center rounded-3xl bg-dw-ink p-6">
              <p className="text-4xl font-extrabold tracking-tight text-dw-amber">≈350 g</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">Light, so it won&apos;t drag your visor down</p>
            </div>
            <div className="flex min-h-[150px] flex-col justify-center rounded-3xl bg-gradient-to-br from-dw-amber to-amber-500 p-6 text-dw-ink">
              <p className="text-4xl font-extrabold tracking-tight">&lt; 1 min</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-dw-ink/70">To fit, no tools</p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[features[2], features[3], features[5]].map((f) => (
              <div key={f.title} className="rounded-3xl border border-dw-ink/10 bg-dw-paper p-6">
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-dw-ink/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ===== INSTALL ===== */}
      <RevealSection className="py-14 sm:py-20">
        {/* Layout after 21st.dev "How It Works Steps" (@ln-dev7): kicker, headline, numbered
            nodes on a connector line, centred CTA. Our install photos sit under each step. */}
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dw-ink/50">How it works</p>
          <H2 className="mt-3">Putting It On Takes Three Steps</H2>
          <ol className="relative mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
            <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-dw-ink/15 sm:block" />
            {installSteps.map((s, i) => (
              <li key={s.img} className="relative flex flex-col items-center">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-dw-ink/15 bg-dw-paper text-sm font-semibold tabular-nums text-dw-ink/70">
                  0{i + 1}
                </span>
                <p className="mt-4 max-w-[16rem] text-lg font-bold leading-snug">{s.text}</p>
                <div className="relative mt-4 aspect-[12/5] w-full overflow-hidden rounded-2xl ring-1 ring-dw-ink/5">
                  <Image src={s.img} alt={`Step ${i + 1}: ${s.text}`} fill sizes="(max-width: 640px) 100vw, 320px" className="object-cover" />
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <OrderCTA>Order Mine Now</OrderCTA>
          </div>
        </div>
      </RevealSection>

      {/* ===== FUTURE PACING ===== */}
      <RevealSection className="relative isolate overflow-hidden bg-dw-ink py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, rgba(0,154,222,0.22) 0%, transparent 45%, rgba(255,180,0,0.18) 100%)" }}
        />
        <div className="mx-auto max-w-2xl space-y-5 px-4 text-[17px] leading-relaxed text-white/80 sm:text-lg">
          <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl">Picture Your Next Drive</h2>
          <p>
            Picture the drive home tomorrow evening. The road turns into the sun, and instead of squinting, you just flip the <span className="font-semibold text-sky-300">grey lens</span> down and keep going.
          </p>
          <p>
            Now picture the trip to the village this December. You leave early and the sunrise is straight in front of you on the expressway, so you flip the grey lens down.
          </p>
          <p>
            Later that night, a trailer comes the other way with every light on. You flip the <span className="font-semibold text-dw-amber">amber lens</span> down, and instead of that white blast, you get a softer glow, and you keep your eyes on the road.
          </p>
          <p className="font-semibold text-white">Your family in the back never even notices anything happened.</p>
        </div>
      </RevealSection>

      {/* ===== TESTIMONIALS (placeholders, see src/data/car.ts) ===== */}
      <RevealSection className="py-14 sm:py-20">
        <H2 className="px-4 text-center">What Drivers Are Saying</H2>
        {/* Two opposing rows with edge fade, after 21st.dev "Testimonials Marquee" (@shadcnspace) */}
        <div className="dw-marquee mt-10 space-y-4 overflow-hidden py-1">
          {[testimonials, [...testimonials.slice(2), ...testimonials.slice(0, 2)]].map((row, r) => (
            <div key={r} className={`dw-marquee-track flex w-max gap-4 px-2 ${r === 1 ? "dw-reverse" : ""}`}>
              {[0, 1].map((copy) =>
                row.map((t) => (
                  <figure
                    key={`${copy}-${t.name}`}
                    aria-hidden={r === 1 || copy === 1 || undefined}
                    className={`w-[290px] shrink-0 rounded-2xl border border-dw-ink/10 bg-white p-4 sm:w-[340px] ${copy === 1 ? "dw-marquee-dup" : ""}`}
                  >
                    <figcaption className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-dw-blue to-dw-amber text-sm font-bold text-white">
                        {t.name.charAt(0)}
                      </span>
                      <span className="leading-tight">
                        <span className="block font-semibold">{t.name}</span>
                        <span className="text-sm text-dw-ink/50">{t.city}</span>
                      </span>
                      <span className="ml-auto text-sm text-dw-amber" aria-label="5 out of 5 stars">★★★★★</span>
                    </figcaption>
                    <blockquote className="mt-3 text-[15px] leading-relaxed text-dw-ink/85">&ldquo;{t.quote}&rdquo;</blockquote>
                  </figure>
                ))
              )}
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ===== PRICE + OFFER ===== */}
      <RevealSection className="bg-white py-14 sm:py-20">
        <Prose>
          <H2>What It Costs</H2>
          <p>If you ordered this same kind of visor from AliExpress, you&apos;d pay about ₦21,900 for one, plus about ₦6,900 for shipping.</p>
          <p>That&apos;s nearly ₦29,000, paid upfront to a seller you&apos;ve never met, and then you wait two to three weeks.</p>
          <p>You won&apos;t do any of that here.</p>
          <p className="rounded-2xl bg-dw-ink p-5 text-lg font-semibold leading-snug text-white">
            One DUSKWAY visor is <span className="text-dw-amber">₦15,000</span>, delivered free to your door, and you only pay when it&apos;s in your hand.
          </p>
          <p>And if there&apos;s more than one car in your house, it gets cheaper:</p>
        </Prose>
        <div className="mx-auto mt-10 max-w-4xl px-4">
          <BundleCards />
        </div>
        <Prose className="mt-10">
          <p className="text-center font-semibold text-dw-ink">
            One small bash, because you didn&apos;t see the car in front of you, costs more than this at the panel beater.
          </p>
        </Prose>
      </RevealSection>

      {/* ===== GUARANTEE ===== */}
      <RevealSection className="px-4 py-14 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[32px] bg-dw-ink p-8 text-center text-white sm:flex-row sm:p-10 sm:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-dw-amber text-center text-[11px] font-extrabold uppercase leading-tight tracking-wide text-dw-amber">
            Money
            <br />
            back
            <br />
            promise
          </div>
          <div className="space-y-3 text-[17px] leading-relaxed text-white/80">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">The Clear Road Guarantee</h2>
            <p>If the DUSKWAY doesn&apos;t do what this page says it does, send us a message and we&apos;ll give you your money back.</p>
            <p className="font-semibold text-white">No hassle and no questions asked.</p>
            <p>And because you pay on delivery, you don&apos;t risk a single naira before it&apos;s in your hands.</p>
          </div>
        </div>
      </RevealSection>

      {/* ===== URGENCY + CLOSE ===== */}
      <RevealSection className="pb-14 sm:pb-20">
        <Prose>
          <H2>Why Order Today</H2>
          <p>December is almost here. That means long road trips, early starts into the sunrise and late drives on the expressway.</p>
          <p>That&apos;s exactly when the glare is at its worst.</p>
          <p className="font-semibold text-dw-ink">Order today, and it&apos;ll be with you before you travel.</p>

        </Prose>
        {/* Close, after 21st.dev "Gradient CTA Banner" (@shadcnspace): soft blue-left / amber-right wash */}
        <div className="mx-auto mt-12 max-w-4xl px-4">
          <div
            className="rounded-[32px] border border-dw-ink/10 px-6 py-12 text-center sm:px-12"
            style={{
              background:
                "radial-gradient(45% 70% at 12% 60%, rgba(0,154,222,0.18), transparent 70%), radial-gradient(45% 70% at 88% 60%, rgba(255,180,0,0.25), transparent 70%), #fff",
            }}
          >
            <H2>You Have Two Choices</H2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-dw-ink/75">
              You can keep squinting into the sun and waiting out every set of full lights, and hope nothing is in the road during those few seconds.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-[17px] font-semibold text-dw-ink">
              Or you can clip this on in one minute, and close the gap for good.
            </p>
            <div className="mt-7">
              <OrderCTA className="w-full sm:w-auto">Yes, Send Me My Visor</OrderCTA>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ===== ORDER FORM ===== */}
      <section id="order" className="scroll-mt-4 bg-gradient-to-b from-dw-blue/10 to-dw-paper px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-dw-blue">Order form</p>
          <H2 className="mt-2 text-center">Fill This Form To Order. You Pay When It Arrives.</H2>
          <ol className="mx-auto mt-6 max-w-md space-y-2 text-[15px] text-dw-ink/75">
            {[
              "Fill the form and tap the button.",
              "WhatsApp opens with your order already typed out. Just press send.",
              "We confirm it with you and deliver it free. You pay the rider.",
            ].map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dw-ink text-xs font-bold text-white">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-[28px] bg-white p-5 shadow-xl ring-1 ring-dw-ink/5 sm:p-7">
            <OrderForm />
          </div>
        </div>
      </section>

      {/* ===== P.S. ===== */}
      <RevealSection className="py-14">
        <Prose className="space-y-4">
          <p>
            <span className="font-bold text-dw-ink">P.S.</span> Remember, you don&apos;t pay a kobo until the visor is in your hand, and delivery is free.
          </p>
          <p>
            <span className="font-bold text-dw-ink">P.P.S.</span> If it doesn&apos;t do what we said, you get your money back. No hassle and no questions.
          </p>
          <p>
            <span className="font-bold text-dw-ink">P.P.P.S.</span> The sun will be in the same spot tomorrow evening. The only thing that can change is whether you&apos;re squinting into it.
          </p>
          <div className="pt-2 text-center">
            <OrderCTA className="w-full sm:w-auto">Order Now, Pay On Delivery</OrderCTA>
          </div>
        </Prose>
      </RevealSection>

      {/* ===== FAQ ===== */}
      <RevealSection id="faq" className="scroll-mt-4 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <H2 className="text-center">Questions People Ask</H2>
          {/* Divided style, after 21st.dev "Accordion" (@boardui): + turns into × when open */}
          <div className="mt-8 divide-y divide-dw-ink/10 border-y border-dw-ink/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 pr-8 leading-relaxed text-dw-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* After 21st.dev "Minimal Footer" (@efferd): brand + blurb left, link columns right,
          soft radial glow, bordered copyright bar. Dark to match the hero. */}
      <footer className="relative isolate overflow-hidden bg-dw-ink text-sm text-white/60">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-24 -z-10 h-72 w-[36rem] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(0,154,222,0.35), transparent)" }}
        />
        <div className="mx-auto grid max-w-5xl gap-8 border-x border-white/10 px-6 py-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-extrabold text-white">
              Omo<span className="text-dw-amber">Stores</span>
            </p>
            <p className="mt-3 max-w-xs leading-relaxed">
              Small things that make everyday driving easier, delivered free and paid for on delivery.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
          <nav aria-label="On this page">
            <p className="text-xs text-white/40">On this page</p>
            <ul className="mt-3 space-y-2.5 text-white">
              <li><a href="#order" className="hover:text-dw-amber">Order now</a></li>
              <li><a href="#faq" className="hover:text-dw-amber">Questions</a></li>
            </ul>
          </nav>
          <div>
            <p className="text-xs text-white/40">Our promise</p>
            <ul className="mt-3 space-y-2.5 text-white">
              <li>Pay on delivery</li>
              <li>Free delivery {CAR_DELIVERY_PROMISE}</li>
              <li>Money-back guarantee</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-5xl border-x border-white/10 px-6 py-5 text-xs leading-relaxed">
            Use the amber lens only when you can still see the road clearly, and always drive within local road rules. The DUSKWAY is an add-on visor, not a replacement for clean glass, working headlights or prescription eyewear. Colours in photos may look slightly different on your screen.
          </p>
        </div>
        {/* Extra bottom padding so the sticky order bar never covers the last line */}
        <p className="border-t border-white/10 pb-24 pt-5 text-center text-xs">© 2026 Omo Stores. All rights reserved.</p>
      </footer>

      <StickyOrderBar />
    </main>
  );
}
