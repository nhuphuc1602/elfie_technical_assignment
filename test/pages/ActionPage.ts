import { $ } from '@wdio/globals'
import { macroActionLocators } from '../locators/MacroActionLocators';

class ActionPage {
    async selectLoggingAction() {
        await $(macroActionLocators.loggingButton).click();
        await $(macroActionLocators.clearLogButton).click();
        await $(macroActionLocators.systemLogRadioButton).click();
        await $(macroActionLocators.okButton).click();
    }
}

export default new ActionPage();
