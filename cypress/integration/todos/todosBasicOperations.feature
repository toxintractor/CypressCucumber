Feature: todos: Basic operations
    I can add, toggle and remove todos

Scenario: I should be able to add todos
    Given I navigate to the todos page
    Then I type "item1" in the todo input and press enter
    Then I type "item2" in the todo input and press enter
    Then I type "item3" in the todo input and press enter
    Then I expect to have 3 todo items

Scenario: I should be able to toggle todos
    When I toggle the 1 th todo item
    When I toggle the 2 th todo item
    Then I expect the 1 th todo item to be checked
    Then I expect the 2 th todo item to be checked
    Then I expect the 3 th todo item to not be checked
    

Scenario: I should be able to remove todos
    When I click the remove button of the 1 th todo item
    Then I expect to have 2 todo items
    Then I expect the todo item with "item3" to not exist