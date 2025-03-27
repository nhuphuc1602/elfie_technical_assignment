# Elfie Technical Assignment

This project is an automation testing framework for the MacroDroid application using WebdriverIO, TypeScript, and Appium.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Features Implemented](#features-implemented)
- [Additional Test Cases](#additional-test-cases)
- [Setup Environment](#setup-environment)
- [How to Run Tests](#how-to-run-tests)
- [Generate Allure Report](#generate-allure-report)
- [View Allure Report](#view-allure-report)


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
✅ **Soft Assert** – Collects assertion failures without stopping test execution and reports them at the end of the test case.  
✅ **Take Screenshot** – Take screenshot every time step fails and attach to Allure report, applies to Soft Assert as well.  

---

## Design Principles

This project follows the **Page Object Model (POM)** design pattern to enhance maintainability and scalability. The key principles applied are:

- **Page Object Model (POM):**  
    Each page or screen of the MacroDroid application is represented as a separate class. These classes encapsulate the elements and actions related to the respective page, ensuring a clear separation of concerns. This approach makes the test scripts more readable and easier to maintain.

- **Reusable Components:**  
    Common functionalities, such as navigation or shared UI elements, are abstracted into reusable components to avoid duplication and promote code reuse.

- **Single Responsibility Principle:**  
    Each class or module is designed to handle a single responsibility, such as managing a specific page or providing utility functions. This makes the codebase easier to understand and extend.

- **Encapsulation:**  
    Page classes expose only the necessary methods to interact with the page, hiding the implementation details of element locators and actions. This ensures that changes to the UI structure require minimal updates to the test scripts.

- **Modular Configuration:**  
    The configuration settings, such as Appium capabilities and framework options, are modularized in `config.ts` to allow easy customization and environment switching.

---

## Project Structure

The project is organized as follows:

- **`/test/specs`**: Contains Mocha test cases written in TypeScript.
- **`/test/features`**: Contains Cucumber (BDD) test cases written in Gherkin format.
- **`/test/steps`**: Contains step definitions for Cucumber (BDD) test cases.
- **`/test/support`**: Contains utility functions, hooks, and shared modules to support test execution.
- **`/test/reports`**: Stores test execution reports, including Allure results.
- **`/test/apps`**: Contains the MacroDroid APK file used for testing.
- **`/config.ts`**: Configuration file for Appium and WebDriverIO settings.
- **`wdio.conf.ts`**: WebDriverIO configuration file for running tests.

This structure ensures a clear separation of test cases, configurations, and reports, making the framework easy to maintain and extend.
---

## Additional Test Cases

Two additional test cases have been implemented in this project:

1. **Test Case 3:** Verify that the user is able to add a macro with Macro Wizard (add Triggers and Actions without Constraints)
2. **Test Case 4:** Verify that the user is able to delete a macro in Macros Tab

You can see more details about these test cases in testcase/Elfie test.docx

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

   To run a specific test scenarios, you can pass test case ID to the command:
    ```bash
   npx wdio wdio.conf.ts --cucumberOpts.tagExpression="TC1"
    ```
   Note: Ensure you change framework to "cucumber" in config.ts  

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
   allure open ./allure-report
   ```

2. **Access the Report**  
   The report will open in your default browser. If not, copy the URL provided in the terminal and open it manually.

---

## Notes
- Ensure the Android emulator or real device is running before executing tests.
- If you encounter issues with permissions, set `autoGrantPermissions` to `true` in `wdio.conf.ts`.
- If you have any questions or issues regarding the framework or automation execution, feel free to contact me via email: <nhuphuc1602@gmail.com>.  

