import {test as base, expect} from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { PeoplesPage } from './pages/PeoplesPage';

type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    peoplesPage: PeoplesPage;
};


export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    peoplesPage: async ({ page }, use) => {
        await use(new PeoplesPage(page));
    },
})