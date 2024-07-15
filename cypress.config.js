const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false ,
  projectId: 'ozs1hz',
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
