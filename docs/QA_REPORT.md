# Website implementation and QA

Version 1.1.2 review build validated locally on November 1, 2026 (America/Toronto). This report covers the static review build, not a public production release.

## Implemented

- 96 bilingual content pages: 48 matching English/French page pairs, plus the root language entry and a separate 404 page.
- Seven service divisions and 21 detailed subservices in each language; corporate/government journeys; organizational, procurement, regional and partnership pages; three practical guides; four enquiry journeys.
- Full gradient Diversity.ca wordmark, outlined light/dark SVG exports in both languages, typographic favicon, locally hosted Inter typography and social metadata.
- A distinct primary visual on every content page. English/French counterparts share their matching visual. Thirteen licensed photographs and 41 original editorial illustrations include five exclusive supplementary homepage visuals and a separate 404 illustration. No photo or illustration is reused across different content pages.
- Configurable Formspree delivery, explicit email-draft fallback, consent, required-field validation, honeypot, failure recovery and local JSON enquiry export. No real enquiry was submitted during QA.
- 28 distinct bilingual sample deliverable outlines, preparation checklists and scope agreements, with 56 UTF-8 plain-text downloads.
- Optional assessment, training and proposal questions; schema-v2 local exports; allowlisted service context shared between service links and language versions. Personal answers remain outside URLs and browser storage.
- Canonical/hreflang metadata, sitemap, robots policy, static Apache-compatible output, CI checks and deployment documentation.

## Results

| Check                                     | Result                                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Clean installation from package-lock.json | Initial build passed `npm ci`; dependency versions are unchanged                                   |
| Astro / TypeScript                        | Passed: 35 files, zero errors, warnings or hints                                                   |
| Formatting lint                           | Passed: `npm run lint`                                                                             |
| Static build                              | Passed: 98 HTML pages plus sitemap and assets                                                      |
| Browser and HTTP suite                    | Passed: 41 tests, zero failures or skips                                                           |
| Unique imagery                            | Passed: image URLs and SHA-256 bytes across all 48 logical pages, including additional body images |
| Bilingual imagery                         | Passed: matching EN/FR sources with localized alternative text                                     |
| Editorial completeness                    | Passed: every supplied section heading and body on all 26 information/article pages                |
| Accessibility automation                  | Passed on EN/FR home, service and enquiry pages at desktop/mobile sizes                            |
| Keyboard and responsive navigation        | Passed: skip link, menu, focus and language switching                                              |
| Form fallback and local export            | Passed: required validation, consent, draft generation and JSON download without network delivery  |
| Provider response handling                | Passed with intercepted success/error responses; real provider/mailbox delivery remains unverified |
| Internal routes and assets                | Passed for every generated bilingual page and its internal links/assets                            |
| Static asset budgets                      | Passed                                                                                             |

The full browser suite passed all 41 tests with no failures or skips. This includes the original 34 scenarios and seven new accessibility regressions. All 56 service pages and their matching example downloads were checked in both languages. Active details reach mailto drafts, JSON exports and intercepted provider requests; hidden stale values are excluded. Provider failure preserves input and success restores the initial service context. Closing-time validation requires a timezone only for the active proposal scope. Invalid or unrelated URL parameters are discarded. Keyboard checks and automated accessibility scans also covered 640px and 320px content widths, corresponding to reflow at 200% and 400% for a 1280px viewport. These are browser checks rather than actual browser-zoom, physical-device or human screen-reader testing. Automated checks support accessibility review; they do not establish full WCAG conformance.

The imagery refresh replaces seven weakly related stock images with two verified CC0 photographs and five original editorial illustrations. Collaboration, inclusive workshops, captioned digital participation, low service counters, keyboard navigation, equitable supplier review and community belonging now appear in the relevant journeys. Image URL and byte uniqueness continues to pass across all logical pages. Additional imagery checks cover five changed journeys in both languages at 320, 390 and 1440 CSS pixels. These identified a narrow French service-grid overflow, corrected by switching to one column below 381 pixels.

## Accessibility review and fixes

A dated [accessibility review](ACCESSIBILITY_REVIEW.md) records the assistant-led keyboard, accessibility-tree, visual and form review, corrections and a human assistive-technology test protocol. Fixed issues include low-contrast input boundaries, clipped/low-contrast focus indicators, visible-label mismatches in accessible link names, header/card overflow under increased spacing and text size, a narrow 404 illustration, undisclosed message-length guidance and imprecise navigation names/states.

All eight form journeys were exercised with keyboard input; provider failures were intercepted, with no real delivery. The broader reflow review covered 182 representative scenarios with the revised stylesheet and six final 404 scenarios, supplemented by six built-site target-spacing checks. The final build passes the seven new regression cases. The 200% text-size condition was a CSS simulation, not actual browser zoom. Human NVDA/VoiceOver, real-device and browser-zoom sessions remain outstanding; no human-review or full-conformance claim is made.

## Build size

- Complete static output: 3,832,361 bytes (about 3.6 MiB).
- Largest HTML document: 29,660 bytes.
- Total JavaScript: 19,324 bytes; total CSS: 34,959 bytes.
- Largest image: 274,736 bytes; locally hosted font: 352,240 bytes.
- No third-party image or script requests are required by the homepage.

Budgets are enforced by `npm run budget`; the current metrics are also exported to `artifacts/build-metrics.json`.

## Review artifacts

Screenshots under `artifacts/` include the English homepage hero, full English/French desktop and mobile homepages, enquiry pages, a service page and a detailed subservice illustration. The desktop hero, full page layouts and illustration compositions were visually inspected. New screenshots include `training-en-desktop.png`, `assessment-fr-mobile.png`, and desktop/mobile views of the sample-deliverable sections. The refresh also includes `home-en-hero-mobile.png`, DEI/accessibility mobile previews in both languages, and `inclusive-audience-cards.png` / `inclusive-guide-cards.png`. Full-frame compositions preserve people and assistive devices; text captions sit below images. Generated output is `dist/`; the review archive is `artifacts/diversity-ca-static.zip`.

## Before public release

The exact logo execution, bilingual content and legal/accessibility drafts require owner review. Confirm business facts, any public telephone number, qualifications and capacity before adding them. No unverified consultant biographies, client claims, accreditations, offices or capability downloads have been invented.

Verify the mailbox, configure a real form endpoint if direct delivery is required, and test actual receipt. Hosting access, the correct document root, DNS, TLS and public smoke tests remain production steps. The named-competitor research audit is incomplete; authoritative retrieved research and source-access limits are documented separately. Production publication and DNS changes require explicit owner approval.
