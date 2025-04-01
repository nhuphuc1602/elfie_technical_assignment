import { MacroLocators } from '../locators/macro.locators';
import { HomeLocators } from '../locators/home.locators';

import { $ } from '@wdio/globals'

class MacroPage {
    async open() {
        await $(HomeLocators.macroButton).click();
    }

    async addTrigger() {
        await $(MacroLocators.addTriggerButton).click();
    }

    async addAction() {
        await $(MacroLocators.addActionButton).click();
    }

    async addConstraint() {
        await $(MacroLocators.addConstraintButton).click();
    }

    async addLocalVariable() {
        await $(MacroLocators.localVarButton).click();
        await $(MacroLocators.addLocalVarButton).click();
    }
}

export default new MacroPage();
