import { test, expect, Route } from '@playwright/test';

test('Intercept GET', async ({ page }) => {
  await page.route('**/posts', async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([{ id: 1, title: 'Intercepted' }]),
    });
  });

  const data = await page.evaluate(async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    return resp.json();
  });

  expect(data[0].title).toBe('Intercepted');
  console.log(data[0].title, 'Intecepted Data');
});
