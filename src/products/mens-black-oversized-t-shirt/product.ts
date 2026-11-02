import type { Product } from '../types';
import { product, commerce, seo, sections, showcase } from './content.js';
import media, { galleryOrder } from './media.js';

const tshirt: Product = {
  id: product.slug,
  slug: product.slug,
  route: `/${product.slug}`,
  name: showcase.name,
  nameEn: product.nameEn,
  shortDescription: showcase.shortDescription,
  category: showcase.category,
  purchaseUrl: commerce.checkoutUrl,
  cover: media.packshotFront,
  coverHover: media.modelWalk,
  gallery: galleryOrder.map((key) => media[key as keyof typeof media]),
  highlightImages: [media.modelSeated, media.modelWalk, media.detailNeckline],
  features: showcase.features,
  sections,
  seo: {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  },
};

export default tshirt;
