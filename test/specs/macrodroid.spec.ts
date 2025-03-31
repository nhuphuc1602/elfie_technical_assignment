import { expect } from '@wdio/globals';
import AllureReporter from '@wdio/allure-reporter';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


import { BaseTest } from '../support/BaseTest';
import { MacroLocators } from '../locators/macro.locators';
import { ActionBlockLocator } from '../locators/action-block.locators';
import { HomeLocators } from '../locators/home.locators';

import BasePage from "../pages/base.page";
import MacroPage from '../pages/macro.page';
import TriggerPage from '../pages/trigger.page';
import ActionPage from '../pages/action.page';
import ConstraintsPage from '../pages/constraint.page';
import LocalVarPage from '../pages/local-var.page';
import LandingPage from '../pages/landing.page';
import ActionBlockPage from '../pages/action-block.page';
import MacroWizardPage from '../pages/macro-wizard.page';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const testDataPath = path.resolve(__dirname, '../data/macrodroid_test_data.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

describe('MacroDroid Automation', () => {
    const baseTest = new BaseTest();
    const page = new BasePage();

    beforeEach(async () => {
        console.log('Setting up test suite...');
        await baseTest.test_setup();
        try { await LandingPage.skipLandingPage(); } catch {}
    });

    afterEach(async function() {
        if (this.currentTest?.state === 'failed') {
            const screenshot = await browser.takeScreenshot();
            AllureReporter.addAttachment(
                'Screenshot on Failure',
                Buffer.from(screenshot, 'base64'),
                'image/png'
            );
        }
        console.log('Tearing down test suite...');
        await baseTest.teardown();
    });

    it('TC1: Verify that the user is able to add a macro (add 3 macros)', async () => {
        const data = testData.TC1;

        console.log('Open Macro Page');
        await MacroPage.open();

        console.log('Add Trigger - Application Removed');
        await MacroPage.addTrigger();
        await TriggerPage.selectApplicationTrigger();

        console.log('Assert Created Trigger');
        await page.softAssert(async () => await expect($(MacroLocators.macrotriggerwithName)).toHaveText(data.triggerName));
        await page.softAssert(async () => await expect($(MacroLocators.macrotriggerwithDetails)).toHaveText(data.triggerDetails));

        console.log('Add Action - Clear Log');
        await MacroPage.addAction();
        await ActionPage.selectLoggingAction();

        console.log('Assert Created Action');
        await page.softAssert(async () => await expect($(MacroLocators.macroactionwithName)).toHaveText(data.actionName));
        await page.softAssert(async () => await expect($(MacroLocators.macroactionwithDetails)).toHaveText(data.actionDetails));

        console.log('Add Constraint - Airplane Mode Disabled');
        await MacroPage.addConstraint();
        await ConstraintsPage.selectAirplaneModeConstraint();

        console.log('Assert Created Constraint');
        await page.softAssert(async () => await expect($(MacroLocators.macroconstraintswithName)).toHaveText(data.constraintName));

        console.log('Add Local Variable - Test Case');
        await MacroPage.addLocalVariable();
        await LocalVarPage.addIntegerVariable(data.localVarName);

        console.log('Assert Created Local Variable Name');
        await page.softAssert(async () => await expect($(MacroLocators.localVarwithName)).toHaveText(data.localVarName));

        console.log('Add Local Variable - Value');
        await LocalVarPage.inputIntegerVariable(data.localVarValue);

        console.log('Assert Created Local Variable Value');
        await page.softAssert(async () => await expect($(MacroLocators.localVarwithDetails)).toHaveText(data.localVarValue));

        page.checkSoftAssertions();
    });

    it('TC2: Verify that the user is able to add an action block (add 3 action blocks)', async () => {
        const data = testData.TC2;

        console.log('Open Macro Page');
        await ActionBlockPage.open();

        console.log('Add Action Block');
        await ActionBlockPage.add();

        console.log('Input Action Block Name And Description');
        await ActionBlockPage.inputName(data.actionBlockName);
        await ActionBlockPage.inputDescription(data.actionBlockDescription);

        console.log('Input And Add Input Variable');
        await ActionBlockPage.addInputVariable(data.inputVarName);
        await ActionBlockPage.editInputVariable();

        console.log('Assert Created Input Variable');
        await page.softAssert(async () => await expect($(ActionBlockLocator.inputVarwithName)).toHaveText(data.inputVarName));
        await page.softAssert(async () => await expect($(ActionBlockLocator.inputVarwithValue)).toHaveText(data.inputVarValue));

        console.log('Input And Add Action');
        await ActionBlockPage.addActions();

        console.log('Assert Created Action');
        await page.softAssert(async () => await expect($(ActionBlockLocator.actionwithName)).toHaveText(data.actionName));
        await page.softAssert(async () => await expect($(ActionBlockLocator.actionwithValue)).toHaveText(data.actionDetails));

        console.log('Input And Add Output Variable');
        await ActionBlockPage.addOutputVariable(data.outputVarName);
        await ActionBlockPage.editOutputVariable(data.outputVarInput);

        console.log('Assert Created Output Variable');
        await page.softAssert(async () => await expect($(ActionBlockLocator.outputVarwithName)).toHaveText(data.outputVarName));
        await page.softAssert(async () => await expect($(ActionBlockLocator.outputVarwithValue)).toHaveText(data.outputVarValue));

        console.log('Tap Add Action Block Button');
        await ActionBlockPage.acceptAdd();

        console.log('Assert Created Action Block');
        await page.softAssert(async () => await expect($(ActionBlockLocator.actionBlockName)).toHaveText(data.actionBlockName));
        await page.softAssert(async () => await expect($(ActionBlockLocator.actionBlockDescription)).toHaveText(data.actionBlockDescription));

        page.checkSoftAssertions();
    });

    it('TC3: Verify that the user is able to add a macro with Macro Wizard (add Triggers and Actions without Constraints)', async () => {
        const data = testData.TC3;

        console.log('Tap On Add Macro Wizard Button');
        await MacroWizardPage.open();

        console.log('Add Trigger - Change Dark Theme');
        await TriggerPage.selectChangeDarkThemeTrigger();

        console.log('Tap on Action Tab');
        await MacroWizardPage.tapOnActionTab();

        console.log('Add Action - Stopwatch');
        await ActionPage.selectStopwatchAction(data.actionDetails);

        console.log('Tap Add Macro Wizard Button');
        await MacroWizardPage.tapAcceptButton();

        console.log('Enter Macros Name');
        await MacroWizardPage.enterMacroName(data.macroName);

        console.log('Skip AD If Show');
        try { await LandingPage.skipAD(); } catch {}
        try { await LandingPage.skipUpgrade(); } catch {}
        try { await LandingPage.skipBuyingPage(); } catch {}

        console.log('Tap On Macros Tab In Homepage');
        await $(HomeLocators.macrosTab).click();

        console.log('Assert Created Macros On Macros Tab');
        await expect($(HomeLocators.macrosNameText)).toHaveText(data.macroName);

        console.log('Tap On Macros Tab In Homepage');
        await $(HomeLocators.macrosNameText).click();

        console.log('Assert Created Trigger, Action in Macros');
        await expect($(MacroLocators.macrotriggerwithName)).toHaveText(data.triggerName);
        await expect($(MacroLocators.macrotriggerwithDetails)).toHaveText(data.triggerDetails);
        await expect($(MacroLocators.macroactionwithName)).toHaveText(data.actionName);
        await expect($(MacroLocators.macroactionwithDetails)).toHaveText(data.actionDetails);
    });

    it('TC4: Verify that the user is able to delete a macro in Macros Tab', async () => {
        console.log('Add A Macro With Macro Wizard');
        await MacroWizardPage.addMacro();

        console.log('Tap On Macros Tab In Homepage');
        await $(HomeLocators.macrosTab).click();

        console.log('Tap On Macros Tab In Homepage');
        await $(HomeLocators.macrosNameText).click();

        console.log('Tap On More Options Button in Macros');
        await $(MacroLocators.threeDotButton).click();

        console.log('Tap On Delete Macros Button in Macros');
        await $(MacroLocators.deleteMacroButton).click();
        await $(MacroLocators.okDeleteButton).click();

        console.log('Assert Trigger, Action in Macros Disappeared');
        await expect($(MacroLocators.macrotriggerwithName)).not.toBeExisting();
        await expect($(MacroLocators.macrotriggerwithDetails)).not.toBeExisting();
        await expect($(MacroLocators.macroactionwithName)).not.toBeExisting();
        await expect($(MacroLocators.macroactionwithDetails)).not.toBeExisting();
        
    });

});
