# Eloura — تيشيرت أوفر سايز أسود

Arabic (RTL) product landing page for the Eloura Men's Black Oversized T-Shirt (Summer Melton).
Astro 7 + Vue 3 + Tailwind CSS v4, static output.

```sh
npm install
astro dev --background     # http://localhost:4321  (astro dev stop | status | logs)
npm run build              # dist/
npm run preview
node scripts/prepare-product-images.mjs   # regenerate image crops
```

> Vite/Tailwind cannot resolve paths that contain `#`. If the project folder name contains `#`
> (e.g. `product #1`), build from a folder without it.

- Content and configuration: `src/content/eloura-oversized-tshirt.content.js`
- Images: `src/content/eloura-oversized-tshirt.media.js`
- Docs: [`docs/PROJECT_MAP.md`](docs/PROJECT_MAP.md), [`docs/ASSET_CATALOG.md`](docs/ASSET_CATALOG.md), [`docs/AI_AGENT_GUIDE.md`](docs/AI_AGENT_GUIDE.md)

Purchase CTAs link to the live EasyOrders product page (`commerce.checkoutUrl`). Still to configure: `commerce.price`,
policy/contact URLs, GA4 ID and `site` in `astro.config.mjs`. See the agent guide.
