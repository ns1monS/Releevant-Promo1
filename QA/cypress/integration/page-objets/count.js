/// <reference types="cypress" />



export function count(){
    it("Contar el numero de elementos de la tabla",() =>{
    //    const cuantos = cy.get('li');
    //    cy.log(cuantos)

          let cuantos = cy.get('ul').find('li').should('be.visible');
        
            cy.log("La tabla contiene:",cuantos,"Elementos")
    })
}
