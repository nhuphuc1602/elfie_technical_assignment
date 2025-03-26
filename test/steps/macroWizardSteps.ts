import { When, Then } from '@wdio/cucumber-framework';
import MacroWizardPage from '../pages/MacroWizardPage';
import TriggerPage from '../pages/TriggerPage';
import ActionPage from '../pages/ActionPage';
import LandingPage from '../pages/LandingPage';
import {HomeLocators} from '../locators/HomeLocators';
import {MacroLocators} from '../locators/MacroLocators';

When('I open the Macro Wizard', async () => {
    console.log('Tap On Add Macro Wizard Button');
    await MacroWizardPage.open();
});

When('I add a Trigger with {string}', async (triggerName) => {
    console.log(`Add Trigger - ${triggerName}`);
    await TriggerPage.selectChangeDarkThemeTrigger();
});

When('I tap on Action Tab', async () => {
    console.log('Tap on Action Tab');
    await MacroWizardPage.tapOnActionTab();
});

When('I add an Action with {string} and name {string}', async (actionName, actionValue) => {
    console.log(`Add Action - ${actionName}`);
    await ActionPage.selectStopwatchAction(actionValue);
});

When('I tap the Accept button', async () => {
    console.log('Tap Add Macro Wizard Button');
    await MacroWizardPage.tapAcceptButton();
});

When('I enter the Macro name {string}', async (macroName) => {
    console.log(`Enter Macro Name: ${macroName}`);
    await MacroWizardPage.enterMacroName(macroName);
});

When('I skip ads if they appear', async () => {
    console.log('Skip AD If Show');
    try { await LandingPage.skipAD(); } catch {}
    try { await LandingPage.skipUpgrade(); } catch {}
    try { await LandingPage.skipBuyingPage(); } catch {}
});

When('I tap on Macros tab on the Homepage', async () => {
    console.log('Tap On Macros Tab In Homepage');
    await $(HomeLocators.macrosTab).click();
});

Then('I should see the created Macro with name {string}', async (macroName) => {
    console.log(`Assert Created Macros: ${macroName}`);
    await expect($(HomeLocators.macrosNameText)).toHaveText(macroName);
});

When('I open the created Macro', async () => {
    console.log('Tap On Created Macro');
    await $(HomeLocators.macrosNameText).click();
});

Then('I should see the Trigger with name {string} and details {string}', async (triggerName, triggerDetails) => {
    console.log(`Assert Created Trigger: ${triggerName} - ${triggerDetails}`);
    await expect($(MacroLocators.macrotriggerwithName)).toHaveText(triggerName);
    await expect($(MacroLocators.macrotriggerwithDetails)).toHaveText(triggerDetails);
});

Then('I should see the Action with name {string} and details {string}', async (actionName, actionDetails) => {
    console.log(`Assert Created Action: ${actionName} - ${actionDetails}`);
    await expect($(MacroLocators.macroactionwithName)).toHaveText(actionName);
    await expect($(MacroLocators.macroactionwithDetails)).toHaveText(actionDetails);
});
