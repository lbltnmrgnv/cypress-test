describe('Go to the google search page', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
    })
    it('and set somevalue to query line', () => {
        cy.get('#APjFqb').type('yoyoyoy').should('be.visible')
    })
})
