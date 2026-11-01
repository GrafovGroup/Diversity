# Website implementation and QA

Version 1.1 review build validated locally on November 1, 2026 (America/Toronto). This report covers the static review build, not a public production release.

## Implemented

- 96 bilingual content pages: 48 matching English/French page pairs, plus the root language entry and a separate 404 page.
- Seven service divisions and 21 detailed subservices in each language; corporate/government journeys; organizational, procurement, regional and partnership pages; three practical guides; four enquiry journeys.
- Full gradient Diversity.ca wordmark, outlined light/dark SVG exports in both languages, typographic favicon, locally hosted Inter typography and social metadata.
- A distinct primary visual on every content page. English/French counterparts share their matching visual. Eighteen licensed photographs and 36 original editorial illustrations include five exclusive supplementary homepage photographs and a separate 404 illustration. No photo or illustration is reused across different content pages.
- Configurable Formspree delivery, explicit email-draft fallback, consent, required-field validation, honeypot, failure recovery and local JSON enquiry export. No real enquiry was submitted during QA.
- 28 distinct bilingual sample deliverable outlines, preparation checklists and scope agreements, with 56 UTF-8 plain-text downloads.
- Optional assessment, training and proposal questions; schema-v2 local exports; allowlisted service context shared between service links and language versions. Personal answers remain outside URLs and browser storage.
- Canonical/hreflang metadata, sitemap, robots policy, static Apache-compatible output, CI checks and deployment documentation.

## Results

| Check                                     | Result                                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Clean installation from package-lock.json | Initial build passed `npm ci`; dependency versions are unchanged                                   |
| Astro / TypeScript                        | Passed: 34 files, zero errors, warnings or hints                                                   |
| Formatting lint                           | Passed: `npm run lint`                                                                             |
| Static build                              | Passed: 98 HTML pages plus sitemap and assets                                                      |
| Browser and HTTP suite                    | Passed: 34 tests, zero failures or skips                                                           |
| Unique imagery                            | Passed: image URLs and SHA-256 bytes across all 48 logical pages, including additional body images |
| Bilingual imagery                         | Passed: matching EN/FR sources with localized alternative text                                     |
| Editorial completeness                    | Passed: every supplied section heading and body on all 26 information/article pages                |
| Accessibility automation                  | Passed on EN/FR home, service and enquiry pages at desktop/mobile sizes                            |
| Keyboard and responsive navigation        | Passed: skip link, menu, focus and language switching                                              |
| Form fallback and local export            | Passed: required validation, consent, draft generation and JSON download without network delivery  |
| Provider response handling                | Passed with intercepted success/error responses; real provider/mailbox delivery remains unverified |
| Internal routes and assets                | Passed for every generated bilingual page and its internal links/assets                            |
| Static asset budgets                      | Passed                                                                                             |

The full browser suite passed all 34 tests with no failures or skips. This includes the original 18 regression scenarios and 16 new enquiry/content scenarios. All 56 service pages and their matching example downloads were checked in both languages. Active details reach mailto drafts, JSON exports and intercepted provider requests; hidden stale values are excluded. Provider failure preserves input and success restores the initial service context. Closing-time validation requires a timezone only for the active proposal scope. Invalid or unrelated URL parameters are discarded. Keyboard checks and automated accessibility scans also covered 640px and 320px content widths, corresponding to reflow at 200% and 400% for a 1280px viewport. These are browser checks rather than physical-device or human screen-reader testing. Automated checks support accessibility review; they do not establish full WCAG conformance.

## Build size

- Complete static output: 4,210,868 bytes (about 4.0 MiB).
- Largest HTML document: 29,580 bytes.
- Total JavaScript: 19,324 bytes; total CSS: 33,378 bytes.
- Largest image: 251,750 bytes; locally hosted font: 352,240 bytes.
- No third-party image or script requests are required by the homepage.

Budgets are enforced by `npm run budget`; the current metrics are also exported to `artifacts/build-metrics.json`.

## Review artifacts

Screenshots under `artifacts/` include the English homepage hero, full English/French desktop and mobile homepages, enquiry pages, a service page and a detailed subservice illustration. The desktop hero, full page layouts and illustration compositions were visually inspected. New screenshots include `training-en-desktop.png`, `assessment-fr-mobile.png`, and desktop/mobile views of the sample-deliverable sections. Generated output is `dist/`; the review archive is `artifacts/diversity-ca-static.zip`.

## Before public release

The exact logo execution, bilingual content and legal/accessibility drafts require owner review. Confirm business facts, any public telephone number, qualifications and capacity before adding them. No unverified consultant biographies, client claims, accreditations, offices or capability downloads have been invented.

Verify the mailbox, configure a real form endpoint if direct delivery is required, and test actual receipt. Hosting access, the correct document root, DNS, TLS and public smoke tests remain production steps. The named-competitor research audit is incomplete; authoritative retrieved research and source-access limits are documented separately. Production publication and DNS changes require explicit owner approval.
