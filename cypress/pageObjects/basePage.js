export class BasePage {
    constructor() {
        this.adminLink = '[href="/web/index.php/admin/viewAdminModule"]'
        this.dashboardLink = '[href="/web/index.php/dashboard/index"]'
        this.myInfoLink = '[href="/web/index.php/pim/viewMyDetails"]'
    }

    openAdminPage () {
        cy.get(this.adminLink).click();
    }
    openDashboardPage (){
        cy.get(this.dashboardLink).click();
    openMyInfoPage () {
        cy.get(this.myInfoLink).click()
    }
}

export const basePage = new BasePage