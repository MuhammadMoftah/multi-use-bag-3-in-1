import * as content from '../content/eloura-travel-bag.content.js';

export { content };

const { commerce, faq } = content;

/** Every purchase CTA goes to the live EasyOrders product page. */
export const orderHref = commerce.checkoutUrl;
export const faqItems = faq.items;

const priceFormat = new Intl.NumberFormat('ar-EG-u-nu-latn', { maximumFractionDigits: 0 });

export function formatPrice(value = commerce.price) {
  return typeof value === 'number' ? `${priceFormat.format(value)} ج.م` : null;
}

export function pad2(index) {
  return String(index + 1).padStart(2, '0');
}
