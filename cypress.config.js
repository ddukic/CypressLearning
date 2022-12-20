const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    env: {
      username: 'Admin',
      password: 'admin123',
      urlCallAdmin: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=' + username
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
