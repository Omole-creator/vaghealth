import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why The Smell Down There Keeps Coming Back, Even When You're Doing Everything Right",
  description:
    "Join over 1,057 women from Nigeria, Ghana, and Kenya who can't stop talking about us.",
  openGraph: {
    title: "Why The Smell Down There Keeps Coming Back, Even When You're Doing Everything Right",
    description:
      "Join over 1,057 women from Nigeria, Ghana, and Kenya who can't stop talking about us.",
    images: ["/images/1224007.jpg"],
    type: "website",
  },
};

const ctaClass =
  "inline-flex items-center justify-center rounded-full bg-cta px-8 py-4 text-center font-heading font-bold text-white transition-transform hover:scale-105";

export default function Care() {
  return (
    <main className="relative isolate overflow-hidden bg-[#101815] px-6 py-16 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(22,166,163,0.9) 0%, rgba(232,117,117,0.5) 45%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[57%] h-[3px] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-sm"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(22,166,163,0.9) 45%, rgba(232,117,117,0.9) 55%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-xl">
        <h1 className="text-center font-heading text-3xl font-bold leading-[1.15] sm:text-4xl">
          Why The Smell Down There Keeps Coming Back,{" "}
          <span className="text-accent">Even When You&apos;re Doing Everything Right</span>
        </h1>

        <div className="relative mx-auto mt-8 w-full max-w-md">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-110 rounded-[2.5rem] blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(22,166,163,0.35), transparent 70%)",
            }}
          />
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/30 ring-1 ring-white/10">
            <Image
              src="/images/1224007.jpg"
              alt="A couple sitting apart on the edge of a bed, both reacting to a smell"
              width={640}
              height={480}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/" className={ctaClass}>
            Get The Full Details Here
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-md space-y-5 text-lg text-white/80">
          <p>After today...</p>
          <p>You&apos;ll finally get to know the next step to take...</p>
          <p>
            And discover what other women have done to feel better and regain
            their confidence.
          </p>
          <p>
            Join over 1,057 women from Nigeria, Ghana, and Kenya who
            can&apos;t stop talking about us.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/" className={ctaClass}>
            Get Full Details Here Now!
          </Link>
        </div>
      </div>
    </main>
  );
}
