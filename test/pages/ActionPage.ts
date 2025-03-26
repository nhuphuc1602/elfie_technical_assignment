import { $ } from '@wdio/globals'
import { MacroActionLocators } from '../locators/MacroActionLocators';

class ActionPage {
    async selectLoggingAction() {
        await $(MacroActionLocators.loggingButton).click();
        await $(MacroActionLocators.clearLogButton).click();
        await $(MacroActionLocators.systemLogRadioButton).click();
        await $(MacroActionLocators.okButton).click();
    }

    async selectStopwatchAction(name: string) {
        await $(MacroActionLocators.dateTimeButton).click();
        await $(MacroActionLocators.stopWatchButton).click();
        await $(MacroActionLocators.newStopWatchSelect).click();
        await $(MacroActionLocators.okButton).click();
        await $(MacroActionLocators.newStopWatchNameInputField).setValue(name);
        await $(MacroActionLocators.okButton).click();
        await $(MacroActionLocators.pauseSelect).click();
        await $(MacroActionLocators.okButton).click();
    }

}

export default new ActionPage();
