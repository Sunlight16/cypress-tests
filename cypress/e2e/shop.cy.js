import products from '../fixtures/products.json'

describe('DemoBlaze page home', () => {
  it('DemoBlaze home page is loaded', () => {
    cy.visit('')
    cy.url().should('include', 'demoblaze')
  })

  it('Select product in store', () => {
    cy.visit('/prod.html', {
      qs: {
        idp_: products.product1.product_id
      },
    })
    cy.get('h2').should('have.text', products.product1.name)
    cy.contains('.price-container', products.product1.price)
  })
})