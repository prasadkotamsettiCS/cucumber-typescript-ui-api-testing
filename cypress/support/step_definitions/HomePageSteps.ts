/// <reference types="cypress" />
import { When, Given, Then } from '@badeball/cypress-cucumber-preprocessor';
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

Given(/^I open the OrangeHRM home page$/, () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/');
});

When('I provide username and password', function () {
  cy.log('**--Im providing username and password--**');
  cy.get('input[name="username"]').type(Cypress.env('USERNAME'));
  cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
  cy.get('button[type="submit"]').click();
});

Then('I should be able to log into website successfully', function () {
  cy.log('**--I should be able to log into website successfully--**');
  cy.get('h6').should('have.text', 'Dashboard');
});

When('I search for recruitment word {string} in the Search box', function (searchTerm: string) {
  cy.get('input[class="oxd-input oxd-input--active"]', { timeout: 6000 }).type(searchTerm);
});

When('I click on recruitment result link', () => {
  cy.get('ul[class="oxd-main-menu"] li a span', { timeout: 6000 }).click();
});

Then('I validate that user lands on recruitment page', () => {
  cy.url().should('include', '/recruitment');
  cy.get('h6').should('have.text', 'Recruitment');
});

When('I search for employee {string}', (employeeName: string) => {
  cy.get('[class="oxd-main-menu"] li:nth-child(9)').click();
  cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').type(
    'Harmony',
  );
});

Then('I should see the employee details', function () {});

Then('I should see the error', function () {});
