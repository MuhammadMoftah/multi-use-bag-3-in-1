# Project map — Eloura Showcase

Arabic (Egyptian, RTL) product showcase built with **Astro 7 + Vue 3 + Tailwind CSS v4**, static output.
Visitors discover Eloura products here; every purchase CTA leads to the official EasyOrders store.
Monochrome "ink & bone" design: near-black surfaces, warm off-white type, bold sans headings
(Manrope + IBM Plex Sans Arabic), Cormorant italic for the Eloura wordmark only.

## Routes

| URL | Source | Notes |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Eloura Showcase homepage (product discovery) |
| `/mens-black-oversized-t-shirt` | `src/pages/mens-black-oversized-t-shirt.astro` | T-shirt landing page |

## Directory layout

```text
astro.config.mjs              fonts (Fonts API), optional `site`
scripts/
  prepare-product-images.mjs  per-product sharp crops: imgs/{slug}/ -> imgs/{slug}/derived/
src/
  assets/imgs/{slug}/         owner-supplied originals of one product (never edited)
  assets/imgs/{slug}/derived/ generated, slug-safe web images actually imported
  data/
    site.ts                   brand, official store links, analytics IDs, global nav (site-wide)
    home.ts                   homepage + footer copy
  products/
    types.ts                  Product / ProductImage / ProductSection types
    index.ts                  PRODUCT REGISTRY (`products`, `getProduct`) — powers homepage, footer, menu
    mens-black-oversized-t-shirt/
      content.js              all copy, facts, CTAs, SEO, section nav for this product
      media.js                image manifest: imports, Arabic alt, roles, gallery order
      lib.js                  derived helpers (orderHref, faqItems, formatPrice, pad2)
      product.ts              registry entry (built from content.js + media.js)
      sections/               the T-shirt's own section components
  lib/format.ts, lib/nav.ts   generic helpers
  layouts/Layout.astro        <html lang="ar" dir="rtl">, per-page SEO/OG/Twitter, fonts, analytics, skip link
  pages/                      one file per route (see above)
  components/
    layout/GlobalHeader.astro global brand header + mobile menu (Layer 1 navigation)
    layout/SiteFooter.astro   global footer (products from the registry, store links)
    nav/SectionDock.astro     product section dock (Layer 2 navigation, data-driven)
    showcase/ProductCard.astro  reusable product card (grid / feature variants)
    home/                     homepage sections
    gallery/GalleryShowcase.vue  gallery island (client:visible), reusable by any product
    Analytics.astro           Meta Pixel / GA4 base tags
    ui/                       Icon, OrderLink, SectionHeading, Wordmark
  scripts/
    reveal.ts                 scroll-reveal observer
    scroll-spy.ts             active-section detection for nav links
    tracking.ts               click events for `a[data-track]`
  styles/global.css           theme tokens, components, motion, RTL + Arabic rules
docs/                         this map, asset catalog, agent guide
```

## Navigation architecture

| Layer | Component | Where | Behaviour |
| --- | --- | --- | --- |
| 1. Global brand | `GlobalHeader.astro` | every page | Fixed compact pill: logo, الرئيسية, عن Eloura, اكتشف المنتجات, إزاي تطلب, المتجر الرسمي. Transparent over the hero, glass once scrolled, hides on scroll down / returns on scroll up or focus. Mobile: full-screen menu with the same links plus the product list. |
| 2. Product sections | `SectionDock.astro` | product pages | Floating bottom dock built from `product.sections` + the purchase CTA. Shows after the hero, hides over the footer, highlights the section in view, appears on keyboard focus. Horizontally scrollable on small screens. |
| 3. Homepage sections | `GlobalHeader.astro` | homepage | On `/` the global links are same-page anchors (`#top`, `#about`, `#products`, `#how`) with scroll spy; on product pages they lead to `/`, `/#about`, `/#products`, `/#how`. No second bar, so no duplicate controls. |

Smooth scrolling and the fixed-header offset come from CSS (`scroll-behavior: smooth` under
`prefers-reduced-motion: no-preference`, `scroll-padding-top: 5.5rem`), so anchors also work on direct loads.

## Homepage sections

| Anchor | Component | Copy key (`home.ts`) |
| --- | --- | --- |
| `#top` | `home/HomeHero.astro`: brand-first hero (Eloura wordmark, CTAs, shopping steps), one lead image per product (up to three), category marquee | `hero`, `brandCategories` |
| `#about` | `home/AboutEloura.astro`: manifesto + brand category index | `about`, `brandCategories` |
| `#products` | `home/DiscoverProducts.astro` + `showcase/ProductCard.astro` | `products` |
| `#how` | `home/ShoppingJourney.astro`: discover → explore → order on the official store | `journey` |
| `#featured` | `home/FeaturedSpotlight.astro`: the `featured: true` product (else the first), with gallery images not used above | `featured` |
| — | `home/FinalCta.astro`: closing wordmark + CTAs | `finalCta` |

The homepage never depends on a specific product: the hero leads with the brand, and its imagery,
the collection and the spotlight all come from the registry. A product's lead image is
`highlightImages[0]` (else `cover`). One product renders as a wide feature card; two or more switch to
a 1 / 2 / 3-column grid. `brandCategories` describes what Eloura offers as a brand and is independent of
the products published so far.

## T-shirt page sections (in render order)

| # | Anchor | Component (`src/products/mens-black-oversized-t-shirt/sections/`) | Content key |
| --- | --- | --- | --- |
| 1 | `#top` | `Hero.astro` | `hero` |
| 2 | `#product` | `ProductIntro.astro` | `intro` |
| 3 | `#features` | `Features.astro` | `features` |
| 4 | `#gallery` | `Gallery.astro` + `GalleryShowcase.vue` | `gallery` |
| 5 | `#material` | `Material.astro` | `material` |
| 6 | `#styling` | `Styling.astro` | `styling`, `stylingPairs` |
| 7 | `#specs` | `Specifications.astro` | `specs`, `colors`, `care`, `packageContents` |
| 8 | `#faq` | `Faq.astro` | `faq` |
| 9 | `#order` | `Order.astro` | `order`, `commerce` |

## Commands

| Command | Purpose |
| --- | --- |
| `astro dev --background` / `astro dev stop` / `astro dev status` | Dev server (port 4321) |
| `npm run check` | `astro check` (TypeScript + Astro diagnostics) |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build locally |
| `node scripts/prepare-product-images.mjs [slug] [--preview]` | Regenerate derived images |
