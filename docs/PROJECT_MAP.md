# Project map — Eloura 3-in-1 travel bag landing page

Single-product, Arabic (Egyptian, RTL) landing page built with **Astro 7 + Vue 3 + Tailwind CSS v4**.
It reuses the layout, components, palette, masks and animations of the earlier Solana East
template; only content, imagery, direction (RTL) and Arabic typography changed.

## Routes

| URL | Source | Notes |
| --- | --- | --- |
| `/3-in-1-travel-garment-duffel-bag/` | `src/pages/3-in-1-travel-garment-duffel-bag.astro` | The landing page |
| `/` | `redirects` in `astro.config.mjs` | Static meta-refresh redirect to the slug |

## Directory layout

```text
astro.config.mjs            fonts (Fonts API), redirect, optional `site`
scripts/
  prepare-product-images.mjs  sharp crops: src/assets/imgs -> src/assets/eloura
src/
  assets/imgs/              owner-supplied originals (never edited)
  assets/eloura/            generated crops actually used by the site
  content/
    eloura-travel-bag.content.js   ALL copy, specs, CTAs, SEO, config (single source of truth)
    eloura-travel-bag.media.js     image manifest: imports, Arabic alt, roles, gallery order
  lib/content.js            re-exports content + derived helpers (orderHref, hasCheckout, faqItems, formatPrice, pad2)
  layouts/Layout.astro      <html lang="ar" dir="rtl">, meta/OG/Twitter, fonts, analytics, skip link
  pages/3-in-1-travel-garment-duffel-bag.astro   section order, OG image, Product/FAQPage/WebPage JSON-LD
  components/
    SiteHeader.astro        header, floating nav, mobile menu (inline script)
    SiteFooter.astro
    Analytics.astro         Meta Pixel / GA4 (renders nothing until IDs are configured)
    gallery/GalleryShowcase.vue   the only hydrated island (client:visible)
    sections/               one file per page section (below)
    ui/                     Icon, OrderLink, PalmFrond, SectionHeading, Wordmark
  scripts/reveal.ts         scroll-reveal / active-nav observer
  styles/global.css         theme tokens, mask utilities, components, RTL + Arabic rules
docs/                       this map, asset catalog, agent guide, master prompt
```

## Page sections (in render order)

| # | Anchor | Component | Former Solana component | Content key |
| --- | --- | --- | --- | --- |
| 1 | `#top` | `Hero.astro` | Hero | `hero` |
| 2 | `#product` | `ProductIntro.astro` | Overview | `intro` |
| 3 | `#how-it-works` | `HowItWorks.astro` | Masterplan | `howItWorks` |
| 4 | `#details` | `ProductDetails.astro` | Residences | `details` |
| 5 | `#features` | `Features.astro` | Amenities | `features` |
| 6 | `#gallery` | `Gallery.astro` + `GalleryShowcase.vue` | Gallery | `gallery` |
| 7 | `#occasions` | `Occasions.astro` | Location | `occasions` |
| 8 | `#specs` | `Specifications.astro` | Pricing | `specs`, `product`, `packageContents`, `care` |
| 9 | `#brand` | `Brand.astro` | Developer | `brand` |
| 10 | `#faq` | `Faq.astro` | Faq | `faq` |
| 11 | `#order` | `Order.astro` | Contact | `order`, `commerce` |

## Data flow

`eloura-travel-bag.content.js` + `eloura-travel-bag.media.js` → `src/lib/content.js` (derived values) →
section components. No component hard-codes product copy; the only literal strings in components are
generic UI labels (aria labels, "تفاصيل أكتر", etc.).

## Commands

| Command | Purpose |
| --- | --- |
| `astro dev --background` / `astro dev stop` / `astro dev status` | Dev server (port 4321) |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build locally |
| `node scripts/prepare-product-images.mjs [--preview]` | Regenerate image crops |

## Recovery path

- Branch `eloura-travel-bag`; commit `5b29ec7` is the untouched Solana East baseline (with the new images added).
- The original Solana project folder (`E:\Work\Web\www\Solana Landing Page`) was not modified.
