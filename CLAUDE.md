# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Next.js 14 (App Router) direct-response sales page for a two-part vaginal-health ebook bundle ("7 Hidden Reasons for Persistent Vaginal Odour" + the food bonus guide). The entire page is one long scroll (`src/app/page.tsx`), built from the finalized copy in `SALES-COPY-FINAL.md`, which itself was revised against the rules in `COPYWRITING-PLAYBOOK.md`. Any copy change should happen in `SALES-COPY-FINAL.md` first, then be mirrored into `src/data/content.ts` / `src/app/page.tsx`, not the other way around.

## Commands

```bash
npm run dev          # start the dev server (localhost:3000)
npm run build         # production build
npm run start         # run the production build
npm run lint          # next lint (not configured yet: it opens an interactive ESLint setup prompt)
npm test              # runs `playwright test` (starts its own dev server via webServer config)
npx playwright test tests/conversion.spec.ts -g "horizontal overflow"   # run a single test by title
npx playwright install chromium   # one-time browser install if tests fail with a missing-browser error
```

Playwright's `webServer` targets `http://127.0.0.1:3000`, not `localhost:3000`, on purpose. In this environment, Node's `fetch`/undici health-check against `localhost` intermittently resolves to a dead IPv6 address and times out with "The user aborted a request." Keep `playwright.config.ts` and any manual server checks on `127.0.0.1`.

`reuseExistingServer` is on outside CI, so `npm test` will happily run against *any* server already listening on port 3000, including an unrelated project (the user's Diabetes Food App on this machine binds `0.0.0.0:3000`). If every test fails with "element(s) not found", check what owns port 3000 before debugging the page. Also stop any `next start` from this project before running `next dev`: they share `.next/`, and a dev server left running across a production build serves broken chunks.

## Architecture

**Placeholder testimonials:** the 10 written testimonial quotes in `SALES-COPY-FINAL.md` / `src/data/content.ts` are stand-in wording (written to sound like how customers actually message: casual, light pidgin/local phrasing, no page numbers). The owner is replacing them with each customer's actual words. Don't polish them back into copywriter voice, and don't invent new ones. The three WhatsApp screenshots are the real proof.

**Meta ad-review constraint:** `/care` (`src/app/care/page.tsx`) is the Facebook ad destination and exists specifically to avoid an ad-account ban. Keep it free of price, checkout, and guarantee language (`tests/bridge-page.spec.ts` enforces this), and keep anything that echoes the ad in the third person ("so many women…"), never asserting a condition about the reader ("you"). Don't remove the bridge or point ads straight at `/`.

**Content lives in three layers, in this order of authority:**
1. `SALES-COPY-FINAL.md` — the actual sales letter, section by section, with `[IMG: ...]`, `[BUTTON: ...]`, and `[TESTIMONIAL]` placement tags, plus a "BUILD NOTES" section at the bottom mapping every image asset and testimonial to where it belongs on the page. This is the source of truth for wording.
2. `src/data/content.ts` — the same letter's structured data (testimonials, bulleted lists, the two offer stacks, FAQ items) as typed objects, imported into the page.
3. `src/app/page.tsx` — assembles everything into JSX, in the exact section order documented in `SALES-COPY-FINAL.md`'s build notes.

**Design system:** `tailwind.config.ts` defines the fixed brand palette (`primary`, `background`, `charcoal`, `cta`, `accent`) and two font tokens (`font-heading` → DM Sans 700, `font-body` → Inter 400, both loaded via `next/font/google` in `src/app/layout.tsx`). The hero (`src/components/Hero.tsx`) is the one section that deliberately breaks from the warm `background` palette into a dark charcoal background with a radial teal/coral glow, modeled on a dramatic SaaS-landing-page reference the user supplied, recolored to this brand's palette. Its centerpiece is `public/images/lady.jpg` (a 1200px pre-resized copy of the root `lady.png` original; the same woman as the Facebook ad creative, for ad-to-page continuity) with `bundle-transparent.png` overlapping its corner, followed by a byline and a hard CTA to `#offer`. Every other section stays on the warm background, except the guarantee block, which reuses the hero's dark background.

**Sticky CTA:** `src/components/StickyCTA.tsx` slides a "Get Both Guides, ₦5,000" bar up from the bottom once the reader scrolls past the hero. It links straight to `CHECKOUT_URL` and uses the default `cta-button` testid.

**Motion (no animation library):** `src/components/RevealSection.tsx` is a plain server component that marks each below-the-fold section `data-reveal`. A tiny inline script in `src/app/layout.tsx` (`revealScript`, runs during HTML parse, before React) sets `data-js` on `<html>` and uses an IntersectionObserver to add `data-shown` as sections scroll in; the fade/slide-up itself is CSS in `globals.css`. Sections are only hidden once that script has run, so with no JS, or before the bundle arrives on a slow phone, everything is simply visible. The hero uses CSS keyframes (`.hero-in` with staggered `animationDelay`, `.float` for the book) so it paints the moment the HTML lands. Framer Motion was removed for this reason (it kept content at opacity 0 until hydration); don't reintroduce JS-driven entrance animations for above-the-fold or section content.

**Two CTA testid contracts, don't conflate them:** `src/components/CTAButton.tsx` takes a `testId` prop. Purchase-intent buttons (the actual `₦5,000` offer buttons) default to `data-testid="cta-button"` and must have an `href` pointing at `CHECKOUT_URL` or an in-page `#offer` anchor, because `tests/conversion.spec.ts` asserts every `cta-button` resolves to `^(#offer|https://selar\.com/)`. Soft in-page scroll links (the mid-letter "help me understand" button) must instead pass `testId="nav-button"` so they're excluded from that checkout-URL assertion.

**Checkout URL:** `src/lib/config.ts` exports a single `CHECKOUT_URL` constant (the live Selar link, `https://selar.com/22kmt31ud8`). Every `CTAButton` with the default testid reads from it, so wiring the real Selar checkout link is a one-line change in that file, never hardcoded per-button. The same file holds `WHATSAPP_DISPLAY` / `WHATSAPP_URL`, the refund contact used by the guarantee section (the FAQ answer in `content.ts` spells the number out as plain text, so update both if it changes).

**Two image treatments, chosen deliberately per asset type, don't blur them together:**
- `src/components/SeamlessImage.tsx` (radial CSS `mask-image`, soft-edged, no hard rectangle) is for the five mood/lifestyle stock photos (the pensive/agitation shots). It makes them blend into the page instead of sitting in a box.
- `src/components/ScreenshotProof.tsx` (dark bezel, phone-frame look) is only for the three real WhatsApp testimonial screenshots. They're deliberately kept looking like raw, unedited screenshots for credibility, never given the seamless mask treatment. All three are shown together, large, in `src/components/ProofWall.tsx` directly under the `#offer` stack (swipe row on mobile, three-across on desktop). `1224023-cropped.jpg` is `1224023.jpg` with the WhatsApp contact header removed, since that partly redacted number shares its first digits with the public refund number.

Book cover renders (`1224003.png`, `1223997.png`) use a plain `next/image` with a drop shadow, no mask, no frame. `public/images/bundle-transparent.png` is a derived, background-removed crop of `1224000.png` made for the hero overlap. It exists only in `public/images/`, with no root copy.

`public/images/` holds a copy of every asset that also exists at the repo root; the root copies are the user's original uploads, `public/images/` is what the app actually serves. Update both if an asset changes.

**Facebook/Meta Pixel:** loaded site-wide in `src/app/layout.tsx` via `next/script` (`strategy="afterInteractive"`), plus the standard `noscript` fallback `<img>`. That fallback is injected via `dangerouslySetInnerHTML` on purpose: as a JSX `<img>`, React hoists it into a `<link rel="preload">`, which fires a duplicate `noscript=1` PageView for every visitor with JS on. Pixel ID `2193434301489321` is inlined there (not in `src/lib/config.ts`) since it's the only Meta pixel this page uses; if that changes, extract it to a constant the way `CHECKOUT_URL` is handled.
