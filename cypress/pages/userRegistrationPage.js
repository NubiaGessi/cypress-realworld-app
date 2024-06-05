class UserRegistrationPage {
    selectorsList() {
        const selectors = {
            userRegistrationButton: "[data-test='signup']",
            firstNameRegistrationField: "[data-test='signup-first-name']",
            lastNameRegistrationField: "[data-test='signup-last-name']",
            userNameRegistrationField: "[data-test='signup-username']",
            passwordRegistrationField: "[data-test='signup-password']",
            confirmPasswordRegistrationField: "[data-test='signup-confirmPassword']",
            registrationSubmitButton: "[data-test='signup-submit']",
            blankSpacePage: '.makeStyles-root-1',
            wrongFirstNameAlert: '#firstName-helper-text',
            wrongLastNameAlert: '#lastName-helper-text',
            wrongUserNameAlert: '#username-helper-text',
            wrongPasswordAlert: '#password-helper-text',
            wrongConfirmPasswordAlert: '#confirmPassword-helper-text'
        }

        return selectors
    }

    fillUserRegistrationInfo(firstName, lastName, userName, password, confirmationPassword) {
        cy.get(this.selectorsList().userRegistrationButton).click()
        cy.get(this.selectorsList().firstNameRegistrationField).type(firstName)
        cy.get(this.selectorsList().lastNameRegistrationField).type(lastName)
        cy.get(this.selectorsList().userNameRegistrationField).type(userName)
        cy.get(this.selectorsList().passwordRegistrationField).type(password)
        cy.get(this.selectorsList().confirmPasswordRegistrationField).type(confirmationPassword)
    }

    saveForm() {
        cy.get(this.selectorsList().registrationSubmitButton).click()
        cy.location('pathname').should('equal', '/signin')
    }

    emptyUserRegistrationInfo() {
        cy.get(this.selectorsList().userRegistrationButton).click()
        cy.get(this.selectorsList().firstNameRegistrationField).click()
        cy.get(this.selectorsList().lastNameRegistrationField).click()
        cy.get(this.selectorsList().userNameRegistrationField).click()
        cy.get(this.selectorsList().passwordRegistrationField).click()
        cy.get(this.selectorsList().confirmPasswordRegistrationField).click()
        cy.get(this.selectorsList().blankSpacePage).click()
    }

    checkUserRegistrationFail() {
        cy.get(this.selectorsList().wrongFirstNameAlert)
        cy.get(this.selectorsList().wrongLastNameAlert)
        cy.get(this.selectorsList().wrongUserNameAlert)
        cy.get(this.selectorsList().wrongPasswordAlert)
        cy.get(this.selectorsList().wrongConfirmPasswordAlert)
    }
}

export default UserRegistrationPage