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

it('should create client', () => {
  cy.wait(8000).get('#name_field').type('Ronaldo Fernando Abreu');
  cy.react('Field', { props: { name: 'email' } }).type('teste@emaill.com.br');
  cy.react('Field', { props: { name: 'cpf' } }).type('12312312312');
  cy.react('Field', { props: { name: 'cep' } })
    .type('04724010')
    .blur()
    .wait(1500);

  cy.react('Field', { props: { name: 'numero' } })
    .type('123')
    .wait(1500);
  cy.contains('button', 'Criar novo Cliente').click();
});
