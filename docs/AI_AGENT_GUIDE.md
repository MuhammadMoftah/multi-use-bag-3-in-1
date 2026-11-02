# AI agent guide

See `docs/PROJECT_MAP.md` for structure and `docs/ASSET_CATALOG.md` for images.

## Golden rules

- **Copy lives in `src/content/eloura-oversized-tshirt.content.js`.** Edit text there, not in components.
- **Images live in `src/content/eloura-oversized-tshirt.media.js`.** Components ask for roles, never files.
- Verified product facts: Men's Basic Oversized T-Shirt, Summer Melton (سمر ميلتون), black, featured size 2XL,
  oversized fit, manufacturer brand Generic (Eloura is the store), 1 T-shirt per package. Colours: black,
  white, brown, navy, burgundy; colour and size availability depends on stock.
- Do not invent prices, discounts, ratings, reviews, stock levels, sales numbers, other sizes or fabric claims
  (e.g. "cotton", "heavyweight"). Never imply every colour or size is in stock.
- Copy is Egyptian Arabic addressed to men (اطلب، اكتشف، نسّقه).

## Purchase flow

All purchase CTAs render through `src/components/ui/OrderLink.astro` and link (same tab) to
`commerce.checkoutUrl`, the live EasyOrders product page:
`https://elouravtx.myeasyorders.com/products/xl2tyshrt-aswd-smr-myltwn`. EasyOrders handles cart, checkout
and payment; this site has no order form or payment code. To change the URL, edit `commerce.checkoutUrl`
only. Never hard-code the URL in a component, and use `OrderLink` for any new buy button so it keeps
`data-checkout` (analytics).

CTAs: header + floating nav + mobile menu, hero, features, specifications, footer, order section.

## Configuration (`null` until verified)

| Setting | Location | Effect when set |
| --- | --- | --- |
| `commerce.price` / `compareAtPrice` | content file | Price in specs bar and order section; `Offer` added to JSON-LD (requires `checkoutUrl`). `compareAtPrice` is not rendered |
| `analytics.metaPixelId` / `ga4MeasurementId` | content file | `Analytics.astro` injects the tag(s) |
| `contactUrl`, `shippingPolicyUrl`, `returnsPolicyUrl`, `privacyPolicyUrl`, `termsUrl` | content file (`store`) | Footer policy links appear |
| `site` | `astro.config.mjs` | Enables canonical URL, `og:url`, `og:image`/`twitter:image` and absolute JSON-LD image/url |

## Structured data

`Product` (name, category, brand Generic, material, colour, size, male audience, fit, colour range, package
contents), `FAQPage` and `WebPage`. No price, availability, rating or review is published until verified.

## Analytics events

Meta Pixel `4460772997566697` (Eloura | Website Pixel) is live. `src/components/Analytics.astro` renders the
official base code in `<head>`, deferred until after `load`; the `<noscript>` image is at the top of `<body>`.

| Event | Meta | GA4 (inactive, ID null) | Trigger |
| --- | --- | --- | --- |
| Page view | `PageView` | config page_view | Tag load, once per page load |
| Product view | not sent | `view_item` (`item_id` = product slug) | Once per page load |
| Checkout start | not sent | `begin_checkout` | First click on any `a[data-checkout]` (purchase intent, not a purchase) |
| Purchase | **never from this site** | — | Must come from EasyOrders after an order is actually created |

## RTL and Arabic conventions

- `<html lang="ar" dir="rtl">`. Use logical utilities (`ps-/pe-`, `ms-/me-`, `start-/end-`, `text-start`, `border-s`), never `left/right`.
- Arrow icons flip via `[dir="rtl"] .btn-arrow`. The gallery's keys, swipe and transitions are reversed (ArrowLeft = next).
- Wrap English runs inside Arabic text in `<span lang="en" dir="ltr">`. Spec rows and figures with `lang: 'en'` do this automatically.
- Fonts (Astro Fonts API, `astro.config.mjs`): Manrope 400–800 (Latin) + IBM Plex Sans Arabic 400/500/700 for headings and body;
  Cormorant Garamond italic for the wordmark only.
- Arabic gets `letter-spacing: normal` and taller line-heights (see the Arabic block at the end of `global.css`). No synthetic italics.

## Adding a section

1. Add content under a new key in the content file.
2. Create `src/components/sections/<Name>.astro`, reusing `SectionHeading`, `.frame`, `data-reveal` and `OrderLink` for CTAs.
3. Render it in `src/pages/mens-black-oversized-t-shirt.astro`; add a `nav` entry if it needs an anchor.

## Verification checklist

- `npm run build` passes (from a path without `#`).
- No previous-product references remain: `rg -i "travel|duffel|bag|شنط|video" src`.
- Check 390 px, 820 px and 1440 px widths: no horizontal scroll, no broken images, no console errors.
- Every `a[data-checkout]` href equals `commerce.checkoutUrl`; no `href="#order"` purchase links remain.
- Meta Pixel: exactly one `fbevents.js`, one `fbq('init')`, one PageView; no Purchase on CTA click.
