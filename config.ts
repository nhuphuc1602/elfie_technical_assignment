// config.ts
export const appiumConfig = {
    framework: 'mocha',
    appPath: './test/apps/Final_Exam_MacroDroid.apk',
    deviceName: 'pixel_emulator',
    platformVersion: '15.0',
    appPackage: 'com.arlosoft.macrodroid',
    appWaitActivity: 'com.arlosoft.macrodroid.intro.IntroActivity',
    appiumPort: 4723,
    allureReportDir: './test/reports/allure-results'
};
