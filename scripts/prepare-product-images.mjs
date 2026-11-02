/**
 * Derives clean, single-subject images from the owner-supplied product images in
 * `src/assets/imgs` (collages and ad banners) into `src/assets/eloura`.
 * Originals are never modified. Re-run after replacing a source image:
 *
 *   node scripts/prepare-product-images.mjs            # write crops
 *   node scripts/prepare-product-images.mjs --preview  # also write small previews to .preview/
 *
 * Crop boxes are in source pixels: [left, top, width, height]. Banner crops
 * deliberately exclude baked-in text and unverified claims (e.g. "Premium
 * Cotton", "L • XL • 2XL").
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'src/assets/imgs';
const OUT = 'src/assets/eloura';
const PREVIEW = '.preview';

const crops = [
  { out: 'model-seated', src: 'Moody Industrial Portrait in Black.png' },
  { out: 'packshot-front', src: 'Black Basic T-Shirt Advertisement zoomed .png' },
  { out: 'detail-neckline', src: 'Black Sweatshirt, Silver Chain and Watch.png' },
  { out: 'model-walk', src: 'Monochrome Blackwear Editorial Collage.png', box: [0, 0, 622, 650] },
  { out: 'model-back', src: 'Monochrome Blackwear Editorial Collage.png', box: [631, 0, 623, 650] },
  { out: 'model-standing', src: 'Luxury Black Oversized T-Shirt Campaign.png', box: [1150, 0, 386, 800] },
  { out: 'fabric-texture', src: 'Firefly_gpt-image.png', box: [0, 690, 430, 334] },
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
