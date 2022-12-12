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
function logger() {
  console.log("My name is Emerson");
}
//calling / running / invoking function
logger();
logger();
logger();
function fruitProcessor(applesQuantity, orangesQuantity) {
  console.log(applesQuantity, orangesQuantity);
  const juice = `Juice with ${applesQuantity} apples and ${orangesQuantity} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
