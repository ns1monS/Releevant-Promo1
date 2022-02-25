const isUpperCase = require("../utils/esMayuscula.js");


describe("Test de si es mayuscula",() =>{
    test.each`
    firstValue      | expectedResult    
    ${"MACARRONES"} |   ${true}
    ${"Macarrones"} |  ${false}   
  `('$firstValue  should return $expectedResult', ({firstValue, expectedResult}) => {
    expect(isUpperCase(firstValue)).toBe(expectedResult);
  });
})
