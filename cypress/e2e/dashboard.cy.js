
const { adminPage } = require("../pageObjects/adminPage");
const { basePage } = require("../pageObjects/basePage");
const { dashBoard } = require("../pageObjects/dashboard");

describe('Admin tests', () => {

    beforeEach(() => {
        cy.login('Admin', 'admin123')
        basePage.openDashboardPage()
    });
    it('go to timewatch', () => {
        dashBoard.timeWatch()
        cy.url().should('not.include', '/dashboard')
    })

    it(' leave request', ()=>{
        dashBoard.leaveRequest()
    })

    it('timesheets to approve ', ()=>{
        dashBoard.timesheetsToApprove()
    })

    it('leave list', ()=>{
        dashBoard.leaveList()
    })

    it('open settings with cogwheel', ()=>{
        dashBoard.cogwheelEmplButton()     
    })

    it('apply list', ()=>{
        dashBoard.applyLeave()
    })

    it('assign leave', ()=>{
        dashBoard.assignLeave()
    })
    
});