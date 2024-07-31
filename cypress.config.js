const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false ,
  projectId: 'ozs1hz',
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
});
