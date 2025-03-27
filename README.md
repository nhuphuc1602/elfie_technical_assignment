# Elfie Technical Assignment

This project is an automation testing framework for the MacroDroid application using WebdriverIO, TypeScript, and Appium.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Setup Environment](#setup-environment)
- [Features Implemented](#features-implemented)
- [Additional Test Cases](#additional-test-cases)
- [How to Run Tests](#how-to-run-tests)
- [Generate Allure Report](#generate-allure-report)
- [View Allure Report](#view-allure-report)

---

## Tech Stack
This project utilizes the following technologies:
- **WebdriverIO** – Automation framework
- **TypeScript** – Strongly typed scripting language
- **Appium** – Mobile automation framework
- **Mocha & BDD (Cucumber)** – Supports both testing styles

---

## Features Implemented

✅ **Create WebDriverIO Framework** – Built with TypeScript, Appium, and WebDriverIO for mobile automation  
✅ **Implement 4 Test Cases** – Automated 4 test scenarios for MacroDroid app  
✅ **HTML Reports** – Allure report generation for better visualization  
✅ **BDD Support** – Test scenarios written in Gherkin format  
✅ **Data-Driven Testing** – Supports executing tests with multiple datasets  

---

## Additional Test Cases

Two additional test cases have been implemented in this project:

1. **Test Case 1:** [Describe new test case functionality]
2. **Test Case 2:** [Describe new test case functionality]

These test cases follow best practices and have been integrated into the automation framework.

---

Test cases are structured as follows:
- **Mocha test cases** are located in the `specs` folder.
- **Cucumber (BDD) test cases** are placed in the `features` folder.

You can modify the `config.ts` file to switch between Mocha and Cucumber frameworks based on your preference.

---

## Setup Environment

1. **Install Node.js**  
   Ensure you have Node.js installed. You can download it from [Node.js Official Website](https://nodejs.org/).

2. **Configure Appium Settings**  
   Create a `config.ts` file in the project root directory with the following content to define Appium settings:
   ```ts
   export const appiumConfig = {
       framework: process.env.TEST_FRAMEWORK || 'mocha', // Change to 'cucumber' for BDD tests
       appPath: './test/apps/Final_Exam_MacroDroid.apk',
       deviceName: process.env.DEVICE_NAME || 'pixel_simulator',
       platformVersion: process.env.PLATFORM_VERSION || '15.0',
       appPackage: 'com.arlosoft.macrodroid',
       appWaitActivity: 'com.arlosoft.macrodroid.intro.IntroActivity',
       appiumPort: 4723,
       allureReportDir: './test/reports/allure-results',
       additionalCapabilities: {
           autoGrantPermissions: true,
           noReset: true,
       }
   };
   ```
   This configuration allows switching between Mocha and BDD by modifying `TEST_FRAMEWORK` in environment variables.

3. **Install Dependencies**  
   Run the following command in the project root directory to install all required dependencies:
   ```bash
   npm install
   ```

4. **Install Appium**  
   Install Appium globally:
   ```bash
   npm install -g appium
   ```

5. **Install Appium Drivers**  
   Install the Appium UIAutomator2 driver:
   ```bash
   appium driver install uiautomator2
   ```

6. **Set Up Android Emulator OR Real Device**  
   - Install Android Studio and set up an emulator with the following configuration:
     - Device Name: `pixel_simulator`
     - Platform Version: `15.0`
   - Ensure the emulator is running before executing tests.
   - For real devices, input the correct device information and ensure it is connected.

7. **Verify Appium Installation**  
   Start the Appium server to ensure it is installed correctly:
   ```bash
   appium
   ```

---

## How to Run Tests

1. **Run All Tests**  
   To execute all tests, use the following command:
   ```bash
   npx wdio wdio.conf.ts
   ```

2. **Run Specific Test**  
   To run a specific test file, modify the `specs` property in `wdio.conf.ts` or use the following command:
   ```bash
   npx wdio wdio.conf.ts --spec ./test/specs/<test-file-name>.ts
   ```

3. **Run Cucumber (BDD) Tests**  
   To run BDD test cases, set the framework to `cucumber` in `config.ts` and execute:
   ```bash
   npx wdio wdio.conf.ts
   ```

---

## Generate Allure Report

1. **Install Allure Command-Line Tool**  
   Install Allure globally:
   ```bash
   npm install -g allure-commandline --save-dev
   ```

2. **Generate the Report**  
   After running tests, generate the Allure report:
   ```bash
   allure generate ./test/reports/allure-results --clean
   ```

---

## View Allure Report

1. **Serve the Report**  
   To view the generated Allure report in your browser:
   ```bash
   allure open ./test/reports/allure-results
   ```

2. **Access the Report**  
   The report will open in your default browser. If not, copy the URL provided in the terminal and open it manually.

---

## Notes
- Ensure the Android emulator or real device is running before executing tests.
- If you encounter issues with permissions, set `autoGrantPermissions` to `true` in `wdio.conf.ts`.
- Submissions should include source code and a video recording of test execution, either via screen recording (for emulators) or external recording (for real devices).
