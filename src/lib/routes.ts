import { services } from '../data/services';
import { pages, articles } from '../data/pages';

export const pagePaths = [
  '',
  'services',
  'insights',
  'contact',
  'request-proposal',
  'request-assessment',
  'training-enquiry',
  ...pages.map((page) => page.slug),
  ...services.flatMap((service) => [
    `services/${service.slug}`,
    ...service.subservices.map((sub) => `services/${service.slug}/${sub.slug}`),
  ]),
  ...articles.map((article) => `insights/${article.slug}`),
];
