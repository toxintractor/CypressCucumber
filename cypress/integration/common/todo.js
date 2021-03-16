const { Todos } = require("../pages/todosObject");

When(`I navigate to the todos page`, () => {
  cy.visit(Todos.baseUrl);
});

When(`I type {string} in the todo input and press enter`, (value) => {
  Todos.addTodo().click().type(value + '{enter}');
});

When(`I expect to have {int} todo items`, (value) => {
    Todos.items.item().should('have.length', value);
});

When(`I toggle the {int} th todo item`, (position) => {
  Todos.items.itemToggle(position).click();
});

When(`I expect the {int} th todo item to be checked`, (position) => {
  cy.get('.todo-list li:nth-child('+ position + ')').should('have.class', 'completed')
});

When(`I expect the {int} th todo item to not be checked`, (position) => {
  cy.get('.todo-list li:nth-child('+ position + ')').should('not.have.class', 'completed')
});

When(`I click the remove button of the {int} th todo item`, (position) => {
  Todos.items.itemRemove(position).click({ force: true });
});

When(`I expect the todo item with {string} to not exist`, (value) => {
  Todos.items.item().contains(value).should('not.exist');
});

When(`I expect to see {string} in the filter section`, (value) => {
  Todos.filter.filterCounter().should('contain', value);
});

When(`I click the Active filter button`, () => {
  Todos.filter.filterActive().click();
});

When(`I click the All filter button`, () => {
  Todos.filter.filterAll().click();
});

When(`I click the All filter button`, () => {
  Todos.filter.filterAll().click();
});

When(`I click the Completed filter button`, () => {
  Todos.filter.filterCompleted().click();
});

When(`I click clear completed button`, () => {
  Todos.filter.filterClearCompleted().click();
});

