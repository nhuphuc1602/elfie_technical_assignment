import { $ } from '@wdio/globals'
import { MacroTriggerLocators } from '../locators/macro-trigger.locators'

class TriggerPage {
    async selectApplicationTrigger() {
        await $(MacroTriggerLocators.applicationButton).click();
        await $(MacroTriggerLocators.appInstallRemoveUpdateButton).click();
        await $(MacroTriggerLocators.appRemoveRadioButton).click();
        await $(MacroTriggerLocators.okButton).click();
        await $(MacroTriggerLocators.anyAppRadioButton).click();
        await $(MacroTriggerLocators.okButton).click();
    }

    async selectChangeDarkThemeTrigger() {
        await $(MacroTriggerLocators.deviceEventsButton).click();
        await $(MacroTriggerLocators.darkThemeChangeButton).click();
        await $(MacroTriggerLocators.disabledRadioButton).click();
        await $(MacroTriggerLocators.okButton).click();
    }
}

export default new TriggerPage();
