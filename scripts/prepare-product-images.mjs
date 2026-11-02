/**
 * Derives clean, single-subject web images from the owner-supplied originals of
 * each product (collages and ad banners). Every product keeps its own folder:
 *
 *   src/assets/imgs/{product-slug}/            originals (never modified)
 *   src/assets/imgs/{product-slug}/derived/    files written here, imported by the site
 *
 *   node scripts/prepare-product-images.mjs                    # all products
 *   node scripts/prepare-product-images.mjs <slug>             # one product
 *   node scripts/prepare-product-images.mjs <slug> --preview   # also small previews in .preview/
 *
 * Crop boxes are in source pixels: [left, top, width, height]. Banner crops
 * deliberately exclude baked-in text and unverified claims (e.g. "Premium
 * Cotton", "L • XL • 2XL"). Output names are slug-safe (no spaces), which keeps
 * the generated `srcset` URLs valid.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const ASSETS = 'src/assets/imgs';
const PREVIEW = '.preview';

const products = {
  'mens-black-oversized-t-shirt': [
    { out: 'model-seated', src: 'Moody Industrial Portrait in Black.png' },
    { out: 'packshot-front', src: 'Black Basic T-Shirt Advertisement zoomed .png' },
    { out: 'detail-neckline', src: 'Black Sweatshirt, Silver Chain and Watch.png' },
    { out: 'model-walk', src: 'Monochrome Blackwear Editorial Collage.png', box: [0, 0, 622, 650] },
    { out: 'model-back', src: 'Monochrome Blackwear Editorial Collage.png', box: [631, 0, 623, 650] },
    { out: 'model-standing', src: 'Luxury Black Oversized T-Shirt Campaign.png', box: [1150, 0, 386, 800] },
    { out: 'fabric-texture', src: 'Firefly_gpt-image.png', box: [0, 690, 430, 334] },
  ],
};

const args = process.argv.slice(2);
const preview = args.includes('--preview');
const only = args.find((arg) => !arg.startsWith('--'));
if (only && !products[only]) {
  console.error(`Unknown product "${only}". Known: ${Object.keys(products).join(', ')}`);
  process.exit(1);
}
if (preview) await mkdir(PREVIEW, { recursive: true });

for (const [slug, crops] of Object.entries(products)) {
  if (only && slug !== only) continue;
  const srcDir = path.join(ASSETS, slug);
  const outDir = path.join(srcDir, 'derived');
  await mkdir(outDir, { recursive: true });

  for (const { out, src, box, width } of crops) {
    let image = sharp(path.join(srcDir, src));
    if (box) {
      const [left, top, w, h] = box;
      image = image.extract({ left, top, width: w, height: h });
    }
    if (width) image = image.resize({ width, withoutEnlargement: true });
    const file = path.join(outDir, `${out}.jpg`);
    const info = await image.jpeg({ quality: 90, mozjpeg: true }).toFile(file);
    console.log(`${file}  ${info.width}x${info.height}`);
    if (preview) {
      await sharp(file).resize({ width: 420 }).jpeg({ quality: 70 }).toFile(path.join(PREVIEW, `${slug}-${out}.jpg`));
    }
  }
}
