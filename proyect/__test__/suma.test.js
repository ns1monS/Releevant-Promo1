const suma = require("../utils/suma.js");


describe("Test de suma", () => {
   
    test.each`
    firstValue | secondValue | expectedResult    
    ${-1}       | ${-2}        | ${-3}
    ${1}        | ${-2}        | ${-1}
    ${1}        | ${"a"}        | ${"Tus muertos"}
    ${undefined}      | ${undefined}        | ${"Tus muertos"}
  `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
    expect(suma(firstValue, secondValue)).toBe(expectedResult);
  });
// test("Sumar dos números negativos",() =>{
//     expect(suma(-1,-2)).toBe(-3);
// });

// test("Sumar dos numeros uno positivo y otro negativo",() =>{
//     expect(suma(1,-2)).toBe(-1);
// });

// test("Sumar dos numeros con un valor string",() =>{
//     expect(suma(1,"a")).toBe("Tus muertos");
// });

// test("Sumar dos numeros con un valor menos",() =>{
//     expect(suma(undefined,undefined)).toBe("Tus muertos");
// });

})