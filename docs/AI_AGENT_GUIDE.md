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

## Configuration (all `null` until verified)

| Setting | Location | Effect when set |
| --- | --- | --- |
| `commerce.checkoutUrl` | content file | Every purchase CTA (`OrderLink`) points to it, gets `data-checkout`, the order panel shows the live button, and the "how do I order" FAQ appears |
| `commerce.price` / `compareAtPrice` | content file | Price shown in specs bar and order section; `Offer` added to JSON-LD (only when price **and** checkout URL exist). `compareAtPrice` is not rendered: no discount display without a verified offer |
| `analytics.metaPixelId` / `ga4MeasurementId` | content file | `Analytics.astro` injects the tag(s) |
| `store.url`, `contactUrl`, `shippingPolicyUrl`, `returnsPolicyUrl`, `privacyPolicyUrl`, `termsUrl` | content file | Brand link and footer policy links appear |
| `site` | `astro.config.mjs` | Enables canonical URL, `og:url`, `og:image`/`twitter:image` and absolute JSON-LD image/url |

Without a checkout URL, CTAs scroll to `#order`, which shows "الطلب أونلاين هيتاح قريب" and a disabled
button (plus an English note visible only in `astro dev`). There is no fake order form or API.

## Analytics events

| Event | Meta | GA4 | Trigger |
| --- | --- | --- | --- |
| Page view | `PageView` | config page_view | Tag load |
| Product view | `ViewContent` | `view_item` | Once per page load |
| Checkout start | `InitiateCheckout` | `begin_checkout` | First click on any `a[data-checkout]` (once per page) |
| Purchase | — | — | **Never fired here.** Must come from EasyOrders after a confirmed order |

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
- Lighthouse mobile and desktop (report measured numbers only). Last measured, production build:
  mobile 95 / 100 / 100 / 100 (LCP 2.9 s, CLS 0), desktop 100 / 100 / 100 / 100 (LCP 0.6 s).
- If checkout or analytics are configured: CTAs carry `data-checkout`; InitiateCheckout fires once on click; no Purchase event.
