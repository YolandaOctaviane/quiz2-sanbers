describe('Create Account', () => {
  /*Random Email*/

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2.10)
    const email = randomString + "@gmail.com"
    return email
  }

  let userEmail = randomEmail()

  beforeEach(() => {
    cy.visit('')

  })
  it.only('Create account - Success', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.BuatBaru('Yolanda','Octaviane',userEmail,'Viane1234.','Viane1234.')
    cy.url().should('include','account')
  })
  
  it('Account duplicate - Failed', () => {
    cy.wait(10000)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.BuatBaru('Yolanda','Octaviane','viane@gmail.com','Viane1234.','Viane1234.')
    cy.get('.message-error').should('contain.text','\nThere is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.\n')
  })
  it('Empty all field - Failed', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(100)
    cy.get('#firstname-error').should('contain.text','This is a required field.')
    cy.get('#lastname-error').should('contain.text','This is a required field.')
    cy.get('#email_address-error').should('contain.text','This is a required field.')
    cy.get('#password-error').should('contain.text','This is a required field.')
    cy.get('#password-confirmation-error').should('contain.text','This is a required field.')
  })
  it('password doesnt match - Failed', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.BuatBaru('Yolanda','Octaviane',userEmail,'Viane1234.','Viane12')
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again')
  })
})