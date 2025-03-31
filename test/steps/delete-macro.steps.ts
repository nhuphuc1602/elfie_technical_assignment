import { Given, When, Then } from '@wdio/cucumber-framework';
import MacroWizardPage from '../pages/macro-wizard.page';
import {HomeLocators} from '../locators/home.locators';
import {MacroLocators} from '../locators/macro.locators';

Given('the user has added a macro using Macro Wizard', async () => {
    await MacroWizardPage.addMacro();
});

When('the user navigates to the Macros tab', async () => {
    await $(HomeLocators.macrosTab).click();
});

When('the user selects a macro from the list', async () => {
    await $(HomeLocators.macrosNameText).click();
});

When('the user taps on the more options button', async () => {
    await $(MacroLocators.threeDotButton).click();
});

When('the user taps on the delete macro button', async () => {
    await $(MacroLocators.deleteMacroButton).click();
});

When('the user confirms the deletion', async () => {
    await $(MacroLocators.okDeleteButton).click();
});

Then('the macro should be removed from the list', async () => {
    await expect($(MacroLocators.macrotriggerwithName)).not.toBeExisting();
    await expect($(MacroLocators.macrotriggerwithDetails)).not.toBeExisting();
    await expect($(MacroLocators.macroactionwithName)).not.toBeExisting();
    await expect($(MacroLocators.macroactionwithDetails)).not.toBeExisting();
});
