const { test, expect } = require('@playwright/test');

test('open the url and validate the title', async ({ page }) => {

await page.goto('https://google.com');
await expect(page).toHaveTitle('Google');

});
