import * as content from './content.js';
import { pad2, formatPrice as formatAmount } from '../../lib/format';

export { content, pad2 };

const { commerce, faq } = content;

/** Every purchase CTA goes to the live EasyOrders product page. */
export const orderHref = commerce.checkoutUrl;
export const faqItems = faq.items;

export function formatPrice(value = commerce.price) {
  return formatAmount(value);
}
