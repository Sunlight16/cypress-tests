describe('AppliTools E2E', () => {
    const applitoolsUrl = 'https://the-internet.herokuapp.com/'
    it('Login to Applitools', () => {
        cy.visit(applitoolsUrl + '/login');
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()

    })
})