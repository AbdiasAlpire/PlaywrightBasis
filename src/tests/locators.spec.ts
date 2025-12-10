import {test, expect} from './fixtures'

test("Locators examples", async ({authUser}) =>
{
    // GetByRole
    const page = authUser.page;
    const dashboardLink1 = page.getByRole('link', { name: 'Dashboard' });
    await expect(dashboardLink1).toBeVisible();

    // Logo Css
    const logo = page.locator("//button")
    const count = await logo.count();
    console.log(count, "Buttons array count")
    for (let i = 0; i < count; i++) {
    const boton = logo.nth(i);
    console.log(await boton.textContent()); // Mostrar el texto del botón
    // Ejemplo: hacer clic en cada botón
    // await boton.click();
  }
    //await expect(logo).toBeVisible();

    // Absolute XPath
    const absXpath = page.locator("//html[1]/body[1]/div[1]/div[2]/aside[1]/div[1]/ul[1]/li[14]/span[2]/a[1]")
    await expect(absXpath).toBeVisible();

    // Relative XPath
    const relXpath = page.locator("//a[normalize-space()='Expenses Category']")
    await expect(relXpath).toBeVisible();

    // XPath with functions
    const funXpath = page.locator("//span[contains(text(), 'Add Custom Features')]")
    await expect(funXpath).toBeVisible();

    // GetByText
    const altLogo = page.getByAltText('Logo');
    await expect(altLogo).toBeVisible();

    // Mayusculas y minisculas

    const orderLink = page.getByText(/Order/i);
    await expect(orderLink).toBeVisible();

    // PartialLink
    const partialOrderLink = page.getByText(/Orde/i);
    await expect(partialOrderLink).toBeVisible();

    // Texto Exacto con reg ex
    const productLink = page.getByText(/^Products$/i);
    await expect(productLink).toBeVisible();

    // Texto Exacto sin reg ex
    const productLink1 = page.getByText('Products', {exact: true});
    await expect(productLink1).toBeVisible();

    const ariaLabelDashboardLink = page.locator('span[aria-label="dashboard"]');
    await expect(ariaLabelDashboardLink).toBeVisible();

    // Multiple locators
    const menu = page.locator('.ant-menu.ant-menu-root');
    const invoicesItem = menu.locator('li', {hasText: 'Invoices'});
    await expect(invoicesItem).toBeVisible();

    // Multiple locators
    const menu1 = page.locator('.ant-menu-title-content');
    const element = menu1.nth(3);
    await expect(element).toBeVisible();
    const elementText = await element.textContent();
    console.log(elementText);

});