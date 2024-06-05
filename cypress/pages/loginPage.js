class LoginPage {
    selectorsList() {
        const selectors = {
            userNameField: "[data-test='signin-username']",
            passwordField: "[data-test='signin-password']",
            rememberMeButton: "[data-test='signin-remember-me']",
            loginSubmitButton: "[data-test='signin-submit']",
            wrongCredentialAlert: '[data-test="signin-error"]'
        }

        return selectors

    }

    accessLoginPage() {
        cy.visit('/')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().rememberMeButton).click()
        cy.get(this.selectorsList().loginSubmitButton).click()
    }

    checkAccessInvalid () {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage