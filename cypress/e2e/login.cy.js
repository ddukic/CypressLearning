describe('Login', () => {

    const loginData = {
        username: "Admin",
        password: "admin123"
    }

    beforeEach('visit url', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('The user should be able to login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('[name="username"]').should("be.visible").type(loginData.username);
        cy.get('[name="password"]').should("be.visible").type(loginData.password);
        cy.get('[type="submit"]').should("be.visible").click();
        cy.url().should('not.contain', '/login')
    })
})