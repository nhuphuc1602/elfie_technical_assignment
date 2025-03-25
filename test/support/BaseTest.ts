export class BaseTest {
    async setup() {
        console.log("🚀 Setup test...");
        await browser.pause(5000); // Sleep 5s nếu thật sự cần
    }

    async teardown() {
        console.log("🛑 Teardown test...");
        console.log("🗑️ Removing MacroDroid app...");
        await browser.removeApp('com.arlosoft.macrodroid');
        await browser.pause(3000);
    }
}
