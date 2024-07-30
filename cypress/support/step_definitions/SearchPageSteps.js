/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../pageObjects/SearchPage"

const searchPage = new SearchPage();

When(/^I search for the word "([^"]*)" in the Search box$/, (searchText) => {
    searchPage.clickOnSearchOption();
    searchPage.passSearchValueInSearchBox(searchText);
    searchPage.clickOnSearchBoxButton();

});

When(/^I validate the results on the results page$/, () => {
    searchPage.assertSearchResultsDisplayed();

});

When(/^I sort the results by date if not sorted by default$/, () => {
    searchPage.sortResultsByDateIfNotSortedDefault();

});

When(/^I set the Content Type to Article using the Filter by functionality$/, () => {
    searchPage.clickOnArticleFilteFunctionality();

});

Then(/^I validate that each article displays a link that starts with "([^"]*)"$/, (websiteUrlText) => {
    searchPage.validateArticleUrlLinkStartsAsExpected(websiteUrlText);

});


