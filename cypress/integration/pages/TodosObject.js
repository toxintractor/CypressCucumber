

export const Todos = {
    baseUrl: 'http://todomvc-app-for-testing.surge.sh/',
    addTodo: () => cy.get('.new-todo'),
    items: {
        item: () => cy.get('.todo-list .view'),
        itemToggle: (position) => cy.get(':nth-child(' + position + ') > .view > .toggle'),
        itemRemove: (position) => cy.get(':nth-child(' + position + ') > .view > .destroy')
    }, 
    filter: {
        filterCounter: () => cy.get('.todo-count'),
        filterAll: () => cy.get('.filters').contains('All'),
        filterActive: () => cy.get('.filters').contains('Active'),
        filterCompleted: () => cy.get('.filters').contains('Completed'),
        filterClearCompleted: () => cy.get('.clear-completed'),
        
    }
}