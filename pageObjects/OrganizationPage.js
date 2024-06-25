import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
import { urls } from '../testData/testData.json';

class OrganizationPage extends BasePage {
  async verifyPage() {
    await expect(this.page).toHaveURL(urls.organization);
    await expect(this.page.locator('role=heading')).toHaveText('Organization');
    await expect(this.page.locator('text="Add and manage members in your organization."')).toBeVisible({ timeout: 20000 });
  }
}

export { OrganizationPage };