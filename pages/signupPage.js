exports.SignUpPage = class SignUpPage {

    constructor(page){
        this.page = page
        this.userFirstNameTextBox = page.getByLabel('First Name')
        this.userLastNameTextBox = page.getByLabel('Last Name')
        this.emailTextBox = page.getByLabel('Email', { exact: true })
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password*', exact: true })
        this.confirmPassTextBox = page.getByLabel('Confirm Password')
        this.createAccountButton = page.getByRole('button', { name: 'Create an Account' })
    }

    async createAccount(email){
        await this.userFirstNameTextBox.fill('Test')
        await this.userLastNameTextBox.fill('Date')
        await this.emailTextBox.fill(email)
        await this.passwordTextBox.fill('Asdf@1234')
        await this.confirmPassTextBox.fill('Asdf@1234')
        await this.createAccountButton.click()
    }
}