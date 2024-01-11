const { test, expect } = require('@playwright/test');
import { MyAccountPage } from '../pages/myAccountPage'
import { SignUpPage } from '../pages/signupPage'
import { SignInPage } from '../pages/signinPage'
import { HomePage } from '../pages/Homepage';
import { ProductListPage } from '../pages/productListPage';

test('order product for new customer', async({ page }) => {
    const homePage = new HomePage(page)
    const signup = new SignUpPage(page)
    const productList = new ProductListPage(page)

    await homePage.gotoHomePage();
    await homePage.gotoSignupPage();
    await signup.createAccount('jijomahesh7@gmail.com')
    await homePage.navigateToHoodiesPage();
    // await page.pause();
    await productList.selectSingleProductToAddToCard(/Marco Lightweight Active/,'S','Green')
    await homePage.logOut()
    await page.close()
    
    
})


test('order product for Existing customer', async({ page }) => {
    test.sl
    const homePage = new HomePage(page)
    const user = new SignInPage(page)
    const productList = new ProductListPage(page)

    await homePage.gotoHomePage();
    await homePage.gotoSignInPage();
    await user.signIn('luffyjijo@gmail.com');
    await homePage.navigateToHoodiesPage();
    // await page.pause();
    await productList.selectSingleProductToAddToCard(/Marco Lightweight Active/,'M','Green')
    await homePage.logOut()
    await page.close()
    
})