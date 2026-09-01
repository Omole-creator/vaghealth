import Image from "next/image";
import { Hero } from "@/components/Hero";
import { RevealSection } from "@/components/RevealSection";
import { SeamlessImage } from "@/components/SeamlessImage";
import { CTAButton } from "@/components/CTAButton";
import { OfferBox } from "@/components/OfferBox";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ScreenshotProof } from "@/components/ScreenshotProof";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AvoidThis } from "@/components/AvoidThis";
import { CHECKOUT_URL } from "@/lib/config";
import {
  testimonials,
  whatsInside,
  secondLayer,
  foodBonus,
  offer1,
  offer2,
  faqs,
} from "@/data/content";

const prose = "mx-auto max-w-2xl space-y-4 text-lg leading-relaxed text-charcoal/90";

export default function Home() {
  return (
    <main>
      <Hero />

      <RevealSection id="letter" className="px-6 py-12" delay={0}>
        <div className={prose}>
          <p>Dear Friend,</p>
          <p>You shower every day.</p>
          <p>You wash properly.</p>
          <p>You change your underwear on time.</p>
          <p>You&apos;ve probably tried a feminine wash or two along the way.</p>
          <p>So why does the smell keep finding its way back?</p>
          <p>And why has nobody ever properly explained what&apos;s actually causing it?</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/90">
            <h2 className="font-heading text-3xl font-bold text-charcoal">
              The Question You Don&apos;t Say Out Loud
            </h2>
            <p>You meet someone you actually like.</p>
            <p>Things start to feel close.</p>
            <p>And then, slowly, something shifts.</p>
            <p>Replies get shorter. Calls become less frequent.</p>
            <p>He starts pulling away, and you&apos;re not really sure why.</p>
            <p>You start replaying everything in your head.</p>
            <p>Did I do something wrong? Was it something I said?</p>
            <p>And somewhere in that spiral, a quieter thought creeps in.</p>
            <p className="font-heading font-bold text-charcoal">Was it the smell?</p>
            <p>
              Maybe he noticed. Maybe he didn&apos;t know how to bring it up. Maybe he
              just pulled back instead.
            </p>
            <p>You&apos;ll probably never know for sure. But the wondering is exhausting on its own.</p>
          </div>
          <SeamlessImage
            src="/images/1224006.jpg"
            alt="A woman reacting to an unwanted smell, pinching her nose"
            width={540}
            height={360}
            className="mx-auto aspect-[4/3] w-full max-w-sm"
          />
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-4">
        <SeamlessImage
          src="/images/1224007.jpg"
          alt="A couple sitting apart on the edge of a bed, both reacting to a smell, the tension of distance between them"
          width={1200}
          height={700}
          className="mx-auto aspect-[16/9] w-full max-w-4xl"
        />
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
          <SeamlessImage
            src="/images/1224010.jpg"
            alt="A woman checking her underwear, unsure and self-conscious"
            width={480}
            height={420}
            className="order-2 mx-auto aspect-[4/3] w-full max-w-sm md:order-1"
          />
          <div className="order-1 space-y-4 text-lg leading-relaxed text-charcoal/90 md:order-2">
            <h2 className="font-heading text-3xl font-bold text-charcoal">
              It Doesn&apos;t Stay In Your Head
            </h2>
            <p>Once you start worrying about how you smell, it doesn&apos;t stay a private thought.</p>
            <p>It follows you into every moment of intimacy.</p>
            <p>You become distracted instead of present. You start checking, just to be sure.</p>
            <p>You think twice before getting close to someone.</p>
            <p>You wonder if the person next to you notices what you notice.</p>
            <p>So you wash again. You buy another product.</p>
            <p>And when it comes back anyway, the frustration builds.</p>
            <p>You&apos;re right back where you started, just a little more anxious than before.</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.chiamaka} />
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className={prose}>
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            Here&apos;s What&apos;s Actually True
          </h2>
          <p>You are not supposed to smell like perfume down there.</p>
          <p>A natural vaginal scent is completely normal.</p>
          <p>
            What matters is when your usual smell changes, and becomes stronger or
            different than what you&apos;re used to.
          </p>
          <p>That kind of change is usually a signal. Not a failure on your part.</p>
          <p>And the answer isn&apos;t always &ldquo;wash better.&rdquo;</p>
          <p>Sometimes what you need isn&apos;t another product at all.</p>
          <p>You need to understand what&apos;s actually changing, and why.</p>
        </div>
      </RevealSection>

      <RevealSection className="bg-charcoal/[0.03] px-6 py-12">
        <div className={prose}>
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            And Here&apos;s Why Nobody Ever Told You This
          </h2>
          <p>There&apos;s a reason it took this long to get a straight answer.</p>
          <p>Feminine wash brands sell freshness. Not understanding.</p>
          <p>
            A product that just masks the smell gets bought again next month. A
            product that actually explains what&apos;s happening doesn&apos;t need a
            refill.
          </p>
          <p>
            So you keep buying. You keep guessing. And the real reason stays exactly
            where it&apos;s always been, hidden behind a shelf of products that were
            never built to explain anything.
          </p>
          <p>That&apos;s not your fault. Nobody sat you down and told you the truth. So I did.</p>
        </div>

        <div className="mt-10">
          <AvoidThis
            src="/images/generic-products-shelf.jpg"
            alt="A shelf of feminine wash products, blurred, marked with an X"
            caption="Another wash. Another spray. None of them ever explained anything."
          />
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className={prose}>
          <h2 className="font-heading text-3xl font-bold text-charcoal">Why I Wrote This Guide</h2>
          <p>
            I&apos;ve sat across from enough women asking the same nervous question, in
            slightly different words, to know how much this weighs on people quietly.
          </p>
          <p>Almost every one of them had already tried two or three products before asking for help.</p>
          <p>Almost none of them had ever been told what was actually going on, in a way that made sense.</p>
          <p>
            That gap, between &ldquo;here&apos;s a product&rdquo; and &ldquo;here&apos;s
            why this keeps happening,&rdquo; is exactly what this guide was built to
            close.
          </p>
          <p>No complicated medical lecture. No shame. No pretending one magic product works for every woman.</p>
          <p>Just a clearer way to understand what&apos;s happening, and what to do next.</p>
          <p className="font-heading italic text-charcoal/70">Dr. Omole Kelvin</p>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.temitope} />
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/90">
            <h2 className="font-heading text-3xl font-bold text-charcoal">
              Where Most Women Get Stuck
            </h2>
            <p>Here&apos;s where the cycle usually starts.</p>
            <p>Women treat the smell as the problem. But the smell is usually just a clue.</p>
            <p>Your vaginal environment has a natural balance.</p>
            <p>When that balance shifts, your usual scent shifts with it.</p>
            <p>
              Bacterial vaginosis, for example, can cause a distinct odour. It&apos;s
              often more noticeable after sex.
            </p>
            <p>But that doesn&apos;t mean every unusual smell is BV.</p>
            <p>And it doesn&apos;t mean every odour issue is a hygiene issue.</p>
            <p>
              In fact, some of the things women do to &ldquo;feel cleaner&rdquo; can
              actually irritate the area, or disrupt its natural balance even further.
            </p>
            <p>So you wash more. Cover more. Try another product.</p>
            <p>And the cycle repeats itself, instead of actually solving anything.</p>
          </div>
          <SeamlessImage
            src="/images/1224004.jpg"
            alt="A woman resting her head on her arm, pensive"
            width={540}
            height={640}
            className="mx-auto aspect-[3/4] w-full max-w-sm"
          />
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className={prose}>
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            What Changes Once You Understand
          </h2>
          <p>Once you actually understand what&apos;s happening in your body, a few things shift.</p>
          <p>You stop treating every unusual scent as proof that you&apos;re dirty or careless.</p>
          <p>
            You&apos;re able to tell the difference between a normal shift, and
            something that genuinely deserves attention.
          </p>
          <p>
            You stop bouncing from one random product to the next, because you finally
            have a framework for what to look for.
          </p>
          <p>
            You feel more confident about what&apos;s happening in your body, without
            needing anyone else to explain it to you.
          </p>
          <p>You stop replaying every quiet moment someone pulled away, wondering if it was you.</p>
          <p>And you spend far less time anxious about your body, and far more time simply living in it.</p>
          <p>
            That shift starts with understanding, and that&apos;s exactly what this
            guide was built to give you.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.ngozi} />
      </RevealSection>

      <RevealSection className="px-6 pb-16 text-center">
        <CTAButton href="#guide" testId="nav-button">
          Yes, Help Me Understand What&apos;s Happening
        </CTAButton>
      </RevealSection>

      {/* PRODUCT REVEAL */}
      <RevealSection id="guide" className="bg-charcoal/[0.03] px-6 py-12 text-center">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          Introducing
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
          7 Hidden Reasons for Persistent Vaginal Odour
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-charcoal/70">
          Why It Keeps Coming Back, What You May Be Doing Wrong, and How to Finally
          Take Control
        </p>

        <Image
          src="/images/1224003.png"
          alt="7 Hidden Reasons for Persistent Vaginal Odour, book cover by Dr. Omole Kelvin"
          width={420}
          height={560}
          className="mx-auto mt-10 w-full max-w-xs drop-shadow-2xl"
        />

        <div className={`${prose} mt-10 text-left sm:text-center`}>
          <p>This isn&apos;t a book that tells you to buy another product and hope for the best.</p>
          <p>It walks you through what may actually be happening beneath the surface.</p>
          <p>Which everyday habits could be quietly making things worse.</p>
          <p>
            And exactly what to do about each one, so you&apos;re not just naming the
            problem, you&apos;re finally solving it.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
          Here&apos;s What You&apos;ll Discover Inside
        </h2>
        <ul className="mx-auto mt-8 max-w-2xl space-y-4">
          {whatsInside.map((line) => (
            <li key={line} className="flex gap-3 text-lg text-charcoal/90">
              <span className="mt-1 shrink-0 text-primary">&#8226;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <ScreenshotProof
          src="/images/1224024.jpg"
          alt="A WhatsApp message from a customer thanking Dr. Omole Kelvin for the guide"
          caption="A message from a customer, shared with her permission."
        />
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.njeri} />
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className={`${prose} text-center`}>
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            What This Is Actually Worth
          </h2>
          <p>Think about how much you&apos;ve already spent trying to solve this on your own.</p>
          <p>The washes. The wipes. The treatments that worked for a week, then stopped.</p>
        </div>
        <div className="mt-10">
          <OfferBox {...offer1} />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-center text-charcoal/60">
          And that&apos;s not even everything you&apos;re getting inside the first guide.
        </p>
      </RevealSection>

      <RevealSection className="bg-charcoal/[0.03] px-6 py-12">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
          And That&apos;s Just the Beginning
        </h2>
        <ul className="mx-auto mt-8 max-w-2xl space-y-4">
          {secondLayer.map((line) => (
            <li key={line} className="flex gap-3 text-lg text-charcoal/90">
              <span className="mt-1 shrink-0 text-primary">&#8226;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <SeamlessImage
          src="/images/1224005.jpg"
          alt="A woman looking down, contemplative"
          width={420}
          height={320}
          className="mx-auto aspect-[4/3] w-full max-w-xs"
        />
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.ama} />
      </RevealSection>

      {/* BONUS */}
      <RevealSection className="px-6 py-12">
        <div className={`${prose} text-center`}>
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            The Question You&apos;re Probably Also Asking
          </h2>
          <p>What should I eat? Does pineapple really help? Should I cut out sugar?</p>
          <p>So I&apos;m including a second guide, at no extra cost.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-10 md:grid-cols-[320px_1fr] md:items-start">
          <Image
            src="/images/1223997.png"
            alt="The 5 Foods That Affect Vaginal Odour, bonus book cover"
            width={320}
            height={427}
            className="mx-auto w-full max-w-[280px] drop-shadow-xl"
          />
          <div>
            <h3 className="font-heading text-2xl font-bold text-charcoal">
              BONUS: The 5 Foods That Affect Vaginal Odour
            </h3>
            <p className="mt-1 text-charcoal/70">
              What to Eat, What to Avoid, and the Diet Connection Nobody Talks About
            </p>
            <div className="mt-4 space-y-3 text-charcoal/90">
              <p>This one cuts through the usual internet noise around diet and vaginal health.</p>
              <p>
                It&apos;s not &ldquo;eat this fruit and everything changes.&rdquo; It&apos;s
                not &ldquo;never touch sugar again.&rdquo;
              </p>
              <p>
                Just a clear, honest look at what food may, and may not, actually have
                to do with vaginal odour. Here&apos;s what&apos;s inside:
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {foodBonus.map((line) => (
                <li key={line} className="flex gap-3 text-charcoal/90">
                  <span className="mt-1 shrink-0 text-primary">&#8226;</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.efua} />
      </RevealSection>

      <RevealSection id="offer" className="bg-charcoal/[0.03] px-6 py-12">
        <div className="mb-10 text-center">
          <p className="text-lg text-charcoal/80">
            For ₦5,000, you get both guides delivered instantly.
          </p>
          <p className="text-charcoal/60">
            Private access you can keep on your phone. Return to it whenever you need
            it.
          </p>
        </div>
        <OfferBox {...offer2} />
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <ScreenshotProof
          src="/images/1159158.jpg"
          alt="A WhatsApp message from a customer saying she wishes she'd found the guide sooner"
          caption="Another review from a different customer."
        />
      </RevealSection>

      <RevealSection className="bg-[#101815] px-6 py-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center text-lg leading-relaxed text-white/80">
          <h2 className="font-heading text-3xl font-bold text-white">
            The &ldquo;<span className="text-accent">You Can&apos;t Lose</span>&rdquo; Guarantee
          </h2>
          <p>Read both guides. Go through the checklists and the reset.</p>
          <p>
            If you don&apos;t feel like you finally understand what&apos;s actually
            going on, and feel more in control than you did before, send me a DM
            within 7 days.
          </p>
          <p>I&apos;ll refund every naira. You don&apos;t even have to send the guides back. Keep them anyway.</p>
          <p>No hassles. No questions asked.</p>
          <p>That&apos;s how confident I am this actually changes things for you.</p>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.blessing} />
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
          A Few Honest Answers Before You Go
        </h2>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.wanjiru} />
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/90">
            <h2 className="font-heading text-3xl font-bold text-charcoal">
              What Waiting Actually Costs You
            </h2>
            <p>Every week you wait is another week of wondering.</p>
            <p>Maybe you buy one more product that still won&apos;t explain why this keeps happening.</p>
            <p>You hesitate before getting close to someone, just in case.</p>
            <p>
              And when someone pulls away, that same quiet doubt creeps back in. Was
              it you? Or something you never even got the chance to fix?
            </p>
            <p>
              The real cost of guessing isn&apos;t just the money. It&apos;s the
              confidence you keep losing a little more of, every time this comes back.
            </p>
            <p>₦5,000 is less than you&apos;ve probably already spent trying to fix this the wrong way.</p>
          </div>
          <SeamlessImage
            src="/images/1224008.jpg"
            alt="A woman looking down, distressed, tension visible"
            width={420}
            height={320}
            className="mx-auto aspect-[4/3] w-full max-w-sm"
          />
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.abena} />
      </RevealSection>

      <RevealSection className="px-6 py-12">
        <div className={prose}>
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            You Don&apos;t Have To Keep Wondering
          </h2>
          <p>You don&apos;t have to keep wondering if it was something you did.</p>
          <p>
            You don&apos;t have to keep guessing your way through another product that
            only works for a week.
          </p>
          <p>Click the button below. Complete your payment. Get instant access to both guides today.</p>
          <p>I can&apos;t wait to hear your testimony.</p>
          <p className="font-heading italic text-charcoal/70">Dr. Omole Kelvin</p>
        </div>
        <div className="mt-8 flex justify-center">
          <CTAButton href={CHECKOUT_URL} testId="cta-button">
            Get Instant Access Now, ₦5,000
          </CTAButton>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <ScreenshotProof
          src="/images/1224023.jpg"
          alt="A WhatsApp message from a customer saying the odour hasn't come back"
          caption="Every day, I keep getting reviews like these."
        />
      </RevealSection>

      <RevealSection className="px-6 py-6">
        <TestimonialCard {...testimonials.achieng} />
      </RevealSection>

      <RevealSection className="px-6 pb-24 pt-4">
        <div className={prose}>
          <p>
            P.S. You could keep guessing and buying products that only mask it for a
            week. Or you could finally know what&apos;s going on, for ₦5,000. Get
            instant access now.
          </p>
          <p>
            P.P.S. Remember, you keep both guides either way, even if you ask for a
            refund. There&apos;s no risk from your end.
          </p>
          <p>
            P.P.P.S. Once I&apos;ve gathered more reviews for the next update, the
            price goes back up to ₦15,000. If you&apos;re reading this today,
            you&apos;re still inside the ₦5,000 window.
          </p>
        </div>
        <div className="mt-8 text-center">
          <CTAButton href={CHECKOUT_URL} className="mx-auto" testId="cta-button">
            Get Instant Access Now, ₦5,000
          </CTAButton>
        </div>
      </RevealSection>

    </main>
  );
}
