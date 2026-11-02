/**
 * Marks the link whose same-page target sits in the middle band of the
 * viewport with `data-active` and `aria-current="location"`. Links pointing to
 * other pages are ignored. `onChange` receives the active link (or null).
 */
export function initScrollSpy(links: HTMLAnchorElement[], onChange?: (active: HTMLAnchorElement | null) => void) {
  const tracked = links.filter((link) => link.hash && link.pathname === location.pathname);
  const targets = new Map<Element, HTMLAnchorElement[]>();
  for (const link of tracked) {
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target) continue;
    targets.set(target, [...(targets.get(target) ?? []), link]);
  }
  if (!targets.size || !('IntersectionObserver' in window)) return;

  const order = [...targets.keys()];
  const visible = new Set<Element>();
  let current: Element | undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      const next = order.find((target) => visible.has(target));
      if (next === current) return;
      current = next;
      for (const [target, group] of targets) {
        for (const link of group) {
          const active = target === next;
          link.toggleAttribute('data-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
      onChange?.(next ? targets.get(next)![0] : null);
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  order.forEach((target) => observer.observe(target));
}
