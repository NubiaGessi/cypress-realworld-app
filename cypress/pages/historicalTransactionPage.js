class HistoricalTransactionPage {
    selectorsList() {
        const selectors = {
            mineButton: '[data-test="nav-personal-tab"] > .MuiTab-wrapper',
            transactionList: '[data-test="transaction-list"]',
            transactionValue:'.makeStyles-paper-44',
            noTransactionMessage: '[data-test="empty-list-header"] > .MuiTypography-root',
        }

        return selectors
    }

    checkHistoricalTransactionSuccess() {
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().transactionList)
        cy.get(this.selectorsList().transactionValue).contains('-$1.00')
    }

    checkEmptyTransaction() {
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().noTransactionMessage)
    }
}
export default HistoricalTransactionPage