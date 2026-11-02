/**
 * Click tracking for links marked with `data-track`:
 *
 *   checkout      purchase CTA → official EasyOrders product page (OrderLink)
 *   product-card  homepage/product discovery → internal product landing page
 *   store         outbound link to the official store home
 *
 * Product details come from `data-product-id` / `data-product-name`. Events
 * are sent only to tags that are loaded (`window.gtag`, `window.fbq`). Meta
 * events are custom events, so they never collide with the standard
 * ViewContent / InitiateCheckout / Purchase events that EasyOrders sends.
 * A click on an outbound link is purchase intent, never a Purchase.
 */
type Tag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Tag;
    fbq?: Tag;
  }
}

const CURRENCY = 'EGP';
const sentCheckouts = new Set<string>();

export function initTracking() {
  document.addEventListener(
    'click',
    (event) => {
      const link = (event.target as Element | null)?.closest?.<HTMLAnchorElement>('a[data-track]');
      if (!link) return;
      const { track, productId, productName } = link.dataset;
      const items = productId ? [{ item_id: productId, item_name: productName }] : [];
      const meta = productId ? { content_ids: [productId], content_type: 'product', content_name: productName } : {};

      if (track === 'checkout') {
        // One begin_checkout per product per page view.
        const key = productId ?? link.href;
        if (sentCheckouts.has(key)) return;
        sentCheckouts.add(key);
        window.gtag?.('event', 'begin_checkout', { currency: CURRENCY, items });
        window.fbq?.('trackCustom', 'CheckoutLinkClick', { ...meta, destination: link.hostname });
      } else if (track === 'product-card') {
        window.gtag?.('event', 'select_item', { item_list_id: 'showcase_products', item_list_name: 'Eloura Showcase', items });
        window.fbq?.('trackCustom', 'ProductDiscoveryClick', meta);
      } else if (track === 'store') {
        window.gtag?.('event', 'outbound_store_click', { link_url: link.href });
        window.fbq?.('trackCustom', 'OfficialStoreClick', { destination: link.hostname });
      }
    },
    { capture: true },
  );
}
