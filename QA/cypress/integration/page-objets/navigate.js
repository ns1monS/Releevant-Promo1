/// <reference types="cypress" />


export function navigate(){
    it("Navegar hasta el Menu Element",()=>{
        cy.get(":nth-child(39) > a").click()
        cy.get('[href="/shifting_content/menu"]').click();
    })
}