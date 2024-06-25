// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { urls } from '../testData/testData.json';
require('dotenv').config();

test('user can login to the MVCP', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  await loginPage.login(email, password);
  await page.waitForURL(urls.eventLogs);



});