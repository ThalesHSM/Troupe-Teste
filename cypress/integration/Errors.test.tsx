import React from 'react';
import 'cypress-react-selector';

before(() => {
  cy.visit('localhost:8080');

  cy.waitForReact();
});

it('should not login and close the popup', () => {
  cy.react('Field', { props: { name: 'email' } }).type('fake@email.com.br');
  cy.react('Field', { props: { name: 'password' } }).type('123456');
  cy.get('button').click();

  cy.get('.Toastify__toast-body').click();
});

it('should not go to clients list if not logged ', () => {
  cy.visit('localhost:8080/Clients');
});
