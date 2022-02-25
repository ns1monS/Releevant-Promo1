/// <reference types="cypress" />

import{navigate,
        addPasswd,
        addUser,
        clickButton,
        checkErrorMessage
} from "../page-objets/login"

import{checkSecureAreaMessage} from "../page-objets/secure_area"

// describe("pruebas login", () =>{
//     beforeEach(()=>{
//         cy.visit("https://the-internet.herokuapp.com/login");
//     });

//     it("Prueba de login correcta",() =>{
//         cy.get("#username").type("tomsith");
//         cy.get("#password").type("SuperSecretPassword!");
//         cy.get(".radius").click();
//         cy.get("#flash").contains("You llogfged into a secure area!")
//     });

//     it("Prueba de login incorrecta: Usuario",() =>{
//         cy.get("#username").type("tomsith");
//         cy.get("#password").type("SuperSecretPassword!");
//         cy.get(".radius").click();
//         cy.get("#flash").contains("Your username is invalid!")
//     });
//     it("Prueba de login correcta: contraseña",() =>{
//         cy.get("#username").type("tomsith");
//         cy.get("#password").type("SuperSecretPassword!");
//         cy.get(".radius").click();
//         cy.get("#flash").contains("Your password is invalid!")
//     });
// });


describe("pruebas login", () =>{
    beforeEach(()=>{
        navigate("https://the-internet.herokuapp.com/login");
    });

    it("Prueba de login correcta",() =>{
       addUser("tomsith");
        addPasswd("SuperSecretPassword!");
        clickButton();
        checkSecureAreaMessage("You llogfged into a secure area!")
    });

    it("Prueba de login incorrecta: Usuario",() =>{
        addUser("tomsith");
        addPasswd("SuperSecretPassword!");
        clickButton();
        checkErrorMessage("Your username is invalid!")
    });
    it("Prueba de login correcta: contraseña",() =>{
        addUser("tomsith");
        addPasswd("SuperSecretPassword!");
        clickButton();
        checkErrorMessage("Your password is invalid!")
    });
});