# Asset catalog

Every product owns one folder: `src/assets/imgs/{product-slug}/`. Originals (owner-supplied, never edited)
sit at the top level; `scripts/prepare-product-images.mjs` writes clean, single-subject, slug-safe JPEGs to
`src/assets/imgs/{product-slug}/derived/`, and only those are imported by the site (through the product's
`media.js`). No stock imagery is used, and no images are shared between products.

Original filenames contain spaces, which would end up in generated `srcset` URLs; the derived files avoid that.

## mens-black-oversized-t-shirt

Several originals are ad banners with baked-in text. Some of that text is **not** in the verified
product data, so every image used on the site is either text-free already or cropped to exclude text:

| Text on banner | Verified data |
| --- | --- |
| "Premium Cotton" | Material is Summer Melton |
| "L • XL • 2XL" | Featured size is 2XL; other sizes depend on stock |
| "Long lasting quality", "Heavy fabric" | Not specified |
| Colour list labelled "ألوان متاحة" | Colours exist, availability depends on stock |

### Images in use

Crop boxes are `[left, top, width, height]` in source pixels.

| File (`derived/`) | Original | Crop | Used for |
| --- | --- | --- | --- |
| `model-seated.jpg` | `Moody Industrial Portrait in Black.png` | whole (1254²) | Product hero (LCP), OG images, gallery, homepage hero |
| `packshot-front.jpg` | `Black Basic T-Shirt Advertisement zoomed .png` | whole (826 × 861) | Intro, order thumbnail, gallery, homepage product card |
| `detail-neckline.jpg` | `Black Sweatshirt, Silver Chain and Watch.png` | whole (1254²) | Intro inset, material detail, gallery, homepage hero circle |
| `model-walk.jpg` | `Monochrome Blackwear Editorial Collage.png` | `[0,0,622,650]` | Styling (front), gallery, homepage hero, card hover image |
| `model-back.jpg` | `Monochrome Blackwear Editorial Collage.png` | `[631,0,623,650]` | Styling (back), gallery |
| `model-standing.jpg` | `Luxury Black Oversized T-Shirt Campaign.png` | `[1150,0,386,800]` | Features image, gallery (`fit: contain`) |
| `fabric-texture.jpg` | `Firefly_gpt-image.png` | `[0,690,430,334]` | Material main image, gallery |

Role assignments live in `tshirtImages`, the gallery sequence in `galleryOrder`
(`src/products/mens-black-oversized-t-shirt/media.js`), and the homepage roles (`cover`, `coverHover`,
`highlightImages`) in `product.ts`. Each entry carries Arabic `alt`, a `caption`, the `source` filename and an
optional `object-position` / `fit`.

`model-standing` (386 px wide) and `fabric-texture` (430 px wide) are small crops; supply larger
originals to make them sharper on high-density screens.

### Originals not used directly

| File | Reason |
| --- | --- |
| `Black Basic T-Shirt Advertisement.png` | Baked-in headline, "L • XL • 2XL" and button; the zoomed version is used |
| `Gemini_Generated_Image_vp3pijvp3pijvp3p.jpg` | Same photo as `Moody Industrial Portrait in Black.png` with baked-in text |
| `Firefly_gpt-image.png` (full) | English claims ("Premium Cotton", "Long lasting quality"); only the fabric crop is used |
| `Luxury Black Oversized T-Shirt Campaign.png` (full) | Arabic infographic text; only the model crop is used |
| `Premium Black Oversized T-Shirt Advert.png` | Infographic text; same model as the campaign crop |
| `Premium Black Oversized T-Shirt Banner.png` | Infographic text |
| `Premium Oversized T-Shirt Advertisement.png` | Infographic with colour list and size badge (availability not verified) |
| `ELOURA Men’s Luxury Style Banner.png` | Shows a white T-shirt under an overshirt, not this product |

## Delivery

Images are optimized at build time by `astro:assets` (`<Picture>` with AVIF/WebP, `<Image>`, `getImage`).
Hero images are eagerly loaded with `fetchpriority="high"`; everything else is lazy. OG images are
1200 × 630 JPEGs generated from `model-seated.jpg`.

## Replacing or adding an image

1. Put the original in `src/assets/imgs/{slug}/` (keep the original filename).
2. Add or edit its entry under the product's slug in `products` in `scripts/prepare-product-images.mjs`, then run
   `node scripts/prepare-product-images.mjs {slug} --preview` and check `.preview/{slug}-<name>.jpg`.
3. Import the derived file in the product's `media.js` (Arabic alt, caption, source) and assign it to a role
   or to the gallery order.
4. Make sure the visible image contains no claim that contradicts the product data.
