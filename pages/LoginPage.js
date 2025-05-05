import { By, until } from 'selenium-webdriver';

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameInput = By.name('username');
    this.passwordInput = By.name('password');
    this.loginButton = By.css('button[type="submit"]');
  }

  async open() {
    await this.driver.get('https://opensource-demo.orangehrmlive.com/');
  }

  async login(username, password) {
    // wait for the username input to be present
    await this.driver.wait(until.elementLocated(this.usernameInput), 10000);

    // Fill in the username and password fields and click the Login button
    await this.driver.findElement(this.usernameInput).sendKeys(username); 
    await this.driver.findElement(this.passwordInput).sendKeys(password); 
    await this.driver.findElement(this.loginButton).click(); 
  }

  async waitForLoginSuccess() {
    // wait for the URL to contain 'dashboard'
    await this.driver.wait(until.urlContains('dashboard'), 10000);
  }
}

export default LoginPage;