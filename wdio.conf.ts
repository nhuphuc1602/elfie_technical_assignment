import { Config } from 'webdriverio';

export const config: Config = {
    runner: 'local',
    specs: ['./tests/**/*.test.ts'],
    app: require('path').resolve(__dirname, './apps/Final_Exam_MacroDroid.apk'),
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 9',
        'appium:platformVersion': '15',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.arlosoft.macrodroid',
        'appium:appWaitActivity': 'com.arlosoft.macrodroid.intro.IntroActivity'

    }],
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
    mochaOpts: { timeout: 60000 },
    before: function () { require('ts-node').register(); }
};