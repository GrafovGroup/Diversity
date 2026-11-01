import { test, expect } from '@playwright/test';

test('the bilingual error page keeps its image and recovery links inside a narrow viewport', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/404.html');
  for (const spacing of [false, true]) {
    if (spacing)
      await page.addStyleTag({
        content: `* { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-bottom: 2em !important; }`,
      });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    for (const selector of ['main img', 'a[href="/en/"]', 'a[href="/fr/"]']) {
      const box = await page.locator(selector).boundingBox();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(320);
    }
  }
});

function contrast(first: string, second: string) {
  const luminance = (color: string) => {
    const channels = color
      .match(/[\d.]+/g)!
      .slice(0, 3)
      .map(Number);
    const linear = channels.map((channel) => {
      const value = channel / 255;
      return value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    });
    return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
  };
  const values = [luminance(first), luminance(second)].sort((a, b) => a - b);
  return (values[1] + 0.05) / (values[0] + 0.05);
}

for (const locale of ['en', 'fr'] as const) {
  test(`${locale}: related-service names retain their visible labels and navigation identifies the current section`, async ({
    page,
  }) => {
    for (const suffix of ['', 'digital-accessibility/']) {
      await page.goto(`/${locale}/services/accessibility/${suffix}`);
      const links = page.locator('.subservice-card a[aria-label]');
      expect(await links.count()).toBeGreaterThan(0);
      for (const link of await links.all()) {
        const visible = await link.evaluate((element) => {
          const clone = element.cloneNode(true) as HTMLElement;
          clone
            .querySelectorAll('[aria-hidden="true"]')
            .forEach((node) => node.remove());
          return clone.textContent!.trim();
        });
        await expect(link).toHaveAccessibleName(new RegExp(`^${visible}`));
      }
      await expect(
        page.locator('#primary-navigation a[aria-current]'),
      ).toHaveAttribute('aria-current', 'true');
      await expect(
        page.locator('.languages a[lang="en"]'),
      ).toHaveAccessibleName('English');
      await expect(
        page.locator('.languages a[lang="fr"]'),
      ).toHaveAccessibleName('Français');
    }
    await page.goto(`/${locale}/services/`);
    await expect(
      page.locator('#primary-navigation a[aria-current]'),
    ).toHaveAttribute('aria-current', 'page');
  });

  test(`${locale}: form boundaries, input instructions and focus remain perceivable`, async ({
    page,
  }) => {
    await page.goto(`/${locale}/contact/`);
    const message = page.locator('textarea[name="message"]');
    await expect(message).toHaveAccessibleDescription(/20/);
    const colors = await page
      .locator('input[name="name"]')
      .evaluate((element) => {
        const style = getComputedStyle(element);
        return {
          border: style.borderTopColor,
          background: style.backgroundColor,
        };
      });
    expect(contrast(colors.border, colors.background)).toBeGreaterThanOrEqual(
      3,
    );
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const language = page.locator('.languages a').first();
    await expect(language).toBeFocused();
    const focus = await language.evaluate((element) => {
      const style = getComputedStyle(element);
      const backdrop = getComputedStyle(element.closest('.topbar')!);
      const rect = element.getBoundingClientRect();
      return {
        color: style.outlineColor,
        background: backdrop.backgroundColor,
        width: parseFloat(style.outlineWidth),
        offset: parseFloat(style.outlineOffset),
        targetWidth: rect.width,
        targetHeight: rect.height,
      };
    });
    expect(contrast(focus.color, focus.background)).toBeGreaterThanOrEqual(3);
    expect(focus.width).toBeGreaterThanOrEqual(2);
    expect(focus.offset).toBeLessThanOrEqual(0);
    expect(focus.targetWidth).toBeGreaterThanOrEqual(24);
    expect(focus.targetHeight).toBeGreaterThanOrEqual(24);
    await page.goto(`/${locale}/`);
    await page.keyboard.press('Tab');
    const callToAction = page.locator('.cta-band .button');
    await callToAction.focus();
    const darkFocus = await callToAction.evaluate((element) => ({
      outline: getComputedStyle(element).outlineColor,
      background: getComputedStyle(element.closest('.cta-band')!)
        .backgroundColor,
    }));
    expect(
      contrast(darkFocus.outline, darkFocus.background),
    ).toBeGreaterThanOrEqual(3);
  });

  test(`${locale}: increased text spacing preserves narrow-page content and controls`, async ({
    page,
  }) => {
    for (const width of [320, 640]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of [
        '',
        'services/',
        'services/accessibility/',
        'insights/',
        'insights/scope-an-accessibility-assessment/',
        'contact/',
      ]) {
        await page.goto(`/${locale}/${route}`);
        await page.evaluate(() => document.fonts.ready);
        await page.addStyleTag({
          content: `* { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-bottom: 2em !important; }`,
        });
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `${locale}/${route} at ${width}px with increased spacing`,
        ).toBe(true);
        const toggle = page.locator('.menu-toggle');
        await expect(toggle).toBeVisible();
        const box = await toggle.boundingBox();
        expect(box!.x).toBeGreaterThanOrEqual(0);
        expect(box!.x + box!.width).toBeLessThanOrEqual(width);
        await toggle.click();
        await expect(page.locator('#primary-navigation')).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          'Open navigation remains in the viewport',
        ).toBe(true);
      }
    }
  });
}
