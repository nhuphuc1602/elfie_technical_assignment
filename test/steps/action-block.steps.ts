import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals';
import ActionBlockPage from '../pages/action-block.page';
import {ActionBlockLocator} from '../locators/action-block.locators';

Given('the user opens the Action Block Page', async () => {
    await ActionBlockPage.open();
});

When('the user adds a new action block', async () => {
    await ActionBlockPage.add();
});

When('the user inputs the name {string}', async (name: string) => {
    await ActionBlockPage.inputName(name);
});

When('the user inputs the description {string}', async (description: string) => {
    await ActionBlockPage.inputDescription(description);
});

When('the user adds an input variable {string}', async (variableName: string) => {
    await ActionBlockPage.addInputVariable(variableName);
});

When('the user edits the input variable', async () => {
    await ActionBlockPage.editInputVariable();
});

Then('the input variable name should be {string}', async (expectedName: string) => {
    await expect($(ActionBlockLocator.inputVarwithName)).toHaveText(expectedName);
});

Then('the input variable value should be {string}', async (expectedValue: string) => {
    await expect($(ActionBlockLocator.inputVarwithValue)).toHaveText(expectedValue);
});

When('the user adds actions', async () => {
    await ActionBlockPage.addActions();
});

Then('the action name should be {string}', async (expectedName: string) => {
    await expect($(ActionBlockLocator.actionwithName)).toHaveText(expectedName);
});

Then('the action value should be {string}', async (expectedValue: string) => {
    await expect($(ActionBlockLocator.actionwithValue)).toHaveText(expectedValue);
});

When('the user adds an output variable {string}', async (variableName: string) => {
    await ActionBlockPage.addOutputVariable(variableName);
});

When('the user edits the output variable with {string}', async (newValue: string) => {
    await ActionBlockPage.editOutputVariable(newValue);
});

Then('the output variable name should be {string}', async (expectedName: string) => {
    await expect($(ActionBlockLocator.outputVarwithName)).toHaveText(expectedName);
});

Then('the output variable value should be {string}', async (expectedValue: string) => {
    await expect($(ActionBlockLocator.outputVarwithValue)).toHaveText(expectedValue);
});

When('the user confirms the addition', async () => {
    await ActionBlockPage.acceptAdd();
});

Then('the action block name should be {string}', async (expectedName: string) => {
    await expect($(ActionBlockLocator.actionBlockName)).toHaveText(expectedName);
});

Then('the action block description should be {string}', async (expectedDescription: string) => {
    await expect($(ActionBlockLocator.actionBlockDescription)).toHaveText(expectedDescription);
});
