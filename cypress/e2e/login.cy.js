/// <reference types="Cypress" />
//import { loginPage } from '../page_objects/loginPage'

describe('login', () => {

  it('login with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.oxd-input--active').eq(0).type('Admin')
    cy.get('.oxd-input--active').first().type('admin123')
    cy.get('.orangehrm-login-button').click()
  })
})
