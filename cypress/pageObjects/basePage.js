export class BasePage {
    constructor() {
        this.adminLink = '[href="/web/index.php/admin/viewAdminModule"]'
        this.dashboardLink = '[href="/web/index.php/dashboard/index"]'
    }

    openAdminPage () {
        cy.get(this.adminLink).click();
    }

    openDashboardPage (){
        cy.get(this.dashboardLink).click();
    }
}

export const basePage = new BasePage