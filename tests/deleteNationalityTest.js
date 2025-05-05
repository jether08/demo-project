import { Builder} from 'selenium-webdriver';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import LoginPage from '../pages/LoginPage.js';
import DeleteNationalityPage from '../pages/DeleteNationalitiesPage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeScreenshot(driver, filename) {
  
    // Take screenshot
    const screenshot = await driver.takeScreenshot(); 

    // Save to screenshots folder
    const savePath = path.join(__dirname, '..', 'screenshots', filename); 

    // Write screenshot to file
    fs.writeFileSync(savePath, screenshot, 'base64'); 
    return savePath;
  }

(async function testDeleteNationality() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Login
    const loginPage = new LoginPage(driver);
    await loginPage.open(); 
    await loginPage.login('Admin', 'admin123');
    await loginPage.waitForLoginSuccess();
    console.log('Login successful!');

    // Delete Nationality
    const deletePage = new DeleteNationalityPage(driver);
    await deletePage.openNationalityPage();
    await deletePage.deleteNationality(); 
  } catch (err) {
    console.error('Test failed:', err);

    // Take screenshot on failure
    const screenshotFilename = `failure-${Date.now()}.png`;
    await takeScreenshot(driver, screenshotFilename);
    console.log(`Screenshot saved to ${screenshotFilename}`);

  } finally {
    await driver.quit();
  }
})();