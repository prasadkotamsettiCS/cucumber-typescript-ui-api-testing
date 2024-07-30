Certainly! Here’s an improved version of your README file with enhanced clarity and structure:

---

# Cypress Automation Framework

## Framework Overview

This Cypress automation framework is tailored for testing the functionalities of the WTW website, offering a robust and reliable solution to ensure the website's performance and behavior. The framework integrates both UI and API testing using TypeScript, JavaScript, and Cucumber, delivering a comprehensive and scalable testing approach.

- **Cypress**: Utilized for end-to-end testing, ensuring that the UI components function as expected.
- **Cucumber**: Applies Behavior Driven Development (BDD) principles, fostering collaboration and creating meaningful, credible test scenarios.
- **TypeScript & JavaScript**: Employed for scripting and configuring tests, providing flexibility and type safety.

## Getting Started

### Cloning the Project

To get started, clone the project by following these steps:

1. Install Node.js if you haven't already. [Download Node.js](https://nodejs.org/en/download)
2. Install Visual Studio Code or your preferred IDE. [Download VS Code](https://code.visualstudio.com/download)
3. Open a terminal and navigate to your project directory:
   ```
   cd to/your-cypress-directory
   ```
4. Clone the repository:
   ```
   git clone https://github.com/prasadkotamsettiCS/cucumber-typescript-ui-api-testing.git
   ```

### Installing Dependencies

**Note:** Cypress can be run using either **npm** or **yarn**. This project uses npm, but you are free to use yarn if you prefer.

Follow these steps to install Cypress on macOS, Linux, or Windows:

1. Install all dependencies from the root directory:

   Install Cypress and its dependencies:

   ```
   npm install cypress --save-dev
   ```

### Install typescript

```
npm install --save-dev typescript
npm install --save-dev @types/cypress
npm install --save-dev @types/cucumber
```

2. Install the following Visual Studio Code plugins to enhance your development experience:
   - Cucumber (Gherkin) Full Support (Alexander Krechik)
   - HTML Preview (George Oliveira)
   - Material Icon Theme (Philipp Kief)
   - Prettier - Code formatter (Prettier)
   - Open in Browser (TechER)

## Running Tests

After completing the installation, you can run the tests with the following commands:

- Open Cypress in headed mode:

  ```
  npx cypress open
  npx cypress run
  ```

- Generate HTML reports after running tests:
  ```
  node cucumber-html-report.js
  ```

### Scripts to run various test runs with specific requirement [Sample npm scripts].

- "regression-run": "npm run clear-reports && cypress run --browser chrome && node cucumber-html-report.js",
- "regression-headless-chrome": "cypress run --browser chrome && node cucumber-html-report.js"
- "smoke-headless-chrome": "cypress run -e TAGS='@smoke' && node cucumber-html-report.js"
- "regression-headless-firefox": "cypress run --browser firefox && node cucumber-html-report.js"
- "user-search-journeys": "cypress run --spec cypress/e2e/testCases/userJournies && node cucumber-html-report.js"

## Framework Folder Structure

The project is organized as follows:

- `cypress/e2e/ui_Testing/testCases`: Contains test feature files (.feature extension)
- `cypress/support/step_definitions`: Contains step definition files for the feature files
- `cypress/support/pageObjects`: Contains page object functions for corresponding pages (e.g., clicks, types, asserts)
- `cypress/support/utils`: Contains utility methods
- `cypress.config.js`: Contains Cypress configurations
- `cypress/fixtures`: Contains test data
- `package.json`: Manages dependencies and scripts for the Cypress project
- `cucumber-html-report.js`: Generates HTML reports for test cases

## Framework Writing Standards

- Folder names should follow camelCase naming convention (e.g., `testCase`, `homePage`).
- JavaScript files should use PascalCase naming convention (e.g., `TestPage.js`, `Tsconfig.js`).
- Use camelCase for code elements within the framework.
- Create relevant folders corresponding to the steps used on the website.
- Use descriptive names for data and selectors in all possible scenarios and avoid brittle elements.
- Utilize Cucumber tags (e.g., `@smoke`, `@regression`) to operate and run specific test cases or suites.

## Reporting

- Generate reports after each test run or configure npm scripts for automatic report generation:

  ```
  node cucumber-html-report.js
  ```

  ```
  "all-tests-headless": "npx cypress run && node cucumber-html-report.js"
  ```

- Open reports in your browser from the framework reports folder.

**Sample Report:**

## Videos & Screenshots

- **Videos**: Test run videos are saved in `cypress/videos` and are cleaned up before each run.
- **Screenshots**: Screenshots of failed test cases are saved in `cypress/screenshots`.

## Continuous Development / Continuous Integration

- Integrate **Github Actions** or **CircleCI** for Continuous Development and Continuous Integration.
- Automate various stages of the software development lifecycle.
- Schedule and generate HTML reports of build results.

## Learning Cypress

Start with the official [Cypress Documentation](https://docs.cypress.io/) for guides on writing tests.
