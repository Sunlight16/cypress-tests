import products from '../fixtures/products.json'

describe('DemoBlaze test store checkout', () => {
  it('Checkout in DemoBlaze store', () => {
    cy.visit('');
    cy.url().should('include', 'demoblaze');
    cy.visit('/prod.html', {
      qs: {
        idp_: products.product1.product_id
      },
    });
    cy.get('h2').should('have.text', products.product1.name);
    cy.contains('.price-container', products.product1.price);
    cy.visit('cart.html');
    cy.visit('/prod.html', {
      qs: {
        idp_: products.product1.product_id
      },
    });
    cy.get('.btn-success').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });
    cy.visit('cart.html');
    cy.get('.btn-success').click();
    cy.get('#orderModal').should('be.visible');
    cy.get('#name').type('{alt}Test', { release: false });
    cy.get('#country').type('{alt}Canada', { release: false });
    cy.get('#city').type('Winnipeg');
    cy.get('#card').type('4111111111111111');
    cy.get('#month').type('05');
    cy.get('#year').type('2033');
    cy.get('.btn-primary').contains('Purchase').click();
    cy.get('.sa-success').should('be.visible');
    cy.get('.sweet-alert').should('contain.text', 'Thank you for your purchase!');
    cy.wait(3000);  //need explicit wait to wait for Success modal to close
    cy.get('.confirm').contains('OK').click();
    cy.get('#orderModal', { timeout: 5000 }).should("not.exist");
  })

})
