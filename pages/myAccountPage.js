class MyAccountPage{
    constructor(page){
        this.page = page
        this.bannerDropDown = page.getByRole('banner').locator('button').filter({ hasText: 'Change' })
        this.page = page.getByRole('link', { name: 'Sign Out' })
    }
}