# Add this additional test make the report presentable in this TASK
@ignore @regression @contactUS
Feature:  Orange employee search journey
  @ignore
  # Scenario: Search for employee information
  #   Given I open the OrangeHRM home page
  #   When I provide username and password
  #   Then I should be able to log into website successfully
  #   When I search for employee "name"
  #   Then I should see the employee details

  Scenario: Search for employee information
    Given I open the OrangeHRM home page
    When I provide username and password
    Then I should be able to log into website successfully
    When I search for employee "name"
    Then I should see the error