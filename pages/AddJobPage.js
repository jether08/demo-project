import { By, until } from 'selenium-webdriver';

class AddJobPage {
  constructor(driver) {
    this.driver = driver;
    this.addButton = By.xpath("//button[normalize-space()='Add']");
    this.jobTitleInput = By.xpath("(//label[contains(text(),'Job Title')]/following::input)[1]");
    this.jobDescriptionInput = By.xpath("//textarea[contains(@class, 'oxd-textarea')]");
    this.jobNoteInput = By.xpath("//textarea[@placeholder='Add note']");
    this.saveButton = By.xpath("//button[normalize-space()='Save']");
    this.successToast = By.css(".oxd-toast-container");
  }

  async openJobTitlesPage() {
    await this.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
    await this.driver.wait(until.elementLocated(this.addButton), 10000);
  }

  async addJob(jobData) {
    try {
      await this.driver.findElement(this.addButton).click(); 
      
      // Wait for the job title input to be present and enter the job title
      await this.driver.wait(until.elementLocated(this.jobTitleInput), 5000); 
      await this.driver.findElement(this.jobTitleInput).sendKeys(jobData.title); 
     
      // wait for the job description input to be present and enter the job description
      await this.driver.wait(until.elementLocated(this.jobDescriptionInput), 5000)
      await this.driver.findElement(this.jobDescriptionInput).sendKeys(jobData.description); 

      // wait for jobNote input and Enter job note
      await this.driver.wait(until.elementLocated(this.jobNoteInput), 5000); 
      await this.driver.findElement(this.jobNoteInput).sendKeys(jobData.note); 

      // Click the Save button
      await this.driver.findElement(this.saveButton).click(); 

      // Wait for the success toast to appear
      await this.driver.wait(until.elementLocated(this.successToast), 5000); 
    } catch (error) {
      console.error('Error in addJob:', error);
      throw error;
    }
  }
}

export default AddJobPage;