import { adminPage } from '../pageObjects/adminPage';

describe('Test cases for Admin Page', () => {
  context('Querying', () => {
    beforeEach(() => {
      cy.login(Cypress.env('username'), Cypress.env('password'));
      adminPage.navigateToAdminPage();
    });

    afterEach(() => {
      cy.logout();
    })

    it.only('Navigating thru Topbar Menu', () => {
      adminPage.selectConfiguration('Modules')
      cy.url().should('not.include', 'SystemUsers').and('include', 'Modules')
      cy.go("back")
      cy.url().should('include', 'SystemUsers')
    });

    it('Checking and uncheking Users list', () => {
      adminPage.checkUserList()
      cy.get(adminPage.deleteSelected).should('be.visible')
      adminPage.checkUserList()
      cy.get(adminPage.checkboxUsername).should('not.be.checked')
    });

    it('Hide and show System Users filters', () => {
      adminPage.hideFilters()
      cy.get(adminPage.usernameInput).should('not.be.visible')
      cy.get(adminPage.resetButton).should('not.be.visible')
      adminPage.hideFilters()
      cy.get(adminPage.usernameInput).should('be.visible')
      cy.get(adminPage.resetButton).should('be.visible')
    });


  });
});