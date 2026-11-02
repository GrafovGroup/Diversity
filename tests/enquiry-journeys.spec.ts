import type { Page, Locator } from '@playwright/test';
import { test, expect } from './fixtures';
import AxeBuilder from '@axe-core/playwright';
import { readFile, mkdir } from 'node:fs/promises';
import { services } from '../src/data/services';
import { engagementGuides } from '../src/data/engagements';

type Group = 'assessment' | 'training' | 'proposal';
const origin = 'http://127.0.0.1:4323';
const routes = {
  assessment: 'request-assessment',
  training: 'training-enquiry',
  proposal: 'request-proposal',
};
const journeys = [
  {
    group: 'assessment' as const,
    service: 'accessibility',
    subservice: 'digital-accessibility',
  },
  {
    group: 'training' as const,
    service: 'training',
    subservice: 'accessible-service',
  },
  {
    group: 'proposal' as const,
    service: 'supplier-diversity',
    subservice: 'program-design',
  },
];

async function fillIdentity(page: Page) {
  const form = page.locator('form[data-enquiry-form]');
  await form.locator('[name="name"]').fill('QA Reviewer');
  await form.locator('[name="email"]').fill('reviewer@example.org');
  await form.locator('[name="organization"]').fill('Example QA Organization');
  const more = form.locator('.extra-details:not([open]) > summary');
  if (await more.count()) await more.click();
  await form.locator('[name="audience"]').selectOption({ index: 1 });
  await form.locator('[name="region"]').selectOption({ index: 1 });
  await form
    .locator('[name="message"]')
    .fill(
      'Please help our organization define a practical scope and next steps.',
    );
  return form;
}

async function fillDetails(form: Locator, group: Group) {
  const fields: Record<string, string> =
    group === 'assessment'
      ? {
          assessment_type: 'digital',
          assessment_assets:
            'Two public websites and fourteen service documents.',
          assessment_barriers: 'Keyboard focus and document reading order.',
        }
      : group === 'training'
        ? {
            training_size: '16-30',
            training_roles: 'Front-line supervisors',
            training_goal:
              'Apply accessible service practices in daily decisions.',
            training_format: 'online',
            training_language: 'bilingual',
          }
        : {
            proposal_reference: 'RFP-QA-2026',
            proposal_deliverables:
              'A phased scope, deliverable outline and review plan.',
            proposal_constraints:
              'Coordinate with the existing procurement team.',
            deadline: '2027-03-15',
            deadline_time: '14:30',
            deadline_timezone: 'America/Toronto',
          };
  for (const [id, value] of Object.entries(fields)) {
    const field = form.locator(`[name="${id}"]`);
    if ((await field.evaluate((element) => element.tagName)) === 'SELECT')
      await field.selectOption(value);
    else await field.fill(value);
  }
  return fields;
}

async function downloadRecord(page: Page, form: Locator) {
  const pending = page.waitForEvent('download');
  await form.locator('[data-download]').click();
  const download = await pending;
  const path = await download.path();
  expect(path).not.toBeNull();
  return JSON.parse(await readFile(path!, 'utf8'));
}

async function capturePage(page: Page, filename: string) {
  await page.evaluate(() => document.fonts.ready);
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
  // Full-page captures should start at the document top; otherwise fixed
  // offscreen controls can be composited at the current scroll offset.
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();
    window.scrollTo(0, 0);
  });
  await page.screenshot({
    path: `artifacts/${filename}`,
    fullPage: true,
    animations: 'disabled',
  });
}

async function assertActiveGroup(form: Locator, active: Group) {
  for (const group of ['assessment', 'training', 'proposal'] as const) {
    const fieldset = form.locator(`[data-enquiry-group="${group}"]`);
    if (group === active) {
      await expect(fieldset).toBeVisible();
      await expect(fieldset).not.toHaveAttribute('disabled', '');
    } else {
      await expect(fieldset).toBeHidden();
      await expect(fieldset).toHaveAttribute('disabled', '');
    }
  }
}

test('all bilingual services explain illustrative deliverables and keep enquiry context', async ({
  page,
  request,
}) => {
  test.setTimeout(120_000);
  let count = 0;
  for (const locale of ['en', 'fr'] as const) {
    for (const service of services) {
      for (const subservice of [undefined, ...service.subservices]) {
        const key = service.slug + (subservice ? `/${subservice.slug}` : '');
        const guide = engagementGuides[key];
        expect(guide, `Missing engagement guide: ${key}`).toBeDefined();
        await page.goto(`/${locale}/services/${key}/`);
        const section = page.locator(`[data-engagement-guide="${key}"]`);
        await expect(section).toHaveCount(1);
        await expect(section.locator('#sample-deliverable')).toContainText(
          guide.sampleTitle[locale],
        );
        for (const item of guide.sampleSections[locale]) {
          await expect(section).toContainText(item.title);
          await expect(section).toContainText(item.description);
        }
        for (const item of guide.prepare[locale])
          await expect(section.locator('#prepare')).toContainText(item);
        for (const item of guide.boundaries[locale])
          await expect(section.locator('#scope-boundaries')).toContainText(
            item,
          );
        for (const anchor of [
          'sample-deliverable',
          'prepare',
          'scope-boundaries',
        ])
          await expect(
            section.locator(`#${anchor}`).getByRole('heading').first(),
          ).toBeVisible();

        const outline = section.locator('a[download]');
        await expect(outline).toHaveCount(1);
        const outlineUrl = await outline.getAttribute('href');
        expect(outlineUrl).toBe(`/${locale}/samples/${key}.txt`);
        const response = await request.get(outlineUrl!);
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('text/plain');
        const sample = await response.text();
        expect(sample).toContain(guide.sampleTitle[locale]);
        expect(sample).toMatch(
          locale === 'en' ? /illustrative/i : /illustratif|exemple/i,
        );
        for (const item of guide.prepare[locale])
          expect(sample).toContain(item);

        const href = await page
          .locator('.page-hero a.button')
          .first()
          .getAttribute('href');
        const url = new URL(href!, origin);
        const group = ['accessibility', 'implementation'].includes(service.slug)
          ? 'assessment'
          : service.slug === 'training'
            ? 'training'
            : 'proposal';
        expect(url.pathname).toBe(`/${locale}/${routes[group]}/`);
        expect(url.searchParams.get('service')).toBe(service.slug);
        expect(url.searchParams.get('subservice')).toBe(
          subservice?.slug ?? null,
        );
        count += 1;
      }
    }
  }
  expect(count).toBe(56);
});

for (const locale of ['en', 'fr'] as const) {
  for (const journey of journeys) {
    test(`${locale} ${journey.group}: service context and tailored details reach drafts and exports`, async ({
      page,
    }) => {
      const posts: string[] = [];
      page.on('request', (request) => {
        if (request.method() === 'POST') posts.push(request.url());
      });
      await page.goto(
        `/${locale}/services/${journey.service}/${journey.subservice}/`,
      );
      await page.locator('.page-hero a.button').first().click();
      await expect(page).toHaveURL(
        new RegExp(`/${locale}/${routes[journey.group]}/\\?`),
      );
      const form = await fillIdentity(page);
      await expect(form.locator('[name="service"]')).toHaveValue(
        journey.service,
      );
      await expect(form.locator('[name="subservice"]')).toHaveValue(
        journey.subservice,
      );
      const service = services.find((item) => item.slug === journey.service)!;
      const subservice = service.subservices.find(
        (item) => item.slug === journey.subservice,
      )!;
      await expect(form.locator('[data-enquiry-context]')).toContainText(
        subservice.title[locale],
      );
      await assertActiveGroup(form, journey.group);
      expect(
        await form.evaluate((element) =>
          (element as HTMLFormElement).checkValidity(),
        ),
        'Tailored questions remain optional',
      ).toBe(true);
      const fields = await fillDetails(form, journey.group);
      if (locale === 'en' && journey.group === 'training')
        await capturePage(page, 'training-en-desktop.png');
      await form.locator('button[type="submit"]').click();
      const prepared = form.locator('[data-prepared-email]');
      await expect(prepared).toBeVisible();
      const body = new URL(
        (await prepared.getAttribute('href'))!,
      ).searchParams.get('body')!;
      expect(body).toContain(subservice.title[locale]);
      const record = await downloadRecord(page, form);
      expect(record).toMatchObject({
        schemaVersion: 3,
        locale,
        kind: journey.group,
        serviceId: journey.service,
        context: {
          serviceId: journey.service,
          subserviceId: journey.subservice,
        },
        details: { group: journey.group },
      });
      for (const [id, value] of Object.entries(fields)) {
        const detail = record.details.fields.find(
          (item: { id: string }) => item.id === id,
        );
        expect(detail, `Missing ${id} in export`).toBeDefined();
        expect(detail.value).toBe(value);
        expect(detail.label.length).toBeGreaterThan(2);
        expect(body).toContain(detail.label);
        expect(body).toContain(detail.displayValue);
      }
      expect(posts).toEqual([]);
    });
  }

  test(`${locale}: changing a contact enquiry excludes inactive details and stale service context`, async ({
    page,
  }) => {
    await page.goto(
      `/${locale}/contact/?service=accessibility&subservice=digital-accessibility`,
    );
    const form = await fillIdentity(page);
    await assertActiveGroup(form, 'assessment');
    await fillDetails(form, 'assessment');
    await form.locator('button[type="submit"]').click();
    await expect(form.locator('[data-prepared-email]')).toBeVisible();
    await form.locator('[name="service"]').selectOption('training');
    await assertActiveGroup(form, 'training');
    await expect(form.locator('[name="subservice"]')).toHaveValue('');
    await expect(form.locator('[data-prepared-email]')).toBeHidden();
    const alternate = new URL(
      (await page
        .locator(`a[hreflang="${locale === 'en' ? 'fr' : 'en'}"]`)
        .first()
        .getAttribute('href'))!,
      origin,
    );
    expect(alternate.searchParams.get('service')).toBe('training');
    expect([...alternate.searchParams.keys()]).toEqual(['service']);
    await fillDetails(form, 'training');
    const record = await downloadRecord(page, form);
    expect(record.details.group).toBe('training');
    const json = JSON.stringify(record);
    expect(json).not.toContain('assessment_assets');
    expect(json).not.toContain('Two public websites');
    expect(json).not.toContain('digital-accessibility');
    await form.locator('button[type="submit"]').click();
    const href = await form
      .locator('[data-prepared-email]')
      .getAttribute('href');
    const body = new URL(href!).searchParams.get('body')!;
    expect(body).not.toContain('Two public websites');
    expect(body).toContain('Front-line supervisors');
  });
}

test('language switching preserves allowed service context without copying visitor data', async ({
  page,
}) => {
  await page.goto(
    '/en/request-assessment/?service=accessibility&subservice=digital-accessibility&email=private%40example.org&message=PRIVATE-NOTES',
  );
  const switcher = page.locator('a[hreflang="fr"]').first();
  const target = new URL((await switcher.getAttribute('href'))!, origin);
  expect(target.pathname).toBe('/fr/request-assessment/');
  expect(target.searchParams.get('service')).toBe('accessibility');
  expect(target.searchParams.get('subservice')).toBe('digital-accessibility');
  expect([...target.searchParams.keys()].sort()).toEqual([
    'service',
    'subservice',
  ]);
  await switcher.click();
  const form = page.locator('form[data-enquiry-form]');
  await expect(form.locator('[name="service"]')).toHaveValue('accessibility');
  await expect(form.locator('[name="subservice"]')).toHaveValue(
    'digital-accessibility',
  );
  await expect(form.locator('[name="email"]')).toHaveValue('');
  await expect(form.locator('[name="message"]')).toHaveValue('');
});

test('URL context accepts only known, coherent service and subservice choices', async ({
  page,
}) => {
  await page.goto(
    '/en/contact/?service=not-a-service&subservice=%3Cimg%20src=x%20onerror=alert(1)%3E',
  );
  const form = page.locator('form[data-enquiry-form]');
  await expect(form.locator('[name="service"]')).toHaveValue('');
  await expect(form.locator('[name="subservice"]')).toHaveValue('');
  await expect(form.locator('[data-enquiry-context]')).not.toContainText(
    '<img',
  );

  await page.goto(
    '/en/contact/?service=training&subservice=digital-accessibility',
  );
  await expect(form.locator('[name="service"]')).toHaveValue('training');
  await expect(form.locator('[name="subservice"]')).toHaveValue('');

  await page.goto(
    '/en/training-enquiry/?service=dei&subservice=inclusive-policies',
  );
  await expect(form.locator('[name="service"]')).toHaveValue('training');
  await expect(form.locator('[name="subservice"]')).toHaveValue('');
  await assertActiveGroup(form, 'training');
});

test('a procurement closing time requires a time zone only while that scope is active', async ({
  page,
}) => {
  await page.goto('/en/contact/?service=supplier-diversity');
  const form = await fillIdentity(page);
  await assertActiveGroup(form, 'proposal');
  await form.locator('[name="deadline_time"]').fill('14:30');
  expect(
    await form.evaluate((element) =>
      (element as HTMLFormElement).checkValidity(),
    ),
  ).toBe(false);
  await form
    .locator('[name="deadline_timezone"]')
    .selectOption('America/Toronto');
  expect(
    await form.evaluate((element) =>
      (element as HTMLFormElement).checkValidity(),
    ),
  ).toBe(true);
  await form.locator('[name="deadline_timezone"]').selectOption('');
  await form.locator('[name="service"]').selectOption('training');
  await assertActiveGroup(form, 'training');
  expect(
    await form.evaluate((element) =>
      (element as HTMLFormElement).checkValidity(),
    ),
  ).toBe(true);
  const record = await downloadRecord(page, form);
  expect(record.deadline).toBe('');
  expect(JSON.stringify(record.details)).not.toContain('deadline_time');
  expect(JSON.stringify(record.details)).not.toContain('14:30');
});

for (const accepted of [false, true]) {
  test(`provider delivery excludes stale fields and ${accepted ? 'resets to the initial context after success' : 'preserves tailored answers after rejection'}`, async ({
    page,
  }) => {
    const endpoint = 'https://formspree.io/f/qajourney';
    await page.route('**/en/contact/**', async (route) => {
      const response = await route.fetch();
      const html = (await response.text()).replace(
        /data-endpoint(?:="[^"]*")?(?=\s|>)/,
        `data-endpoint="${endpoint}"`,
      );
      await route.fulfill({ response, body: html });
    });
    let payload = '';
    await page.route(endpoint, async (route) => {
      payload = route.request().postData() || '';
      await route.fulfill({
        status: accepted ? 200 : 422,
        contentType: 'application/json',
        headers: { 'access-control-allow-origin': origin },
        body: JSON.stringify(
          accepted ? { ok: true } : { error: 'Rejected test enquiry' },
        ),
      });
    });
    await page.goto(
      '/en/contact/?service=accessibility&subservice=digital-accessibility',
    );
    const form = await fillIdentity(page);
    await fillDetails(form, 'assessment');
    await form.locator('[name="service"]').selectOption('training');
    await fillDetails(form, 'training');
    await form.locator('button[type="submit"]').click();
    if (accepted) {
      await expect(page.locator('[data-success]')).toBeVisible();
      await expect(form).toBeHidden();
      await page.locator('[data-new-enquiry]').click();
      await expect(form).toBeVisible();
    } else {
      await expect(form.locator('[data-feedback]')).toContainText(
        'could not confirm delivery',
      );
      await expect(page.locator('[data-success]')).toBeHidden();
    }
    expect(payload).toContain('reviewer@example.org');
    expect(payload).toContain('Front-line supervisors');
    expect(payload).toContain('bilingual');
    expect(payload).not.toContain('assessment_assets');
    expect(payload).not.toContain('Two public websites');
    if (accepted) {
      await expect(form.locator('[name="email"]')).toHaveValue('');
      await expect(form.locator('[name="service"]')).toHaveValue(
        'accessibility',
      );
      await expect(form.locator('[name="subservice"]')).toHaveValue(
        'digital-accessibility',
      );
      await assertActiveGroup(form, 'assessment');
      await expect(form.locator('[name="assessment_assets"]')).toHaveValue('');
    } else {
      await expect(form.locator('[name="email"]')).toHaveValue(
        'reviewer@example.org',
      );
      await expect(form.locator('[name="service"]')).toHaveValue('training');
      await expect(form.locator('[name="training_roles"]')).toHaveValue(
        'Front-line supervisors',
      );
      await expect(form.locator('[name="training_roles"]')).toBeEnabled();
      await assertActiveGroup(form, 'training');
    }
  });
}

for (const locale of ['en', 'fr'] as const) {
  test(`${locale}: tailored forms reflow at 640 and 320 CSS pixels with keyboard-accessible questions`, async ({
    page,
  }) => {
    // These CSS widths model the content space of 1280px at 200% and 400% zoom.
    // This is reflow evidence, not a screen-reader or real-device claim.
    for (const width of [640, 320]) {
      await page.setViewportSize({ width, height: 900 });
      for (const journey of journeys) {
        await page.goto(
          `/${locale}/${routes[journey.group]}/?service=${journey.service}`,
        );
        const form = await fillIdentity(page);
        await assertActiveGroup(form, journey.group);
        await fillDetails(form, journey.group);
        const fields = form.locator(
          `[data-enquiry-group="${journey.group}"] input, [data-enquiry-group="${journey.group}"] select, [data-enquiry-group="${journey.group}"] textarea`,
        );
        await fields.first().focus();
        await page.keyboard.press('Tab');
        await expect(fields.nth(1)).toBeFocused();
        const accessibility = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
          .analyze();
        expect(
          accessibility.violations,
          JSON.stringify(
            accessibility.violations.map(({ id, nodes }) => ({
              id,
              targets: nodes.map((node) => node.target),
            })),
          ),
        ).toEqual([]);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        ).toBe(true);
        if (locale === 'fr' && width === 320 && journey.group === 'assessment')
          await capturePage(page, 'assessment-fr-mobile.png');
      }
    }
    await page.goto(`/${locale}/services/accessibility/digital-accessibility/`);
    await expect(page.locator('[data-engagement-guide]')).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    if (locale === 'en') {
      await mkdir('artifacts', { recursive: true });
      await page.locator('[data-engagement-guide]').screenshot({
        path: 'artifacts/sample-deliverables-mobile.png',
        animations: 'disabled',
      });
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.locator('[data-engagement-guide]').screenshot({
        path: 'artifacts/sample-deliverables-desktop.png',
        animations: 'disabled',
      });
    }
  });
}
