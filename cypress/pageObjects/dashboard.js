
export class DashboardPage {
    constructor(d) {
        this.timeAtWorkWatch = 'button[class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]';
        this.myActions = '[class="orangehrm-todo-list-item"]';
        this.buttonLeaveList= 'button[title="Leave List"]';
        this.buttonTimeSheets= 'button[title="Timesheets"]';
        this.buttonApplyLeave ='button[title="Apply Leave"]';
        this.buttonMyLeave= 'button[title="My Leave"]';
        this.buttonMyTimesheets= 'button[title="My Timesheet"]';
        this.buttonAssignLeave= 'button[title="Assign Leave"]';
        this.cogwheelEmployeesOnLeave ='.oxd-icon.bi-gear-fill.orangehrm-leave-card-icon';
        this.EmployeesOnLeaveModal ='div[role="document"]';
        this.EmployeeOnLeaveModalSaveButton ='button[type="submit"]';
        this.EmployeeOnLeaveModalCancelButton ='button[class="oxd-button oxd-button--medium oxd-button--ghost"]';
    }

    timeWatch (){
        cy.get(this.timeAtWorkWatch).click({force:true})   
    }

    leaveRequest (){
        cy.get(this.myActions).eq(0).should('have.text', ' (14) Leave Requests to Approve').click()
    }

    timesheetsToApprove (){
        cy.get(this.myActions).eq(1).should('have.text', ' (9) Timesheets to Approve').click()
    }

    pendingSelf (){
        cy.get(this.myActions).eq(2).should('have.text', ' (1) Pending Self Review').click()
    }

    candidateToInterview (){
        cy.get(this.myActions).eq(3).should('have.text', ' (1) Candidate to Interview').click()
    }

    leaveList (){
        cy.get(this.buttonLeaveList).click()
        .should('be.visible')
        .invoke('attr', 'title').should('equal', 'Leave List')
    }

    applyLeave (){
        cy.get(this.buttonApplyLeave).click()
        .invoke('attr', 'title').should('equal', 'Apply Leave')    
    }

    assignLeave (){
        cy.get(this.buttonAssignLeave).click()
        .should('be.visible')
        .invoke('attr', 'title').should('equal', 'Assign Leave')
    }

    cogwheelEmplButton (){
        cy.get(this.cogwheelEmployeesOnLeave).click()
        cy.get(this.EmployeesOnLeaveModal).should('be.visible')
        cy.get(this.EmployeeOnLeaveModalSaveButton).should('be.visible')
        .and('have.text', ' Save ')
        cy.get(this.EmployeeOnLeaveModalCancelButton).should('be.visible')
        .and('have.text', ' Cancel ')
    }
}

export const dashBoard = new DashboardPage();