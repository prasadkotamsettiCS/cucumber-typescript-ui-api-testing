# Orange home test Scenario
@userJourney
Feature: Orange home successful login journey

  Scenario: User login journey
    Given I open the OrangeHRM home page
    When I provide username and password
    Then I should be able to log into website successfully


