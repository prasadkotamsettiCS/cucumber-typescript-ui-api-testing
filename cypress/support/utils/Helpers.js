/// <reference types="cypress" />
/* The Helpers class provides utility methods for various unique tasks in the framework. 
It can be imported to other classes to enhance the functionality and efficiency of the framework
*/

import Locators from "../utils/Locators";

const locators = new Locators();
const acceptAllCookiesText = 'Accept All Cookies'

class Helpers {

    handleCookiesPromptOnHomePage() {
        cy.get(locators.helperClassLocators.acceptAllCookiesLocator).should('be.visible').contains(acceptAllCookiesText).click();

    }
    navigate(path) {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseUrl + path)
        })
    }
}

export default Helpers