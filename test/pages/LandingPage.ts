import { $ } from '@wdio/globals'
import { LandingLocators } from '../locators/LandingLocators'

class LandingPage {
    async skipLandingPage() {
        await $(LandingLocators.skipButton).waitForDisplayed();
        await $(LandingLocators.skipButton).click();
        await $(LandingLocators.skipBuyButton).waitForDisplayed();
        await $(LandingLocators.skipBuyButton).click();
    }

    async skipBuyingPage() {
        await $(LandingLocators.skipBuyButton).waitForDisplayed();
        await $(LandingLocators.skipBuyButton).click();
    }

    async skipAD() {
        await $(LandingLocators.adTitle).waitForDisplayed();
        try {  
            await $(LandingLocators.skipAdButton).waitForDisplayed(); 
            await browser.pause(5000);
            await $(LandingLocators.skipAdButton).click();
        } catch {}
        try {  
            await $(LandingLocators.skipAd2Button).waitForDisplayed(); 
            await browser.pause(5000);
            await $(LandingLocators.skipAd2Button).click();
        } catch {}

    }

    async skipUpgrade() {
        await $(LandingLocators.upgradeNowButton).waitForDisplayed();
        await $(LandingLocators.closeButton).waitForDisplayed();
        await browser.pause(5000);
        await $(LandingLocators.closeButton).click();
    }
}

export default new LandingPage();
