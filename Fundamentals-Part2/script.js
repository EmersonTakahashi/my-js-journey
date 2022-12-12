////// use strict
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriverLicense = true; //throw error on console, cause hasDriverLicense is not defined.
// }

// if (hasDriversLicense) {
//   console.log("I can drive :D");
// }

//// function
// function logger() {
//   console.log("My name is Emerson");
// }
// //calling / running / invoking function
// logger();
// logger();
// logger();
// function fruitProcessor(applesQuantity, orangesQuantity) {
//   console.log(applesQuantity, orangesQuantity);
//   const juice = `Juice with ${applesQuantity} apples and ${orangesQuantity} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

///////// Function declaration vs expressions
////Function declaration
// function calculateAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calculateAge1(2000);

// //Function expression (expression produces value)
// const calculateAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calculateAge2(2000);
// //We can call function declaration before the declaration but we can't call function expressation before define
// console.log(age1, age2);

/////// Arrow function
const calculateAge3 = (birthYear) => 2022 - birthYear;

const age3 = calculateAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "Emerson"));
