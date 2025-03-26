import { $ } from '@wdio/globals'
import { MacroConstraintsLocators } from '../locators/MacroConstraintsLocators'

class ConstraintsPage {
    async selectAirplaneModeConstraint() {
        await $(MacroConstraintsLocators.deviceStateButton).click();
        await $(MacroConstraintsLocators.airplanemodeButton).click();
        await $(MacroConstraintsLocators.airplanemodeDisabledRadioButton).click();
        await $(MacroConstraintsLocators.okButton).click();
    }
}

export default new ConstraintsPage();
