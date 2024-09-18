# Add this additional test make the report presentable in this TASK
@ignore @regression @contactUS
Feature: Orange HRM search box

  Scenario: Contact Us Form Submission with Missing fields
    Given I open the OrangeHRM home page
    When I provide username and password
    Then I should be able to log into website successfully
