// importamos el test con auth user incluido 
import { test, expect } from './fixtures';

test('GET data from products', async ({ authUser }) => {
    const { page } = authUser;
    await page.goto('https://cloud.idurarapp.com/product');
    const response = await page.waitForResponse(res => res.url().includes('/api/generalproduct/list'));
    
    const text = await response.text();
    try {
        const json = JSON.parse(text);
        console.log(JSON.stringify(json, null, 2));
    } catch {
        console.log('No es json')
    }
});
