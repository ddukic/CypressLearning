export class BasePage {
    constructor() {
        this.adminLink = '[href="/web/index.php/admin/viewAdminModule"]'
        this.myInfoLink = '[href="/web/index.php/pim/viewMyDetails"]'
    }

    openAdminPage () {
        cy.get(this.adminLink).click();
    }

    openMyInfoPage () {
        cy.get(this.myInfoLink).click()
    }
}

export const basePage = new BasePage