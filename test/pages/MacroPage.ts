import { macroLocators } from '../locators/MacroLocators';
import { homeLocators } from '../locators/HomeLocators';

import { $ } from '@wdio/globals'

class MacroPage {
    async open() {
        await $(homeLocators.macroButton).click();
    }

    async addTrigger() {
        await $(macroLocators.addTriggerButton).click();
    }

    async addAction() {
        await $(macroLocators.addActionButton).click();
    }

    async addConstraint() {
        await $(macroLocators.addConstraintButton).click();
    }

    async addLocalVariable() {
        await $(macroLocators.localVarButton).click();
        await $(macroLocators.addLocalVarButton).click();
    }
}

export default new MacroPage();
