# Asset catalog

All imagery is owner-supplied (`src/assets/imgs`). No stock, AI-generated or Solana East images are used.
The site uses **crops** of those originals, written to `src/assets/eloura/` by
`scripts/prepare-product-images.mjs`. Crop boxes are `[left, top, width, height]` in source pixels.

Most originals are infographics with baked-in English text. Several of those texts make claims that are
**not** in the verified product data, so every crop was chosen to exclude text:

| Claim on infographic | Verified data |
| --- | --- |
| "55L" | Capacity not specified ("2–3 days", approximate) |
| "Waterproof" | Water-resistant only |
| "Keeps clothes wrinkle-free" | Helps reduce wrinkles; does not eliminate them |
| "21 in" | 20.5 × 10 × 12.5 in (52 × 25 × 32 cm) |

## Crops in use

| File (`src/assets/eloura/`) | Source (`src/assets/imgs/`) | Crop | Used for |
| --- | --- | --- | --- |
| `hero-lifestyle.jpg` | `eloura_hero_4x_6144x4096.png` | `[1890,0,2016,3590]`, resized to 1600 w | Hero |
| `studio-black-cognac.jpg` | `Luxury Black and Cognac Travel Duffel.png` | whole | Intro main image, order thumbnail, OG image, gallery |
| `set-black-tan.jpg` | `Luxury Black and Tan Travel Luggage Set.png` | whole | How it works step 1, gallery |
| `organiser-pink-ar.jpg` | `Elegant Pink Travel Bag Organiser.png` | whole (Arabic labels) | Gallery |
| `garment-suit.jpg` | `Premium Charcoal Travel Garment Bag Showcase.png` | `[0,0,976,1254]` | Details (garment), gallery |
| `garment-dresses.jpg` | `Wrinkle-Resistant Garment Storage Solution.png` | `[0,152,1254,1102]` | How it works step 2, gallery |
| `detail-shoes.jpg` | `Premium Charcoal Travel Garment Bag Showcase.png` | `[989,887,260,260]` | How it works step 3 |
| `shoe-compartment.jpg` | `Carry-On Garment Duffel Bag Infographic.png` | `[819,756,414,364]` | Details (shoes) |
| `pink-shoulder.jpg` | `Blush Pink Duffel Bag Travel Collection.png` | `[0,0,761,1254]` | Features image, gallery |
| `pink-hand-carry.jpg` | `Blush Pink Duffel Bag Travel Collection.png` | `[776,0,478,645]` | How it works step 4, gallery |
| `pink-crossbody.jpg` | `Blush Pink Duffel Bag Travel Collection.png` | `[776,659,478,595]` | Details (strap) |
| `cream-walk.jpg` | `Luxury Travel Weekender Lifestyle Collage.png` | `[0,0,618,1254]` | Details (bag), gallery |
| `cream-couple.jpg` | `Luxury Travel Weekender Lifestyle Collage.png` | `[636,0,618,618]` | Gallery |
| `cream-trolley.jpg` | `Luxury Travel Weekender Lifestyle Collage.png` | `[636,631,618,623]` | Gallery |
| `open-blazer.jpg` | `55L High-Capacity Garment Duffel Infographic.png` | `[0,570,627,532]` | Intro inset circle, gallery |
| `packed-open.jpg` | `Luxury Travel Duffel Packing Guide.png` | `[54,469,833,785]` | Features inset circle, gallery |

Role assignments live in `travelBagImages` and the gallery sequence in `galleryOrder`
(`src/content/eloura-travel-bag.media.js`). Each entry carries Arabic `alt`, a `caption`, the `source`
filename and an optional `object-position`.

## Video

| File | Details | Used for |
| --- | --- | --- |
| `src/assets/imgs/video-1.mp4` | Owner-supplied demo, H.264 + AAC, 720 × 1280, 23.9 s, ≈7.7 MB, moov at start (streams immediately). Burned-in Arabic captions "اشتري دلوقتي! شنطة السفر العملية الترند". Shows unfolding to garment mode, packing clothes and shoes, folding back into the duffel, carrying | How it works section (`ProductVideo.vue`), served unmodified |
| `src/assets/eloura/video-poster.jpg` | Frame at 12.6 s (unfolded, packed with clothes), 720 × 1280, extracted in the browser via canvas | Lazy poster image behind the video |

The video is not re-encoded (no ffmpeg in the toolchain). If a smaller file is supplied later, keep it
H.264 MP4 with "faststart" and replace the file in place.

## Originals not used directly

| File | Reason |
| --- | --- |
| `55L High-Capacity Garment Duffel Infographic.png` (full) | "55L" claim; only a text-free crop is used |
| `Carry-On Garment Duffel Bag Infographic.png` (full) | "Waterproof" / "21 in" text; only a crop is used |
| `Cream Leather Travel Duffel Features.png` | Text-heavy infographic |
| `All-in-One Travel Garment Bag.png` | Text-heavy infographic |
| `Luxury Black Duffel Feature Showcase.png` | Text-heavy infographic |
| `Spacious Storage Travel Duffel Infographic.png` | Capacity claims |
| `Travel in Style_ The Ultimate Weekender.png` | Baked-in headline; the hero source is a 4× upscale of it |
## Delivery

Images are optimized at build time by `astro:assets` (`<Picture>` with AVIF/WebP, `<Image>`, `getImage`).
The hero is eagerly loaded with `fetchpriority="high"` at quality 45 (widths 480–1600); everything
else is lazy. The OG image is a 1200 × 630 JPEG generated from `studio-black-cognac.jpg`.

## Replacing or adding an image

1. Put the new original in `src/assets/imgs/` (keep the original filename).
2. Add or edit its entry in `crops` in `scripts/prepare-product-images.mjs`, then run
   `node scripts/prepare-product-images.mjs --preview` and check `.preview/<name>.jpg`.
3. Add or update the entry in `src/content/eloura-travel-bag.media.js` (Arabic alt, caption, source)
   and assign it to a role or to `galleryOrder`.
4. Make sure the visible crop contains no claim that contradicts the product data above.
