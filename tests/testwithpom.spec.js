const { test, expect } = require('@playwright/test');
import { MyAccountPage } from '../pages/myAccountPage'
import { SignUpPage } from '../pages/signupPage'
import { HomePage } from '../pages/Homepage';
import { ProductListPage } from '../pages/productListPage';

test('order product for new customer', async({ page }) => {
    const homePage = new HomePage(page)
    const signup = new SignUpPage(page)
    const productList = new ProductListPage(page)

    // await page.goto('https://magento.softwaretestingboard.com/customer/account/create/');
    await homePage.gotoHomePage();
    await homePage.gotoSignupPage();
    await signup.createAccount('jijomahesh6@gmail.com')
    await homePage.navigateToHoodiesPage();
    // await page.pause();
    await productList.selectSingleProductToAddToCard(/Marco Lightweight Active/,'S','Green')
    await homePage.logOut()
    await page.close()
    
})