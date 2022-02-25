/// <reference types="cypress" />

describe("Prueba técnica",() =>{
    it("Navegar a la web",() =>{
        cy.visit("https://the-internet.herokuapp.com/");
        cy.get(":nth-child(39) > a").click()
        cy.get(".example > :nth-child(3) > a").click();
    })
})