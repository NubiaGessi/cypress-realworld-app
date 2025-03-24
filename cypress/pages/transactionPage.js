class TransactionPage {
    selectorsList() {
        const selectors = {
            newTransactionButton:'[data-test="nav-top-new-transaction"]',
            //contactListField: "[data-test='user-list-search-input']",
            //selectContactField: "[data-test='users-list']",
            firstUserList: '[data-test="user-list-item-uBmeaz5pX"]',
            amountField: "[data-test='transaction-create-amount-input']",
            descriptionTransactionField: "[data-test='transaction-create-description-input']",
            paySubmitButton: "[data-test='transaction-create-submit-payment']",
            successTransactionAlert: '[data-test="alert-bar-success"]'
        }

        return selectors
    }
  
    transationSteps(contactName, amount, description) {
        cy.get(this.selectorsList().newTransactionButton).click()
        //cy.get(this.selectorsList().contactListField).type(contactName)
        //cy.get(this.selectorsList().selectContactField).click()
        cy.get(this.selectorsList().firstUserList).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().descriptionTransactionField).type(description)
    }

    checkSuccessTransitionAlert () {
        cy.get(this.selectorsList().paySubmitButton).click()
        cy.get(this.selectorsList().successTransactionAlert)
    }

    checkDisabledSubmitButton () {
        cy.get(this.selectorsList().paySubmitButton).should('be.disabled')
    }
}

export default TransactionPage