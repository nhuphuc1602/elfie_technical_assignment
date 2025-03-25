import { $ } from '@wdio/globals'
import { LandingLocators } from '../locators/LandingLocators'

class LandingPage {
    async skipLandingPage() {
        await $(LandingLocators.skipButton).waitForDisplayed();
        await $(LandingLocators.skipButton).click();
        await $(LandingLocators.skipBuyButton).waitForDisplayed();
        await $(LandingLocators.skipBuyButton).click();
    }
}

export default new LandingPage();
