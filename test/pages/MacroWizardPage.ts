import { HomeLocators } from '../locators/HomeLocators';
import { MacroWizardLocators } from '../locators/MacroWizardLocator';

import TriggerPage from '../pages/TriggerPage';
import ActionPage from '../pages/ActionPage';
import LandingPage from '../pages/LandingPage';

import { $ } from '@wdio/globals'

class MacroWizardPage {
    async open() {
        await $(HomeLocators.macroWizardButton).click();
    }

    async tapOnActionTab() {
        await $(MacroWizardLocators.actionsTab).click();
    }

    async tapAcceptButton() {
        await $(MacroWizardLocators.acceptButton).click();
    }

    async enterMacroName(name: string) {
        await $(MacroWizardLocators.macroNameInputField).setValue(name);
        await $(MacroWizardLocators.okButton).click();
    }

    async addMacro() {
        await this.open();
        await TriggerPage.selectChangeDarkThemeTrigger();
        await this.tapOnActionTab();
        await ActionPage.selectStopwatchAction('stopwatch');
        await this.tapAcceptButton();
        await this.enterMacroName('testing');
        try { await LandingPage.skipAD(); } catch {}
        try { await LandingPage.skipUpgrade(); } catch {}
        try { await LandingPage.skipBuyingPage(); } catch {}
    }

}

export default new MacroWizardPage();
