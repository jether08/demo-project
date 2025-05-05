import { Builder } from 'selenium-webdriver';
import LoginPage from '../pages/LoginPage.js';
import AddJobPage from '../pages/AddJobPage.js';
import { addTimestampToString } from '../utils/utility.js';

(async function testAddJob() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
   // Login
    const loginPage = new LoginPage(driver);
    await loginPage.open();
    await loginPage.login('Admin', 'admin123');
    await loginPage.waitForLoginSuccess();
    console.log('Login successful!');

    // Add Job
    const addJobPage = new AddJobPage(driver);
    await addJobPage.openJobTitlesPage();

    // Use the utility function to add a timestamp to the job description
    const jobDescription = "Automated testing of web applications";
    const jobDescriptionWithTimestamp = addTimestampToString(jobDescription); 
    
    await addJobPage.addJob({
      title: "QA Engineer",
      description: jobDescriptionWithTimestamp,
      note: "5+ years experience required"
    });

    console.log(jobDescriptionWithTimestamp)
    console.log('Job added successfully!');
    

  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    await driver.quit();
  }
})();