# Elfie Technical Assignment

This project is an automation testing framework for the MacroDroid application using WebdriverIO and Appium.

## Table of Contents
- [Setup Environment](#setup-environment)
- [How to Run Tests](#how-to-run-tests)
- [Generate Allure Report](#generate-allure-report)
- [View Allure Report](#view-allure-report)

---

## Setup Environment

1. **Install Node.js**  
    Ensure you have Node.js installed. You can download it from [Node.js Official Website](https://nodejs.org/).

2. **Install Dependencies**  
    Run the following command in the project root directory to install all required dependencies:
    ```bash
    npm install
    ```

3. **Install Appium**  
    Install Appium globally:
    ```bash
    npm install -g appium
    ```

4. **Install Appium Drivers**  
    Install the Appium UIAutomator2 driver:
    ```bash
    appium driver install uiautomator2
    ```

5. **Set Up Android Emulator**  
    - Install Android Studio and set up an emulator with the following configuration:
      - Device Name: `pixel_simulator`
      - Platform Version: `15.0`
    - Ensure the emulator is running before executing tests.

6. **Verify Appium Installation**  
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

3. **Run Cucumber Features**  
    If using the Cucumber framework, ensure the `framework` in `config.ts` is set to `cucumber`. Then run:
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
- Ensure the Android emulator is running before executing tests.
- If you encounter issues with permissions, ensure the `autoGrantPermissions` capability is set to `true` in `wdio.conf.ts`.

---  