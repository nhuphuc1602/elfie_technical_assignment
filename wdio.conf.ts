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
