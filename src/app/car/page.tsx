import Image from "next/image";
import type { ReactNode } from "react";
import { RevealSection } from "@/components/RevealSection";
import { HeroDemo } from "@/components/car/HeroDemo";
import { OrderForm } from "@/components/car/OrderForm";
import { BundleCards, PixelViewContent } from "@/components/car/CarClient";
import { faqs, installSteps, testimonials } from "@/data/car";
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
      <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dw-ink text-dw-amber transition-transform group-hover:-rotate-45">
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
    <ul className={`flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${dark ? "text-white/75" : "text-dw-ink/70"}`}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-1.5">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-dw-amber">
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
  <h2 className={`text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl ${className}`}>{children}</h2>
);

const Mark = ({ children }: { children: ReactNode }) => (
  <span className="rounded bg-dw-amber/30 px-1 font-semibold text-dw-ink [box-decoration-break:clone]">{children}</span>
);

export default function CarPage() {
  return (
    <main className="overflow-x-clip">
      <PixelViewContent />

      {/* ===== HERO: centred, video-first. Glow after 21st.dev "GlowingHero background" (@dhileepkumargm) ===== */}
      <header className="relative isolate overflow-hidden bg-dw-ink text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 40% at 50% 0%, rgba(0,154,222,0.28), transparent 70%), radial-gradient(45% 35% at 50% 100%, rgba(255,180,0,0.18), transparent 70%)",
          }}
        />
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pt-5">
          <span className="text-lg font-extrabold tracking-tight">
            Omo<span className="text-dw-amber">Stores</span>
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80">Pay on delivery</span>
        </div>

        <div className="mx-auto max-w-4xl px-4 pb-14 pt-8 text-center sm:pt-12">
          <p className="hero-in text-sm font-semibold uppercase tracking-[0.18em] text-dw-amber">For everybody who drives at night in Nigeria</p>
          <h1
            className="hero-in mx-auto mt-4 max-w-3xl text-[34px] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[56px]"
            style={{ animationDelay: "0.06s" }}
          >
            What Happens In The Three Seconds After Oncoming Full Light Blinds You?
          </h1>

          <div className="hero-in relative isolate mx-auto mt-8 max-w-3xl" style={{ animationDelay: "0.14s" }}>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, transparent 38%, rgba(0,154,222,0.4) 52%, rgba(255,180,0,0.45) 62%, transparent 70%)",
              }}
            />
            <HeroDemo />
          </div>

          <div className="hero-in mx-auto mt-8 max-w-2xl space-y-7" style={{ animationDelay: "0.22s" }}>
            <p className="text-lg leading-relaxed text-white/85 sm:text-xl">
              Most drivers just hold the steering and pray. A thin <span className="font-semibold text-dw-amber">amber shield</span> that clips onto your
              car&apos;s visor softens that white flash before it reaches your eyes, so the road doesn&apos;t disappear on you.
            </p>
            <OrderCTA className="w-full sm:w-auto">Order Now, Pay On Delivery</OrderCTA>
            <TrustRow dark />
          </div>
        </div>
      </header>

      {/* ===== LEAD: proof first, then the scene ===== */}
      <RevealSection className="py-14 sm:py-20">
        <Prose>
          <p className="text-xl font-semibold text-dw-ink sm:text-2xl">Last year, 5,421 people died on Nigerian roads. That&apos;s the FRSC&apos;s own number.</p>
        </Prose>

        {/* Stat tiles, after the 21st.dev "Feature Bento" stat tiles */}
        <div className="mx-auto my-8 grid max-w-2xl grid-cols-2 gap-3 px-4">
          <div className="rounded-3xl bg-dw-ink p-5 text-white sm:p-6">
            <p className="text-4xl font-extrabold tracking-tight text-dw-amber sm:text-5xl">5,421</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">Road deaths in Nigeria, 2024</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-dw-amber to-amber-500 p-5 text-dw-ink sm:p-6">
            <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">≈15</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-dw-ink/70">Every single day</p>
          </div>
          <p className="col-span-2 text-right text-xs text-dw-ink/45">Source: FRSC, January 2025 briefing</p>
        </div>

        <Prose>
          <p>Most of them left the house expecting to come back. Somebody was cooking for them. Somebody was waiting up.</p>
          <p>And the FRSC has been saying the same thing for years. The crashes that happen at night are the ones most likely to kill.</p>
          <figure className="my-2 border-l-4 border-dw-amber pl-5">
            <blockquote className="text-xl font-semibold leading-snug text-dw-ink">
              &ldquo;Most drivers who drive at night don&apos;t see clearly, and that is why most of these crashes are fatal at night.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm text-dw-ink/55">Boboye Oyeyemi, former Corps Marshal, FRSC</figcaption>
          </figure>
          <p>If you drive at night, you already know why.</p>
          <p>You&apos;re on the expressway after dark. A trailer comes from the other side with its full light on, and your whole windscreen turns white.</p>
          <p className="font-semibold text-dw-ink">For two, maybe three seconds, you can&apos;t see anything in front of you.</p>
          <p>Not the pothole. Not the broken-down lorry with no triangle. Not the okada man riding with no light.</p>
          <p>You just hold the steering, slow down small, and pray.</p>
          <p>Most nights, the road is clear when your eyes come back.</p>
          <p className="text-xl font-bold text-dw-ink">But it only takes one night.</p>
          <p>I won&apos;t tell you what that one night costs. You already know who is waiting for you at home.</p>
        </Prose>
      </RevealSection>

      {/* ===== VILLAIN / PROBLEM MECHANISM ===== */}
      <RevealSection className="bg-white py-14 sm:py-20">
        <Prose>
          <H2 className="text-dw-ink">It&apos;s Not Your Eyes, And It&apos;s Not Your Driving</H2>
          <p>Plenty of good drivers start to think their eyes are going.</p>
          <p>That&apos;s usually not it.</p>
          <p>
            Your car&apos;s visor was made to block the sun from above you. But full light from an oncoming car doesn&apos;t come from above.{" "}
            <Mark>It comes straight at your eyes, through the gap under your visor.</Mark>
          </p>
          <p>Pull the visor down further and it covers the road too. So the gap stays open, every single night.</p>
          <p>
            And the light coming through it is getting worse. More cars now come with very bright white bulbs, plenty of drivers fit even brighter ones,
            and many don&apos;t dim their light when they see you coming.
          </p>
          <p>You can&apos;t control the other driver.</p>
          <p className="font-semibold text-dw-ink">But you can control what reaches your eyes.</p>
        </Prose>
      </RevealSection>

      {/* ===== SOLUTION MECHANISM ===== */}
      <RevealSection className="relative isolate overflow-hidden bg-dw-ink py-14 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(50% 40% at 80% 20%, rgba(255,180,0,0.16), transparent 70%)" }}
        />
        <div className="mx-auto max-w-2xl space-y-5 px-4 text-[17px] leading-relaxed text-white/80 sm:text-lg">
          <H2 className="text-white">A See-Through Shield For The Gap</H2>
          <p>What you need is something that sits in that gap, that you can still see the road through.</p>
          <p className="font-semibold text-white">That&apos;s exactly what the DUSKWAY 2-in-1 does.</p>
          <p>It clips onto the visor you already have, and it holds two see-through lenses right at the level of your eyes.</p>
        </div>

        <figure className="mx-auto mt-10 max-w-3xl px-4">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/images/car/car8.webp"
              alt="The DUSKWAY visor clipped to a car's visor, lens down, with the road clearly visible through it"
              width={960}
              height={960}
              sizes="(max-width: 768px) 100vw, 768px"
              className="aspect-[4/3] h-auto w-full object-cover saturate-[1.25] contrast-[1.05]"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-white/55">Lens down, and you can still see the road through it.</figcaption>
        </figure>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 px-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-amber-300 to-dw-amber p-6 text-dw-ink">
            <span className="inline-block rounded-full bg-dw-ink px-3 py-1 text-xs font-bold uppercase tracking-wide text-dw-amber">☾ At night</span>
            <p className="mt-3 text-[17px] leading-relaxed">
              When full light is coming, you flip the amber lens down with one finger. It softens that harsh white flash, so it doesn&apos;t hit your eyes
              as hard and the road doesn&apos;t vanish on you.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-slate-600 to-slate-800 p-6 text-white ring-1 ring-white/10">
            <span className="inline-block rounded-full bg-dw-blue px-3 py-1 text-xs font-bold uppercase tracking-wide">☀ In the day</span>
            <p className="mt-3 text-[17px] leading-relaxed text-white/85">
              When the sun is low and right in your face, you flip down the grey lens. It cuts the brightness, so you can see the car in front of you.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-4 px-4 text-[17px] leading-relaxed text-white/75">
          <p>When you don&apos;t need them, both lenses fold up flat against your visor.</p>
          <p>
            One thing we&apos;ll tell you straight, because most sellers won&apos;t: any tint lets in a little less light. So flip the amber lens down when
            full light is coming, and up again when the road is dark and empty.
          </p>
        </div>
      </RevealSection>

      {/* ===== WHAT YOU GET: after 21st.dev "Feature Bento" (@uilayout.contact) ===== */}
      <RevealSection className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <H2 className="text-center text-dw-ink">What You Get</H2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-white to-sky-100 md:col-span-2 md:row-span-2">
              <Image
                src="/images/car/car2.webp"
                alt="The DUSKWAY 2-in-1 visor: amber lens on top, grey lens below"
                width={894}
                height={895}
                sizes="(max-width: 768px) 100vw, 640px"
                className="mx-auto h-auto w-full max-w-md mix-blend-multiply saturate-[1.3] contrast-[1.05] md:absolute md:-right-4 md:top-0 md:w-[52%]"
              />
              <div className="relative p-6 md:absolute md:bottom-0 md:left-0 md:max-w-[50%] md:p-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-dw-ink/85 px-3 py-1 text-xs font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-dw-amber" /> Night and day
                </span>
                <h3 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">Two lenses in one.</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-dw-ink/75">Amber for the night and grey for the day, each about 32 × 12 cm.</p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-dw-amber to-amber-500 p-6 text-dw-ink">
              <p className="text-4xl font-extrabold tracking-tight">&lt; 1 min</p>
              <p className="mt-1 text-sm font-semibold">To clip on. No drilling, no glue and no tools.</p>
            </div>
            <div className="rounded-3xl bg-dw-ink p-6 text-white">
              <p className="text-4xl font-extrabold tracking-tight text-dw-amber">≈350 g</p>
              <p className="mt-1 text-sm font-semibold text-white/70">Light, so it won&apos;t drag your visor down.</p>
            </div>
            <div className="rounded-3xl border border-dw-ink/10 bg-dw-paper p-6 md:col-span-2">
              <h3 className="text-lg font-bold">It works with your glasses on.</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-dw-ink/70">It sits on the car, not on your face, so you keep your own glasses on.</p>
            </div>
            <a href="#order" className="group relative flex min-h-[130px] flex-col justify-end rounded-3xl bg-gradient-to-br from-zinc-800 to-dw-ink p-6 text-white">
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-dw-amber group-hover:text-dw-ink">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </span>
              <span className="text-xl font-bold leading-tight">Get yours, and pay when it arrives</span>
            </a>
          </div>

          {/* Putting it on: after 21st.dev "How It Works Steps" (@ln-dev7), numbered nodes on a line */}
          <div className="mt-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dw-ink/50">Putting it on</p>
            <ol className="relative mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              <span aria-hidden="true" className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-dw-ink/15 sm:block" />
              {installSteps.map((s, i) => (
                <li key={s} className="relative flex flex-col items-center">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-dw-ink/15 bg-white text-sm font-semibold tabular-nums text-dw-ink/70">
                    0{i + 1}
                  </span>
                  <p className="mt-4 max-w-[15rem] text-lg font-bold leading-snug">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </RevealSection>

      {/* ===== FUTURE PACING ===== */}
      <RevealSection className="relative isolate overflow-hidden bg-dw-ink py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(255,180,0,0.16) 100%)" }}
        />
        <div className="mx-auto max-w-2xl space-y-5 px-4 text-[17px] leading-relaxed text-white/80 sm:text-lg">
          <H2 className="text-white">Picture This December</H2>
          <p>You&apos;re driving home to the village for Christmas. Your family is in the car with you, and the children are asleep at the back.</p>
          <p>Somewhere on the expressway, a trailer comes with its full light on.</p>
          <p>
            You flip the <span className="font-semibold text-dw-amber">amber lens</span> down with one finger. The flash softens, you keep your eyes on your
            lane, and you keep going.
          </p>
          <p>Nobody at the back even wakes up.</p>
          <p className="text-xl font-bold text-white">That&apos;s all this is for. Getting everybody home.</p>
        </div>
      </RevealSection>

      {/* ===== TESTIMONIALS (placeholders, see src/data/car.ts). Two opposing rows, after 21st.dev "Testimonials Marquee" (@shadcnspace) ===== */}
      <RevealSection className="py-14 sm:py-20">
        <H2 className="px-4 text-center text-dw-ink">What Drivers Are Saying</H2>
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
                      <span className="ml-auto text-sm text-dw-amber" aria-label="5 out of 5 stars">
                        ★★★★★
                      </span>
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
          <H2 className="text-dw-ink">What It Costs</H2>
          <p>Think about what one small knock costs you at the panel beater, before anything worse.</p>
          <p>Online, this same kind of visor from AliExpress is about ₦21,900, plus about ₦6,900 for shipping. You pay upfront, then you wait two to three weeks.</p>
          <p className="rounded-2xl bg-dw-ink p-5 text-lg font-semibold leading-snug text-white">
            Here, one DUSKWAY is <span className="text-dw-amber">₦15,000</span>. We deliver it free, and you pay only when it&apos;s in your hand.
          </p>
          <p>If there&apos;s more than one car in the house, it&apos;s cheaper:</p>
        </Prose>
        <div className="mx-auto mt-10 max-w-4xl px-4">
          <BundleCards />
        </div>
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
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Our Promise To You</h2>
            <p>If the DUSKWAY doesn&apos;t do what we said, send us a message on WhatsApp and we&apos;ll return your money.</p>
            <p className="font-semibold text-white">No long story, and no questions.</p>
            <p>And because you pay on delivery, you don&apos;t risk one naira before it&apos;s in your hand.</p>
          </div>
        </div>
      </RevealSection>

      {/* ===== URGENCY + CLOSE ===== */}
      <RevealSection className="pb-14 sm:pb-20">
        <Prose>
          <H2 className="text-dw-ink">Why Order Now</H2>
          <p>
            It&apos;s the ember months. Everybody is travelling home for Christmas, and FRSC runs its special safety campaign every year because the roads get
            so busy.
          </p>
          <p>More cars on the road at night means more full light coming at you.</p>
          <p className="font-semibold text-dw-ink">Order today, and it&apos;ll be with you before you travel.</p>
        </Prose>
        {/* Close, after 21st.dev "Gradient CTA Banner" (@shadcnspace): soft blue-left / amber-right wash */}
        <div className="mx-auto mt-12 max-w-4xl px-4">
          <div
            className="rounded-[32px] border border-dw-ink/10 px-6 py-12 text-center sm:px-12"
            style={{
              background:
                "radial-gradient(45% 70% at 12% 60%, rgba(0,154,222,0.18), transparent 70%), radial-gradient(45% 70% at 88% 60%, rgba(255,180,0,0.28), transparent 70%), #fff",
            }}
          >
            <H2 className="text-dw-ink">You Have Two Choices</H2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-dw-ink/75">
              You can keep driving through those three blind seconds and hoping the road is clear every time.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-[17px] font-semibold text-dw-ink">
              Or you can clip this on in one minute, and give your eyes a fighting chance.
            </p>
            <div className="mt-7">
              <OrderCTA className="w-full sm:w-auto">Yes, Send Me My Visor</OrderCTA>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ===== ORDER FORM ===== */}
      <section id="order" className="scroll-mt-4 bg-gradient-to-b from-dw-amber/15 to-dw-paper px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-amber-700">Order form</p>
          <H2 className="mt-2 text-center text-dw-ink">Fill This Form To Order. You Pay When It Arrives.</H2>
          <div className="mt-8 rounded-[28px] bg-white p-5 shadow-xl ring-1 ring-dw-ink/5 sm:p-7">
            <OrderForm />
          </div>
        </div>
      </section>

      {/* ===== P.S. ===== */}
      <RevealSection className="py-14">
        <Prose className="space-y-4">
          <p>
            <span className="font-bold text-dw-ink">P.S.</span> You don&apos;t pay one kobo until the visor is in your hand, and delivery is free.
          </p>
          <p>
            <span className="font-bold text-dw-ink">P.P.S.</span> If it doesn&apos;t do what we said, you get your money back. No long story, and no
            questions.
          </p>
        </Prose>
      </RevealSection>

      {/* ===== FAQ: divided style, after 21st.dev "Accordion" (@boardui) ===== */}
      <RevealSection id="faq" className="scroll-mt-4 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <H2 className="text-center text-dw-ink">Questions People Ask</H2>
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

      {/* After 21st.dev "Minimal Footer" (@efferd): brand + blurb, link columns, soft glow, bordered copyright bar */}
      <footer className="relative isolate overflow-hidden bg-dw-ink text-sm text-white/60">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-24 -z-10 h-72 w-[36rem] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,180,0,0.25), transparent)" }}
        />
        <div className="mx-auto grid max-w-5xl gap-8 border-x border-white/10 px-6 py-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-extrabold text-white">
              Omo<span className="text-dw-amber">Stores</span>
            </p>
            <p className="mt-3 max-w-xs leading-relaxed">Things that make Nigerian roads a little safer, delivered free and paid for on delivery.</p>
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
              <li>
                <a href="#order" className="hover:text-dw-amber">
                  Order form
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-dw-amber">
                  Questions
                </a>
              </li>
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
        <p className="border-t border-white/10 py-5 text-center text-xs">© 2026 Omo Stores. All rights reserved.</p>
      </footer>
    </main>
  );
}
