import { Page, Locator, expect } from '@playwright/test';

export class PeoplesPage {
    readonly page: Page;
    readonly peoplesLink: Locator;
    readonly addPersonBtn: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly phoneInput: Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.peoplesLink = page.getByRole('link', { name: 'Peoples' });
        this.addPersonBtn = page.getByRole('button', { name: 'Add New Person' });
        this.firstNameInput = page.getByRole('textbox', { name: 'Firstname' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Lastname' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
        this.submitBtn = page.getByText('Submit', { exact: true });
    }

    async goToPeoples(){
        await this.peoplesLink.click();
        await this.page.waitForURL('**/people');
    }

    async openAddPersonForm(){
        await this.addPersonBtn.click();
        await this.firstNameInput.waitFor({state: 'visible', timeout: 10000});
    }

    async fillPersonForm(firstname: string, lastname: string, phone: string){
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.phoneInput.fill(phone);
    }

    async submitPerson(){
        await this.submitBtn.click();
        await this.page.waitForTimeout(1000);
    }
}
