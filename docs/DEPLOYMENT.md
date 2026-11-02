# Static deployment to WHC Pro

**Current request:** the owner selected OpenAI Sites on November 1, 2026. See [HOSTING-HANDOFF.md](HOSTING-HANDOFF.md) for the current deployment status and portable build settings. This document retains the technical instructions for the earlier WHC plan.

This implementation exports a static website to `dist/`. WHC serves these files directly; a Node.js process is used for building and local development only. Follow the approved [deployment runbook](../DEPLOYMENT_RUNBOOK.md) together with this technical guide.

No production deployment, DNS change, mailbox verification or public TLS check is implied by a successful local build.

## 1. Confirm release inputs

- Obtain explicit approval of the reviewed website and the production release.
- Confirm the legal business details, bilingual copy, exact logo execution and legal/accessibility drafts using [CONTENT-REVIEW.md](CONTENT-REVIEW.md).
- Confirm the WHC account, domain document root and upload method from the hosting account. Do not assume that `public_html` is correct for every domain.
- Back up the current web files and capture the current DNS zone, including active MX, SPF, DKIM and DMARC records.
- Confirm that `info@diversity.ca` receives and sends mail.
- Configure and test the approved form endpoint if direct form submission is required for release.

Hosting credentials and provider administration secrets belong in approved secure settings, not in source files, Git history or chat.

## 2. Build the approved revision

From the repository root with Node 22.23.4 or later:

```sh
export ASTRO_TELEMETRY_DISABLED=1
npm ci
npm run check
npm run lint
npm run build
npm run budget
npx playwright install --with-deps chromium
npm test
```

The owner-approved Formspree endpoint `https://formspree.io/f/xaeepeno` is the tracked default for all eight bilingual enquiry forms, with delivery configured by the owner to `info@diversity.ca`. This preserves the connection across imports and builds without local environment files. `PUBLIC_FORM_ENDPOINT` can override it before building. The endpoint is public browser configuration, not a secret. Never insert an API key into it. Rebuild whenever it changes.

An explicitly empty `PUBLIC_FORM_ENDPOINT` enables the legacy email-draft flow for development; do not deploy that configuration or its current direct-delivery policy text without review. A successful provider response means provider acceptance, not independently confirmed inbox delivery. The owner confirmed receipt at `info@diversity.ca`. Browser tests block real Formspree traffic and use test-only HTML overrides and provider mocks.

Record the exact Git revision, build date, test result and any accepted limitations. Review the actual output files under `dist/`, including both language trees, `sitemap.xml`, `robots.txt`, brand/media assets and the 404 output.

## 3. Preview the static output

```sh
export ASTRO_TELEMETRY_DISABLED=1
npm run preview -- --ignore-lock --host 127.0.0.1 --port 4323
```

The command uses local port 4323 and stops with Ctrl+C. The foreground flag concerns Astro's server coordination, not package-lock verification. Browser tests use this same port, so stop a manually started server before a separate CI-style test run.

Review the homepage, navigation, all seven divisions, representative subservices, corporate/government routes, enquiry forms, articles and legal drafts in both languages. Check keyboard navigation, focus visibility, long French labels, mobile menus, invalid inputs, failure states and the missing-page response. Automated accessibility scans are useful evidence but do not establish full WCAG conformance.

## 4. Upload static files

Use the hosting account's supported File Manager or secure transfer mechanism to upload the **contents of `dist/`** into the verified document root. Preserve a recoverable copy of the prior deployment. Do not upload `node_modules`, `.env`, repository source, test reports or the earlier environment-validation fixture.

The site uses prerendered routes with trailing slashes. Preserve the directory structure and directory-index behaviour. Do not add a blanket single-page-app rewrite that redirects missing routes to the homepage. The root entry redirects visitors to English, while `/en/` and `/fr/` are distinct pages.

If the hosting account needs an Apache `ErrorDocument` directive to serve the generated 404 page, configure it in the document root only after confirming the correct generated filename and existing `.htaccess` rules. Preserve unrelated hosting rules; do not overwrite an existing configuration blindly.

## 5. Domain, HTTPS and mail

Use only the actual server address or nameservers provided by the verified WHC account. Confirm where DNS is managed before changing records. Preserve the existing mail configuration unless an explicitly approved mail migration requires changes.

The site's canonical URL is `https://diversity.ca`. Confirm this choice with the owner, provision the certificate using the hosting provider's supported process, and verify apex/www redirects. Enable forced HTTPS only after the certificate works. Redirects must preserve paths and query strings without loops.

The current build provides a public sitemap and robots policy. If using a publicly accessible staging domain, protect it through hosting access controls and an appropriate indexing policy; do not rely on an obscure URL to prevent indexing. Ensure production metadata uses the approved canonical domain before release.

## 6. Verify production and record the release

- Check public HTTPS, certificate validity, canonical-host redirects, both languages, missing-page status, assets, sitemap and robots behaviour.
- Check every division and enquiry entry point, language switching and mobile navigation.
- Submit a labelled test enquiry with permission and verify actual mailbox delivery, consent text, provider errors and spam controls.
- Recheck visible business facts, reviewed legal notices and any approved downloadable capability statement.
- Confirm that no environment fixture, credentials or private build/test artifacts were uploaded.
- Record the deployed revision and rollback location. Restore the prior static files if the release fails its agreed acceptance checks.

Google Search Console and Bing Webmaster Tools submission require owner-controlled verification. Submit the production sitemap only after the site is live and approved. Record completed actions truthfully; preparing a sitemap is not evidence of search-engine submission.
