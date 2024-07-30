/// <reference types="cypress" />
import GenericMethods from "../utils/GenericMethods";
import Locators from "../utils/Locators";

const locators = new Locators();
const genericMethods = new GenericMethods

class SearchPage {

    clickOnSearchOption() {
        genericMethods.clickOnElementMethod(locators.searchPageLocators.searchOptionLocator);

    }

    passSearchValueInSearchBox(searchText) {
        genericMethods.passTextValueMethod(locators.searchPageLocators.searchTextBoxLocator, searchText);

    }

    clickOnSearchBoxButton() {
        genericMethods.clickOnElementMethod(locators.searchPageLocators.searchBoxButtonLocator);

    }

    assertSearchResultsDisplayed() {
        cy.get(locators.searchPageLocators.searchResultsTextLocator).should('be.visible').should((results) => {
            const text = results.text();
            const regex = /Results \d+-\d+ of \d+ for IFRS 17/;
            expect(text).to.match(regex);
        });

    }

    sortResultsByDateIfNotSortedDefault() {
        cy.get(locators.searchPageLocators.sortByDateButton).should('be.visible').then((element) => {
            const ariaChecked = element.attr('aria-checked');
            if (ariaChecked === 'false') {
                element.trigger('click');
            }
        });

    }

    clickOnArticleFilteFunctionality() {
        genericMethods.clickOnElementMethod(locators.searchPageLocators.articleContentTypeLocator);

    }

    validateArticleUrlLinkStartsAsExpected(websiteUrlText) {
        const links = cy.get(locators.searchPageLocators.resultsDisplayLinkLocator).should('be.visible');
        links.each((linksText) => {
            cy.wrap(linksText.text()).should('include', websiteUrlText);
        })
    }

}

export default SearchPage