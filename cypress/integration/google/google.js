Given(`I open Google page`, () => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

Then(`I enter {string} in the coupon text`, (input) => {
    cy.get('#couponCode1').type(input);
});

Then(`I click the submit`, () => {
    cy.get('button').contains('Submit').click();
});

Then(`The confirmation text should appear`, () => {
    cy.get('[style="color: rgb(32, 181, 32);"]').contains('Your form has been submitted!').should('exist');
});