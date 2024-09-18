# Orange HRM search Test Scenario

@smoke @regression @UserSearchJourney
Feature: Orange home search journeys

    Scenario: User search journey for recruitment page
        Given I open the OrangeHRM home page
        When I provide username and password
        Then I should be able to log into website successfully
        When I search for recruitment word "Recruitment" in the Search box
        When I click on recruitment result link
        Then I validate that user lands on recruitment page