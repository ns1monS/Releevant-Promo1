/// <reference types="cypress" />


export function mainpage(){
    it("Navegar a la web",() =>{
        cy.visit("https://the-internet.herokuapp.com/");
       
    })
}

