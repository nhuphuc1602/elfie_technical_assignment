import { $ } from '@wdio/globals'
import { macroTriggerLocators } from '../locators/MacroTriggerLocators'

class TriggerPage {
    async selectApplicationTrigger() {
        await $(macroTriggerLocators.applicationButton).click();
        await $(macroTriggerLocators.appInstallRemoveUpdateButton).click();
        await $(macroTriggerLocators.appRemoveRadioButton).click();
        await $(macroTriggerLocators.okButton).click();
        await $(macroTriggerLocators.anyAppRadioButton).click();
        await $(macroTriggerLocators.okButton).click();
    }
}

export default new TriggerPage();
