import { Before, After, BeforeAll, AfterAll } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';

// Trước tất cả test, đảm bảo server Appium đang chạy
BeforeAll(async () => {
    console.log("🚀 Starting mobile tests...");
});

// Trước mỗi scenario, mở app
Before(async (scenario) => {
    console.log(`🔹 Starting scenario: ${scenario.pickle.name}`);
    await browser.launchApp();  // Mở app
});

// Sau mỗi scenario, chụp màn hình nếu lỗi
After(async (scenario) => {
    console.log(`✅ Finished scenario: ${scenario.pickle.name}`);
    if (scenario.result?.status === 'failed') {
        const screenshot = await browser.takeScreenshot();
        await browser.saveScreenshot(`./screenshots/${scenario.pickle.name}.png`);
    }
    await browser.closeApp();  // Đóng app sau mỗi test
});

// Sau tất cả test, dọn dẹp
AfterAll(async () => {
    console.log("🛑 All mobile tests completed.");
});
