import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101815] px-6 pb-20 pt-6 text-white sm:pt-8">
      {/* ambient glow burst, brand teal + coral, standing in for the reference's pink glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[62%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(22,166,163,0.9) 0%, rgba(232,117,117,0.5) 45%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[64%] h-[3px] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-sm"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(22,166,163,0.9) 45%, rgba(232,117,117,0.9) 55%, transparent)",
        }}
      />
      {/* thin vertical light streaks, echoing the reference layout without copying its palette */}
      {[
        { left: "12%", top: "18%", h: 90, hue: "rgba(22,166,163,0.6)" },
        { left: "22%", top: "46%", h: 60, hue: "rgba(232,117,117,0.5)" },
        { left: "82%", top: "14%", h: 110, hue: "rgba(232,117,117,0.55)" },
        { left: "90%", top: "44%", h: 70, hue: "rgba(22,166,163,0.6)" },
      ].map((streak, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute w-px blur-[1px]"
          style={{
            left: streak.left,
            top: streak.top,
            height: streak.h,
            background: `linear-gradient(180deg, transparent, ${streak.hue}, transparent)`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-3xl text-center">
        {/* top-left wordmark only, no nav links, no logo mark, no header buttons */}
        <p
          className="hero-in text-left font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/70"
          style={{ animationDelay: "0s" }}
        >
          Vaginal Health
        </p>

        <h1
          className="hero-in mt-5 font-heading text-[2rem] font-bold leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.05s" }}
        >
          Why Vaginal Odour Keeps Coming Back,{" "}
          <span className="text-accent">Even When You&apos;re Doing Everything Right</span>
        </h1>

        <p
          className="hero-in mx-auto mt-4 max-w-xl text-base text-white/70 sm:mt-6 sm:text-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Not another feminine wash or soap that only masks the smell. This is the
          framework that finally puts you back in control.
        </p>

        <div
          className="hero-in relative mx-auto mt-7 w-full max-w-md sm:mt-10"
          style={{ animationDelay: "0.15s" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-110 rounded-[2.5rem] blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(22,166,163,0.35), transparent 70%)",
            }}
          />
          {/* Same woman as the Facebook ad creative, so the click lands somewhere familiar */}
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/30 ring-1 ring-white/10">
            <Image
              src="/images/lady.jpg"
              alt="A calm, confident woman relaxing on her sofa at home"
              width={768}
              height={512}
              priority
              sizes="(max-width: 480px) 100vw, 448px"
              className="h-full w-full object-cover"
            />
          </div>
          {/* the product, visible on first paint */}
          <div className="float absolute -bottom-6 -right-2 w-[34%] sm:-right-10">
            <Image
              src="/images/bundle-transparent.png"
              alt="7 Hidden Reasons for Persistent Vaginal Odour, plus the bonus 5 Foods guide, by Dr. Omole Kelvin"
              width={331}
              height={350}
              priority
              sizes="(max-width: 480px) 34vw, 160px"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>

        <p
          className="hero-in mx-auto mt-9 max-w-md text-sm text-white/70 sm:mt-12"
          style={{ animationDelay: "0.2s" }}
        >
          By <span className="font-bold text-white">Dr. Omole Kelvin</span>
          <span className="mx-2 text-white/30">·</span>
          Over 1,000 women in Nigeria, Ghana and Kenya have read it
        </p>

        <div
          className="hero-in mt-4"
          style={{ animationDelay: "0.25s" }}
        >
          <CTAButton href="#offer" className="w-full max-w-md">
            Get Both Guides, ₦5,000
          </CTAButton>
          <p className="mt-3 text-xs text-white/50">
            Private <span className="mx-1">·</span> Instant access on your phone{" "}
            <span className="mx-1">·</span> 7-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
