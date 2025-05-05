import { test, expect } from '@playwright/test';

test('Login and save storage state', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Fill in the login form
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify the login was successful by asserting Dashboard is displayed
  await expect(page.getByRole('heading')).toContainText('Dashboard');

  // Save the storage state to a file
  await page.context().storageState({ path: 'state.json' });
});