/**
 * Site-wide configuration shared by the homepage and every product page:
 * brand, official store links, analytics IDs and the global navigation.
 * Product facts live in each product's folder under `src/products/`.
 *
 * Fill URLs in only once verified. A `null` link is simply not rendered.
 */

export const site = {
  name: 'Eloura Showcase',
  /** Wordmark parts: brand in the script face, tagline in small caps beneath. */
  brand: 'Eloura',
  tagline: 'Showcase',
  locale: 'ar_EG',
  language: 'ar-EG',
  currency: 'EGP',
};

/** The official store (EasyOrders) handles cart, checkout, payment and shipping. */
export const store = {
  name: 'Eloura',
  platform: 'EasyOrders',
  url: 'https://elouravtx.myeasyorders.com',
  contactUrl: null as string | null,
  shippingPolicyUrl: null as string | null,
  returnsPolicyUrl: null as string | null,
  privacyPolicyUrl: null as string | null,
  termsUrl: null as string | null,
};

/** Tracking IDs (public, not secrets). Nothing is loaded or fired while an ID is null. */
export const analytics = {
  /** Meta Pixel (dataset) ID — Eloura | Website Pixel. */
  metaPixelId: '4460772997566697' as string | null,
  ga4MeasurementId: null as string | null,
};

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

/** Store policy links that have a verified URL. */
export const policyLinks: NavLink[] = [
  { href: store.shippingPolicyUrl, label: 'الشحن' },
  { href: store.returnsPolicyUrl, label: 'الاسترجاع' },
  { href: store.privacyPolicyUrl, label: 'الخصوصية' },
  { href: store.termsUrl, label: 'الشروط والأحكام' },
  { href: store.contactUrl, label: 'تواصل معانا' },
]
  .filter((link): link is NavLink => Boolean(link.href))
  .map((link) => ({ ...link, external: true }));

/**
 * Global navigation. Entries point at homepage sections: on the homepage they
 * are same-page anchors (with scroll spy), on product pages they lead home.
 */
export const globalNav = [
  { section: 'top', label: 'الرئيسية' },
  { section: 'about', label: 'عن Eloura' },
  { section: 'products', label: 'اكتشف المنتجات' },
  { section: 'how', label: 'إزاي تطلب' },
];

export const storeLinkLabel = 'المتجر الرسمي';
