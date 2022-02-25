/// <reference types="cypress" />

export function checkSecureAreaMessage(message){
    cy.get("#flash").contains(message)
}