/// <reference types="cypress" />
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ContactusPage from '../pageObjects/ContactusPage';

const contactusPage = new ContactusPage();

When(/^I click on the Submit button on the Contact Us page$/, () => {
  contactusPage.clickonContactUsFormSubmitButton();
});

Then(
  /^I should see an error message for the required field "([^"]*)"$/,
  (validTextError: string) => {
    contactusPage.assertContactUsFormInvalidErrorMessage(validTextError);
  },
);

Then(/^I see an error message for the required field "([^"]*)"$/, (validTextError: number) => {
  contactusPage.assertContactUsFormInvalidErrorMessage(23);
});
