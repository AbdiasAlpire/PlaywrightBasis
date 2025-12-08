import { test as base, Page } from '@playwright/test';

type AuthUser = {
  page: Page;
};

export const test = base.extend<{
  authUser: AuthUser;
}>({
  authUser: async ({ page, baseURL }, use) => {

    // Usar baseURL del playwright.config.ts
    await page.goto(baseURL!);

    await page.fill('#normal_login_email', process.env.LOGIN_USER as string);
    await page.fill('#normal_login_password', process.env.PASSWORD_USER as string);

    await page.click('button[type="submit"]');
    await page.waitForURL('https://cloud.idurarapp.com/');

    await use({ page });
  }
});

export const expect = test.expect;
