import { Builder } from 'selenium-webdriver';
import LoginPage from '../pages/LoginPage.js';
import fs from 'fs';

const testData = JSON.parse(fs.readFileSync('../testData.json', 'utf-8'));

(async function testLogin() {
  let driver = new Builder().forBrowser('chrome').build();

  try {
    const loginPage = new LoginPage(driver);

    await loginPage.open();
    await loginPage.login(testData.username, testData.password); // Using test data from JSON file
    await loginPage.waitForLoginSuccess();

    console.log('Login test passed!');
    
  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    await driver.quit();
  }
})();