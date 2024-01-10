exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page
        this.menuMen = page.getByRole('menuitem', { name: ' Men' });
        this.menuMenTops = page.getByRole('menuitem', { name: ' Tops' });
        this.menuMenBottoms = page.getByRole('menuitem', { name: ' Bottoms' });
        this.menuMenTopsHoodies = page.getByRole('menuitem', { name: 'Hoodies & Sweatshirts' });
        this.accountDropdown = page.getByRole('banner').locator('button').filter({ hasText: 'Change' })
        this.signOutLink = page.getByRole('link', { name: 'Sign Out' })

    }

    async gotoHomePage() {
        await this.page.goto('https://magento.softwaretestingboard.com/')
    }

    async gotoSignInPage() {
        await this.page.goto('https://magento.softwaretestingboard.com/customer/account/login/')
    }

    async gotoSignupPage() {
        await this.page.goto('https://magento.softwaretestingboard.com/customer/account/create/');
    }

    async navigateToHoodiesPage() {
        await this.menuMen.hover();
        await this.menuMenTops.hover();
        await this.menuMenTopsHoodies.click();
    }

    async logOut() {
        await this.accountDropdown.click();
        await this.signOutLink.click();
    }


}