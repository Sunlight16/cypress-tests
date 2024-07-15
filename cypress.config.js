const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ozs1hz',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
