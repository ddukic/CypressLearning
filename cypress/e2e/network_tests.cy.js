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

    it('Get a list of all users', () => {
        // login
        cy.login(Cypress.env('username'), Cypress.env('password'));
        // GET request to users endpoint
        cy.request(
            'GET',
            'web/index.php/api/v2/admin/users',
        ).then(response => {
            var users =[response.body.data]
            cy.log(users)
        })
        // store the list for the later assertion (do the assertion in the same test)
        // BONUS: make a custom command from this and use it in the next test.
        //        Also, make sure this commands accept N number of users to get
    });
    it('Get a list of N users', () => {
        // login
        cy.login(Cypress.env('username'), Cypress.env('password'));
        // GET request to users endpoint
        cy.getUsers(0,15);
        // store the list for the later assertion (do the assertion in the same test)
        // BONUS: make a custom command from this and use it in the next test.
        //        Also, make sure this commands accept N number of users to get
    });

    it('fail to add existing user', () => {
        const userName = "odis123"
        // login
        cy.login(Cypress.env('username'), Cypress.env('password'));
        // POST request to users endpoint
        cy.request({
            method: 'POST',
            url:'web/index.php/api/v2/admin/users',
            failOnStatusCode: false,
            username:userName, password:"fdf4UYV7zux8dzj-juv",status :true, userRoleId :1, empNumber:2
        }
        ).then(response => {
           // expect(response.body.data.userName).to.be.eq(userName)
           expect(response.status).to.equal(422)
        })
        // assert the response and status code
    });

    it.only('intercept the username validation endpoint and make sure validation works', () => {
        var IntResponse;
        // login
        cy.intercept('GET', 'web/index.php/api/v2/admin/validation/user-name?userName=Admin', (req) => {
            req.reply((res) => {
              console.log(res)
              IntResponse = res;
              expect(res.statusCode).to.equal(200)
            })
          }).as('intercept')
        cy.login(Cypress.env('username'), Cypress.env('password'));
        // navigate to the Admins page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
        // type existing username in the username field
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click({force:true})
        cy.get("div:nth-child(4) div:nth-child(1) div:nth-child(2) input:nth-child(1)").type(Cypress.env('username'))
        cy.get('button[type="submit"]').click({force:true})
        // intercept the desired call
        cy.wait('@intercept')    
          // Later in the test, you can access the request and response objects:
        // validate the response
        
    });
    it('DOMACI', () => {
        cy.request(
            'GET',
            'web/index.php/auth/login',
        ).then(response => {
            let token =response.body.split('auth-login')[1].split('&quot;"')[0].split(':token="&quot;')[1]
            cy.log(token)
            cy.request(
                'POST',
                'web/index.php/auth/validate',
                {
                    _token: token,
                    username: 'Admin',
                    password: 'admin123',
                }
            )
        })
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });
});
