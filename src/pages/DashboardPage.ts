import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly readyBanner: Locator;

    constructor(page: Page) {
        this.page = page;
        this.readyBanner = page.getByRole('img', { name: 'Logo' })// Cambia según tu app
    }

    async isReady() {
        await expect(this.readyBanner).toBeVisible();
    }
}
