export class AdminPage {
    constructor(a) {
        this.usernameInput = '[class="oxd-input oxd-input--active"]';
        this.userRole = '.oxd-select-text-input';
        this.employeeName = '.oxd-padding-cell';
        this.userRoleMenu = '[role="listbox"]';
    }

    enterUsername(username) {
        cy.get(this.usernameInput).eq(1).type(username + '{enter}');
    }

    chooseRole(role) {
        cy.get(this.userRole).first().click();
        cy.get(this.userRoleMenu).first().contains(role).click();
    }
}

export const adminPage = new AdminPage();
