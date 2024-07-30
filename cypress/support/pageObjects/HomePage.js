/// <reference types="cypress" />
import GenericMethods from "../utils/GenericMethods";
import Locators from "../utils/Locators";

const locators = new Locators();
const genericMethods = new GenericMethods();

class HomePage {

    assertTexts = {
        homePageLocationSelectorText: 'US | EN',
        homePageUS_EN_Url: 'https://www.wtwco.com/en-us',
        redirectionalUrlText: '/en-us/solutions',
        countrySelectorLandingAssertText: 'Choose your location'

    }

    assertWtwUsHomePage() {
        cy.location('pathname').should('include', this.assertTexts.redirectionalUrlText);
        genericMethods.assertElementText(locators.homepageLocators.countrySelectorMenuLocator, this.assertTexts.homePageLocationSelectorText);

    }

    clickOnLocationMenuSelector() {
        genericMethods.clickOnElementMethod(locators.homepageLocators.countryLanguageMenuDropdownLocator);
        genericMethods.clickOnElementContainsTextMethod(locators.homepageLocators.selectorCountryPageAssertLocator, this.assertTexts.countrySelectorLandingAssertText);

    }

    clickOnAmericasRegion() {
        genericMethods.clickOnElementMethod(locators.homepageLocators.americaRegionLocator);

    }

    clickOnUsEnglishLanguageSelector() {
        cy.get(locators.homepageLocators.selectUsEnglishLocator, { timeout: 2000 }).click();
        cy.url().should('include', this.assertTexts.homePageUS_EN_Url);

    }

    clickOnContactUsButton() {
        genericMethods.clickOnElementMethod(locators.homepageLocators.contactUsButtonLocator);

    }

}

export default HomePage