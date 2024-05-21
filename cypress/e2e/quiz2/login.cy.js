describe('Login', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Login - Failed Wrong Email & password', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(2000)
    cy.get('#email').type('a@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Salah.')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(1000)
    cy.get('.message-error').should('contain.text','\nThe account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n')
  })
    it('Login - Failed Empty Email & password', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(2000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get('#email-error').should('contain.text','This is a required field.')
    cy.get('#pass-error').should('contain.text','This is a required field.')
  })
  it.only('Login - Success', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(2000)
    cy.get('#email').type('viane@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Viane1234.')
    cy.wait(200)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
  })

/*Forgot password*/
  it('Forgot password - Success', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(2000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()
    cy.get('#email_address').type('viane@gmail.com')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success').should('contain.text','\nIf there is an account associated with viane@gmail.com you will receive an email with a link to reset your password.\n')
  })
  it('Forgot password - Failed', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(2000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()
    cy.get('#email_address').type('salah')
    cy.wait(1000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#email_address-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  /*Create new Account - via Login Page*/
  it('Create new Account - via Login Page', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(2000)
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/create/')
  })
})