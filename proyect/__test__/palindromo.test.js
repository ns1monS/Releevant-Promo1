const palindromo = require("../utils/palindromo.js");


describe("Test del palindromo", () => {
    test.each`
    firstValue      | expectedResult    
    ${"ana"} |   ${"ana"}
    ${"rosa"} |  ${"asor"}
    ${""} |  ${"error"}
    ${1} |  ${"error"}
    

  `('$firstValue  should return $expectedResult', ({firstValue, expectedResult}) => {
    expect(palindromo(firstValue)).toBe(expectedResult);
  });


//     test.each`
//     firstValue | secondValue |  thirthValue | fourValue | fifthValue |expectedResult    
//     ${-1}       | ${-2}        | ${-3}      | ${-3}     | ${-3}      | ${-3}    
//     ${1}        | ${-2}        | ${-1}      | ${-3}     | ${-3}      | ${-3}  
//     ${1}        | ${"a"}        | ${}       | ${-3}     | ${-3}      | ${-3}  
//     ${undefined}      | ${undefined}        | ${"Tus muertos"}
//   `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, thirtValue,fourValue, fifthValue, expectedResult}) => {
//     expect(palindromo(firstValue, secondValue, thirtValue ,fourValue. fifthValue)).toBe(expectedResult);
//   });


})