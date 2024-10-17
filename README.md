# Quipu Automation Task

This repository contains UI tests using [WebDriverIO](https://webdriver.io/) with a Page Object Model (POM) structure. The tests are written in JavaScript, and WebDriverIO is used for automating browser interactions.

## Project Overview

- **Project Name**: `quipu-automation-task`
- **Version**: `1.0.0`
- **Description**: This project automates UI tests using WebDriverIO with a Page Object Model (POM) structure, providing reusable and maintainable tests.

---

## Requirements

Before you start, ensure that you have the following installed:

- Node.js (version 16 or above):
- npm (Node Package Manager)

---

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/ui-testing-webdriverio.git
cd ui-testing-webdriverio
```

### 2. Install Dependencies

Install all necessary dependencies with the following command:

```bash
npm install 
```

This command installs the required dependencies listed in the package.json file.

Included Dependencies:

WebDriverIO CLI and Local Runner:

- @wdio/cli: WebDriverIO Command Line Interface (CLI) for running tests.
- @wdio/local-runner: To run WebDriverIO tests locally.

Framework and Reporters:

- @wdio/mocha-framework: Mocha framework for writing and running tests.
- @wdio/spec-reporter: Outputs test results in a human-readable format.

Services:

- @wdio/selenium-standalone-service: Supports Selenium standalone server (optional if using Selenium Grid).
- chromedriver: ChromeDriver for running tests in Chrome.
- @wdio/visual-service: Visual testing service for screenshot comparisons.

Assertion Library:

- chai: For writing assertions in your tests.
- Wait-for Utility:

wdio-wait-for: Utility for waiting on elements or conditions during tests.

### 3. Running the Tests

To run the WebDriverIO tests, use the following command:

```bash
npm test
```
This command will execute all the test cases defined in your project.

---

### Configure WebDriverIO

NOTE: This step should be done only on initial setup, there is existing setup at the moment in this repository.

Generate WebDriverIO's configuration file:

```bash
npx wdio config
```

Answer the prompts:

- Mocha for the testing framework.
- Spec Reporter for test reporting.
- Chrome (or another browser like Firefox, depending on your needs).
- Selenium Standalone (or Chromedriver if you're running WebDriver locally).

This will generate a wdio.conf.js file where you can tweak your configuration.

## Browser Automation Services

For browser automation, you'll need to install services based on the browser you want to test with. Those are mentioned in the install dependencies section.

Just make sure to do this step:

- Add the following line to your wdio.conf.js file: services: ['chromedriver']

---

## Project Structure

Here's the folder structure of this project:

```bash
quipu-automation-task/                     # Root folder for the project
├── .github/                               # GitHub Actions configurations
│   ├── workflows/                         # Workflow files for CI/CD
│   ├── webdriverio-ci-manual-run.yml      # Manual test trigger
│   ├── webdriverio-ci-on-schedule.yml     # Scheduled test runs
│   └── webdriverio-ci-push-pr.yml         # Tests on push/PR
├── node_modules/                          # Installed Node.js modules
├── Manual Tests and Bugs/                 # Folder for manual tests and bugs found
│   ├── Bugs /                             # Folder where the bugs found are located
│   └── Manual Tests/                      # Folder where the manual tests are located
├── test/                                  # Test-related files
│   ├── pageObjects/                       # Page Object Model files
│   ├── HomePage.js                        # POM for Home page
│   ├── LoginPage.js                       # POM for Login page
│   └── specs/                             # Test scripts
│       └── LoginTest.js                   # End-to-end test
├── package-lock.json                      # Locks dependency versions
├── package.json                           # Project config file
├── README.md                              # Project documentation
└── wdio.conf.js                           # WebDriverIO config file
```

---

## Troubleshooting

- If you encounter issues with the ChromeDriver, you can manually specify the ChromeDriver path in your wdio.conf.js file.
- If tests are not running correctly, ensure your browser versions and WebDriverIO dependencies are compatible.
