import { test, expect } from '@playwright/test'

test.skip('Create an Account', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await expect(page).toHaveTitle('Home Page');
    await page.goto('https://magento.softwaretestingboard.com/customer/account/create/');
    await expect(page).toHaveTitle('Create New Customer Account');
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill('Jijo');
    await page.getByLabel('Last Name').click();
    await page.getByLabel('Last Name').fill('Mahesh');
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('luffyjijo4@gmail.com');
    await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
    await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Asdf@1234');
    await page.getByLabel('Confirm Password').click();
    await page.getByLabel('Confirm Password').fill('Asdf@1234');
    await page.getByRole('button', { name: 'Create an Account' }).click();
    await page.getByText('Jijo Mahesh luffyjijo4@gmail.').click();
    await page.getByRole('banner').getByText('Welcome, Jijo Mahesh!').click();
    await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
    await page.getByRole('link', { name: 'Sign Out' }).click();
    await page.getByText('You are signed out').click();
});


test.beforeEach(async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    await expect(page.locator('h1')).toContainText('Customer Login');
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('luffyjijo@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Asdf@1234');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('banner')).toContainText('Welcome, Jijo Mahesh!');
});

test.afterEach(async ({ page }) => {
    await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
    await page.getByRole('link', { name: 'Sign Out' }).click();
    await page.getByText('You are signed out').click();
})

test.skip('Menu option', async ({ page }) => {
    const menuMen = page.getByRole('menuitem', { name: ' Men' });
    const menuMenTops = page.getByRole('menuitem', { name: ' Tops' });
    const menuMenBottoms = page.getByRole('menuitem', { name: ' Bottoms' });
    const menuMenTopsHoodies = page.getByRole('menuitem', { name: 'Hoodies & Sweatshirts' });
    await menuMen.hover();
    await menuMenTops.hover();
    await menuMenTopsHoodies.hover();
    await menuMenTopsHoodies.click();
});


test('Product List', async ({ page }) => {
    const menuMen = page.getByRole('menuitem', { name: ' Men' });
    const menuMenTops = page.getByRole('menuitem', { name: ' Tops' });
    const menuMenBottoms = page.getByRole('menuitem', { name: ' Bottoms' });
    const menuMenTopsHoodies = page.getByRole('menuitem', { name: 'Hoodies & Sweatshirts' });
    await menuMen.hover();
    await menuMenTops.hover();
    await menuMenTopsHoodies.hover();
    await menuMenTopsHoodies.click();
    const addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
    const product1 = page.locator('li').filter({ hasText: /Marco Lightweight Active/ })
    await product1.hover();
    await product1.getByLabel('S', { exact: true }).click();
    await product1.getByLabel('Green').click();
    await product1.locator('button').last().click();
    await expect(page.getByRole('alert')).toContainText('You added Marco Lightweight Active Hoodie to your shopping cart.');
});
