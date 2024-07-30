/// <reference types="cypress" />
import { When, Given } from '@badeball/cypress-cucumber-preprocessor';
import Helpers from '../utils/Helpers';
import HomePage from '../pageObjects/HomePage';

const helpers = new Helpers();
const homePage = new HomePage();

const urlPath = '/ICT';

Given(/^I open the WTW home page$/, () => {
  helpers.navigate(urlPath);
  helpers.handleCookiesPromptOnHomePage();
  homePage.assertWtwUsHomePage();
});

When(/^I change the language and region to United States English$/, () => {
  homePage.clickOnLocationMenuSelector();
  homePage.clickOnAmericasRegion();
  homePage.clickOnUsEnglishLanguageSelector();
});

When(/^I click on the Contact Us button$/, () => {
  homePage.clickOnContactUsButton();
});
