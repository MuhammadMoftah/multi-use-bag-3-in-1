/**
 * Product registry. Every product listed here appears on the homepage
 * ("اكتشف منتجات Eloura"), in the footer and in the mobile menu, in this order.
 *
 * Adding a product:
 *   1. Put its images in `src/assets/imgs/{slug}/`.
 *   2. Create `src/products/{slug}/` with its copy, media manifest and a
 *      `product.ts` registry entry (see the T-shirt for reference).
 *   3. Create its landing page at `src/pages/{slug}.astro` (its own design and sections).
 *   4. Import the entry below.
 */
import type { Product } from './types';
import mensBlackOversizedTShirt from './mens-black-oversized-t-shirt/product';

export type { Product, ProductImage, ProductSection } from './types';

export const products: Product[] = [mensBlackOversizedTShirt];

const ids = new Set<string>();
for (const product of products) {
  for (const key of [`id:${product.id}`, `slug:${product.slug}`]) {
    if (ids.has(key)) throw new Error(`Duplicate product ${key}`);
    ids.add(key);
  }
}

/** The product spotlighted on the homepage. */
export const featuredProduct: Product | undefined = products.find((entry) => entry.featured) ?? products[0];

/** A product's lead image for brand-level compositions. */
export function leadImage(product: Product) {
  return product.highlightImages?.[0] ?? product.cover;
}

export function getProduct(slug: string): Product {
  const product = products.find((entry) => entry.slug === slug);
  if (!product) throw new Error(`Unknown product "${slug}"`);
  return product;
}
