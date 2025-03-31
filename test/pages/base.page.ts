import AllureReporter from '@wdio/allure-reporter';

export default class BasePage {
    private errors: string[] = [];
    async click(selector: string): Promise<void> { await $(selector).click(); }
    async setValue(selector: string, value: string): Promise<void> { await $(selector).setValue(value); }
    async getText(selector: string): Promise<string> { return await $(selector).getText(); }
    async softAssert(fn: () => Promise<void>): Promise<void> {
        try {
            await fn();
        } catch (err) {
            if (err instanceof Error) {
                this.errors.push(err.message);
            } else {
                this.errors.push(String(err));
            }
            const screenshot = await browser.takeScreenshot();
            AllureReporter.addAttachment(
                'Screenshot on Failure',
                Buffer.from(screenshot, 'base64'),
                'image/png'
            );
        }
    }

    checkSoftAssertions(): void {
        if (this.errors.length > 0) {
            throw new Error(this.errors.join("\n"));
        }
    }
}