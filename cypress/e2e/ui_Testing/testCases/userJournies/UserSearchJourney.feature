# WTW Technical Test Scenario

# Open the following URL: https://www.wtwco.com/ICT
# Change the language and region from top left corner to United States English, see example snippet. screenshot
# Search for the word “IFRS 17” using the search box
# Validate if you have arrived on the result page
# Check if the result is sorted by “Date”. If not, sort by “Date”
# Use the “Filter by” functionality and set Content Type to “Article”
# Validate (case insensitvely) that each article in the list displays a link that starts with “https://www.wtwco.com/en-us/”

@smoke @regression @UserSearchJourney
Feature: WTW search journeys

  Scenario: US user search journey
    Given I open the WTW home page
    When I change the language and region to United States English
    When I search for the word "IFRS 17" in the Search box
    When I validate the results on the results page
    When I sort the results by date if not sorted by default
    When I set the Content Type to Article using the Filter by functionality
    Then I validate that each article displays a link that starts with "https://www.wtwco.com/en-us"







