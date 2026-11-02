const priceFormat = new Intl.NumberFormat('ar-EG-u-nu-latn', { maximumFractionDigits: 0 });

export function formatPrice(value: number | null | undefined) {
  return typeof value === 'number' ? `${priceFormat.format(value)} ج.م` : null;
}

/** 0 → "01" */
export function pad2(index: number) {
  return String(index + 1).padStart(2, '0');
}
