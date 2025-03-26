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
import { appiumConfig } from './config';
const FRAMEWORK = appiumConfig.framework;
const isCucumber = FRAMEWORK === ('cucumber' as typeof FRAMEWORK);

console.log(`TEST_FRAMEWORK = ${FRAMEWORK}`);

export const config: WebdriverIO.Config = {
    runner: 'local',
    framework: isCucumber ? 'cucumber' : 'mocha',
    specs: isCucumber ? ['./test/features/*.feature'] : ['./test/specs/*.spec.ts'],
    
    ...(isCucumber ? {
        cucumberOpts: {
            require: ['./test/support/hooks.ts', './test/steps/*.ts'],
            timeout: 60000
        }
    } : {
        mochaOpts: {
            timeout: 60000
        }
    }),
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': appiumConfig.deviceName,
        'appium:platformVersion': appiumConfig.platformVersion,
        'appium:automationName': 'UiAutomator2',
        'appium:app': appiumConfig.appPath,
        'appium:appPackage': appiumConfig.appPackage,
        'appium:appWaitActivity': appiumConfig.appWaitActivity,
        'appium:noReset': true,
        "appium:autoGrantPermissions": true,
    }],
    services: ['appium'],
    port: 4723,
    reporters: [
        'spec',
        ['allure', {
            outputDir: appiumConfig.allureReportDir,
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
};
