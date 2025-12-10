import { test } from '../Base';

test('Create new person', async ({ loginPage, dashboardPage, peoplesPage }) => {
    await loginPage.goto();
    await loginPage.login('abdias.alpire@assuresoft.com', '7928003cbaA@');
    await dashboardPage.isReady();
    await peoplesPage.goToPeoples();
    await peoplesPage.openAddPersonForm();
    await peoplesPage.fillPersonForm('Juan', 'Perez', '+591 79280003');
    await peoplesPage.submitPerson();
});