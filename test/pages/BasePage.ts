export default class BasePage {
    async click(selector: string): Promise<void> { await $(selector).click(); }
    async setValue(selector: string, value: string): Promise<void> { await $(selector).setValue(value); }
    async getText(selector: string): Promise<string> { return await $(selector).getText(); }
}