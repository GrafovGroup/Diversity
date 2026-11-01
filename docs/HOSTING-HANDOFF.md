# Diversity.ca hosting handoff

Updated November 1, 2026. Requested destination: **OpenAI Sites**. Canonical domain: **https://diversity.ca**. Domain provider reported by the owner: **Register.ca**. Repository: **https://github.com/GrafovGroup/Diversity**, branch **main**.

## Status

The owner requested publication and domain connection in this session. The selected cloud environment exposes repository/build tools but no OpenAI Sites deployment interface or DNS management connection. The owner reports having published previous sites with OpenAI Sites. Its dashboard/project URL, supported upload/import mechanism and provider-issued DNS records have not been supplied or verified in this session. This document does not establish that the site is deployed or the domain connected.

The previous WHC plan is retained in `DEPLOYMENT_RUNBOOK.md` and `docs/DEPLOYMENT.md` for reference. Do not substitute that host for the owner's current request without agreement.

## Repository and build

| Setting                 | Value                                          |
| ----------------------- | ---------------------------------------------- |
| Repository              | `https://github.com/GrafovGroup/Diversity.git` |
| Branch                  | `main`                                         |
| Project root            | Repository root                                |
| Runtime used for builds | Node.js 24                                     |
| Install command         | `npm ci`                                       |
| Build command           | `npm run build`                                |
| Publish directory       | `dist`                                         |
| Build environment       | `ASTRO_TELEMETRY_DISABLED=1`                   |
| Production server       | None; serve the generated static files         |
| Canonical origin        | `https://diversity.ca`                         |

These are settings of this repository, not verified field names or setup instructions for an OpenAI Sites interface. If a provider accepts a combined command, use `npm ci && npm run build`.

Source, all site images/fonts, package lock, tests, workflows and documentation belong in Git. `node_modules`, `.env`, caches and generated test/build output do not. A successful **Website checks** GitHub Actions run retains the complete static output as **diversity-ca-static-&lt;commit SHA&gt;** for 30 days, separately from test evidence. Hidden files are included so `.htaccess` survives an artifact download. Download the artifact from the run matching the commit selected for deployment, then publish its contents rather than a surrounding directory.

The current static output contains 98 HTML files, 56 sample-outline downloads and local assets. The site has no database or server-side application dependency. Without `PUBLIC_FORM_ENDPOINT`, enquiries prepare an email draft for `info@diversity.ca`; they do not send directly. This existing fallback is retained unless an actual endpoint is configured and rebuilt.

## Hosting behavior to verify

- Serve `/en/`, `/fr/` and nested directory paths through their `index.html` files. Preserve query strings used for service context.
- The root `index.html` has an immediate HTML redirect to `/en/` and visible language links. It is not an HTTP redirect; a host-side redirect can replace it if the verified provider supports one.
- Serve `404.html` with an HTTP 404 status for unknown paths. Do not use a single-page-app catch-all that converts missing pages into homepage responses.
- Serve UTF-8 HTML and text, plus the existing WebP/SVG images, WOFF2 font, sitemap and robots file.
- `.htaccess` configures Apache directory indexes, 404 handling, UTF-8, security headers and cache policy. Other servers may ignore it; configure equivalent behavior using the actual provider's supported controls where necessary.
- Provision HTTPS for the verified domain. Keep `https://diversity.ca` as canonical and redirect `www` to the apex only once both hostnames and certificates are working. Preserve paths and query strings.

## Domain connection

Obtain the actual project URL and provider-generated domain-verification/traffic records before making changes. The domain is with Register.ca according to the owner. Confirm the authoritative DNS zone through that account before editing records, and export the current zone. Do not guess an A/AAAA address, CNAME destination or verification token.

Use the DNS provider's supported apex-record mechanism for the supplied destination. Preserve existing MX records and mail-related TXT records, including SPF, DKIM and DMARC. The request is to connect the website; it does not call for migrating mail or replacing nameservers.

After adding the provider's records, verify its domain status, public DNS answers, valid TLS, apex/www behavior, both languages, nested links, static downloads and a genuine missing-page response. Record the deployed Git commit and rollback route. A local build or Git push alone does not verify public hosting.

## Inputs still needed for this session

1. The OpenAI Sites dashboard/project URL and an available supported deployment interface.
2. A supported connection to the Register.ca domain account or its authoritative DNS manager, so the actual provider-issued records can be applied.

Use secure provider connections or account settings for credentials; do not put passwords, API keys or DNS secrets in chat or Git.
