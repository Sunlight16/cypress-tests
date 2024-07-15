describe('Suace demo page home', () => {
  it('Sauce home page is loaded', () => {
    cy.visit('')
    cy.url().should('include', 'saucedemo')
  })
})