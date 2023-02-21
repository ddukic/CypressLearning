const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      username: 'Admin',
      password: 'admin123',
      urlCallAdmin: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=Admin'
    },
    pageLoadTimeout: 90000,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
