/** Canonical origin when the app is hosted on GitHub Pages (no trailing slash). */
export const SITE_ORIGIN = 'https://o9ll.github.io/nukebg';

/** Public GitHub repository (issues, source, discussions). */
export const REPO_URL = 'https://github.com/o9ll/nukebg';

/** Resolve a public asset path respecting Vite `base` (e.g. `/nukebg/` on GitHub Pages). */
export function publicPath(path: string): string {
  const segment = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${segment}`;
}

/** Host + path label for UI chrome (marquee, etc.). */
export function siteHostLabel(): string {
  if (typeof window !== 'undefined') {
    const { host, pathname } = window.location;
    const base = pathname.replace(/\/$/, '');
    return host + (base && base !== '' ? base : '');
  }
  return 'o9ll.github.io/nukebg';
}
