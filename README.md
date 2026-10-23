# Eloura — شنطة السفر الترند 3 في 1

Arabic (RTL) product landing page for the Eloura 3-in-1 Convertible Travel Garment Duffel Bag.
Astro 7 + Vue 3 + Tailwind CSS v4, static output.

```sh
npm install
astro dev --background     # http://localhost:4321  (astro dev stop | status | logs)
npm run build              # dist/
npm run preview
node scripts/prepare-product-images.mjs   # regenerate image crops
```

- Content and configuration: `src/content/eloura-travel-bag.content.js`
- Images: `src/content/eloura-travel-bag.media.js`
- Docs: [`docs/PROJECT_MAP.md`](docs/PROJECT_MAP.md), [`docs/ASSET_CATALOG.md`](docs/ASSET_CATALOG.md), [`docs/AI_AGENT_GUIDE.md`](docs/AI_AGENT_GUIDE.md)

Before launch, set `commerce.checkoutUrl` (EasyOrders), `commerce.price`, store/policy URLs, analytics IDs
and `site` in `astro.config.mjs`. See the agent guide.
