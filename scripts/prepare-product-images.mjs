/**
 * Derives clean, single-subject crops from the owner-supplied product images in
 * `src/assets/imgs` (collages and infographics) into `src/assets/eloura`.
 * Originals are never modified. Re-run after replacing a source image:
 *
 *   node scripts/prepare-product-images.mjs            # write crops
 *   node scripts/prepare-product-images.mjs --preview  # also write small previews to .preview/
 *
 * Crop boxes are in source pixels: [left, top, width, height]. Infographic crops
 * deliberately exclude baked-in English text and unverified claims (e.g. "55L",
 * "Waterproof", "Wrinkle-Free").
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'src/assets/imgs';
const OUT = 'src/assets/eloura';
const PREVIEW = '.preview';

const crops = [
  { out: 'hero-lifestyle', src: 'eloura_hero_4x_6144x4096.png', box: [1890, 0, 2016, 3590], width: 1600 },
  { out: 'studio-black-cognac', src: 'Luxury Black and Cognac Travel Duffel.png' },
  { out: 'set-black-tan', src: 'Luxury Black and Tan Travel Luggage Set.png' },
  { out: 'organiser-pink-ar', src: 'Elegant Pink Travel Bag Organiser.png' },
  { out: 'garment-suit', src: 'Premium Charcoal Travel Garment Bag Showcase.png', box: [0, 0, 976, 1254] },
  { out: 'garment-dresses', src: 'Wrinkle-Resistant Garment Storage Solution.png', box: [0, 152, 1254, 1102] },
  { out: 'detail-shoes', src: 'Premium Charcoal Travel Garment Bag Showcase.png', box: [989, 887, 260, 260] },
  { out: 'shoe-compartment', src: 'Carry-On Garment Duffel Bag Infographic.png', box: [819, 756, 414, 364] },
  { out: 'pink-shoulder', src: 'Blush Pink Duffel Bag Travel Collection.png', box: [0, 0, 761, 1254] },
  { out: 'pink-hand-carry', src: 'Blush Pink Duffel Bag Travel Collection.png', box: [776, 0, 478, 645] },
  { out: 'pink-crossbody', src: 'Blush Pink Duffel Bag Travel Collection.png', box: [776, 659, 478, 595] },
  { out: 'cream-walk', src: 'Luxury Travel Weekender Lifestyle Collage.png', box: [0, 0, 618, 1254] },
  { out: 'cream-couple', src: 'Luxury Travel Weekender Lifestyle Collage.png', box: [636, 0, 618, 618] },
  { out: 'cream-trolley', src: 'Luxury Travel Weekender Lifestyle Collage.png', box: [636, 631, 618, 623] },
  { out: 'open-blazer', src: '55L High-Capacity Garment Duffel Infographic.png', box: [0, 570, 627, 532] },
  { out: 'packed-open', src: 'Luxury Travel Duffel Packing Guide.png', box: [54, 469, 833, 785] },
];

const preview = process.argv.includes('--preview');
await mkdir(OUT, { recursive: true });
if (preview) await mkdir(PREVIEW, { recursive: true });

for (const { out, src, box, width } of crops) {
  let image = sharp(path.join(SRC, src));
  if (box) {
    const [left, top, w, h] = box;
    image = image.extract({ left, top, width: w, height: h });
  }
  if (width) image = image.resize({ width, withoutEnlargement: true });
  const file = path.join(OUT, `${out}.jpg`);
  const info = await image.jpeg({ quality: 90, mozjpeg: true }).toFile(file);
  console.log(`${file}  ${info.width}x${info.height}`);
  if (preview) {
    await sharp(file).resize({ width: 420 }).jpeg({ quality: 70 }).toFile(path.join(PREVIEW, `${out}.jpg`));
  }
}
