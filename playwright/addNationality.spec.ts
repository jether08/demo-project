import { test, expect } from '@playwright/test';

// Use saved login state
test.use({ storageState: 'state.json' }); 

test('Create Nationality', async ({ page }) => {
  // Navigate to the National page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/nationality'); 

  // Verify the page title 
  await expect(page.locator('#app')).toContainText('Nationalities'); 
  
  // Fill in the form to add
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').fill('Philippines');
  await page.getByRole('button', { name: 'Save' }).click();
});