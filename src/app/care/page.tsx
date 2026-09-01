import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Actually Causes Vaginal Odour, and Why So Many Women Never Get a Straight Answer",
  description:
    "A doctor breaks down what's normal, what's not, and why washing harder usually isn't the fix.",
  openGraph: {
    title: "What Actually Causes Vaginal Odour, and Why So Many Women Never Get a Straight Answer",
    description:
      "A doctor breaks down what's normal, what's not, and why washing harder usually isn't the fix.",
    images: ["/images/1224004.jpg"],
    type: "article",
  },
};

export default function Article() {
  return (
    <main className="bg-background">
      <article className="mx-auto max-w-2xl px-6 py-16">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Women&apos;s Health · 6 min read
        </p>

        <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
          What Actually Causes Vaginal Odour, and Why So Many Women Never Get a
          Straight Answer
        </h1>

        <p className="mt-4 text-lg text-charcoal/70">
          A doctor breaks down what&apos;s normal, what&apos;s not, and why washing
          harder usually isn&apos;t the fix.
        </p>

        <p className="mt-6 text-sm text-charcoal/50">
          By Dr. Omole Kelvin &middot; Reviewed for general health information
        </p>

        <div className="relative mt-8 overflow-hidden rounded-2xl">
          <Image
            src="/images/1224004.jpg"
            alt="A woman in quiet thought"
            width={900}
            height={600}
            priority
            className="w-full object-cover"
          />
        </div>

        <div className="prose-article mt-10 space-y-5 text-lg leading-relaxed text-charcoal/90">
          <p>
            Search any women&apos;s health forum long enough and you&apos;ll find the
            same question, worded a dozen different ways. Something feels off. It&apos;s
            not the first time. And most of the answers online sound the same: wash
            more, try a new product, wait it out.
          </p>

          <p>None of those answers explain much. That&apos;s the actual problem.</p>

          <h2 className="pt-4 font-heading text-2xl font-bold text-charcoal">
            What&apos;s Actually Normal
          </h2>

          <p>
            Every vagina has a natural scent, and it changes throughout the month.
            Hormones shift it. Exercise shifts it. Even diet plays a small part. None
            of that, on its own, means anything is wrong.
          </p>

          <p>
            What tends to matter is a change from a person&apos;s own baseline, a shift
            that&apos;s stronger, sharper, or simply different than what&apos;s usual
            for them. That kind of change is a signal worth paying attention to. It
            isn&apos;t automatically a sign of poor hygiene, and it rarely means
            something is being &ldquo;done wrong.&rdquo;
          </p>

          <h2 className="pt-4 font-heading text-2xl font-bold text-charcoal">
            Where the Confusion Usually Starts
          </h2>

          <p>
            Most advice treats the smell itself as the problem to solve. In practice,
            it&apos;s closer to a symptom, a clue pointing at something else going on
            underneath.
          </p>

          <p>
            The vaginal environment maintains a delicate natural balance. When that
            balance shifts, for reasons ranging from bacterial vaginosis to
            everyday habits, the scent shifts along with it. Bacterial vaginosis in
            particular can produce a distinct odour, often more noticeable after sex,
            but it&apos;s far from the only explanation, and not every unusual smell
            points to it.
          </p>

          <p>
            Here&apos;s the part that surprises most people: some of the habits used to
            &ldquo;feel cleaner&rdquo; can actually irritate the area or disrupt that
            balance further, which is part of why the cycle of washing, covering, and
            trying yet another product tends to repeat itself instead of resolving
            anything.
          </p>

          <h2 className="pt-4 font-heading text-2xl font-bold text-charcoal">
            Why Products Alone Rarely Fix It
          </h2>

          <p>
            A wash or a wipe can mask a smell for a few hours. It can&apos;t explain
            what caused it, which means the same question tends to resurface days or
            weeks later, no closer to an answer than before.
          </p>

          <p>
            Understanding the actual cause, not just covering the symptom, is what
            tends to break that cycle. That distinction, between masking and
            understanding, is the whole gap most consumer products never address.
          </p>

          <p>
            It&apos;s also the exact gap Dr. Omole Kelvin set out to close after
            hearing the same nervous question, in slightly different words, from
            enough women to know how quietly common it actually is. The result is a
            plain-language breakdown of what&apos;s normal, what&apos;s worth watching,
            and what tends to actually help, written without the medical jargon or
            the sales pitch for yet another wash.
          </p>
        </div>

        <div className="mt-12 border-t border-charcoal/10 pt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-cta px-8 py-4 font-heading font-bold text-white transition-transform hover:scale-105"
          >
            Read the Full Breakdown
          </Link>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-charcoal/40">
          This article is for general educational purposes and isn&apos;t a substitute
          for professional medical advice.
        </p>
      </article>
    </main>
  );
}
