import { $ } from '@wdio/globals'
import { MacroLocators } from '../locators/MacroLocators'

class LocalVarPage {
    async addIntegerVariable(name: string) {
        await $(MacroLocators.createNewVarTitlePopup).waitForDisplayed();
        await $(MacroLocators.localVarInputField).setValue(name);
        await $(MacroLocators.localVarTypeSelect).click();
        await $(MacroLocators.localVarIntegerSelect).click();
        await $(MacroLocators.okButton).click();
    }

    async inputIntegerVariable(name: string) {
        await $(MacroLocators.localVarwithName).click();
        await $(MacroLocators.localVarValueInputField).setValue(name);
        await $(MacroLocators.okButton).click();
    }
}

export default new LocalVarPage();
