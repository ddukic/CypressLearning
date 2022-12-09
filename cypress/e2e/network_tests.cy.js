describe('Add user API tests', () => {
    it('successfully add an admin user', () => {
        // login
        // POST request to users endpoint
        // assert the response
    });

    it('get the list of 50 users', () => {
        // login
        // GET request to users endpoint
        // store the list for the later assertion (do the assertion in the same test)

        // BONUS: make a custom command from this and use it in the next test.
        //        Also, make sure this commands accept N number of users to get 
    })

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