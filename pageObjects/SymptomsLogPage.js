import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
import { urls } from '../testData/testData.json';

class SymptomsLogPage extends BasePage {
  async verifyPage() {
    await expect(this.page).toHaveURL(urls.eventLogs);
    await expect(this.page.locator('role=heading')).toHaveText('Symptom Log');
    await expect(this.page.locator('text="Symptom logs reported in the last 6 months."')).toBeVisible({ timeout: 20000 });
  }
}

export { SymptomsLogPage };