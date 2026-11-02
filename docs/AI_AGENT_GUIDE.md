# AI agent guide

See `docs/PROJECT_MAP.md` for structure and navigation, `docs/ASSET_CATALOG.md` for images.

## Golden rules

- **Site-wide settings live in `src/data/site.ts`** (brand, store links, analytics IDs, global nav);
  homepage copy in `src/data/home.ts`.
- **Product copy lives in `src/products/{slug}/content.js`**, product images in `src/products/{slug}/media.js`.
  Components ask for roles, never files. Edit text there, not in components.
- **The registry (`src/products/index.ts`) is the only list of products.** The homepage gallery, footer and
  mobile menu render from it. Never add placeholder or fake products.
- Product pages are hand-built per product (`src/pages/{slug}.astro` + `src/products/{slug}/sections/`).
  Share components (`GlobalHeader`, `SiteFooter`, `SectionDock`, `OrderLink`, `GalleryShowcase`, `ui/*`),
  not layouts: each product may have its own sections, order and motion.
- Do not invent prices, discounts, ratings, reviews, stock levels, sales numbers, company history or
  achievements. Never imply every colour or size is in stock.
- Copy is Egyptian Arabic (اطلب، اكتشف، نسّقه).

### T-shirt facts (verified)

Men's Basic Oversized T-Shirt, Summer Melton (سمر ميلتون), black, featured size 2XL, oversized fit,
manufacturer brand Generic (Eloura is the store), 1 T-shirt per package. Colours: black, white, brown, navy,
burgundy; colour and size availability depends on stock.

## Purchase flow

Every purchase CTA renders through `src/components/ui/OrderLink.astro` with a registry entry
(`<OrderLink product={entry}>`) and links (same tab) to `product.purchaseUrl`, the live EasyOrders product page.
For the T-shirt: `https://elouravtx.myeasyorders.com/products/xl2tyshrt-aswd-smr-myltwn` (`commerce.checkoutUrl`
in its `content.js`). EasyOrders handles cart, checkout and payment; this site has no order form or payment code.
Never hard-code the URL in a component.

Product cards (`ProductCard.astro`) always link to the internal landing page, never to EasyOrders.

T-shirt CTAs: hero, features, specifications, order section, section dock.

## Configuration (`null` until verified)

| Setting | Location | Effect when set |
| --- | --- | --- |
| `commerce.price` / `compareAtPrice` | product `content.js` | Price in specs bar and order section; `Offer` added to JSON-LD |
| `analytics.metaPixelId` / `ga4MeasurementId` | `src/data/site.ts` | `Analytics.astro` injects the tag(s) |
| `contactUrl`, `shippingPolicyUrl`, `returnsPolicyUrl`, `privacyPolicyUrl`, `termsUrl` | `src/data/site.ts` (`store`) | Footer policy links appear |
| `site` | `astro.config.mjs` | Canonical URL, `og:url`, `og:image`/`twitter:image`, absolute JSON-LD URLs |

## Structured data

- Homepage: `WebSite` + `CollectionPage` with an `ItemList` of registry products (name, URL).
- T-shirt: `Product` (name, category, brand Generic, material, colour, size, male audience, fit, colour range,
  package contents), `FAQPage` and `WebPage`. No price, availability, rating or review until verified.

## Analytics events

Meta Pixel `4460772997566697` (Eloura | Website Pixel) is live on every page. `Analytics.astro` renders the
official base code in `<head>`, deferred until after `load`; the `<noscript>` image is at the top of `<body>`.
Click events come from `src/scripts/tracking.ts` for links marked `data-track` (with `data-product-id` /
`data-product-name`), and are only sent to tags that are loaded.

| Event | Meta | GA4 (inactive, ID null) | Trigger |
| --- | --- | --- | --- |
| Page view | `PageView` | config page_view | Tag load, once per page load |
| Product page view | not sent | `view_item` (`item_id` = product id) | Product landing page load (`Layout` `product` prop) |
| Product discovery click | custom `ProductDiscoveryClick` | `select_item` | `data-track="product-card"` (cards, hero chip, footer, menu) |
| Purchase CTA click | custom `CheckoutLinkClick` | `begin_checkout` | `data-track="checkout"` (OrderLink); once per product per page view |
| Official store click | custom `OfficialStoreClick` | `outbound_store_click` | `data-track="store"` |
| Purchase | **never from this site** | — | Must come from EasyOrders after an order is actually created |

Standard `ViewContent` / `InitiateCheckout` are deliberately not sent so they don't double-count with
EasyOrders' own Pixel integration.

## RTL and Arabic conventions

- `<html lang="ar" dir="rtl">`. Use logical utilities (`ps-/pe-`, `ms-/me-`, `start-/end-`, `text-start`, `border-s`), never `left/right`.
- Arrow icons flip via `[dir="rtl"] .btn-arrow`. The gallery's keys, swipe and transitions are reversed (ArrowLeft = next).
- Wrap English runs inside Arabic text in `<span lang="en" dir="ltr">`. Spec rows and figures with `lang: 'en'` do this automatically.
- Arabic buttons, eyebrows and labels are not uppercased (embedded "Eloura" keeps its casing); `lang="en"` runs are.
- Fonts (Astro Fonts API, `astro.config.mjs`): Manrope 400–800 (Latin) + IBM Plex Sans Arabic 400/500/700;
  Cormorant Garamond italic for the wordmark only.

## Adding a product

1. Put its originals in `src/assets/imgs/{slug}/`; add crops for it to `scripts/prepare-product-images.mjs`
   and run `node scripts/prepare-product-images.mjs {slug}`.
2. Create `src/products/{slug}/` with `content.js` (copy, facts, `commerce.checkoutUrl`, `seo`, `sections`,
   `showcase`), `media.js` (imports from `derived/`) and `product.ts` (registry entry typed as `Product`).
3. Import the entry in `src/products/index.ts`. It now appears on the homepage, footer and mobile menu.
4. Build its sections in `src/products/{slug}/sections/` and its page at `src/pages/{slug}.astro`:
   `Layout` (with `product={entry}`, `ogType="product"`), `GlobalHeader`, `.page-shell` > `<main id="main">` +
   `SiteFooter`, and `SectionDock product={entry}`. Every section listed in `sections` needs a matching `id`,
   and the hero should be `id="top"` (or pass `heroId` to the dock).

## Adding a section to a product page

1. Add content under a new key in the product's `content.js`.
2. Create the component in `src/products/{slug}/sections/`, reusing `SectionHeading`, `.frame`, `data-reveal` and `OrderLink`.
3. Render it in the page; add a `sections` entry if it should appear in the dock.

## Verification checklist

- `npm run check` and `npm run build` pass (from a path without `#`).
- Both routes render: `/` and `/mens-black-oversized-t-shirt`.
- Check 390 px, 820 px and 1440 px widths: no horizontal scroll, no broken images, no console errors.
- Every `a[data-track="checkout"]` href equals the product's `purchaseUrl`; product cards link to internal routes.
- Meta Pixel: exactly one `fbevents.js`, one `fbq('init')`, one PageView; no Purchase on CTA click.
