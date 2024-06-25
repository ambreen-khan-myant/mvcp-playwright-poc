import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
import { urls } from '../testData/testData.json';

class PatientsPage extends BasePage {
  async verifyPage() {

    this.page.setDefaultTimeout(20000);
    
    await expect(this.page).toHaveURL(urls.patients);
    await expect(this.page.locator('role=heading')).toHaveText('Patients');
    await expect(this.page.locator('text="Approve registrations and manage patients under your organization\'s care."')).toBeVisible({ timeout: 50000 });
}
}

export { PatientsPage };