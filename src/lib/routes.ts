import { services } from '../data/services';
import { pages, articles } from '../data/pages';
import { solutionOptions } from '../data/solution-options';
import { locationPaths } from '../data/locations';

export const pagePaths = [
  '',
  'services',
  'solutions',
  ...solutionOptions.map((solution) => `solutions/${solution.slug}`),
  'insights',
  'contact',
  'request-proposal',
  'request-assessment',
  'training-enquiry',
  ...pages.map((page) => page.slug),
  ...locationPaths,
  ...services.flatMap((service) => [
    `services/${service.slug}`,
    ...service.subservices.map((sub) => `services/${service.slug}/${sub.slug}`),
  ]),
  ...articles.map((article) => `insights/${article.slug}`),
];
