# AI agent guide

Read `docs/Eloura_Travel_Bag_AI_Agent_Master_Prompt.md` for the product brief, then this file.
See `docs/PROJECT_MAP.md` for structure and `docs/ASSET_CATALOG.md` for images.

## Golden rules

- **Copy lives in `src/content/eloura-travel-bag.content.js`.** Edit text there, not in components.
- **Images live in `src/content/eloura-travel-bag.media.js`.** Components ask for roles, never files.
- Do not invent specs, weight, capacity in litres, prices, discounts, ratings, reviews, stock or urgency.
- Material is **water-resistant**, never "waterproof". The garment section **reduces** wrinkles; never claim it eliminates them.
  Never guarantee airline cabin acceptance.
- Do not restyle: keep the palette, type scale, masks, spacing and animations. This is a content site on an existing design.

## Purchase flow

All purchase CTAs render through `src/components/ui/OrderLink.astro` and link (same tab) to
`commerce.checkoutUrl`, the live EasyOrders product page:
`https://elouravtx.myeasyorders.com/products/shnth-alsfr-altrnd`. EasyOrders handles cart, checkout and
payment; this site has no order form, API or payment code. To change the URL, edit `commerce.checkoutUrl`
only. Never hard-code the URL in a component, and use `OrderLink` for any new buy button so it keeps
`data-checkout` (analytics).

CTAs: header + floating nav + mobile menu, hero, product details, How it works (under the video),
specifications, order section, footer.

## Configuration (`null` until verified)

| Setting | Location | Effect when set |
| --- | --- | --- |
| `commerce.price` / `compareAtPrice` | content file | Price shown in specs bar and order section; `Offer` added to JSON-LD. `compareAtPrice` is not rendered: no discount display without a verified offer |
| `analytics.metaPixelId` / `ga4MeasurementId` | content file | `Analytics.astro` injects the tag(s) |
| `contactUrl`, `shippingPolicyUrl`, `returnsPolicyUrl`, `privacyPolicyUrl`, `termsUrl` | content file (`store`) | Footer policy links appear (`store.url` is set to the EasyOrders storefront and shown in the brand section) |
| `site` | `astro.config.mjs` | Enables canonical URL, `og:url`, `og:image`/`twitter:image` and absolute JSON-LD image/url |

## Product video

`src/assets/imgs/video-1.mp4` (owner-supplied, H.264 + AAC, 720 × 1280, 23.9 s, ≈7.7 MB, "fast start")
is imported with `?url` in `eloura-travel-bag.media.js` (`productVideo`) and shown in the How it works
section by `src/components/video/ProductVideo.vue` (`client:visible`).

- The poster (`src/assets/eloura/video-poster.jpg`, frame at 12.6 s) is a lazy `<Image>` *behind* the
  video, not a `poster` attribute, which browsers fetch eagerly and which cost mobile LCP.
- `preload="none"`: no video bytes load until the player is in view. It then plays muted + looped +
  `playsinline` while at least 35 % visible and pauses when scrolled away.
- `prefers-reduced-motion: reduce`: never autoplays; a play button starts it.
- Controls: play/pause and mute/unmute (Arabic labels). Once the visitor pauses, it won't auto-resume.
  Without JavaScript the native `controls` are shown instead.
- Fixed 9:16 frame and `width`/`height` attributes, so no layout shift.

## Analytics events

Meta Pixel `4460772997566697` (Eloura | Website Pixel) is live (`analytics.metaPixelId`). `src/components/Analytics.astro` renders
the official base code verbatim (`is:inline`, not bundled) in `<head>`, wrapped so it runs after the
window `load` event (via `requestIdleCallback`, 3 s timeout); the `<noscript>` image is at the
top of `<body>` (`<Analytics placement="body" />` in `Layout.astro`). The root `/` redirect page has no
Pixel, so a visit to `/` records one PageView (on the product page). No client-side routing exists.

| Event | Meta | GA4 (inactive, ID null) | Trigger |
| --- | --- | --- | --- |
| Page view | `PageView` | config page_view | Tag load, once per page load |
| Product view | not sent (phase 2) | `view_item` | Once per page load |
| Checkout start | not sent (phase 2) | `begin_checkout` | First click on any `a[data-checkout]` |
| Purchase | **never from this site** | — | Must come from EasyOrders after an order is actually created |

Meta's *automatic events* (Events Manager → dataset settings) send `SubscribedButtonClick` when a CTA is
clicked unless disabled there; this is Meta-side configuration, not site code (the owner disables it in
Events Manager).

Headless browsers (Lighthouse, CI) load the Pixel but Meta does not send `/tr` hits from them; test
event delivery in a normal browser.

## RTL and Arabic conventions

- `<html lang="ar" dir="rtl">`. Use logical utilities (`ps-/pe-`, `ms-/me-`, `start-/end-`, `text-start`, `border-s`), never `left/right`.
- Directional shapes are mirrored: `shape-hero-mirror`, `shape-hero-mobile-mirror`; `shape-pebble` / `shape-pebble-right` were swapped per side.
  Arrow icons flip via `[dir="rtl"] .btn-arrow`. The gallery's keys, swipe and transitions are reversed (ArrowLeft = next).
- Wrap English runs inside Arabic text in `<span lang="en" dir="ltr">` (otherwise "3-in-1 …" reorders). Spec rows with `lang: 'en'` do this automatically.
- Fonts (Astro Fonts API, `astro.config.mjs`): Cormorant Garamond + Manrope (Latin subset, no fallbacks), followed by
  Markazi Text 500 (display) and IBM Plex Sans Arabic 400/500/600 (body) for Arabic glyphs; generic fallbacks sit on the Arabic families.
  Markazi was chosen over Amiri because its Arabic file is 24 KB vs 106 KB (measured mobile LCP 3.5 s → 2.9 s).
- Arabic gets `letter-spacing: normal` and taller line-heights (see the Arabic block at the end of `global.css`). No synthetic italics.

## Adding a section

1. Add content under a new key in the content file.
2. Create `src/components/sections/<Name>.astro`, reusing `SectionHeading`, `data-reveal`, existing mask utilities and `OrderLink` for CTAs.
3. Render it in `src/pages/3-in-1-travel-garment-duffel-bag.astro`; add a `nav` entry if it needs an anchor.

## Verification checklist

- `npm run build` passes; no references to Solana/ORA remain (`rg -i "solana|ora " src`).
- Check 390 px and 1440 px widths: no horizontal scroll, no broken images, no console errors.
- Lighthouse mobile and desktop (report measured numbers only). Last measured, production build with the video:
  mobile 94 / 100 / 100 / 100 (LCP 2.9 s, CLS 0), desktop 100 / 100 / 100 / 100 (LCP 0.6 s).
- Every `a[data-checkout]` href equals `commerce.checkoutUrl`; no `href="#order"` purchase links remain.
- Video: no `.mp4` request before scrolling to it; plays in view, pauses out of view, honours reduced motion.
  Test playback in a normal (non-headless) browser: headless Edge pauses muted video on its own.
- Meta Pixel: exactly one `fbevents.js`, one `fbq('init')`, one PageView; no Purchase on CTA click.
- Lighthouse with the deferred Pixel (production build, local): mobile 92 / 100 / 79 / 100 (LCP 2.9 s,
  TBT 150–170 ms), desktop 100 / 100 / 78 / 100. Best Practices is capped by Meta's third-party cookie
  and the issues it logs. Loading the base code eagerly measured mobile Performance 75–87.
