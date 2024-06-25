import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { LeftNavigation } from '../pageObjects/LeftNavigation';
import { PatientsPage } from '../pageObjects/PatientsPage';
import { SymptomsLogPage } from '../pageObjects/SymptomsLogPage';
import { OrganizationPage } from '../pageObjects/OrganizationPage';
import { login, urls } from '../testData/testData.json';
require('dotenv').config();

test('Verify navigation and page content', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const leftNavigation = new LeftNavigation(page);
  const patientsPage = new PatientsPage(page);
  const symptomsLogPage = new SymptomsLogPage(page);
  const organizationPage = new OrganizationPage(page);

  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  // Login to the application
  await loginPage.login(email, password);
  await page.waitForURL(urls.eventLogs);

  // Navigate to Patients page and verify
  await leftNavigation.goToPatientsList();
  await patientsPage.verifyPage();

  // Navigate to Symptoms Log page and verify
  await leftNavigation.goToSymptomsLog();
  await symptomsLogPage.verifyPage();

  // Navigate to Organization page and verify
  await leftNavigation.goToOrganization();
  await organizationPage.verifyPage();
});