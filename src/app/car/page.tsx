import Image from "next/image";
import type { ReactNode } from "react";
import { RevealSection } from "@/components/RevealSection";
import { AutoVideo } from "@/components/car/AutoVideo";
import { OrderForm } from "@/components/car/OrderForm";
import { BundleCards, PixelViewContent } from "@/components/car/CarClient";
import { faqs, installSteps, OFFER_HEADING, SHOW_TESTIMONIALS, testimonials } from "@/data/car";
import { CAR_DELIVERY_PROMISE, CAR_WHATSAPP_DISPLAY, CAR_WHATSAPP_URL } from "@/lib/config";

// Section order and wording follow CAR-SALES-COPY.md. Change copy there first.

// Button after 21st.dev "Gradient CTA Banner" (@shadcnspace): pill with a circled arrow.
function OrderCTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href="#order"
      data-testid="car-cta"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-dw-amber py-2 pl-7 pr-2 text-center text-lg font-extrabold text-dw-ink transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dw-blue ${className}`}
    >
      {children}
      <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dw-ink text-dw-amber">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}

const Prose = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto max-w-2xl space-y-5 px-4 text-[17px] leading-relaxed text-dw-ink/85 sm:text-lg">{children}</div>
);

const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl ${className}`}>{children}</h2>
);

const heroVideos = [
  { name: "night", caption: "At night", label: "Oncoming full light at night, without and then with the amber shield" },
  { name: "day", caption: "In the day", label: "Harsh daylight through the windscreen, with and without the grey shield" },
] as const;

export default function CarPage() {
  return (
    <main className="overflow-x-clip">
      <PixelViewContent />

      {/* ===== HERO ===== */}
      <header className="bg-dw-ink text-white">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-5 text-center">
          <div className="flex items-center justify-between">
            <p className="text-lg font-extrabold tracking-tight">
              Omo<span className="text-dw-amber">Stores</span>
            </p>
            <p className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/85">Pay on delivery</p>
          </div>
          <h1 className="hero-in mt-6 text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[44px]">
            New 2-In-1 Shield Clips Onto Your Car Visor In Seconds And Softens Full Light At Night And Harsh Sun By Day
          </h1>

          <div className="hero-in mx-auto mt-6 grid max-w-xl grid-cols-2 gap-3" style={{ animationDelay: "0.1s" }}>
            {heroVideos.map((v) => (
              <figure key={v.name}>
                <AutoVideo name={v.name} label={v.label} className="aspect-[3/4] w-full rounded-2xl bg-black object-cover" />
                <figcaption className="mt-2 text-sm font-semibold text-white/80">{v.caption}</figcaption>
              </figure>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            The next time a driver refuses to dim his light, you won&apos;t need to raise your hand or look away. Pull this down with one hand and keep your eyes on the road.
          </p>
          <OrderCTA className="mt-7 w-full sm:w-auto">Order Now, Pay On Delivery</OrderCTA>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-white/75">
            {["Pay on delivery", `Free delivery ${CAR_DELIVERY_PROMISE}`, "Money-back guarantee"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-green-500">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ===== LEAD ===== */}
      <RevealSection className="py-12 sm:py-16">
        <Prose>
          <p className="text-2xl font-bold leading-snug text-dw-ink sm:text-3xl">
            5,289 people died on Nigerian roads last year, according to the FRSC.
          </p>
          <p>That is more than 14 people every day.</p>
          <p>Each of them had somebody expecting them back home.</p>
          <p>
            When a father or a mother doesn&apos;t come back, the rent still has to be paid. The children still have to resume school. One person now has
            to carry everything alone.
          </p>
          <p>Not all of those accidents were caused by light. But every driver knows how quickly it can happen.</p>
          <p>
            <strong className="text-dw-ink">At night</strong>, one driver comes at you with full light and refuses to dim it. For about two or three
            seconds, you can&apos;t see the road. You hold your steering and hope there&apos;s no pothole, no trailer parked without light and nobody
            crossing.
          </p>
          <p>
            <strong className="text-dw-ink">In the day</strong>, it&apos;s the sun. Around 2pm it faces you directly. You bring your visor down and it still
            doesn&apos;t cover it, so you squeeze your face and use one hand to block it while you drive with the other.
          </p>
        </Prose>
      </RevealSection>

      {/* ===== PROBLEM ===== */}
      <RevealSection className="bg-white py-12 sm:py-16">
        <Prose>
          <H2 className="text-dw-ink">Why The Visor In Your Car Can&apos;t Help You</H2>
          <p>Your visor is a solid board. It blocks the sun when the sun is high.</p>
          <p>When the light is coming from the front, you would have to pull it down so low that it blocks the road too.</p>
          <p className="font-semibold text-dw-ink">So you leave it up, and the light enters your eyes.</p>
        </Prose>
      </RevealSection>

      {/* ===== PRODUCT ===== */}
      <RevealSection className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-4xl items-center gap-8 px-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white">
            <Image
              src="/images/car/car2.webp"
              alt="The DUSKWAY 2-in-1 visor with the amber shield on top and the grey shield below"
              width={894}
              height={895}
              quality={90}
              sizes="(max-width: 768px) 100vw, 430px"
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-4 text-[17px] leading-relaxed text-dw-ink/85 sm:text-lg">
            <H2 className="text-dw-ink">Use This Instead</H2>
            <p>
              It&apos;s called the DUSKWAY 2-in-1 Visor. It clips onto the visor already in your car, and it has two shields you can see the road through.
            </p>
            <p className="border-l-4 border-dw-amber pl-4">
              <strong className="text-dw-ink">Amber, for the night.</strong> Flip it down when a car is coming with full light. It softens the light before
              it reaches your eyes.
            </p>
            <p className="border-l-4 border-slate-500 pl-4">
              <strong className="text-dw-ink">Grey, for the day.</strong> Flip it down when the sun is in your face. It cuts the brightness, so you can stop
              squeezing your face.
            </p>
            <p>If you wear glasses, keep them on. When you don&apos;t need the visor, fold it up.</p>
          </div>
        </div>
      </RevealSection>

      {/* ===== INSTALL: numbered steps after 21st.dev "How It Works Steps" (@ln-dev7) ===== */}
      <RevealSection className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-4xl items-center gap-8 px-4 md:grid-cols-[300px_1fr] md:gap-14">
          <div className="md:order-2">
            <H2 className="text-dw-ink">See How To Fix It In Seconds</H2>
            <ol className="mt-6 space-y-4">
              {installSteps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 text-lg">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-dw-ink/20 font-bold">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-lg font-semibold">You don&apos;t need a mechanic.</p>
          </div>
          <AutoVideo
            name="install"
            label="Clipping the DUSKWAY onto a car visor and using it"
            className="mx-auto aspect-[9/16] w-full max-w-[300px] rounded-3xl bg-black object-cover"
          />
        </div>
      </RevealSection>

      {SHOW_TESTIMONIALS && (
        <RevealSection className="py-12 sm:py-16">
          <H2 className="px-4 text-center text-dw-ink">What Drivers Are Saying</H2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 px-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name + t.city} className="rounded-2xl border border-dw-ink/10 bg-white p-5">
                <blockquote className="leading-relaxed text-dw-ink/85">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm font-semibold">
                  {t.name}, {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </RevealSection>
      )}

      {/* ===== OFFER + GUARANTEE ===== */}
      <RevealSection className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl space-y-3 px-4 text-center text-[17px] leading-relaxed text-dw-ink/85 sm:text-lg">
          <H2 className="text-dw-ink">{OFFER_HEADING}</H2>
          <p>One visor is ₦15,000. If you have more than one car at home, the bundles are cheaper.</p>
          <p className="font-semibold text-dw-ink">We bring it to you free, and you pay when it&apos;s in your hand.</p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl px-4">
          <BundleCards />
        </div>
        <div className="mx-auto mt-12 max-w-3xl px-4">
          <div className="rounded-3xl bg-dw-ink p-7 text-center text-[17px] leading-relaxed text-white/80 sm:p-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">If It Doesn&apos;t Work For You, Take Your Money Back</h2>
            <p className="mt-3">
              If the DUSKWAY doesn&apos;t do what we said, send us a message on WhatsApp and we&apos;ll return your money. No long story, and no questions.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ===== CLOSE ===== */}
      <RevealSection className="bg-white py-12 text-center sm:py-16">
        <Prose>
          <H2 className="text-dw-ink">You Will Drive Again Tomorrow</H2>
          <p>The sun will still be there by 2pm, and so will the driver who never dims his light.</p>
          <p>You can keep managing it with one hand on your face.</p>
          <p className="font-semibold text-dw-ink">Or you can clip this on in seconds, and give your eyes a fighting chance.</p>
          <OrderCTA className="w-full sm:w-auto">Yes, Send Me My Visor</OrderCTA>
        </Prose>
      </RevealSection>

      {/* ===== ORDER FORM ===== */}
      <section id="order" className="scroll-mt-4 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-xl">
          <H2 className="text-center text-dw-ink">Fill This Form To Order. You Pay When It Arrives.</H2>
          <div className="mt-8 rounded-[28px] bg-white p-5 shadow-xl ring-1 ring-dw-ink/5 sm:p-7">
            <OrderForm />
          </div>
        </div>
      </section>

      {/* ===== FAQ: divided style, after 21st.dev "Accordion" (@boardui) ===== */}
      <RevealSection className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4">
          <H2 className="text-center text-dw-ink">Questions People Ask</H2>
          <div className="mt-8 divide-y divide-dw-ink/10 border-y border-dw-ink/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-45">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 pr-8 leading-relaxed text-dw-ink/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </RevealSection>

      <footer className="bg-dw-ink px-4 py-8 text-center text-sm text-white/70">
        <p>
          Questions? WhatsApp{" "}
          <a href={CAR_WHATSAPP_URL} className="font-semibold text-white underline underline-offset-2">
            {CAR_WHATSAPP_DISPLAY}
          </a>
        </p>
        <p className="mt-3 text-xs">© 2026 Omo Stores. All rights reserved.</p>
      </footer>
    </main>
  );
}
