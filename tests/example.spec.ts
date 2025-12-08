import { test, expect } from '@playwright/test';

test.describe("Example suite", () => {

  test.beforeAll(async ({browser}) => {
    // Acciones a ejecutar antes
  });

  test.fail('has title 1', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('has title 3', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

});