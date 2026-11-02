import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';
import AxeBuilder from '@axe-core/playwright';
import { readdir, readFile, mkdir } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import {
  validateFormEndpoint,
  createEnquiryRecord,
  createEnquiryPayload,
} from '../src/lib/forms';
import { pages as contentPages, articles } from '../src/data/pages';
import { services } from '../src/data/services';

const origin = 'http://127.0.0.1:4323';
const dist = resolve('dist');

async function htmlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith('.html') ? [path] : [];
    }),
  );
  return nested.flat();
}

function routeFor(file: string) {
  return (
    '/' +
    relative(dist, file)
      .replaceAll('\\', '/')
      .replace(/index\.html$/, '')
  );
}

function attribute(tag: string, name: string) {
  const match = tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`));
  return match?.[1] ?? match?.[2] ?? '';
}

function contentImages(html: string) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  return [...main.matchAll(/<img\b[^>]*>/g)].map(([tag]) => ({
    src: attribute(tag, 'src'),
    alt: attribute(tag, 'alt'),
    page: attribute(tag, 'data-page-image'),
  }));
}

async function screenshot(page: Page, filename: string) {
  await page.evaluate(() => document.fonts.ready);
  // Full-page captures extend beyond the viewport's native lazy-load range.
  // Decode each real image before capture so screenshots show the whole page.
  await page.locator('img').evaluateAll(async (images) => {
    await Promise.all(
      images.map(async (element) => {
        const image = element as HTMLImageElement;
        image.loading = 'eager';
        await image.decode();
      }),
    );
  });
  await mkdir('artifacts', { recursive: true });
  await page.screenshot({
    path: `artifacts/${filename}`,
    fullPage: true,
    animations: 'disabled',
  });
}

async function completeEnquiry(page: Page) {
  const form = page.locator('form[data-enquiry-form]');
  await form.locator('[name="name"]').fill('QA Reviewer');
  await form.locator('[name="email"]').fill('reviewer@example.org');
  await form.locator('[name="organization"]').fill('Example QA Organization');
  const more = form.locator('.extra-details:not([open]) > summary');
  if (await more.count()) await more.click();
  for (const field of ['audience', 'service', 'region']) {
    await form.locator(`[name="${field}"]`).selectOption({ index: 1 });
  }
  await form
    .locator('[name="message"]')
    .fill(
      'Please help scope an accessibility assessment for our public information website.',
    );
  return form;
}

test('form configuration accepts only the intended HTTPS provider endpoint', () => {
  expect(validateFormEndpoint(undefined)).toBeNull();
  expect(validateFormEndpoint('')).toBeNull();
  expect(validateFormEndpoint(' https://formspree.io/f/example123 ')).toBe(
    'https://formspree.io/f/example123',
  );
  for (const value of [
    'http://formspree.io/f/example123',
    'https://formspree.io.evil.example/f/x',
    'javascript:alert(1)',
    'https://formspree.io/f/x?redirect=evil',
    'https://user:pass@formspree.io/f/x',
  ]) {
    expect(() => validateFormEndpoint(value)).toThrow();
  }
});

test('enquiry records accept valid enquiries without a consent claim and reject spam', () => {
  const data = new FormData();
  expect(() => createEnquiryRecord(data, 'en', 'proposal')).toThrow();
  for (const [key, value] of Object.entries({
    name: 'QA Reviewer',
    email: 'reviewer@example.org',
    organization: 'Example QA',
    audience: 'Corporation',
    service: 'accessibility',
    region: 'Ontario',
    message: 'Please review our public website accessibility.',
  }))
    data.set(key, value);
  for (const locale of ['en', 'fr'] as const) {
    const record = createEnquiryRecord(data, locale, 'contact');
    expect(record.schemaVersion).toBe(3);
    expect(record).not.toHaveProperty('consent');
    const payload = createEnquiryPayload(record);
    expect(payload.has('consent')).toBe(false);
    expect(
      JSON.parse(String(payload.get('enquiry_record'))),
    ).not.toHaveProperty('consent');
  }
  for (const key of ['audience', 'service', 'region']) data.delete(key);
  for (const locale of ['en', 'fr'] as const) {
    const minimal = createEnquiryRecord(data, locale, 'contact');
    expect(minimal.serviceId).toBe('unsure');
    expect(minimal.region).toBe('');
    expect(createEnquiryPayload(minimal).get('locale')).toBe(locale);
  }
  data.set('_gotcha', 'automated submission');
  expect(() => createEnquiryRecord(data, 'en', 'proposal')).toThrow();
});

test('every generated bilingual page and internal link resolves', async ({
  request,
}) => {
  test.setTimeout(120_000);
  const files = await htmlFiles(dist);
  const bilingual = files.filter((file) => /^\/(en|fr)\//.test(routeFor(file)));
  expect(
    bilingual.length,
    'Substantive bilingual routes must have been built',
  ).toBeGreaterThan(60);
  const pages = new Map<string, string>();
  for (const file of files)
    pages.set(routeFor(file), await readFile(file, 'utf8'));
  const links = new Set<string>();

  for (const file of bilingual) {
    const route = routeFor(file);
    const html = pages.get(route)!;
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    expect(html, `${route}: document language`).toMatch(
      new RegExp(
        `<html\\b[^>]*lang=["']${route.startsWith('/fr/') ? 'fr' : 'en'}(?:-CA)?["']`,
      ),
    );
    expect(html, `${route}: main heading`).toMatch(/<h1\b/);
    expect(html, `${route}: canonical`).toMatch(/rel=["']canonical["']/);
    expect(html, `${route}: French alternate`).toMatch(
      /hreflang=["']fr(?:-CA)?["']/,
    );
    expect(html, `${route}: English alternate`).toMatch(
      /hreflang=["']en(?:-CA)?["']/,
    );

    for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
      const value = match[1].replaceAll('&amp;', '&');
      if (/^(?:mailto:|tel:|data:|blob:)/i.test(value)) continue;
      expect(value, `${route}: executable URL is not permitted`).not.toMatch(
        /^javascript:/i,
      );
      const url = new URL(value, origin + route);
      if (url.origin !== origin) continue;
      links.add(url.pathname + url.search);
      if (url.hash) {
        const target = pages.get(url.pathname) ?? pages.get(url.pathname + '/');
        if (target) {
          const anchor = decodeURIComponent(url.hash.slice(1));
          expect(
            target.includes(`id="${anchor}"`) ||
              target.includes(`id='${anchor}'`),
            `${route}: missing anchor ${url.pathname}${url.hash}`,
          ).toBe(true);
        }
      }
    }
  }

  for (const link of links) {
    const response = await request.get(link);
    expect(
      response.status(),
      `Broken internal link or asset: ${link}`,
    ).toBeLessThan(400);
  }
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain('https://diversity.ca/en/');
  expect(await sitemap.text()).toContain('https://diversity.ca/fr/');
  expect((await request.get('/robots.txt')).status()).toBe(200);
  expect((await request.get('/this-route-does-not-exist/')).status()).toBe(404);
});

test('every logical page has unique photography and matching translated image descriptions', async () => {
  const files = await htmlFiles(dist);
  const english = files.filter((file) => routeFor(file).startsWith('/en/'));
  expect(english.length).toBeGreaterThanOrEqual(48);
  const sourceOwners = new Map<string, string>();
  const hashOwners = new Map<string, string>();
  for (const file of english) {
    const route = routeFor(file);
    const images = contentImages(await readFile(file, 'utf8'));
    const primary = images.filter((image) => image.page);
    expect(
      primary,
      `${route}: expected one distinct main-page photograph`,
    ).toHaveLength(1);
    expect(
      primary[0].alt.trim().length,
      `${route}: meaningful English alt text`,
    ).toBeGreaterThan(10);

    const frenchFile = file.replace(`${dist}/en/`, `${dist}/fr/`);
    const translated = contentImages(await readFile(frenchFile, 'utf8')).filter(
      (image) => image.page,
    );
    expect(translated, `${route}: missing French image`).toHaveLength(1);
    expect(
      translated[0].src,
      `${route}: translations should depict the same subject`,
    ).toBe(primary[0].src);
    expect(translated[0].page).toBe(primary[0].page);
    expect(
      translated[0].alt.trim().length,
      `${route}: meaningful French alt text`,
    ).toBeGreaterThan(10);
    expect(
      translated[0].alt,
      `${route}: French alt should be translated`,
    ).not.toBe(primary[0].alt);

    for (const image of images) {
      const url = new URL(image.src, origin);
      expect(
        url.origin,
        `${route}: content photography should be hosted with the site`,
      ).toBe(origin);
      const path = decodeURIComponent(url.pathname);
      expect(
        sourceOwners.get(path) ?? route,
        `${route}: photograph ${path} reused by another page`,
      ).toBe(route);
      sourceOwners.set(path, route);
      const bytes = await readFile(resolve(dist, '.' + path));
      const hash = createHash('sha256').update(bytes).digest('hex');
      expect(
        hashOwners.get(hash) ?? route,
        `${route}: duplicated photograph bytes from another page`,
      ).toBe(route);
      hashOwners.set(hash, route);
    }
  }
});

test('editorial pages and articles render every substantive section', async ({
  page,
}) => {
  test.setTimeout(120_000);
  const targets = [
    ...contentPages.map((content) => ({ content, prefix: '' })),
    ...articles.map((content) => ({ content, prefix: 'insights/' })),
  ];
  for (const locale of ['en', 'fr'] as const) {
    for (const { content, prefix } of targets) {
      await page.goto(`/${locale}/${prefix}${content.slug}/`);
      const main = page.locator('main');
      await expect(main.getByRole('heading', { level: 1 })).toHaveText(
        content.title[locale],
      );
      for (const section of content.sections) {
        await expect(
          main.getByRole('heading', {
            level: 2,
            name: section.heading[locale],
            exact: true,
          }),
        ).toBeVisible();
        await expect(main).toContainText(section.body[locale]);
      }
    }
  }
});

test('language switching preserves the current service', async ({ page }) => {
  await page.goto('/en/services/accessibility/');
  await page.locator('a[hreflang="fr"], a[hreflang="fr-CA"]').first().click();
  await expect(page).toHaveURL(/\/fr\/services\/accessibility\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', /^fr(?:-CA)?$/);
  await page.locator('a[hreflang="en"], a[hreflang="en-CA"]').first().click();
  await expect(page).toHaveURL(/\/en\/services\/accessibility\/$/);
});

test('keyboard users can skip repeated navigation', async ({ page }) => {
  await page.goto('/en/');
  await page.keyboard.press('Tab');
  const focused = page.locator(':focus');
  await expect(focused).toHaveAttribute('href', /^#/);
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

for (const locale of ['en', 'fr'] as const) {
  for (const screen of ['desktop', 'mobile'] as const) {
    test(`${locale} ${screen}: navigation, layout and accessibility`, async ({
      page,
    }) => {
      if (screen === 'mobile')
        await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`/${locale}/`);
      await expect(page.locator('main h1')).toBeVisible();
      if (screen === 'mobile') {
        const toggle = page.locator(
          'button[aria-controls="primary-navigation"]',
        );
        await expect(toggle).toBeVisible();
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('#primary-navigation')).toBeVisible();
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      }
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        'Horizontal overflow',
      ).toBe(true);
      await screenshot(page, `home-${locale}-${screen}.png`);
      for (const route of [
        `/${locale}/`,
        `/${locale}/services/accessibility/`,
        `/${locale}/request-proposal/`,
      ]) {
        await page.goto(route);
        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
          .analyze();
        expect(
          results.violations,
          `${route}: ${JSON.stringify(results.violations.map(({ id, nodes }) => ({ id, targets: nodes.map((node) => node.target) })))}`,
        ).toEqual([]);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
          `${route}: horizontal overflow`,
        ).toBe(true);
      }
      await screenshot(page, `enquiry-${locale}-${screen}.png`);
      if (locale === 'en' && screen === 'desktop') {
        await page.goto('/en/services/accessibility/');
        await screenshot(page, 'service-en-desktop.png');
        const subservice = services.find(
          (service) => service.slug === 'accessibility',
        )!.subservices[0];
        await page.goto(`/en/services/accessibility/${subservice.slug}/`);
        await expect(page.locator('main h1')).toBeVisible();
        await screenshot(page, 'subservice-en-desktop.png');
      }
    });
  }
}

for (const locale of ['en', 'fr'] as const) {
  test(`${locale}: enquiry validates required fields before submission`, async ({
    page,
  }) => {
    await page.goto(`/${locale}/request-proposal/`);
    const form = page.locator('main form');
    await expect(form).toHaveCount(1);
    expect(
      await form.evaluate((element) =>
        (element as HTMLFormElement).checkValidity(),
      ),
    ).toBe(false);
    await form.locator('button[type="submit"]').click();
    expect(
      await form.evaluate((element) =>
        (element as HTMLFormElement).checkValidity(),
      ),
    ).toBe(false);
    await expect(page).toHaveURL(new RegExp(`/${locale}/request-proposal/$`));
    await expect(form.locator('[name="email"]')).toHaveAttribute(
      'type',
      'email',
    );
    await expect(form.locator('[name="consent"]')).toHaveCount(0);
  });

  test(`${locale}: fallback prepares an email and exports an enquiry without posting`, async ({
    page,
  }) => {
    const postRequests: string[] = [];
    page.on('request', (request) => {
      if (request.method() === 'POST') postRequests.push(request.url());
    });
    await page.goto(`/${locale}/request-proposal/`);
    const form = await completeEnquiry(page);
    test.skip(
      (await form.getAttribute('data-endpoint')) !== '',
      'This scenario covers the intentionally unconfigured delivery fallback.',
    );
    await form.locator('button[type="submit"]').click();
    const link = form.locator('[data-prepared-email]');
    await expect(link).toBeVisible();
    const mailto = new URL((await link.getAttribute('href'))!);
    expect(mailto.protocol).toBe('mailto:');
    expect(mailto.pathname).toBe('info@diversity.ca');
    expect(mailto.searchParams.get('body')).toContain('reviewer@example.org');
    expect(mailto.searchParams.get('body')).toContain(
      'Please help scope an accessibility assessment',
    );
    await expect(form.locator('[data-feedback]')).toContainText(
      locale === 'en' ? 'Nothing has been sent' : 'Rien n’a été envoyé',
    );
    await expect(form.locator('[name="name"]')).toHaveValue('QA Reviewer');

    const downloadEvent = page.waitForEvent('download');
    await form.locator('[data-download]').click();
    const download = await downloadEvent;
    expect(download.suggestedFilename()).toMatch(
      /^diversity-enquiry-\d{4}-\d{2}-\d{2}\.json$/,
    );
    const path = await download.path();
    expect(path).not.toBeNull();
    const record = JSON.parse(await readFile(path!, 'utf8'));
    expect(record).toMatchObject({
      schemaVersion: 3,
      locale,
      kind: 'proposal',
      name: 'QA Reviewer',
      email: 'reviewer@example.org',
    });
    expect(Number.isNaN(Date.parse(record.createdAt))).toBe(false);
    expect(postRequests).toEqual([]);
  });
}

test('anti-spam input prevents creating a draft without discarding entered details', async ({
  page,
}) => {
  await page.goto('/en/contact/');
  const form = await completeEnquiry(page);
  await form.locator('[name="_gotcha"]').evaluate((element) => {
    (element as HTMLInputElement).value = 'automated submission';
  });
  await form.locator('button[type="submit"]').click();
  await expect(form.locator('[data-feedback]')).toHaveAttribute(
    'data-error',
    'true',
  );
  await expect(form.locator('[data-prepared-email]')).toBeHidden();
  await expect(form.locator('[name="email"]')).toHaveValue(
    'reviewer@example.org',
  );
});

for (const accepted of [false, true]) {
  test(`configured delivery ${accepted ? 'acknowledges provider acceptance' : 'preserves details after a provider rejection'}`, async ({
    page,
  }) => {
    // Exercise the real browser handler with a test-only endpoint in the static
    // HTML. All provider requests are intercepted; no message leaves this test.
    const endpoint = 'https://formspree.io/f/qavalidation';
    await page.route('**/en/request-proposal/', async (route) => {
      const response = await route.fetch();
      const html = (await response.text()).replace(
        /data-endpoint(?:="[^"]*")?(?=\s|>)/,
        `data-endpoint="${endpoint}"`,
      );
      await route.fulfill({ response, body: html });
    });
    let requests = 0;
    await page.route(endpoint, async (route) => {
      requests += 1;
      expect(route.request().method()).toBe('POST');
      expect(route.request().postData()).toContain('reviewer@example.org');
      await route.fulfill({
        status: accepted ? 200 : 422,
        contentType: 'application/json',
        headers: { 'access-control-allow-origin': origin },
        body: JSON.stringify(
          accepted ? { ok: true } : { error: 'Rejected test request' },
        ),
      });
    });
    await page.goto('/en/request-proposal/');
    const form = await completeEnquiry(page);
    await form.locator('button[type="submit"]').click();
    const feedback = form.locator('[data-feedback]');
    if (accepted) {
      const success = page.locator('[data-success]');
      await expect(success).toBeVisible();
      await expect(success).toContainText(
        'Thank you — your enquiry has been sent.',
      );
      await expect(form).toBeHidden();
      await expect(success).toBeFocused();
      await page.locator('[data-new-enquiry]').click();
      await expect(form).toBeVisible();
      await expect(success).toBeHidden();
      await expect(form.locator('[name="email"]')).toHaveValue('');
    } else {
      await expect(feedback).toHaveAttribute('data-error', 'true');
      await expect(feedback).toContainText('could not confirm delivery');
      await expect(form.locator('[name="email"]')).toHaveValue(
        'reviewer@example.org',
      );
    }
    await expect(form.locator('button[type="submit"]')).toBeEnabled();
    expect(requests).toBe(1);
  });
}
