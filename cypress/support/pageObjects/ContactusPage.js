/// <reference types="cypress" />
import GenericMethods from "../utils/GenericMethods";
import Locators from "../utils/Locators";

const locators = new Locators();
const genericMethods = new GenericMethods();

class ContactusPage {

    clickonContactUsFormSubmitButton() {
        genericMethods.clickOnElementMethod(locators.contactUsPageLocators.contactUsFormSubmitButtonLocator);
    }

    assertContactUsFormInvalidErrorMessage(validTextError) {
        genericMethods.assertElementText(locators.contactUsPageLocators.contactUsFormInvalidErrorMessageLocator, validTextError);

    }

}


export default ContactusPage



