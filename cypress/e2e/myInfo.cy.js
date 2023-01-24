const { basePage } = require("../pageObjects/basePage");
const { myInfoPage } = require("../pageObjects/myInfoPage");
describe('MyInfo tests', () => {
    beforeEach(() => {
        cy.login('Admin', 'admin123')
    });
    it('update full name', () => {
        basePage.openMyInfoPage();
        myInfoPage.enterFirstName("Tom");
        myInfoPage.enterMiddleName('T');
        myInfoPage.enterLastName('Tomson');
        myInfoPage.enterNickName('Tomy');
        myInfoPage.clickOnFirstSaveButton();
        myInfoPage.verifySuccesModal('Successfully Updated');
    });
    it('update id and personal details', () => {
        basePage.openMyInfoPage();
        myInfoPage.enterEmployeeId('55');
        myInfoPage.enterOtherId('66');
        myInfoPage.enterDriversLicenseNumber('77');
        myInfoPage.selectLicenseExpiryDate('24');
        myInfoPage.clickOnSecondSaveButton();
        myInfoPage.verifySuccesModal('Successfully Saved');
        myInfoPage.selectNationality('Angolan');
        myInfoPage.selectMaritalStatus('Single');
        myInfoPage.checkRadioBtn("2")
        myInfoPage.clickBloodtypeDropdown()
        myInfoPage.selectFromBloodTypeDropdown('B+')
        myInfoPage.clickOnSecondSaveButton()
        myInfoPage.verifySuccesModal('Successfully Saved')
    });

    
});