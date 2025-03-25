import { $ } from '@wdio/globals'
import { macroConstraintsLocators } from '../locators/MacroConstraintsLocators'

class ConstraintsPage {
    async selectAirplaneModeConstraint() {
        await $(macroConstraintsLocators.deviceStateButton).click();
        await $(macroConstraintsLocators.airplanemodeButton).click();
        await $(macroConstraintsLocators.airplanemodeDisabledRadioButton).click();
        await $(macroConstraintsLocators.okButton).click();
    }
}

export default new ConstraintsPage();
