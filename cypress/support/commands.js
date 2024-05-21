// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('BuatBaru', (first, last, email, password, passwordco) => { 
    cy.get('#firstname').type(first)
    cy.get('#lastname').type(last)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(passwordco)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
 })

 Cypress.Commands.add('loginedit', (first, last, email, password, passwordco) => { 
 cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(2000)
    cy.get('#email').type('viane@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Viane1234.')
    cy.wait(200)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
})

Cypress.Commands.add('ketikEdit', (elemen,value) => { 
    cy.get(elemen)
    .should()
    .clear()
    .type(value)
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })