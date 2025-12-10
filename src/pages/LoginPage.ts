import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#normal_login_email');
        this.passwordInput = page.locator('#normal_login_password');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async goto() {
        await this.page.goto('https://cloud.idurarapp.com/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForURL('https://cloud.idurarapp.com/');
    }
}
