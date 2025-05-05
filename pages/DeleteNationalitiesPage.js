import { By, until } from 'selenium-webdriver';

class DeleteNationalityPage {
  constructor(driver) {
    this.driver = driver;
    this.trashIcon = By.xpath("(//i[@class='oxd-icon bi-trash'])[1]");
    this.deleteConfirmationButton = By.xpath("//button[contains(.,'Yes, Delete')]");
    this.successToast = By.xpath("//p[contains(@class, 'oxd-toast-content-text') and text()='Success']");
  }

  async openNationalityPage() {
    await this.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/admin/nationality');
  }

  async deleteNationality() {
    // Click the trash icon to delete the
    const trash = await this.driver.wait(until.elementLocated(this.trashIcon), 5000);
    await trash.click(); 

    // click the confirmation button
    const confirmBtn = await this.driver.wait(until.elementLocated(this.deleteConfirmationButton), 5000);
    await confirmBtn.click(); 

    // Wait for success toast
    const toast = await this.driver.wait(until.elementLocated(this.successToast), 5000);
    const toastText = await toast.getText();

    // Assertion: check if toast contains success text
    if (!toastText.trim().toLowerCase().includes("jether")) {
      throw new Error(`Deletion failed. Toast message: ${toastText}`);
    }

    console.log("Nationality deleted successfully.");
  }
}

export default DeleteNationalityPage;