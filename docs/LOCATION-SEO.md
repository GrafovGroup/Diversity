# Canadian location architecture — November 1, 2026

## Scope

- 52 city and regional-centre guides, plus all 13 provinces and territories.
- Every guide is available in English and Canadian French: 130 new localized pages.
- The existing `/en/canada/` and `/fr/canada/` routes become searchable national directories.
- Each location guide covers all seven service divisions and links to all 21 detailed service scopes. City-specific planning and three possible project examples add local usefulness.
- Cities are service areas. No local-office addresses, local teams, completed projects, certifications or client relationships are implied.
- Existing 122 bilingual URLs are retained; the sitemap now contains 252 URLs.

## Routes and content

`/{locale}/canada/{province-or-territory}/{city}/` is the city pattern. Province/territory guides omit the city segment. Service sections use stable anchors, such as `#accessibility` and `#supplier-diversity`.

One substantial city guide covers the complete service offering. This release deliberately does not multiply the same copy into hundreds of near-identical city-by-service URLs. Future service-specific city pages should have a distinct scope, supporting experience and search demand.

`src/data/city-profiles.json` contains the localized editorial context and one official municipal or regional economic-development reference per city. Regional economic facts are distinguished from Diversity.ca's suggested project scopes. Suggested projects are not case studies. `regions.ts` supplies regional planning considerations; it does not give legal advice or assert province-specific statutory requirements.

Content can be revised in those data files. When city names or regions change, regenerate `location-options.json` from the same data; it is the lightweight allowlist used by enquiry forms. Long location copy is not shipped in the form JavaScript bundle.

## Search and answer discovery

- Server-rendered links from the homepage and core services to the Canadian directory, provinces and selected cities.
- City → province → national breadcrumbs, with matching `BreadcrumbList` structured data.
- Self-referencing production canonicals and reciprocal English/French/x-default alternate links.
- Organization, WebSite and WebPage entities use consistent identifiers. National service pages add `Service` data; location guides add seven `Service` entities with truthful `areaServed` values.
- Visible answers explain service scope, remote/on-site work, quotes and multi-community delivery. No rich-result or AI-citation guarantee is made.
- Updated sitemap with actual editorial modification date. Crawl access and existing Bing verification are preserved.
- No unnecessary AI-specific file or fake LocalBusiness markup is added.

Primary search guidance consulted:

- Google: https://developers.google.com/search/docs/appearance/ai-features
- Google: https://developers.google.com/search/docs/essentials/spam-policies
- Bing: https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/

## Enquiry continuity

City and region query parameters are validated against local data. Matching city names and province/territory labels prefill the proposal form. Duplicate, unknown or contradictory parameters are ignored. The optional city/community field is editable and is included in the Formspree payload, local export and prepared email. Free-text contact and city inputs are never inserted into language-switch URLs. Existing solution/subservice context is retained across language switches.

## Validation and future evidence

Run `npm run check`, the supported Sites build helper, `npm run budget`, and `python scripts/check-location-build.py` for static publication checks. A temporary local browser harness verifies responsive pages, allowed/invalid location contexts, enquiry serialization and translated form state; remove it before publication.

The next content priority is substantiated business evidence: approved project examples, named team qualifications, representative deliverables and verifiable client feedback. Add these only when supplied or independently verified. Review city/service query impressions, enquiries and AI citations after search engines process the new pages. Expansion should follow useful demand rather than page-count targets.
