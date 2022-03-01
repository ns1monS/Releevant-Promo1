/// <reference types="cypress" />

export function navigate (url) {
    cy.visit(url);
}

export function addUser(user){
    cy.get("#username").type(user);
}

export function addPasswd(password){
    cy.get("#password").type(password);
}

export function clickButton() {
    cy.get(".radius").click();
}
export function checkErrorMessage(message){
    cy.get("#flash").contains(message);
}
