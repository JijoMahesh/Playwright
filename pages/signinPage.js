exports.SignInPage = class SignInPage {

    constructor(page) {
        this.page = page
        this.emailTextBox = page.getByLabel('Email', { exact: true })
        this.passwordTextBox = page.getByLabel('Password')
        this.signInButton = page.getByRole('button', { name: 'Sign In' })
    }

    async signIn(Email) {
        await this.emailTextBox.fill(Email)
        await this.passwordTextBox.fill('Asdf@1234')
        await this.signInButton.click()
    }
}