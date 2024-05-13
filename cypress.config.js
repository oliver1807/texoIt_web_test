const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  e2e: {
    setupNodeEvents(on, config) {
      
      on('file:preprocessor', cucumber(),
      
    ) 
      allureWriter(on, config);
      return config    
    },    
    specPattern: "cypress/e2e/step_definitions/*.feature",
    chromeWebSecurity: false        
  }
    
})

