/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('e2e tests', () => {
  context('handling with form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
    it('show error when format is wrong', () => {
      cy.get('[data-testid="input"]').type('0');
      cy.contains(
        'Por favor digite um código com o formato NNNNNNN-NN.NNNN.N.NN.NNNN'
      );
    });

    it('show error when all inputs are empty', () => {
      cy.get('[type="submit"]').click();
      cy.contains('Preencha pelo menos um dos campos');
    });

    it('disable cnj input when select is being used', () => {
      cy.get('[data-testid="select"]').select('TJSC');
      cy.get('[data-testid="input"]').should('be.disabled');
    });

    it('disable tr select when cnj input is being used', () => {
      cy.get('[data-testid="input"]').type('50095347-23.2022.2.12.0912');
      cy.get('[data-testid="select"]').should('be.disabled');
    });
  });
});
