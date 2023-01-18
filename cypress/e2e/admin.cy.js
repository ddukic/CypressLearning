const { adminPage } = require("../pageObjects/adminPage");
const { basePage } = require("../pageObjects/basePage");

describe('Admin tests', () => {

    beforeEach(() => {
        cy.login('Admin', 'admin123')
    });

    it('test admin page', () => {
        basePage.openAdminPage();
        adminPage.enterUsername('something')
        adminPage.chooseRole('Admin')
    });
});