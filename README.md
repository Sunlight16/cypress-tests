# cypress-tests Project
E2E automated tests created using Cypress.
Test in web store: https://www.demoblaze.com

# Test scenarios
Tests are created totally random without requirements.
Tests list:
- DemoBlaze test store checkout
  - DemoBlaze page home opened
  - Select product in store
  - Complete order with selected product
 
# Test Configurartion

- Install Cypress: 
    - `cd ..` to cypress tests path
    - `npm install cypress --save-dev`
- Node.js 18.x, 20.x, 22.x and above
    - `nvm use 18`


# Run tests

- Launch Cypress framework:
    - `npx cypress open`
- Go to "E2E Testing"
- Select Browser:
    - Chrome
- Click "Start E2E testing in Chrome" button
- In opened window select Specs/shop.cy.js
