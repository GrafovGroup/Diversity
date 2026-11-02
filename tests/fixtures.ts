import { test as base } from '@playwright/test';

// The published build uses the real form. Legacy draft-flow checks use a
// test-only HTML override; provider tests install their own mocked routes.
// Never let an automated browser test deliver a real enquiry.
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('https://formspree.io/**', (route) => route.abort());
    await page.route('http://127.0.0.1:4323/**', async (route) => {
      if (route.request().resourceType() !== 'document') {
        await route.continue();
        return;
      }
      const response = await route.fetch();
      const body = (await response.text()).replace(
        /data-endpoint(?:="[^"]*")?(?=\s|>)/g,
        'data-endpoint=""',
      );
      await route.fulfill({ response, body });
    });
    await use(page);
  },
});

export { expect } from '@playwright/test';
