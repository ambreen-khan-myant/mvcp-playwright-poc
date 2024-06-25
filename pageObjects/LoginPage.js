import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

class LoginPage extends BasePage {
  async fillEmail(email) {
    await this.page.getByPlaceholder('Email').fill(email);
  }

  async fillPassword(password) {
    await this.page.getByPlaceholder('Password').fill(password);
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async login(email, password) {
    await this.navigate('/');
    await expect(this.page).toHaveTitle(/Myant/);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}

export { LoginPage };