import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';  
import LoginPage from '../pages/LoginPage.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const testDataPath = path.join(__dirname, 'testData.json');

const testData = JSON.parse(readFileSync(testDataPath, 'utf8'));

const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless'); // Headless mode for CI
chromeOptions.addArguments('--no-sandbox'); // Required in CI
chromeOptions.addArguments('--disable-dev-shm-usage'); 


(async function testLogin() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

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