/// <reference types="cypress"/>

describe('First tests', () => {
    it('Login test 1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('.oxd-input').eq(0).type('Admin')
        cy.get('.oxd-input').eq(1).type('admin123')
        cy.get('.oxd-button').click()
    })
})