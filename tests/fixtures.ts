import { test as base, Page } from '@playwright/test';

type AuthUser = {
  page: Page;
};

export const test = base.extend<{
  authUser: AuthUser;
}>({
  authUser: async ({ page, baseURL }, use) => {

    // Usar baseURL del playwright.config.ts
    await page.goto('https://cloud.idurarapp.com/login');

    await page.fill('#normal_login_email', 'abdias.alpire@assuresoft.com');
    await page.fill('#normal_login_password', '7928003cbaA@');

    await page.click('button[type="submit"]');
    await page.waitForURL('https://cloud.idurarapp.com/');

    await use({ page });
  }
});

export const expect = test.expect;