import { expect } from '@wdio/globals';
import { BaseTest } from '../support/BaseTest';

import MacroPage from '../pages/MacroPage';
import TriggerPage from '../pages/TriggerPage';
import ActionPage from '../pages/ActionPage';
import ConstraintsPage from '../pages/ConstraintPage';
import LocalVarPage from '../pages/LocalVarPage';
import LandingPage from '../pages/LandingPage';
import { macroLocators } from '../locators/MacroLocators';

describe('MacroDroid Automation', () => {

    const baseTest = new BaseTest();

    before(async () => {
        await baseTest.setup();
        await LandingPage.skipLandingPage();
    });

    after(async () => {
        await baseTest.teardown();
    });


    it('should add a macro successfully', async () => {
        await MacroPage.open();
        
        // Add Trigger
        await MacroPage.addTrigger();
        await TriggerPage.selectApplicationTrigger();

        // Add Action
        await MacroPage.addAction();
        await ActionPage.selectLoggingAction();

        // Add Constraint
        await MacroPage.addConstraint();
        await ConstraintsPage.selectAirplaneModeConstraint();

        // Add Local Variable
        await MacroPage.addLocalVariable();
        await LocalVarPage.addIntegerVariable('Test Case');

        // Assertions
        // await expect($('//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]')).toHaveTextContaining('Application Removed');
        // await expect($('//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]')).toHaveTextContaining('Clear Log');
        // await expect($('//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]')).toHaveTextContaining('Airplane Mode Disabled');
        // await expect($('//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]')).toHaveTextContaining('Test Case');

        await expect($(macroLocators.macrotriggerwithName)).toHaveText('Application Removed');
        await expect($(macroLocators.macroactionwithName)).toHaveText('Clear Log');
        await expect($(macroLocators.macroconstraintswithName)).toHaveText('Airplane Mode Disabled');
        await expect($(macroLocators.localVarwithName)).toHaveText('Test Case');
    });
});
