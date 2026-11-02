import type { Locale } from './services';
import { regions } from './regions';
import cityProfiles from './city-profiles.json';
type Text = Record<Locale, string>;
export interface City {
  slug: string;
  province: string;
  name: Text;
  nearby: Record<Locale, string[]>;
  context: Text;
  planning: Text;
  examples: { service: string; title: Text; body: Text }[];
  source: { label: Text; url: string };
}
export const cities: City[] = cityProfiles;
export const cityRegion = (city: City) =>
  regions.find((region) => region.code === city.province)!;
export const cityPath = (city: City) =>
  `canada/${cityRegion(city).slug}/${city.slug}`;
export const regionCities = (code: string) =>
  cities.filter((city) => city.province === code);
export const locationPaths = [
  ...regions.map((region) => `canada/${region.slug}`),
  ...cities.map(cityPath),
];
export const delivery = {
  en: 'Diversity.ca supports business and public-sector projects across Canada. Remote work, visits, delivery languages, travel costs and timing are agreed in each proposal. These pages describe service areas, not local offices.',
  fr: 'Diversity.ca accompagne les entreprises et le secteur public partout au Canada. Le travail à distance, les visites, les langues, les frais de déplacement et les délais sont convenus dans chaque proposition. Ces pages présentent des territoires desservis, sans désigner des bureaux locaux.',
};
