// import './test/support/hooks'; 

// export const config: WebdriverIO.Config = {
//     runner: 'local',
//     framework: 'cucumber',
//     specs: ['./features/**/*.feature'],
//     cucumberOpts: {
//         require: ['./test/support/hooks.ts', './test/steps/*.ts'],
//         timeout: 60000
//     },
//     capabilities: [{
//         platformName: 'Android',
//         'appium:deviceName': 'Pixel 9',
//         'appium:platformVersion': '15.0',
//         'appium:automationName': 'UiAutomator2',
//         'appium:app': './apps/Final_Exam_MacroDroid.apk',
//         'appium:noReset': true
//     }],
//     services: ['appium'],
//     port: 4723
// };


export const config: WebdriverIO.Config = {
    runner: 'local',
    framework: 'mocha',
    specs: ['./test/specs/*.spec.ts'],
    mochaOpts: {
        timeout: 60000
    },
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 9',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './test/apps/Final_Exam_MacroDroid.apk',
        'appium:noReset': true,
        'appium:appPackage': 'com.arlosoft.macrodroid',
        'appium:appWaitActivity': 'com.arlosoft.macrodroid.intro.IntroActivity'
    }],
    services: ['appium'],
    port: 4723,
    reporters: [
        'spec',
        ['allure', {
            outputDir: './test/reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
    
};

