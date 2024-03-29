// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('');
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[class="oxd-userdropdown-tab"]').should('be.visible');
});

Cypress.Commands.add('logout', () => {
    cy.get('li:only-child').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click({force: true})
    cy.get('.orangehrm-login-button').should('be.visible')
});


Cypress.Commands.add('getUsers', (firstUser,lastUser) => {
    cy.request(
        'GET',
        'web/index.php/api/v2/admin/users',
    ).then(response => {
        var users =[response.body.data.slice(firstUser,lastUser)]
        cy.log(users)
    })
});
Cypress.Commands.add('getToken', () => {
    function getToken() {
        return cy.wrap('getToken');
      }
});
