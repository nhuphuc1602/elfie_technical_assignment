import BasePage from './BasePage';
import { macroLocators } from '../locators/macroLocators';


class MacroPage extends BasePage {
    async addMacro(): Promise<void> {
        await this.click(macroLocators.macroButton);
        await this.click(macroLocators.triggerButton);
        await this.click(macroLocators.applicationOption);
        await this.click(macroLocators.appInstallRemoveUpdate);
        await this.click(macroLocators.applicationRemoved);
        await this.click(macroLocators.anyApplication);
        await this.click(macroLocators.okButton);
        await this.click(macroLocators.actionButton);
        await this.click(macroLocators.loggingOption);
        await this.click(macroLocators.clearLog);
        await this.click(macroLocators.systemLog);
        await this.click(macroLocators.okButton);
    }
}
export default new MacroPage();
