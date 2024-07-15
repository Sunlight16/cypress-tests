describe('DemoBlaze page home', () => {
  it('DemoBlaze home page is loaded', () => {
    cy.visit('')
    cy.url().should('include', 'demoblaze')
  })

  // it('Login to Saucedemo store', () => {
  //   cy.visit('')
  //   cy.get('#user-name').type('standard_user')
  // })
})