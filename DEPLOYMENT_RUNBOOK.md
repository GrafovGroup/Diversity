# Diversity.ca — Codex execution and WHC Pro deployment runbook

## Approved configuration
- Domain: diversity.ca; hosting: WHC.ca Pro; contact email: info@diversity.ca.
- GitHub: GrafovGroup/Diversity, main branch.
- Source of truth: CODEX_MASTER_BRIEF.md. Do not change the approved Gradient Modern #9 full-wordmark identity (blue → purple → magenta, no emblem).
- National bilingual English/Canadian French consulting company; corporate and government equal priority; seven divisions.

## Codex execution prompt (paste into Codex with repository opened)
Read CODEX_MASTER_BRIEF.md and this DEPLOYMENT_RUNBOOK.md completely. Implement the full production-ready Diversity.ca website in this repository, not merely a plan or placeholder. Inspect existing files first. Use a static-first framework compatible with WHC Pro shared hosting (prefer Astro static output unless the repo already has a better compatible framework). Avoid a persistent Node server, paid backend dependencies, and platform-specific hosting features. Build the seven service divisions, corporate and government landing pages, service-specific conversion flows, About, Our Approach, Industries, Contact, procurement/capabilities, and substantive bilingual EN/FR content. Use genuine, licensed imagery and accessible responsive design. Do not fabricate consultants, client names, accreditations, offices, results or compliance claims. Make primary email info@diversity.ca; verify any phone number with owner before publishing. Use approved full gradient Diversity.ca wordmark and People | Opportunity | Progress descriptor. Treat other slogan ideas as unapproved until confirmed. Use uppercase navigation and CTAs, FR switch in top bar, wide layout, distinct page imagery, canonical and hreflang tags, structured data only for verified facts, sitemap, robots, Open Graph and clean metadata. Make form endpoint configurable via environment variable; until Formspree endpoint is supplied, provide an honest mailto fallback or clearly marked non-operational state, not a fake success message. Add privacy policy and accessibility statement as review drafts, not false legal assurances. Run build, lint, tests and bilingual link checks; fix all failures. Commit changes in reviewable increments. Provide preview screenshots or staging URL if supported. Produce final QA report, generated static output path, deployment instructions and explicit launch blockers. Do not deploy publicly or change DNS without owner approval.

## Execution phases and acceptance criteria
1. Repository audit and competitive positioning; note all assumptions and missing verified credentials.
2. Brand system: production SVG/CSS gradient wordmark, light/dark, favicon, palette, typography, reusable components.
3. Site structure and complete bilingual content; seven divisions and corporate/government routes; no empty SEO pages.
4. Conversion: request proposal, book consultation, accessibility assessment and training inquiry; accessible fields, anti-spam and privacy consent; configure Formspree only after endpoint is provided.
5. SEO/AEO and technical QA: language alternates, canonical, sitemap.xml, robots.txt, schema, performance, WCAG 2.2 AA-oriented checks, responsive screenshots and valid forms.
6. Build static files; document exact output directory (often dist/) and WHC deployment instructions; GitHub commits and README.

## WHC Pro deployment checklist
1. In WHC client area, confirm diversity.ca is added to the intended Pro hosting account; identify its actual document root in cPanel (often public_html for primary domain, but verify).
2. Back up any existing site and capture current DNS zone and MX/TXT records. Never overwrite email DNS blindly.
3. Create the info@diversity.ca mailbox in WHC cPanel Email Accounts if mail is hosted there; if externally hosted, preserve existing MX. Confirm SPF, DKIM and DMARC settings per active mail provider; test incoming/outgoing messages.
4. Obtain actual WHC server IP or nameservers from account; configure domain DNS only using verified values. Preserve MX, SPF, DKIM, DMARC and other active services. Allow propagation.
5. Run the repository production build in Codex or CI; upload *contents* of static output folder to verified domain document root via cPanel File Manager/SFTP. Do not upload source project in place of built assets.
6. If using client-side routes, configure appropriate rewrite fallback only when required; static prerendered pages are preferred.
7. Enable WHC-supported AutoSSL/Let's Encrypt certificate and force HTTPS after certificate issuance. Test apex and www; select one canonical hostname and 301-redirect the other.
8. Configure Formspree endpoint (owner to provide), verified recipient, spam protection, thank-you and failure states; test all forms on production with real delivery to info@diversity.ca.
9. Smoke test on production: homepage, every division, EN/FR switch, mobile navigation, contact links, images, 404, redirects, sitemap, robots, canonical, hreflang, HTTPS and accessibility keyboard path.
10. Submit sitemap https://diversity.ca/sitemap.xml to Google Search Console and Bing Webmaster Tools after site is live; verify property ownership and monitor indexing. Do not claim submission unless performed.

## Required owner inputs before production launch
- Confirm whether domain DNS is managed at WHC or elsewhere, and access to hosting cPanel (never share passwords in chat).
- Supply the Formspree endpoint or approved contact-form provider and verify recipient.
- Confirm any public telephone number, business legal entity name, address display policy, and approved consultant credentials.
- Approve final site preview and deployment.

## Release gates
- Build/test pass; all seven service divisions have meaningful EN/FR content.
- No false credentials or testimonials; legal/privacy text reviewed.
- Working email and forms; valid SSL and redirects.
- Explicit owner approval for DNS changes and production publication.
