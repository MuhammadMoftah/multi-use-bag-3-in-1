## Eloura Showcase

Arabic (RTL) interactive product showcase for Eloura. Visitors discover products on the homepage and on
dedicated landing pages, then complete orders on the official EasyOrders store.
Astro 7 + Vue 3 + Tailwind CSS v4, static output.

| Route | Page |
| --- | --- |
| `/` | Eloura Showcase homepage |
| `/mens-black-oversized-t-shirt` | Men's black oversized T-shirt landing page |

```sh
npm install
astro dev --background     # http://localhost:4321  (astro dev stop | status | logs)
npm run check              # astro check
npm run build              # dist/
npm run preview
node scripts/prepare-product-images.mjs [slug]   # regenerate derived product images
```

> Vite/Tailwind cannot resolve paths that contain `#`. If the project folder name contains `#`
> (e.g. `product #1`), build from a folder without it.

- Site settings (store links, analytics, global nav): `src/data/site.ts`; homepage copy: `src/data/home.ts`
- Product registry: `src/products/index.ts`; each product in `src/products/{slug}/`
- Product images: `src/assets/imgs/{slug}/`
- Docs: [`docs/PROJECT_MAP.md`](docs/PROJECT_MAP.md), [`docs/ASSET_CATALOG.md`](docs/ASSET_CATALOG.md), [`docs/AI_AGENT_GUIDE.md`](docs/AI_AGENT_GUIDE.md)
  (includes "Adding a product")

Still to configure: `commerce.price`, policy/contact URLs, GA4 ID and `site` in `astro.config.mjs`.
