class HomePage {
    
    checkHomePage() {
        cy.location('pathname').should('equal', '/')
    }
}

export default HomePage