import { basePage } from "./basePage";

export class AdminPage {
    constructor(a) {
        this.adminPage = '[href="/web/index.php/admin/viewAdminModule"]';
        this.searchBar = 'svg + input';
        this.usernameInput = ':nth-child(2) > .oxd-input';
        this.userRole = '.oxd-select-text-input';
        this.employeeNameInput = '.oxd-autocomplete-text-input';
        this.employeeNameList = '.oxd-padding-cell:nth-child(4)';
        this.userRoleMenu = '[role="listbox"]';
        this.filterArrow = '.oxd-table-filter-header-options';
        this.resetButton = '.oxd-button--ghost';
        this.addButton = 'i.oxd-button-icon';
        this.topbarMenu = 'div nav';
        this.configuration = '.oxd-topbar-body-nav-tab:last-of-type';
        this.headerSubTitle = 'h6.oxd-text:nth-of-type(2)';  //span :nth-of-type(2)
        this.checkboxUsername = '.--label-right';
        this.deleteSelected = '.bi-trash-fill';
        this.sortByStatus = '.bi-arrow-down-up';
        this.userDropDown = 'li:only-child';
    }

    navigateToAdminPage() {
        cy.get(this.adminPage).click()
    }

    enterUsername(username) {
        cy.get(this.usernameInput).type(username + '{enter}');
    }

    selectRole(role) {
        cy.get(this.userRole).first().click();
        cy.get(this.userRoleMenu).first().contains(role).click();
    }

    selectStatus(status) {
        cy.get(this.userRole).eq(1).click();
        cy.get(this.userRoleMenu).first().contains(status).click();
    }

    selectConfiguration(configuration) {
        cy.get(this.topbarMenu).eq(1).click();
        cy.get(this.configuration).contains(configuration).click();
    }

    checkUserList() {
        cy.get(this.checkboxUsername).first().click({ force: true })
    }

    hideFilters() {
        cy.get(this.filterArrow).click()
    }

}

export const adminPage = new AdminPage();
