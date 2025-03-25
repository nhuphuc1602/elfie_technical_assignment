import { $ } from '@wdio/globals'
import { macroLocators } from '../locators/MacroLocators'

class LocalVarPage {
    async addIntegerVariable(name: string) {
        await $(macroLocators.createNewVarTitlePopup).waitForDisplayed();
        await $(macroLocators.localVarInputField).setValue(name);
        await $(macroLocators.localVarTypeSelect).click();
        await $(macroLocators.localVarIntegerSelect).click();
        await $(macroLocators.okButton).click();
    }
}

export default new LocalVarPage();
