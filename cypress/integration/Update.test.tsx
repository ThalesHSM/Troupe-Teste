import React from 'react';
import 'cypress-react-selector';
import { mount } from '@cypress/react';

before(() => {
  cy.visit('localhost:8080');

  cy.waitForReact();
});

it('should enter data into the fields and Login', () => {
  cy.react('Field', { props: { name: 'email' } }).type('teste@emaill.com.br');
  cy.react('Field', { props: { name: 'password' } }).type('123456');
  cy.get('button').click();
});

it('should update and delete the created client', () => {
  cy.wait(6000).get('.form-control').type('Ronaldo Fernando Abreu');

  cy.get('table')
    .contains('td', 'Ronaldo Fernando Abreu')
    .parent()
    .within(($tr) => {
      cy.get('#edit_btn').click();
    });

  cy.wait(1000).get('#name_field').focus().clear().type('Ronaldo Gonçalves');
  cy.contains('button', 'Atualizar Cliente').click();

  cy.wait(6000);
  cy.get('.form-control').type('Ronaldo Gonçalves');
  cy.get('table')
    .contains('td', 'Ronaldo Gonçalves')
    .parent()
    .within(($tr) => {
      cy.get('#delete_btn').click();
    });
});

it('should logout', () => {
  cy.wait(4000).contains('button', 'LOGOUT').click();
});
