
# Selenium and Playwright Test Automation Demo Project

This project contains automated tests for a web application, covering login, job management, and nationality management functionalities. The tests use Playwright (TypeScript) and Selenium WebDriver (JavaScript).

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm (comes with Node.js)
- Chrome browser

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/jether08/demo-project.git
   cd demo-project
Install dependencies:

bash
npm install
Install Playwright browsers:

bash
npx playwright install
Configuration
Update test credentials in testData.json:

json
{
  "adminUser": "Admin",
  "adminPassword": "admin123"
}

## 🧪 Test Structure

### Test Files
<pre>
tests/
├── addJobTest.js          <em># Selenium test for job creation</em>
├── deleteNationalityTest.js <em># Selenium test for nationality deletion</em>
└── loginTest.js           <em># Selenium test for login functionality</em>

playwright/
├── addNationality.spec.ts <em># Playwright test for nationality creation</em>
└── auth.spec.ts           <em># Playwright test for authentication</em>
</pre>

### Page Objects
<pre>
pages/
├── AddJobPage.js          <em># Page class for job management</em>
├── DeleteNationalitiesPage.js <em># Page class for nationality deletion</em>
└── LoginPage.js           <em># Page class for login functionality</em>
</pre>

### Utilities
<pre>
utils/
└── utility.js             <em># Shared helper functions</em>
</pre>


## 🚀 Running Tests

### Playwright Tests
npx playwright test

### Selenium Tests
1. node tests/loginTest.js
2. node tests/addJobTest.js
3. node tests/deleteNationalityTest.js

### 🔧 Assumptions
1. **Environment**
   1. Tests assume Chrome browser is installed
   2. Application URL is configured in respective page objects

2. **Test Data**
   1. Admin credentials are stored in `testData.json`
   2. Test data for nationalities/jobs is managed within test files

3. **Error Handling**
   1. Tests automatically capture screenshots on failure (saved to `screenshots/`)
   2. Playwright traces are generated for failed tests

4. **Dependencies**
   1. Playwright handles modern web testing
   2. Selenium WebDriver is used for legacy test cases
  
### 📝Important Notes
Test Artifacts
1. Screenshots of failed tests are saved in the screenshots/ directory ( Implemented in Selenium deletedNationalityTest.js )
2. Playwright reports are generated in playwright-report/
3. Test artifacts are stored in test-results/

Running from incorrect directories may cause:

1. Module import errors
2. File path resolution failures
3. Test data access issues

Always verify your current directory with pwd (Linux/Mac) or cd (Windows) before execution

## 📂 Execution Context

### Folder Structure Requirements
Demo/
<pre>
├── tests/ <em> # Selenium test files location </em>
├── playwright/ <em> # Playwright test files location </em>
└── <em> (other directories) </em>


### Execution Instructions
1. **For Selenium Tests**:
   ```bash
   cd tests/                # Navigate to tests directory first
   node loginTest.js        # Then execute test files

2 **For Playwright Tests**:

 ```bash
cd playwright/           # Navigate to playwright directory first
npx playwright test      # Then run Playwright



