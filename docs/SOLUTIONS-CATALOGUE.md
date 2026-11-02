# Focused services and products

Added November 1, 2026: `/en/solutions/`, `/fr/solutions/`, and twelve offering pages in each language (26 new URLs).

Eight services cover inclusive job postings, structured interviews, inclusion pulse surveys, respectful workplace microlearning, document accessibility, bilingual plain-language review, accessible meetings, and supplier onboarding. Four product scopes cover wayfinding signs, name badges, sensory support kits, and large-print materials.

All offerings are scoped enquiries. No prices, stock levels, guaranteed delivery dates, certification, standing offers, client relationships or regulatory compliance guarantees are represented. Product selection and specifications are confirmed through a quote. Each detail page includes business/public-sector use cases, deliverables, preparation and scope boundaries.

## Content and image basis

Original service copy developed around the site's existing seven divisions. Hiring guidance consulted:

- Accessibility Standards Canada, recruitment, hiring and onboarding: https://accessible.canada.ca/standards-and-technical-guides/standards-and-technical-guides-database/can-asc-112024-rev-2025-employment/12-recruitment-hiring-and-onboarding
- Public Service Commission, Guide to Mitigating Biases and Barriers in Assessment: https://www.canada.ca/en/public-service-commission/services/public-service-hiring-guides/guide-mitigating-biases-barriers-assessment.html

These informed practical scope ideas, not statements that a standard is legally binding on every buyer or that Diversity.ca is endorsed by a government body.

Twelve Pexels photographs are self-hosted under `public/images/solutions/`. Credits, exact source URLs, licence evidence, dimensions and hashes are in `image-provenance.json`; rendered image metadata is in `src/data/solution-images.json`. Product detail captions expressly identify imagery as illustrative. People pictured are not represented as employees or clients. No generated images were used.

## Enquiry integration

`solution-options.ts` is a lightweight allowlist separate from the full catalogue copy. Quote links send a service, subservice and solution slug to the existing proposal form. The form resolves the title locally only when all three match; duplicate, unknown and mismatched solution parameters are rejected. Changing the service clears the specific solution. The selection is included in the visible context, Formspree payload, exported enquiry record and email draft. The approved Formspree endpoint remains `https://formspree.io/f/xaeepeno`.

No live enquiry or email was submitted during QA.

## Validation

- Astro check: 42 files, zero errors, warnings or hints.
- All 24 bilingual offering contexts preserve the selected title in provider payloads, exported records and email drafts. Four unknown, duplicate or mismatched cases reject the solution context.
- Browser: 60 responsive layouts across five catalogue/detail templates, both languages and 320/390/768/1101/1280/1920-pixel widths; no horizontal overflow, offscreen main controls or wrapped desktop header.
- Visually inspected catalogue desktop and the longest French service heading at 320 pixels. Mobile menu opens and Escape closes it.
- Followed the French name-badge quote link to the form; confirmed the selection and approved endpoint, then changed service and confirmed the product context cleared. No submission made.
