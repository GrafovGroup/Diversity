# WHC Pro release checklist — awaiting owner approval

The original `DEPLOYMENT_RUNBOOK.md` remains authoritative. This checklist records the implemented architecture and exact release steps. No DNS, mailbox, cPanel, SSL or public-host changes were made during development.

## Before release

- [ ] Owner approves the EN/FR website, Gradient Modern #9 execution and exact copy.
- [ ] Confirm the legal entity operating Diversity.ca and the final privacy contact/process.
- [ ] Review French content and privacy/accessibility drafts. Remove draft labels only after approval.
- [x] Owner supplied Formspree endpoint `https://formspree.io/f/xaeepeno`; integrated in all EN/FR enquiry forms.
- [ ] Verify Formspree recipient and provider routing. Execute delivery tests.
- [ ] Confirm mailbox operation. Public phone remains omitted unless approved.
- [ ] Verify any biographies, supplier registrations, insurance, security clearances and references before adding them. The print overview is explicitly provisional; it is not a certified capability statement.
- [ ] Confirm actual WHC cPanel account, domain document root, hostname, SSL state and DNS authority. Never guess server IPs or nameservers.

## Source and build

1. Review and merge the development branch after approval. The repository includes no automatic public deployment workflow.
2. Use Node 24 and `npm ci`; run `npm run qa`.
3. Remove generated `public/__qa*` browser-harness files if present. They are local test files, not website assets.
4. Configure the approved public endpoint. Run `npm run build:production` only for the approved release. This enables indexing for finalized public content; draft/legal/capability pages remain noindex until revised.
5. Run `npm run check:dist`; inspect `dist/robots.txt`, `dist/sitemap.xml` and EN/FR canonical URLs. The desired public sitemap is `https://diversity.ca/sitemap.xml`.
6. Archive **the contents of `dist/`**, including `.htaccess`. No Node runtime, `node_modules`, source directory, environment file or build credential belongs in the cPanel document root.

## Hosting and DNS

1. Back up the current document root and export/capture DNS records before any change. Preserve MX, SPF, DKIM, DMARC and other active TXT/CNAME records.
2. Verify the document root assigned to `diversity.ca` in cPanel. It may not be `public_html` when the domain is an addon.
3. Upload the approved static output using cPanel File Manager or SFTP. Retain the backup for rollback.
4. Change DNS only after specific owner authorization and using values confirmed from the WHC account. The registrar and hosting account may have different responsibilities.
5. Issue and verify the WHC-supported SSL certificate for both apex and www before forcing HTTPS. Select `https://diversity.ca` as canonical.
6. After SSL verification, enable host/HTTPS redirects through cPanel or the approved Apache configuration. Check for proxy-related redirect loops. The shipped `.htaccess` intentionally does not force HTTPS or alter hostnames before that verification.
7. Verify `.htaccess` is supported by the actual WHC configuration: directory listing disabled, custom 404, compression, cache headers, nosniff, referrer policy and restricted device permissions. If `Options -Indexes` causes an account-specific 500, remove only that directive and disable indexes via cPanel instead.

## Smoke test and rollback

- [ ] Apex HTTPS, www redirect, valid certificate and no mixed content.
- [ ] Homepage, all divisions, representative subservices, provinces, corporate/government and EN/FR counterparts.
- [ ] Real 404 returns HTTP 404 with the bilingual custom page; no SPA rewrite is required.
- [ ] Keyboard focus, skip link, mobile navigation and French glyphs.
- [ ] Forms deliver to the actual mailbox in both languages. Error paths preserve the enquiry.
- [ ] Images/font are local and load; no development harness, source map or private configuration is present.
- [ ] Robots indexing state, canonical origin, sitemap, hreflang and metadata are correct for public release.
- [ ] Submit the sitemap in Google Search Console and Bing Webmaster Tools after ownership verification. This has not been performed.

If the release fails, restore the backed-up document root and the previous verified DNS values only when a DNS rollback is required. Preserve mail records. Re-test HTTPS and mailbox delivery. Record the commit SHA of the released and restored builds.

## Approval boundary

Private review publication does not approve WHC release. Public deployment, DNS changes and search-engine submission remain pending explicit owner approval.
