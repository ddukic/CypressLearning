describe('All Login tests', function () {

    it('Login test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('[class="oxd-userdropdown-tab"]').should('be.visible')
    })
})    