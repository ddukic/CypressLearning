describe('All Login tests', function () {

    it('Login test', () => {
        cy.login('Admin', 'admin123')
    })
})    