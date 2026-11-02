# Diversity.ca Sites import

- Imported repository: https://github.com/GrafovGroup/Diversity
- Imported branch: `codex/diversity-bilingual-site`
- Imported commit: `ca626aab9a1339fefe7565678aa11614c8a87fd7`
- Import date: November 1, 2026
- Separate Sites project: `appgprj_6ae76ee7cb348191a82a092ea4d340f6`

The original Astro application, bilingual copy, styles, forms, logos, and image assets are preserved. The Sites checkout adds `.openai/hosting.json` for static hosting of `dist/`, and allows the managed preview hostname `terminal.local` in Vite's development server configuration. The original GitHub branch has not been changed.

The original canonical URLs continue to use `https://diversity.ca`. No custom domain was connected by the initial import. At import, enquiry forms retained the source branch's email-draft fallback because `PUBLIC_FORM_ENDPOINT` was unset. The Formspree restoration below supersedes that initial configuration.

Import validation passed Astro/TypeScript checks with zero diagnostics, generated 98 HTML pages (48 per language plus the root redirect and 404), and passed the existing static asset budgets. A filesystem check verified all 211 distinct internal paths and their linked anchors, and confirmed that every file in `src/` and `public/` matched the source commit at import. Browser checks verified the English homepage, French homepage, a French service page, language switching on that service, and the preselected service in its enquiry form. The full Playwright suite was not run during this import.

## Public launch

On November 1, 2026, the owner confirmed that the form and email work and requested publication. Site access was changed to public. The obsolete mailbox-verification notice was removed from the English and French enquiry pages. The existing form behavior remains unchanged.

The site was uploaded to the separate WHC document root `/home/nvfglyl5/diversity.ca`. Register.ca has an apex A record of `51.161.57.68` and a `www` CNAME of `diversity.ca.`. The apex record was corrected on November 1, 2026 after cPanel's Shared IP Address and Zone Editor confirmed the web server address; the earlier value `148.113.170.101` was the WHC portal's SFTP host and was entered in error. Register.ca confirmed the correction was saved. Existing Forward Email MX/TXT records were preserved. WHC email routing was set to Remote Mail Exchanger. Custom-domain HTTPS was not yet verified after this correction. The public Sites URL remains available.

## Policy update on November 1, 2026

The owner authorized the launch-readiness work and confirmed that enquiries which do not become client engagements are kept for up to 12 months. The English and French privacy pages now explain that retention period, the actual email-draft flow, visitor-side downloads, known hosting/email providers, and the contact route for privacy requests. The accessibility statement describes the implemented features, contact route and testing limits without claiming conformance or certification. Both pages replace draft notices with a last-updated date. The retained direct-delivery configuration remains unset.

This update passed Astro checks with zero diagnostics, generated 98 pages, passed the static asset budgets, and passed a filesystem audit of internal paths and anchors. Browser review checked the updated policy content and language switching. Browser zoom controls did not change the viewport, so narrow-layout and physical-phone checks were not completed in this update. Historical test results remain in the original QA documents and are not new test results. No real enquiry or launch announcement was sent.

## DNS switch and Formspree restoration on November 1, 2026

After explicit owner approval, Register.ca saved delegation to `ns1.whc.ca`, `ns2.whc.ca`, and `ns3.whc.ca`. WHC's zone preserves the apex A, www CNAME, both Forward Email MX records, Forward Email and Google verification TXT records, and the existing `test.diversity.ca` A record. Existing WHC SPF, DKIM and DMARC records were retained. The registry still returned the old nameservers immediately after the switch; SSL and Google verification remained pending propagation. A one-time DNS/HTTPS recheck was scheduled.

The owner confirmed the mobile layout looks good and that the existing Formspree form delivers to `info@diversity.ca`. Previous setup records identify the approved endpoint as `https://formspree.io/f/xaeepeno`, connected in the earlier review project on October 31. The later source import had omitted this build setting. The endpoint is now a tracked default in the shared enquiry component, restoring all eight bilingual forms. English/French privacy and accessibility descriptions reflect direct submission. No new mailbox-delivery test was sent during this restoration; the recipient and earlier receipt are owner-confirmed.

## HTTPS and Google launch completion on November 1, 2026

Google Public DNS and Cloudflare DNS now return the three WHC nameservers. Google resolves the apex and www to `51.161.57.68`. WHC reports valid AutoSSL certificates for `diversity.ca` and `www.diversity.ca`, expiring January 30, 2027, with automatic renewal. The free certificate request was retried after the new DNS records became visible, adding the previously missing www coverage.

Google Search Console verified the `diversity.ca` domain property through its existing TXT record. `https://diversity.ca/sitemap.xml` was submitted and Google reports “Sitemap processed successfully” with 96 discovered pages. This confirms sitemap processing, not that those pages have been indexed.

Apache configuration now permanently redirects HTTP and www visits to the same path on `https://diversity.ca`, and the root URL to `/en/`. Certificate-validation paths remain accessible over HTTP. These rules apply only to the custom domain, preserving the separate Sites preview URL.

## Visual refinement on November 1, 2026

At the owner’s request, decorative arrows were removed from shared navigation, buttons, service links, enquiry forms, articles and footers in both languages. Service tiles use explicit underlined action labels instead of numbered badges. The homepage photo has a simple caption and rectangular frame; decorative focus-strip symbols, CTA rings and image/button hover movement were removed. The gradient wordmark, bilingual content, meaningful process-step numbering and existing Formspree integration are preserved.

Astro checks passed with zero diagnostics. Browser review covered the desktop English homepage and service index, 390px framed English/French responsive layouts, the French service index, mobile menu expansion and the enabled French enquiry button. The responsive views had no horizontal overflow. This was browser layout review, not a new physical-device or mailbox-delivery test. The temporary review page was removed before packaging.

## Wider responsive layout on November 1, 2026

The shared container now grows to 1,800px (previously 1,376px), with fluid 16–48px minimum side gutters. Desktop headers, page sections, service grids and footers use this shared width. Long-form paragraphs retain a readable line length. Navigation changes to the existing menu at 1,100px, replacing the earlier compressed tablet navigation. Phone service cards use a single column with larger copy, and the English headline minimum size prevents orphaned punctuation at 320px. Grid tracks and children can shrink without forcing horizontal scrolling.

Astro checks passed with zero diagnostics. Browser layout measurements passed 108 combinations: six representative page templates in English and French at 320, 390, 768, 1024, 1100, 1101, 1440, 1920 and 2560 CSS-pixel frame widths. No horizontal document overflow, off-screen visible controls/images, or header navigation wrapping below the logo was found. Visual review included the narrow English/French homepages, wide desktop layout and French contact forms. Tablet menu opening and Escape dismissal worked, and the French submit control was enabled. This is responsive browser QA rather than physical-device coverage. No enquiry was sent. The temporary QA page was removed before the production build.

## Homepage hero refresh — November 1, 2026

Replaced the casual coworking hero with a licensed professional meeting photograph by Yan Krukau (Pexels 7792761). Self-hosted WebP variants at 800, 1200 and 1800 pixels use 40,168, 65,542 and 107,754 bytes. EN/FR descriptive alt text, responsive srcset/sizes and high fetch priority are retained; desktop uses a 4:3 crop and mobile/tablet preserves the full 3:2 composition. Source/licence recorded in image-provenance.json.

Sitemap lastmod dates added only for the homepages and the 26 solution URLs whose content was updated on November 1; not derived from the build clock.

Validation: Astro check reports zero errors/warnings/hints across 42 files. Twelve EN/FR homepage layouts at 320,390,768,1024,1440,1920 pixels load the new image with alt text and no horizontal overflow. Desktop and French phone composition visually inspected.

## Wordmark slogan alignment — November 1, 2026

The shared Wordmark component now distributes the three slogan phrases and their separators across the wordmark's full width. Header and footer, English and French, retain their existing type sizes and branding. Verified 16 header/footer alignments at 320, 390, 768 and 1440 pixels: first/last slogan word edges align within one pixel of the wordmark box, slogan stays below it, and pages have no horizontal overflow. French desktop appearance visually inspected. Astro check: zero errors, warnings or hints.


## Canadian location expansion — November 1, 2026

Added 52 distinct city/regional guides and 13 province/territory guides in both languages (130 new localized URLs). Rebuilt the national directory with progressive city search and linked it from home/core services. Each location includes all seven service divisions, deliverables, detailed service links, practical planning and clear delivery/quote answers. City guides include three possible project scopes and an official regional-context source. No local offices or client projects are invented.

Added consistent Organization/WebSite/WebPage identifiers, service-area Service data and visible-matching breadcrumbs. Canonicals, bilingual alternates and editorial sitemap dates are preserved. City/province context now prefills enquiry forms from a local allowlist, survives language switching, and appears in provider payloads, exports and email drafts. Manual city entries do not enter language-switch URLs.

Browser QA: 326 checks passed, including 72 responsive layouts (six templates × two languages × six widths from 320 to 1920px), all 52 city contexts and payloads in both languages, all 13 regional contexts, invalid parameter rejection, existing solution context and form-language continuity. Accent-insensitive Montreal search returned the matching Montréal guide. No enquiries were sent. Temporary QA route removed before build. See docs/LOCATION-SEO.md for architecture and maintenance.

Final static audit passed: 252 unique sitemap URLs and page titles/descriptions, 18,986 internal links/assets, reciprocal locale alternates, 130 location pages with seven area-specific Service entities and matching breadcrumbs. Québec City has a distinct French title from the province. Build output: 254 HTML pages including root redirect/404. Initial asset budgets passed at 9.73 MB total, 49.3 KB largest HTML and 27.9 KB JavaScript.


## Main navigation size — November 1, 2026

Increased main navigation type sizes by exactly 20%: desktop links 0.62rem → 0.744rem; mobile links 0.8rem → 0.96rem; header CTA 0.7rem → 0.84rem; mobile Menu control 0.68rem → 0.816rem. Scope is the primary navigation only. English 320px and French 390px expanded menus fit without horizontal overflow; French 1101px desktop navigation remains on one row. Computed sizes verified at 15.36px mobile and 11.904px desktop. Temporary visual review page removed before publication.


## Button and logo refinement — November 1, 2026

Added a shared 6px corner radius for buttons, including menu and enquiry controls. Removed the slogan from the shared header/footer wordmark and all four standalone wordmark SVGs. Enlarged the rendered wordmark by exactly 20%: desktop 2.15rem → 2.58rem and phone 1.95rem → 2.34rem. Existing navigation type sizes are preserved. Compact header spacing through 1250px and phone menu padding below 380px keep the larger logo alongside the navigation.

Browser review covered English 320px and French 390px, 1101px and 1201px frames. Header controls remain beside the logo, both header/footer brands contain only Diversity.ca, computed font sizes are 37.44px on phones and 41.28px on desktop, and button radius is 6px. No horizontal document overflow was observed. Temporary review page removed before the production build.


## Full-width homepage photograph — November 1, 2026

Implemented the owner's selected concept 1 on both localized homepages: edge-to-edge existing licensed meeting photograph, graduated navy overlay, white headline/body/buttons, and a lighter blue-purple-pink Progress accent. The current logo, navigation, rounded buttons and remaining sections are retained. At phone widths the readable navy content transitions into a 280px photo band, preserving faces instead of heavily cropping the full image behind text. Responsive image sizes now reflect the full viewport. Existing photo source/licence and descriptive localized alt text are preserved. Superseded homepage styles were removed from the shared stylesheet and replaced with a homepage-specific stylesheet.

Browser review: both languages at 320, 390, 768, 1100, 1440, 1920 and 2560 CSS-pixel frame widths, with no document overflow; every headline stayed on three lines, images loaded, and both hero actions retained the correct localized services/contact links and 54px heights. Desktop composition and final English/French phone photo bands visually inspected. Phone checks repeated after crop refinement. No enquiries sent. Temporary review page removed before packaging.


## French homepage light colour wash — November 1, 2026

Applied the owner's selected concept 3 to the French homepage only: pale blue/lilac/blush background, navy text and buttons, original vivid Progrès gradient, a rounded standalone meeting photograph and lavender caption/purpose bands. English retains concept 1's full-width photograph and dark overlay. The image component accepts an optional sizes override so French requests an appropriate split-layout image while English preserves the full-viewport setting. All existing localized copy and action links remain, with the French photo caption restored.

Browser review: French at 320, 390, 768, 1024, 1440, 1920 and 2560px; English at 390 and 1440px. All nine layouts had no horizontal document overflow, three headline lines, loaded photographs and correct localized services/contact links. French desktop and phone compositions visually inspected; English retained white type and background photography. Temporary review page removed before packaging.


## Enquiry confirmation and consent-field removal — November 1, 2026

Removed the requested checkbox and statement from the shared English/French enquiry form, including the validation gate and consent claim in provider/export records. Retained a plain privacy-notice link. Record schema is now version 3 because the consent property is removed. Successful provider responses replace the entire form, title and instructions with a centered thank-you panel explaining email follow-up. The panel receives focus, is announced as a status, and is brought into view with reduced-motion support. Send another enquiry reopens a cleared form with its original service/location context and focuses the name field. Failed submissions retain answers and allow retry; email-draft/download states do not show the sent confirmation.

Validation: two browser-free unit tests passed for endpoint allowlisting, required data, spam rejection and absence of consent claims in both locales. Existing browser regression expectations updated. CUA browser QA used a temporary local-only provider-response fixture: English/French success, centered display, hidden entry fields, focus transfer, reset to initial service context, HTTP rejection and network failure with retained answers. English 390px/French 320px success panels had no horizontal overflow and were visually checked. No actual provider messages were sent. All temporary fixture routes/files were removed before build.
