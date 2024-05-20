describe('Create Account', () => {
  it('Login Success', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Yolanda')
    cy.get('#lastname').type('Octaviane')
    cy.get('#email_address').type('vianelinting@gmail.com')
    cy.get('#password').type('Viane1234')
    cy.get('#password-confirmation').type('Viane1234')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  })
})