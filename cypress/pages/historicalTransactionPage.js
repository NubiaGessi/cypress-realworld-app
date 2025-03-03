class HistoricalTransactionPage {
    selectorsList() {
        const selectors = {
            mineButton: '[data-test="nav-personal-tab"] > .MuiTab-wrapper',
            transactionList: '[data-test="transaction-list"]',
            noTransactionMessage: '[data-test="empty-list-header"] > .MuiTypography-root',
        }

        return selectors
    }

    checkHistoricalTransactionSuccess() {
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().transactionList)
    }

    checkEmptyTransaction() {
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().noTransactionMessage)
    }
}
export default HistoricalTransactionPage