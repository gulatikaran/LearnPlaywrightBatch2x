import {test, expect} from '@playwright/test';

// page - Inbuilt Playwright Page object, which is used to interact with the web page

test('Verify that the title will be TTA Cart', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");   
    //await expect(page).toHaveTitle("TTA Cart - Login");
    await page.waitForTimeout(5000);    
});