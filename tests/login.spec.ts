// importamos el test con auth user incluido 
import { test, expect } from './fixtures';

test('Verify user can be authenticated', async ({ authUser }) => {
  await expect(authUser.page.locator("img[alt='Logo']")).toBeVisible();
});
