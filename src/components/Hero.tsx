"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101815] px-6 pb-24 pt-8 text-white">
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl text-center"
      >
        {/* top-left wordmark only, no nav links, no logo mark, no header buttons */}
        <motion.p
          variants={item}
          className="text-left font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/70"
        >
          Vaginal Health
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 font-heading text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl"
        >
          Why Vaginal Odour Keeps Coming Back,{" "}
          <span className="text-accent">Even When You&apos;re Doing Everything Right</span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Not another feminine wash or soap that only masks the smell. This is the
          framework that finally puts you back in control.
        </motion.p>

        <motion.div
          variants={item}
          className="relative mx-auto mt-10 w-full max-w-md"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-110 rounded-[2.5rem] blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(22,166,163,0.35), transparent 70%)",
            }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/30 ring-1 ring-white/10"
          >
            <Image
              src="/images/1224007.jpg"
              alt="A couple sitting apart on the edge of a bed, both reacting to a smell, the quiet distance this letter is about"
              width={640}
              height={480}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
