// export class BaseTest {
//     async test_setup() {
//         console.log("Opening app...");
//         browser.activateApp('com.arlosoft.macrodroid');
//         await browser.pause(3000);
//     }

//     async test_teardown() {
//         console.log("Teardown test...");
//         console.log("Terminate MacroDroid app...");
//         await browser.terminateApp('com.arlosoft.macrodroid');
//         await browser.pause(3000);
//     }

//     async teardown() {
//         console.log("Teardown...");
//         console.log("Removing MacroDroid app...");
//         await browser.removeApp('com.arlosoft.macrodroid');
//         await browser.pause(3000);
//     }

// }

export class BaseTest {
    private appPackage = 'com.arlosoft.macrodroid';
    private appPath = './test/apps/Final_Exam_MacroDroid.apk';

    async test_setup() {
        try {
            const isInstalled = await browser.isAppInstalled(this.appPackage);
            if (!isInstalled) {
                console.log("App is not installed. Installing...");
                await browser.installApp(this.appPath);
                await browser.pause(3000);
                await browser.activateApp(this.appPackage);
            } else {
                console.log("App is already installed. Skipping installation.");
            }
        } catch (error) {
            console.warn("⚠️ Failed to check/install app:", error);
        }
    }

    async test_teardown() {
        console.log("Teardown test...");
        console.log("Terminating MacroDroid app...");
        try {
            await browser.terminateApp(this.appPackage);
            await browser.pause(3000);
        } catch (error) {
            console.warn("⚠️ Failed to terminate app:", error);
        }
    }

    async teardown() {
        console.log("Teardown...");
        console.log("Removing MacroDroid app...");
        try {
            const isInstalled = await browser.isAppInstalled(this.appPackage);
            if (isInstalled) {
                await browser.removeApp(this.appPackage);
                await browser.pause(3000);
            } else {
                console.warn("App is not installed, skipping removal.");
            }
        } catch (error) {
            console.warn("Failed to remove app:", error);
        }
    }
}
