import { Before, After, AfterStep, Status as TestStepResultStatus } from '@cucumber/cucumber';
import { BaseTest } from '../support/BaseTest';
import LandingPage from '../pages/landing.page';
import allure from '@wdio/allure-reporter';

const baseTest = new BaseTest();

Before(async function () {
    console.log('Setting up test suite...');
    await baseTest.test_setup();
    try { 
        await LandingPage.skipLandingPage(); 
    } catch (error) {
        console.warn("Skipping landing page failed:", error);
    }
});

After(async function () {
    console.log('Tearing down test suite...');
    await baseTest.teardown();
});

AfterStep(async function (scenario) {
    if (scenario.result?.status === TestStepResultStatus.FAILED) {
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
    }
});

// AfterAll(async function () {
//     console.log('Tearing down test environment...');
//     await baseTest.teardown();
// });
