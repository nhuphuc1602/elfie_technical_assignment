import { HomeLocators } from '../locators/HomeLocators';
import { ActionBlockLocator } from '../locators/ActionBlockLocator';

import { $ } from '@wdio/globals'

class ActionBlockPage {
    async open() {
        await $(HomeLocators.actionBlocksButton).click();
    }

    async add() {
        await $(ActionBlockLocator.addActionBlockButton).click();
    }

    async inputName(name: string) {
        await $(ActionBlockLocator.actionBlockNameInputField).setValue(name);
    }

    async inputDescription(name: string) {
        await $(ActionBlockLocator.actionBlockDescriptionInputField).setValue(name);
    }

    async addInputVariable(name: string) {
        await $(ActionBlockLocator.addInputVariableButton).click();
        await $(ActionBlockLocator.newVarNameInputField).setValue(name);
        await $(ActionBlockLocator.okButton).click();

    }

    async editInputVariable() {
        await $(ActionBlockLocator.inputVarCollapseButton).click();
        await $(ActionBlockLocator.inputVarwithName).click();
        await $(ActionBlockLocator.localVarTitle).waitForDisplayed();
        await $(ActionBlockLocator.localTrueRadioButton).click();
        await $(ActionBlockLocator.okButton).click();

    }

    async addActions() {
        await $(ActionBlockLocator.addActionButton).click();
        await $(ActionBlockLocator.addActionLoggingButton).click();
        await $(ActionBlockLocator.addActionLoggingClearLogButton).click();
        await $(ActionBlockLocator.addActionLoggingSystemLogRadioButton).click();
        await $(ActionBlockLocator.selectOptionOKButton).click();

    }


    async addOutputVariable(name: string) {
        await $(ActionBlockLocator.addOutputVariableButton).click();
        await $(ActionBlockLocator.newVarNameInputField).setValue(name);
        await $(ActionBlockLocator.newVarTypeSelect).click();
        await $(ActionBlockLocator.newVarStringSelect).click();
        await $(ActionBlockLocator.okButton).click();
    }

    async editOutputVariable(name: string) {
        await $(ActionBlockLocator.outputVarCollapseButton).click();
        await $(ActionBlockLocator.outputVarwithName).click();
        await $(ActionBlockLocator.localVarTitle).waitForDisplayed();
        await $(ActionBlockLocator.localVarInputField).setValue(name);
        await $(ActionBlockLocator.okButton).click();

    }

    async acceptAdd() {
        await $(ActionBlockLocator.acceptButton).click();
    }
}

export default new ActionBlockPage();
