# Add this additional test make the report presentable in this TASK
@ignore @regression @contactUS
Feature: WTW Contact us form submission

  Scenario: Contact Us Form Submission with Missing fields
    Given I open the WTW home page
    When I click on the Contact Us button
    When I click on the Submit button on the Contact Us page
    Then I should see an error message for the required field "enter first name"
