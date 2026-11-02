import options from '../data/location-options.json';
type Locale = 'en' | 'fr';
interface RegionOption {
  code: string;
  name: Record<Locale, string>;
}
interface CityOption {
  slug: string;
  province: string;
  name: Record<Locale, string>;
}
export const regionOptions = options.regions as RegionOption[];
const cities = options.cities as CityOption[];
/** Labels come only from published service-area data, never arbitrary query text. */
export function resolveLocationContext(
  params: URLSearchParams,
  locale: Locale,
) {
  if (params.getAll('city').length > 1 || params.getAll('region').length > 1)
    return null;
  const cityId = params.get('city');
  const regionId = params.get('region');
  const city = cityId ? cities.find((item) => item.slug === cityId) : undefined;
  if (cityId && !city) return null;
  const region = regionOptions.find(
    (item) => item.code === (regionId ?? city?.province),
  );
  if (!region || (city && city.province !== region.code)) return null;
  return {
    cityId: city?.slug ?? null,
    cityLabel: city?.name[locale] ?? '',
    regionId: region.code,
    regionLabel: region.name[locale],
  };
}
