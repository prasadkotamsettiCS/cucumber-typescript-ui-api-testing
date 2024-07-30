/* The Locators class provides a centralized location for storing and organizing the locators used in the framework
 locators are represented as CSS selectors and are categorized based on their purpose or location within the page.
*/

class Locators {


    homepageLocators = {
        countrySelectorMenuLocator: "#country-selector button[data-menu='country-selector--is-visible']",
        countryLanguageMenuDropdownLocator: "button [data-eventaction='Country Site Menu Opened']",
        selectorCountryPageAssertLocator: "h2",
        americaRegionLocator: "button[data-target='#region0']",
        selectUsEnglishLocator: "#region0 a[href='/en-us']",
        contactUsButtonLocator: "a[data-eventaction='Clicked on Contact Us Button']"
    }

    searchPageLocators = {
        searchOptionLocator: "button[data-menu='search-menu-is-visible']",
        searchTextBoxLocator: "input[type='text'][aria-label='Search box']",
        searchBoxButtonLocator: "a[role='button'][aria-label='Search']",
        searchResultsTextLocator: "span.CoveoQuerySummary",
        sortByDateButton: "[data-caption='Date'] > span:nth-child(1)",
        articleContentTypeLocator: "span[data-original-value='Article']",
        resultsDisplayLinkLocator: "[data-field='@clickUri'] span"
    }

    contactUsPageLocators = {

        contactUsFormSubmitButtonLocator: "button[type='submit']",
        contactUsFormInvalidErrorMessageLocator: "#ValidMsgFirstName"

    }

    helperClassLocators = {
        acceptAllCookiesLocator: "button#onetrust-accept-btn-handler"
    }


}

export default Locators