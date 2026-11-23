# Diversity.ca

Production-oriented bilingual Canadian consulting website, built from `CODEX_MASTER_BRIEF.md` and `DEPLOYMENT_RUNBOOK.md`. Approved identity: **Gradient Modern #9**, complete Diversity.ca wordmark, no separate emblem.

**Release state: private approval preview. Public publication and DNS changes are not authorized.**

## Stack and output

- Astro 7 static output; typed English/Canadian French content and reusable components.
- No persistent Node server, database, Worker, paid backend, runtime secret or framework hydration needed on WHC Pro.
- 114 localized content routes plus one bilingual 404 page: **115 HTML pages**.
- Seven division pairs, 14 subservice pairs, corporate and government journeys, procurement, 13 province/territory pairs, three editorial guide pairs, and core/lead/legal pages.
- Ten licensed, locally hosted WebP photographs. Inter font and license hosted locally. See `docs/IMAGE_CREDITS.md`.
- Final upload directory: **`dist/`**. Upload its contents, including `.htaccess`, to the verified domain document root.

## Local development

Node 24 LTS recommended; Node >=22.20.0 required. Use the checked-in lockfile.

```sh
npm ci
npm run dev
npm run qa
```

`npm run qa` runs Astro/TypeScript checks, ESLint, intake tests, the static build and all generated-route checks. The `minimatch` override pins the security-fixed 11.0.1 release for development tooling; it is not shipped to browsers. TypeScript 6 is pinned for compatibility with Astro's checker and the lint tooling.

## Enquiries

The owner-approved endpoint is the tracked default, so clean builds and WHC exports include it. Copy `.env.example` to `.env` only to override the configuration. Never commit private keys or credentials.

```text
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xaeepeno
PUBLIC_RELEASE_APPROVED=false
```

The endpoint was supplied by the owner on 31 October 2026. Only an HTTPS `formspree.io/f/` URL is accepted. The public form identifier is configuration, not a secret. Recipient verification and service/audience routing are configured in the provider, not in client-controlled `_to` fields.

An explicitly empty `PUBLIC_FORM_ENDPOINT` restores email-draft-only mode. In that mode, the form validates the request and prepares an email link. It **does not send a message or claim delivery**. A structured JSON download supports a CRM handoff; no visitor information is persisted in local storage or a site database. Attachments are intentionally unavailable until a suitable secure exchange process is established.

The browser submits using vanilla JavaScript AJAX and reports success only on a successful response with `ok: true`. Failures and timeouts preserve the visitor's input and offer email fallback. Without JavaScript, the HTML form posts to Formspree, including language, enquiry type and source path; a direct email link is also available. See `docs/LEAD_OPERATIONS.md` for routing and live testing requirements.

## SEO and release guard

All routes have a canonical URL, reciprocal EN/FR/x-default alternatives, unique title/description and grounded Organization/WebSite/WebPage/Service/Article/Breadcrumb structured data where applicable. Canonical origin is `https://diversity.ca`, not the private review host.

Default builds carry `noindex,nofollow` and a blocking robots file. This is an indexing guard, not access control; the review Site is separately owner-private. Draft privacy/accessibility notices, brand review and provisional capabilities pages also remain noindex. Remove their draft status only after owner verification and content updates.

Do not run the public-release command or upload to WHC until approval:

```sh
npm run build:production
npm run check:dist
```

## Browser QA

After a build, `node scripts/prepare-browser-qa.mjs` prepares a local-only harness at `/__qa.html`. It uses axe-core in the actual browser, tests every content route at 1440px for automated accessibility, and checks horizontal reflow at 1440, 768, 390 and 320px. Generated `public/__qa*` files are gitignored and must be removed before release packaging. The static validation script rejects them in deployment output.

Use the supported Sites preview workflow in Work Mode. No browser binary, remote browser driver or separate preview server is required. See `docs/QA_REPORT.md` for executed checks and limits.

## Repository guide

- `src/data/services.ts`: seven divisions and 14 bilingual subservices.
- `src/data/site.ts`: localized routes, core pages, audiences, regions and editorial content.
- `src/layouts/Layout.astro`: shared shell, language switching and metadata.
- `src/components/`: page layouts, imagery, wordmark and lead form.
- `src/styles/global.css`: brand tokens, responsive layouts and accessibility treatments.
- `src/lib/intake.mjs`: approved endpoint, endpoint validation and structured lead export.
- `src/lib/formspree.mjs`: AJAX submission, provider acceptance checks and timeout handling.
- `public/brand/`: outlined SVG wordmarks, typographic favicon and bilingual social previews.
- `scripts/generate-brand.py`: optional reproducible vector/social asset generation, using the licensed Inter font. Requires Python FontTools, Brotli and Pillow; not part of the normal build.
- `docs/WHC_RELEASE_CHECKLIST.md`: host-specific release, backup, SSL, DNS and rollback instructions.

No credentials, hosting address, government affiliation, consultant biography, client logo, testimonial, case result or certification has been invented. The public telephone number is omitted until approved.
