import * as content from '../content/eloura-travel-bag.content.js';

export { content };

const { commerce, faq } = content;

/** Where purchase CTAs point: the verified checkout page, or the on-page order section. */
export const orderHref = commerce.checkoutUrl ?? '#order';
export const hasCheckout = Boolean(commerce.checkoutUrl);

/** FAQ entries that describe the checkout flow only make sense once it exists. */
export const faqItems = faq.items.filter((item) => !item.requiresCheckout || hasCheckout);

const priceFormat = new Intl.NumberFormat('ar-EG-u-nu-latn', { maximumFractionDigits: 0 });

/** e.g. 1250 → "1,250 ج.م", or null while the price is unconfirmed. */
export function formatPrice(value = commerce.price) {
  return typeof value === 'number' ? `${priceFormat.format(value)} ج.م` : null;
}

/** Two-digit index used for editorial numbering, e.g. 0 → "01". */
export function pad2(index) {
  return String(index + 1).padStart(2, '0');
}
