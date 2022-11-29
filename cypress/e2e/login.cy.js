

describe('Login', () => {

    it('The user should be able to login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.get('input[placeholder="Username"]').should("be.visible").type('Admin');
      cy.get('input[placeholder="Password"]').should("be.visible").type('admin123');
      cy.get('button[type="submit"]').should("be.visible").click({force:true});

    })




  })