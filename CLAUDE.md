# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Next.js 14 (App Router) direct-response sales page for a two-part vaginal-health ebook bundle ("7 Hidden Reasons for Persistent Vaginal Odour" + the food bonus guide). The entire page is one long scroll (`src/app/page.tsx`), built from the finalized copy in `SALES-COPY-FINAL.md`, which itself was revised against the rules in `COPYWRITING-PLAYBOOK.md`. Any copy change should happen in `SALES-COPY-FINAL.md` first, then be mirrored into `src/data/content.ts` / `src/app/page.tsx`, not the other way around.

## Commands

```bash
npm run dev          # start the dev server (localhost:3000)
npm run build         # production build
npm run start         # run the production build
npm run lint          # next lint
npm test              # runs `playwright test` (starts its own dev server via webServer config)
npx playwright test tests/conversion.spec.ts -g "sticky footer"   # run a single test by title
npx playwright install chromium   # one-time browser install if tests fail with a missing-browser error
```

Playwright's `webServer` targets `http://127.0.0.1:3000`, not `localhost:3000`, on purpose. In this environment, Node's `fetch`/undici health-check against `localhost` intermittently resolves to a dead IPv6 address and times out with "The user aborted a request." Keep `playwright.config.ts` and any manual server checks on `127.0.0.1`.

## Architecture

**Content lives in three layers, in this order of authority:**
1. `SALES-COPY-FINAL.md` — the actual sales letter, section by section, with `[IMG: ...]`, `[BUTTON: ...]`, and `[TESTIMONIAL]` placement tags, plus a "BUILD NOTES" section at the bottom mapping every image asset and testimonial to where it belongs on the page. This is the source of truth for wording.
2. `src/data/content.ts` — the same letter's structured data (testimonials, bulleted lists, the two offer stacks, FAQ items) as typed objects, imported into the page.
3. `src/app/page.tsx` — assembles everything into JSX, in the exact section order documented in `SALES-COPY-FINAL.md`'s build notes.

**Design system:** `tailwind.config.ts` defines the fixed brand palette (`primary`, `background`, `charcoal`, `cta`, `accent`) and two font tokens (`font-heading` → DM Sans 700, `font-body` → Inter 400, both loaded via `next/font/google` in `src/app/layout.tsx`). The hero (`src/components/Hero.tsx`) is the one section that deliberately breaks from the warm `background` palette into a dark charcoal background with a radial teal/coral glow, modeled on a dramatic SaaS-landing-page reference the user supplied, recolored to this brand's palette. Every other section stays on the warm background.

**Motion:** `src/components/RevealSection.tsx` wraps every below-the-fold section in a Framer Motion `whileInView` fade/slide-up, so sections animate in one at a time on scroll instead of rendering statically. The hero uses its own load-triggered `staggerChildren` animation (not scroll-triggered, since it's above the fold on first paint).

**Two CTA testid contracts, don't conflate them:** `src/components/CTAButton.tsx` takes a `testId` prop. Purchase-intent buttons (the actual `₦5,000` offer buttons) default to `data-testid="cta-button"` and must have an `href` pointing at `CHECKOUT_URL` or an in-page `#offer` anchor, because `tests/conversion.spec.ts` asserts every `cta-button` resolves to `^(#offer|https://selar\.co/)`. Soft in-page scroll links (the hero's two buttons, the mid-letter "help me understand" button) must instead pass `testId="nav-button"` so they're excluded from that checkout-URL assertion.

**Checkout URL:** `src/lib/config.ts` exports a single `CHECKOUT_URL` constant, currently a `#offer` placeholder. Every `CTAButton` with the default testid reads from it, so wiring the real Selar checkout link is a one-line change in that file, never hardcoded per-button.

**Two image treatments, chosen deliberately per asset type, don't blur them together:**
- `src/components/SeamlessImage.tsx` (radial CSS `mask-image`, soft-edged, no hard rectangle) is for the five mood/lifestyle stock photos (the pensive/agitation shots). It makes them blend into the page instead of sitting in a box.
- `src/components/ScreenshotProof.tsx` (dark bezel, phone-frame look) is only for the three real WhatsApp testimonial screenshots. They're deliberately kept looking like raw, unedited screenshots for credibility, never given the seamless mask treatment.

Book cover renders (`1224003.png`, `1223997.png`) use a plain `next/image` with a drop shadow, no mask, no frame.

`public/images/` holds a copy of every asset that also exists at the repo root; the root copies are the user's original uploads, `public/images/` is what the app actually serves. Update both if an asset changes.
