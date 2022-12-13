describe('Add user API tests', () => {

    // Don't forget to delete the user first
    it('successfully add an admin user', () => {
        const userName = 'odis123'
        // login
        cy.login(Cypress.env('username'), Cypress.env('password'));
        // POST request to users endpoint
        cy.request(
            'POST',
            'web/index.php/api/v2/admin/users',
            {"username":userName,"password":"fdf4UYV7zux8dzj-juv","status":true,"userRoleId":1,"empNumber":2},
        ).then(response => {
            expect(response.body.data.userName).to.be.eq(userName)
        })
        // assert the response
    });

    it('get the list of 50 users', () => {
        // login
        // GET request to users endpoint
        // store the list for the later assertion (do the assertion in the same test)
        // BONUS: make a custom command from this and use it in the next test.
        //        Also, make sure this commands accept N number of users to get
    });

    it('fail to add existing user', () => {
        // login
        // POST request to users endpoint
        // assert the response and status code
    });

    it('intercept the username validation endpoint and make sure validation works', () => {
        // login
        // navigate to the Admins page
        // type existing username in the username field
        // intercept the desired call
        // validate the response
    });
});
