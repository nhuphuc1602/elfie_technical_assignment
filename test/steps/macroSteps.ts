import { Given, When, Then } from '@wdio/cucumber-framework';
import MacroPage from '../pages/MacroPage';
import TriggerPage from '../pages/TriggerPage';
import ActionPage from '../pages/ActionPage';
import ConstraintsPage from '../pages/ConstraintPage';
import LocalVarPage from '../pages/LocalVarPage';
import { MacroLocators } from '../locators/MacroLocators';
import { expect } from '@wdio/globals';

Given('the user open the Macro Page', async () => {
    await MacroPage.open();
});

When('the user add a Trigger - Application Removed', async () => {
    await MacroPage.addTrigger();
    await TriggerPage.selectApplicationTrigger();
});

Then('the user should see the Trigger with text {string}', async (text: string) => {
    await expect($(MacroLocators.macrotriggerwithName)).toHaveText(text);
});

When('the user add an Action - Clear Log', async () => {
    await MacroPage.addAction();
    await ActionPage.selectLoggingAction();
});

Then('the user should see the Action with text {string}', async (text: string) => {
    await expect($(MacroLocators.macroactionwithName)).toHaveText(text);
});

When('the user add a Constraint - Airplane Mode Disabled', async () => {
    await MacroPage.addConstraint();
    await ConstraintsPage.selectAirplaneModeConstraint();
});

Then('the user should see the Constraint with text {string}', async (text: string) => {
    await expect($(MacroLocators.macroconstraintswithName)).toHaveText(text);
});

When('the user add a Local Variable - Test Case', async () => {
    await MacroPage.addLocalVariable();
    await LocalVarPage.addIntegerVariable('Test Case');
});

Then('the user should see the Local Variable with text {string}', async (text: string) => {
    await expect($(MacroLocators.localVarwithName)).toHaveText(text);
});


When('the user input {string} to Local Variable', async (text: string) => {
    await LocalVarPage.inputIntegerVariable(text);
});

Then('the user should see the Local Variable with value {string}', async (text: string) => {
    await expect($(MacroLocators.localVarwithDetails)).toHaveText(text);
});