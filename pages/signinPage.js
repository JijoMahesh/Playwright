class SignInPage{
    constructor(page){
        this.page = page
        this.emailTextBox = page.getByLabel('Email', { exact: true })
        this.passwordTextBox = page.getByLabel('Password')
        this.signInButton = page.getByRole('button', { name: 'Sign In' })
    }
}