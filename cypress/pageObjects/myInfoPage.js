export class MyInfoPage {
    constructor(m) {
        this.firstNameInput = '[class="oxd-input oxd-input--active orangehrm-firstname"]';
        this.middleNameInput = '[class="oxd-input oxd-input--active orangehrm-middlename"]';
        this.lastNameInput = '[class="oxd-input oxd-input--active orangehrm-lastname"]';
        this.nickNameInput = '[class="oxd-input oxd-input--active"]';
        this.employeeId = '.orangehrm-edit-employee-content > .orangehrm-horizontal-padding > .oxd-form > div:nth-of-type(2) > *:first-child > *:first-child > div > :nth-of-type(2) > input';
        this.otherId = '.orangehrm-edit-employee-content > .orangehrm-horizontal-padding > .oxd-form > div:nth-of-type(2) > *:first-child > :nth-of-type(2) > .oxd-input-group > :nth-of-type(2) > input';
        this.driversLicenseNumber = '[class="oxd-input oxd-input--active"]';
        this.licenseExpiryDate = '.oxd-date-input';
        this.firstSaveButton = '.oxd-form-actions > *:nth-child(2)';
        this.secondSaveButton = '.oxd-form-actions > *:only-child';
        this.succesModal = '.oxd-toast';
        this.customFields = '.orangehrm-custom-fields > .orangehrm-card-container > .oxd-form  > .oxd-form-row > .oxd-grid-3'
        this.nationality = '.oxd-select-text.oxd-select-text--active';
        this.menu = '[role="listbox"]';
        this.maritalStatus = '.oxd-select-text.oxd-select-text--active';
        this.bloodtypeDropdown = '[role="listbox"]'
    }

    enterFirstName(firstname) {
        cy.get(this.firstNameInput).clear().type(firstname);
    }

    enterMiddleName(middlename) {
        cy.get(this.middleNameInput).clear().type(middlename);
    }

    enterLastName(lastname) {
        cy.get(this.lastNameInput).clear().type(lastname);
    }

    enterNickName(nickname) {
        cy.get(this.nickNameInput).eq(1).clear().type(nickname);
    }

    enterEmployeeId(employeeid) {
        cy.get(this.employeeId).should('be.visible')
        cy.get(this.employeeId).clear().type(employeeid);
    }

    enterOtherId(otherid) {
        cy.get(this.otherId).type(otherid);
    }

    enterDriversLicenseNumber(driverslicensenumber){
        cy.get(this.driversLicenseNumber).eq(2).clear().type(driverslicensenumber);
    }

    selectLicenseExpiryDate(date) {
        cy.get(this.licenseExpiryDate).eq(0).click();
        cy.get('[class="oxd-calendar-selector-year-selected"]').click();

        cy.contains(date).click();
    }

    clickOnFirstSaveButton() {
        cy.get(this.firstSaveButton).click();
    }

    clickOnSecondSaveButton(){
        cy.get(this.secondSaveButton).click();
    }

    verifySuccesModal(modaltext){
        cy.get(this.succesModal).should('include.text', modaltext)
    }

    checkRadioBtn(value) {
        cy.get(`input[value=${value}] + *`).click()
    }

    clickBloodtypeDropdown () {
        cy.get(this.customFields).find('> *:first-child').click()
    }

    selectFromBloodTypeDropdown(bloodtype) {
        cy.get(this.bloodtypeDropdown).find('span').contains(bloodtype).click()
    }

    selectNationality(nationality){
        cy.get(this.nationality).eq(0).click();
        cy.get(this.menu).contains(nationality).click();
    }

    selectMaritalStatus(maritalstatus){
        cy.get(this.maritalStatus).eq(1).click();
        cy.get(this.menu).contains(maritalstatus).click();
    }s
}

export const myInfoPage = new MyInfoPage();