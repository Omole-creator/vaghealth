# 30-Second Facebook Video Ad Script

### Why it's built this way (read this before filming)

Meta's Personal Attributes policy doesn't ban the topic, it bans the ad *asserting or implying something about the viewer's own body or condition*. "Do you struggle with X?" gets flagged. A woman telling her own story in first person, on camera, doesn't, because nothing in it claims to know anything about the person watching. That's the entire structural choice below: everything is *her* story, nothing is a statement about *you*.

Two more things the research turned up that shape the word choices:
- Advertisers in this exact niche (feminine hygiene, intimate health) report that swapping "vaginal" for "feminine" or "down there" in the actual ad creative, while keeping the clinical term on the landing page itself, is what got them approved. The ad and the landing page don't have to use identical language, the ad just has to clear review.
- Before/after framing and any hint of shock or disgust reads as "sensational content" to Meta's reviewers. Nothing graphic, nothing that shows or names a body part explicitly on screen.

Sources: [Meta Personal Attributes Policy](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes) · [Meta Personal Attributes: What You Can and Cannot Say](https://www.zappush.com/blog/meta-personal-attributes-policy-health-wellness-ads) · [Facebook Blocks Women's Health Ads, an Investigation Reveals](https://getmegiddy.com/facebook-blocks-womens-health-ads) · [Femtech players call out Facebook for rejecting women's health ads](https://www.mobihealthnews.com/news/femtech-players-call-out-facebook-rejecting-womens-health-ads)

---

## The script

Format: UGC-style, one woman talking straight into her phone camera, like she's telling a friend. Natural light, bedroom or bathroom mirror, no studio polish, that's what makes it read as a real story instead of an ad.

| Time | Visual | Voiceover (her) | On-screen caption |
|---|---|---|---|
| 0:00–0:03 | Selfie-style video, she's mid-sentence like the camera just caught her talking | "Okay, I have to tell someone about this..." | I wish someone told me this sooner |
| 0:03–0:10 | Same shot, she looks down, a little embarrassed, then back up | "For almost a year I kept feeling like something was off. I tried every wash, every soap. Nothing ever explained *why* it kept coming back." | Tried everything. Nothing explained why. |
| 0:10–0:18 | Cut to her scrolling her phone, screen shows the book cover | "Then I found this guide, written by a doctor, that actually explained what was going on. Not another product telling me to wash harder." | Not another wash. An actual answer. |
| 0:18–0:25 | Back to her, warmer, more relaxed energy | "Within weeks I felt like myself again. And I've talked to so many other women who say the exact same thing." | Over 1,000 women. Same story. |
| 0:25–0:30 | She points down/toward the link, smiling | "The link below has the full story." | Get The Full Details Here 👇 |

**CTA button (native Meta button, not on-screen text):** "Learn More" → links to `/care`

---

## Production and targeting notes

- **Captions never use the word "vaginal."** Use "down there," "intimate," or "feminine." The spoken audio can be slightly more direct than the burned-in captions, Meta's automated review leans harder on visible text than audio.
- **No body parts shown or implied on screen.** No product-sniffing, no underwear, no before/after split screen. Just her face and her phone.
- **Age target: 18+.** Sexual and reproductive health ads are required to exclude under-18 audiences regardless of the product itself being non-explicit.
- **Placements: manually deselect Audience Network** if running Advantage+ placements. Third-party network review has historically been stricter and less consistent for this category than Facebook/Instagram feed placements.
- **"Over 1,000 women"** rounds down from the 1,057 figure already on the `/care` landing page, keep the ad and landing page numbers consistent so nothing reads as a mismatched claim on review.
- **Expect at least one rejection on first submission.** The research is consistent on this: even fully compliant ads in this category get flagged more often than comparable ads in other niches, and approval frequently comes on appeal or on a second submission with a minor wording tweak, not the first attempt. Don't take an initial rejection as a signal something is wrong with the ad itself.

---

## Script 2: Voiceover-driven, no on-camera talent

No person on screen at all here, this is a narrator reading over a sequence of still images (the book cover, the mood photos already used on the site, the two WhatsApp testimonial screenshots). Since there's no "her story" framing to lean on this time, every line is written in the third person, describing the guide and what other women are doing, never asserting anything about the viewer directly. That's actually the safer construction for Personal Attributes when there's no testimonial format to hide behind.

| Time | Visual | Voiceover (neutral narrator, warm not clinical) | On-screen caption |
|---|---|---|---|
| 0:00–0:04 | `1224004.jpg`, slow zoom in | "There's a question a lot of women quietly search for, late at night, alone." | The question women Google at night |
| 0:04–0:10 | `1224006.jpg`, slow pan | "Wash after wash. Product after product. And still, no real answer for why it keeps coming back." | Wash after wash. Still no answer. |
| 0:10–0:17 | `1224003.png` (book cover), centered, gentle zoom | "This guide was written by a doctor to finally explain what's actually going on, in plain language, no shame attached." | Written by a doctor. An actual explanation. |
| 0:17–0:24 | Cut between the two WhatsApp screenshots (`1224024.jpg`, `1159158.jpg`) | "Women across Nigeria, Ghana, and Kenya are already reading it, and telling their friends." | Over 1,000 women. Same story. |
| 0:24–0:30 | Back to the book cover, CTA text animates in | "The full details are one click away." | Get The Full Details Here 👇 |

**CTA button:** "Learn More" → `/care`

**Voiceover script only** (for feeding straight into a TTS tool or reading aloud):

> There's a question a lot of women quietly search for, late at night, alone. Wash after wash. Product after product. And still, no real answer for why it keeps coming back. This guide was written by a doctor to finally explain what's actually going on, in plain language, no shame attached. Women across Nigeria, Ghana, and Kenya are already reading it, and telling their friends. The full details are one click away.

That's roughly 28 seconds read at a natural pace, the same timing budget Script 1 used.

**Why this version is actually easier to produce:** it doesn't need an avatar, a face, or any video-generation tool at all, just the images already sitting in this project plus a voiceover track, assembled with slow pans (the same technique used to add motion in `facebook-ad-video.mp4`). It sidesteps the whole Hugging Face/ZeroGPU dependency entirely. If you want this one actually built into a video, say so and it can be done locally, no external service, no login, no waiting.
