import type { APIRoute } from 'astro';
import { pagePaths } from '../lib/routes';
export const GET: APIRoute = () => {
  const urls = (['en', 'fr'] as const)
    .flatMap((locale) =>
      pagePaths.map((path) => {
        const suffix = path ? `${path}/` : '';
        return `<url><loc>https://diversity.ca/${locale}/${suffix}</loc><xhtml:link rel="alternate" hreflang="en-CA" href="https://diversity.ca/en/${suffix}"/><xhtml:link rel="alternate" hreflang="fr-CA" href="https://diversity.ca/fr/${suffix}"/></url>`;
      }),
    )
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
