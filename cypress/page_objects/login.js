class LoginPage {
    get usernameInput () {
        return cy.get('.oxd-input oxd-input--active').eq(0)
    }
}
export const loginPage = new LoginPage()