# Project map — Eloura oversized T-shirt landing page

Single-product, Arabic (Egyptian, RTL) landing page built with **Astro 7 + Vue 3 + Tailwind CSS v4**.
Monochrome "ink & bone" menswear design: near-black surfaces, warm off-white type, bold sans headings
(Manrope + IBM Plex Sans Arabic), Cormorant italic for the Eloura wordmark only.

## Routes

| URL | Source | Notes |
| --- | --- | --- |
| `/mens-black-oversized-t-shirt/` | `src/pages/mens-black-oversized-t-shirt.astro` | The landing page |
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
    eloura-oversized-tshirt.content.js   ALL copy, specs, colours, CTAs, SEO, config (single source of truth)
    eloura-oversized-tshirt.media.js     image manifest: imports, Arabic alt, roles, gallery order
  lib/content.js            re-exports content + derived helpers (orderHref, hasCheckout, faqItems, formatPrice, pad2)
  layouts/Layout.astro      <html lang="ar" dir="rtl">, meta/OG/Twitter, fonts, analytics, skip link
  pages/mens-black-oversized-t-shirt.astro   section order, OG image, Product/FAQPage/WebPage JSON-LD
  components/
    SiteHeader.astro        header, floating nav, mobile menu (inline script)
    SiteFooter.astro
    Analytics.astro         Meta Pixel / GA4 (renders nothing for an ID that is null)
    gallery/GalleryShowcase.vue   gallery island (client:visible)
    sections/               one file per page section (below)
    ui/                     Icon, OrderLink, SectionHeading, Wordmark
  scripts/reveal.ts         scroll-reveal observer
  styles/global.css         theme tokens, components, RTL + Arabic rules
docs/                       this map, asset catalog, agent guide
```

## Page sections (in render order)

| # | Anchor | Component | Content key |
| --- | --- | --- | --- |
| 1 | `#top` | `Hero.astro` | `hero` |
| 2 | `#product` | `ProductIntro.astro` | `intro` |
| 3 | `#features` | `Features.astro` (why choose it) | `features` |
| 4 | `#gallery` | `Gallery.astro` + `GalleryShowcase.vue` | `gallery` |
| 5 | `#material` | `Material.astro` (material & comfort) | `material` |
| 6 | `#styling` | `Styling.astro` (oversized fit & styling) | `styling`, `stylingPairs` |
| 7 | `#specs` | `Specifications.astro` (specs, colours, size, care) | `specs`, `colors`, `care`, `packageContents` |
| 8 | `#faq` | `Faq.astro` | `faq` |
| 9 | `#order` | `Order.astro` (final CTA) | `order`, `commerce` |

## Data flow

`eloura-oversized-tshirt.content.js` + `eloura-oversized-tshirt.media.js` → `src/lib/content.js` (derived values) →
section components. No component hard-codes product copy; the only literal strings in components are
generic UI labels (aria labels, etc.).

## Commands

| Command | Purpose |
| --- | --- |
| `astro dev --background` / `astro dev stop` / `astro dev status` | Dev server (port 4321) |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build locally |
| `node scripts/prepare-product-images.mjs [--preview]` | Regenerate image crops |
