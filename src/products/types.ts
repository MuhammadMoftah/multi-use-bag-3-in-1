import type { ImageMetadata } from 'astro';

export interface ProductImage {
  src: ImageMetadata;
  /** Arabic alt text. */
  alt: string;
  caption?: string;
  /** CSS object-position used when a frame crops the image. */
  position?: string;
  fit?: 'cover' | 'contain';
}

/** One entry of a product page's contextual section navigation. */
export interface ProductSection {
  /** Element id of the section on the product page. */
  id: string;
  label: string;
}

export interface Product {
  /** Stable identifier used in analytics (`item_id` / `content_ids`). Never change it once live. */
  id: string;
  /** URL slug; also the asset folder name: `src/assets/imgs/{slug}/`. */
  slug: string;
  /** Internal landing page route, e.g. `/mens-black-oversized-t-shirt`. */
  route: string;
  /** Arabic product name. */
  name: string;
  nameEn: string;
  /**
   * Arabic name sent as TikTok `content_name`.
   * `name` is the homepage card title and may be longer.
   */
  contentName?: string;
  /**
   * Selling price reported to ad pixels. Not rendered.
   * The page publishes a price only when the product's `commerce.price` is a number.
   */
  checkoutPrice?: number | null;
  /** ISO currency for `checkoutPrice`. Defaults to the site currency. */
  currency?: string;
  shortDescription: string;
  category: string;
  /** Official EasyOrders product page. Purchase CTAs link here. */
  purchaseUrl: string;
  /** Product card image on the homepage. */
  cover: ProductImage;
  /** Optional second card image, revealed on hover. */
  coverHover?: ProductImage;
  /** Curated gallery, in display order. */
  gallery: ProductImage[];
  /** Curated images for showcase-level compositions (homepage hero, spotlight). Falls back to `gallery`. */
  highlightImages?: ProductImage[];
  /** Spotlighted on the homepage. The first flagged product wins; without one, the first product. */
  featured?: boolean;
  /** Short feature tags shown on the product card. */
  features?: string[];
  /** Section navigation of the product landing page, in page order. */
  sections: ProductSection[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
