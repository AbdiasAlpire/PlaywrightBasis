import { test, expect } from '@playwright/test';

test.skip('Waiting implicito', async ({page})=>{
    await page.goto("https://demoqa.com/dynamic-properties");  
    await page.waitForTimeout(10000); 
    await page.locator('#enableAfter').click({timeout: 15000});
});

test.skip('Explicit waiting', async ({page})=>{
    await page.goto("https://demoqa.com/dynamic-properties");   
    await expect(page.locator('#colorChange')).toHaveClass(/text-danger/);
});

test('Visible After', async ({page})=>{
    await page.goto("https://demoqa.com/dynamic-properties");   
    await page.waitForSelector('#visibleAfter', {state: 'visible'});
    await page.locator('#visibleAfter').click();
});