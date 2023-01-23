export class BasePage {
    constructor() {
        this.adminLink = '[href="/web/index.php/admin/viewAdminModule"]'
    }

    openAdminPage () {
        cy.get(this.adminLink).click();
    }
}

export const basePage = new BasePage();