const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('OrangeHRM Login Tests', () => {

test('valid user is able to login and see the landing page', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const username = process.env.ORANGEHRM_USERNAME || 'Admin';
  const password = process.env.ORANGEHRM_PASSWORD || 'admin123';

  await loginPage.goto();

  // Verify login page
  await expect(page).toHaveTitle(/OrangeHRM/);
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();

  //login
  await loginPage.login(username, password);

  // Verify successful login
  await loginPage.expectDashboard();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});

test('invalid user cannot login', async ({ page }) => {  

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  // try to login with invalid username and password
  await loginPage.login('invalidUsername', 'invalidPassword');

  // Verify unsuccessful login by checking for error message and that the dashboard is not visible
  //await expect(page.getByText('Invalid credentials')).toBeVisible();
  await expect(page.getByRole('alert')).toHaveText(/Invalid credentials/);

// Verify that the user is still on the login page
  await expect(page).toHaveURL(/login/);

});


});
