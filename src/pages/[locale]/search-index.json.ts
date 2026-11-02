import type { APIRoute } from 'astro';
import { services, type Locale } from '../../data/services';
import { solutionOptions } from '../../data/solution-options';
import { pages, articles } from '../../data/pages';
import { regions } from '../../data/regions';
import { cities, cityPath } from '../../data/locations';
import { searchTitles } from '../../data/search-titles';
import { pagePaths } from '../../lib/routes';

export const getStaticPaths = () =>
  ['en', 'fr'].map((locale) => ({ params: { locale } }));
export const GET: APIRoute = ({ params }) => {
  const locale = params.locale as Locale;
  const en = locale === 'en';
  const results = new Map<
    string,
    { path: string; label: string; keywords: string }
  >();
  const add = (path: string, label: string, keywords = '') => {
    results.set(path, { path, label, keywords });
  };
  for (const page of pages)
    add(page.slug, page.eyebrow[locale], page.title[locale]);
  for (const [path, title] of Object.entries(searchTitles))
    add(path, title[locale]);
  add(
    '',
    en ? 'Home · Diversity.ca' : 'Accueil · Diversity.ca',
    searchTitles[''][locale],
  );
  add(
    'solutions',
    en ? 'Products and project kits' : 'Produits et trousses de projet',
  );
  add('insights', en ? 'Resources and guides' : 'Ressources et guides');
  add(
    'procurement',
    en ? 'Bids and tenders' : 'Soumissions et appels d’offres',
    'RFP RFQ bids tender tenders procurement public contracts appel appels offre offres soumission marché marchés publics',
  );
  add(
    'canada',
    en ? 'Service areas across Canada' : 'Territoires desservis au Canada',
  );
  for (const region of regions)
    add(
      'canada/' + region.slug,
      region.name[locale],
      region.code +
        ' ' +
        (en
          ? 'province territory service areas'
          : 'province territoire services'),
    );
  for (const city of cities) {
    const region = regions.find((item) => item.code === city.province)!;
    add(
      cityPath(city),
      city.name[locale] + ' · ' + region.name[locale],
      region.code + ' DEI EDI accessibility accessibilité training formation',
    );
  }
  for (const service of services) {
    const path = 'services/' + service.slug;
    const aliases =
      service.slug === 'accessibility'
        ? 'accessibility audit assessment audit accessibilité évaluation'
        : '';
    add(
      path,
      service.title[locale],
      service.shortTitle[locale] + ' ' + aliases,
    );
    for (const sub of service.subservices)
      add(path + '/' + sub.slug, sub.title[locale], service.shortTitle[locale]);
  }
  for (const item of solutionOptions)
    add('solutions/' + item.slug, item.title[locale]);
  for (const article of articles)
    add('insights/' + article.slug, article.title[locale]);
  for (const path of pagePaths)
    if (!results.has(path)) throw new Error('Missing search entry: ' + path);
  return Response.json([...results.values()]);
};
