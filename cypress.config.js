const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    browser: 'Chrome',
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth : 1280,
    viewportHeight : 720,
    defaultCommandTimeout: 5000,
    pageLoadTimeout : 100000

  },
});
