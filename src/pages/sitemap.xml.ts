import type { APIRoute } from 'astro';
import { pagePaths } from '../lib/routes';
import { servicePhotography } from '../data/service-photography';
export const GET: APIRoute = () => {
  const urls = (['en', 'fr'] as const)
    .flatMap((locale) =>
      pagePaths.map((path) => {
        const suffix = path ? `${path}/` : '';
        // Actual editorial update date, not the build date. Update when these pages change.
        const lastmod =
          path === '' ||
          path === 'services' ||
          path.startsWith('canada/') ||
          path in servicePhotography
            ? '<lastmod>2026-11-02</lastmod>'
            : path === 'solutions' ||
                path.startsWith('solutions/') ||
                path === 'canada' ||
                path.startsWith('services/')
              ? '<lastmod>2026-11-01</lastmod>'
              : '';
        return `<url><loc>https://diversity.ca/${locale}/${suffix}</loc>${lastmod}<xhtml:link rel="alternate" hreflang="en-CA" href="https://diversity.ca/en/${suffix}"/><xhtml:link rel="alternate" hreflang="fr-CA" href="https://diversity.ca/fr/${suffix}"/></url>`;
      }),
    )
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
