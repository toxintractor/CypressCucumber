Feature: The Google

Scenario: Opening a Google network page
    Given I open Google page
    Then I enter "coupon" in the coupon text
    Then I click the submit
    Then The confirmation text should appear