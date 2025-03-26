import { expect } from '@wdio/globals';
import AllureReporter from '@wdio/allure-reporter';
import { BaseTest } from '../support/BaseTest';
import { MacroLocators } from '../locators/MacroLocators';
import { ActionBlockLocator } from '../locators/ActionBlockLocator';


import MacroPage from '../pages/MacroPage';
import TriggerPage from '../pages/TriggerPage';
import ActionPage from '../pages/ActionPage';
import ConstraintsPage from '../pages/ConstraintPage';
import LocalVarPage from '../pages/LocalVarPage';
import LandingPage from '../pages/LandingPage';
import ActionBlockPage from '../pages/ActionBlockPage';
import MacroWizardPage from '../pages/MacroWizardPage';
import { HomeLocators } from '../locators/HomeLocators';



describe('MacroDroid Automation', () => {
    const baseTest = new BaseTest();

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

    // after(async () => {
    //     console.log('Tearing down test environment...');
    //     await baseTest.teardown();
    // });

    it('TC1: Verify that the user is able to add a macro (dont need to add macro name) (add 3 macros)', async () => {
        console.log('Open Macro Page');
        await MacroPage.open();
    
        console.log('Add Trigger - Application Removed');
        await MacroPage.addTrigger();
        await TriggerPage.selectApplicationTrigger();

        console.log('Assert Created Trigger');
        await expect($(MacroLocators.macrotriggerwithName)).toHaveText('Application Removed');
        await expect($(MacroLocators.macrotriggerwithDetails)).toHaveText('Any Application');

        console.log('Add Action - Clear Log');
        await MacroPage.addAction();
        await ActionPage.selectLoggingAction();

        console.log('Assert Created Action');
        await expect($(MacroLocators.macroactionwithName)).toHaveText('Clear Log');
        await expect($(MacroLocators.macroactionwithDetails)).toHaveText('System Log');

        console.log('Add Constraint - Airplane Mode Disabled');
        await MacroPage.addConstraint();
        await ConstraintsPage.selectAirplaneModeConstraint();

        console.log('Assert Created Constraint');
        await expect($(MacroLocators.macroconstraintswithName)).toHaveText('Airplane Mode Disabled');

        console.log('Add Local Variable - Test Case');
        await MacroPage.addLocalVariable();
        await LocalVarPage.addIntegerVariable('Test Case');

        console.log('Assert Created Local Variable Name');
        await expect($(MacroLocators.localVarwithName)).toHaveText('Test Case');

        console.log('Add Local Variable - Value');
        await LocalVarPage.inputIntegerVariable('1');

        console.log('Assert Created Local Variable Value');
        await expect($(MacroLocators.localVarwithDetails)).toHaveText('1');

    });

    it('TC2: Verify that the user is able to add an action blocks (add 3 action blocks)', async () => {
        console.log('Open Macro Page');
        await ActionBlockPage.open();
        
        console.log('Add Action Block');
        await ActionBlockPage.add();
        
        console.log('Input Action Block Name And Description');
        await ActionBlockPage.inputName('test name');
        await ActionBlockPage.inputDescription('test description');

        console.log('Input And Add Input Variable');
        await ActionBlockPage.addInputVariable('inputvar');
        await ActionBlockPage.editInputVariable();

        console.log('Assert Created Input Variable');
        await expect($(ActionBlockLocator.inputVarwithName)).toHaveText('inputvar');
        await expect($(ActionBlockLocator.inputVarwithValue)).toHaveText('Default: True');

        console.log('Input And Add Action');
        await ActionBlockPage.addActions();

        console.log('Assert Created Action');
        await expect($(ActionBlockLocator.actionwithName)).toHaveText('Clear Log');
        await expect($(ActionBlockLocator.actionwithValue)).toHaveText('System Log');

        console.log('Input And Add Output Variable');
        await ActionBlockPage.addOutputVariable('outputvar');
        await ActionBlockPage.editOutputVariable('This is a testing string');
        
        console.log('Assert Created Output Variable');
        await expect($(ActionBlockLocator.outputVarwithName)).toHaveText('outputvar');
        await expect($(ActionBlockLocator.outputVarwithValue)).toHaveText('Default: This is a testing string');

        console.log('Tap Add Action Block Button');
        await ActionBlockPage.acceptAdd();

        console.log('Assert Created Action Block');
        await expect($(ActionBlockLocator.actionBlockName)).toHaveText('test name');
        await expect($(ActionBlockLocator.actionBlockDescription)).toHaveText('test description');
});

it('TC3: Verify that the user is able to add a macro with Macro Wizard (add Triggers and Actions without Constraints)', async () => {
    console.log('Tap On Add Macro Wizard Button');
    await MacroWizardPage.open();
    
    console.log('Add Trigger - Change Dark Theme');
    await TriggerPage.selectChangeDarkThemeTrigger();

    console.log('Tap on Action Tab');
    await MacroWizardPage.tapOnActionTab();

    console.log('Add Action - Stopwatch');
    await ActionPage.selectStopwatchAction('stopwatch');

    console.log('Tap Add Macro Wizard Button');
    await MacroWizardPage.tapAcceptButton();

    console.log('Enter Macros Name');
    await MacroWizardPage.enterMacroName('testing');

    console.log('Skip AD If Show');
    try { await LandingPage.skipAD(); } catch {}
    try { await LandingPage.skipUpgrade(); } catch {}
    try { await LandingPage.skipBuyingPage(); } catch {}

    console.log('Tap On Macros Tab In Homepage');
    await $(HomeLocators.macrosTab).click();

    console.log('Assert Created Macros On Macros Tab');
    await expect($(HomeLocators.macrosNameText)).toHaveText('testing');
    // await expect($(ActionBlockLocator.actionBlockDescription)).toHaveText('test description');

    console.log('Tap On Macros Tab In Homepage');
    await $(HomeLocators.macrosNameText).click();

    console.log('Assert Created Trigger, Action in Macros');
    await expect($(MacroLocators.macrotriggerwithName)).toHaveText('Dark Theme Change');
    await expect($(MacroLocators.macrotriggerwithDetails)).toHaveText('Disabled');
    await expect($(MacroLocators.macroactionwithName)).toHaveText('Stopwatch (Pause)');
    await expect($(MacroLocators.macroactionwithDetails)).toHaveText('stopwatch');

    
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
