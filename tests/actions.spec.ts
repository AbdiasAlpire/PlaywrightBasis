import { test, expect } from '@playwright/test';
import { exec } from 'child_process';

test("Actions examples", async ({ page }) => {

  await test.step.skip("Click Actions", async () => {
    await page.goto("https://demoqa.com/buttons");

    const doubleClickButton = page.getByRole('button', { name: 'Double Click Me' });
    await doubleClickButton.dblclick();
    await expect(page.getByText('You have done a double click')).toBeVisible();

    const simpleClickButton = page.getByText('Click Me', { exact: true });
    await simpleClickButton.click();
    await expect(page.getByText('You have done a dynamic click')).toBeVisible();

    const rightClickButton = page.getByText('Right Click Me', { exact: true });
    await rightClickButton.click({ button: 'right' });
    await expect(page.getByText('You have done a right click')).toBeVisible();
  });

  await test.step.skip("Inputs Actions", async () => {
    await page.goto("https://demoqa.com/text-box");
    await page.getByPlaceholder('Full Name').fill('Nombre Ejemplo');
    await page.getByPlaceholder('name@example.com').fill('test@example.com');
    await page.locator('#currentAddress').fill('Edmonton 29392');
    await page.locator('#permanentAddress').fill('Alberta 39393');
    await page.getByRole('button', { name: 'Submit' }).click({force: true});
  });

  await test.step.skip("Select Actions", async () => {
    await page.goto("https://demoqa.com/select-menu");
    const menu = page.locator('#oldSelectMenu');
    await menu.selectOption({label: 'Green'});
    await expect(menu).toHaveValue('2');
  });

  await test.step.skip("Select Actions", async () => {
    await page.goto("https://demoqa.com/automation-practice-form");
    const selectOption = async (containerSelector: string, optionText: string)  => {
        await page.locator(containerSelector).click();
        await page.locator(`//div[starts-with(@id,'react-select') and contains(text(),'${optionText}')]`).click();
    };
    await selectOption('#state','NCR');
  });

  await test.step("Checkbox actions", async () => {
    await page.goto("https://demoqa.com/checkbox");
    const expandButton = page.getByRole('button', { name: 'Expand all' });
    await expandButton.click();
    const desktopCheckbox = page.locator("label[for='tree-node-desktop']");
    await desktopCheckbox.click();

  });

});
