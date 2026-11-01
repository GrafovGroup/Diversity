import { defineConfig } from '@playwright/test';
import { existsSync } from 'node:fs';

const executablePath =
  process.env.CHROMIUM_PATH ||
  (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  workers: 2,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  outputDir: 'test-results',
  use: {
    baseURL: 'http://127.0.0.1:4323',
    browserName: 'chromium',
    launchOptions: { executablePath },
    viewport: { width: 1440, height: 1000 },
    locale: 'en-CA',
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --ignore-lock --host 127.0.0.1 --port 4323',
    url: 'http://127.0.0.1:4323/en/',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
    env: { ASTRO_TELEMETRY_DISABLED: '1' },
  },
});
