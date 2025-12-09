// importamos el test con auth user incluido 
import { test, expect, Page } from '@playwright/test';
import { cp } from 'fs';

test('Intercept UI information', async ({page}) => {
    const correctEmail = 'abdias.alpire@assuresoft.com';
    const correctPassword = '7928003cbaA@';
    
    await page.route('https://server.idurarapp.com/api/login**', async route => {
        const request = route.request();
        const postData = JSON.parse(request.postData() || '{}');
        if (postData.email !== correctEmail || postData.password !== correctPassword){
            postData.email = correctEmail;
            postData.password = correctPassword;
    }
    await route.continue({postData: JSON.stringify(postData)})
    })




    await page.goto('https://cloud.idurarapp.com/login');
    await page.fill('#normal_login_email', 'invalidEmail@invalidDomain.com');
    await page.fill('#normal_login_password', 'invalidPassword');
    await page.click('button[type="submit"]');
    await page.waitForURL('https://cloud.idurarapp.com/');
    await page.waitForTimeout(5000);
});
