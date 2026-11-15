class LoginPage {

  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });
  }

async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectDashboard() {
    await this.page.waitForURL('**/web/index.php/dashboard/index');

    await this.page.getByRole('heading', {
      name: 'Dashboard'
    }).waitFor();
  }

}

module.exports = { LoginPage };
