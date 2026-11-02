import { globalNav, type NavLink } from '../data/site';

/** Link to a homepage section: a same-page anchor on the homepage, a page link elsewhere. */
export function homeSectionHref(section: string, isHome: boolean) {
  if (section === 'top') return isHome ? '#top' : '/';
  return isHome ? `#${section}` : `/#${section}`;
}

export function isHomePath(pathname: string) {
  return pathname === '/' || pathname === '/index.html';
}

export function globalNavLinks(isHome: boolean): NavLink[] {
  return globalNav.map((item) => ({ label: item.label, href: homeSectionHref(item.section, isHome) }));
}
