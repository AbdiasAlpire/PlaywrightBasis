import { test } from '../Base';

test('login with POM + fixtures', async ({ loginPage, dashboardPage }) => {
    await loginPage.goto();
    await loginPage.login('abdias.alpire@assuresoft.com', '7928003cbaA@');
    await dashboardPage.isReady();
});
