Feature: todos: Filter operations
    I can use filter operations to filter my todos
    The filters are All, Active and Completed

Scenario: I navigate to the todos page
    Given I navigate to the todos page

Scenario Outline: I add todos
    Then I type <value> in the todo input and press enter
    Examples:
    | value |
    | 'item1' |
    | 'item2' |
    | 'item3' |

Scenario: I should be able to see the total items left in the filter section
    Given I expect to see "3 items left" in the filter section
    When I toggle the 2 th todo item
    Given I expect to see "2 items left" in the filter section
    Then I type "item4" in the todo input and press enter
    Given I expect to see "3 items left" in the filter section

Scenario: I should be able to filter on active todos in the filter section
    Given I click the Active filter button
    Then I expect to have 3 todo items
    Then I click the All filter button
    Then I toggle the 1 th todo item
    When I click the Active filter button
    Then I expect to have 2 todo items

Scenario: I should be able to filter on completed todos in the filter section
    Given I click the Completed filter button
    Then I expect to have 2 todo items
    Then I click the All filter button
    Then I toggle the 2 th todo item
    When I click the Completed filter button
    Then I expect to have 3 todo items

# WRONG!!
Scenario: I should be able to clear all completed todos in the filter section
    Given I click clear completed button
    Then I click the All filter button
    Then I expect to have 1 todo items