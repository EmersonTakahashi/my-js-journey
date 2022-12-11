//////Variables and Values
/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

//////Variables (values)
let firstName = "Emerson";
console.log(firstName);
let myFirstJob = "Backend Developer";
let myCurrentJob = "Backend Developer";
let myGoal = "Fullstack Developer";

let country = "Portugal";
let continent = "Europe";
let population = "10.3 millions";
let nationality = "Brazil";

//Data types
let ageInt = 23; //number
let ageDouble = 23.3; //number

let string = "MyString"; //string

let isItRight = false; //bollean
*/

//////Data types
//number, string, boolean
//undefined
// let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);

// javascriptIsFun = "yes";

// console.log(typeof javascriptIsFun);
// console.log(javascriptIsFun);

// let year;
// console.log(typeof year);
// console.log(year);

// year = 2022;

// console.log(typeof year);
// console.log(year);

// console.log(typeof null);

/////Let, const, var
// let age = 30;
// age = 31;

// const birthYear = 2000;
//birthYear = 1999; throw error

//var should not be used anymore

//////Operators

// const now = 2022;
// const ageEmerson = now - 2000;
// const ageEmilly = now - 2000;
// console.log(ageEmerson, ageEmilly);

/////Strings and template literals
// const firstName = "Emerson";
// const job = "Backend Developer";
// const birthDate = 2000;
// const year = 2022;

// const emerson =
//   "I'm " + firstName + ", a " + (year - birthDate) + " years old " + job + "!";
// console.log(emerson);

// const emersonNew = `I'm ${firstName}, a ${year - birthDate} years old ${job}!`;
// console.log(emersonNew);

/////decisions IF and ELSE

// const age = 22;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Emilly can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Emilly is too your, wait another ${yearsLeft} year(s) :)`);
// }

// const birthDate = 2000;
// let century;
// if (birthDate <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(`Century: ${century}`);

////// CONVERSION and COERCION
//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number("Emerson"));
// console.log(typeof NaN);

// console.log(String(23));

// //type coercion
// console.log("I am " + 22 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");

/////// TRUTHY AND FALSY VALUES

//5 falsy values: 0, '', undefined, null, NaN
//everything else will be converted to true

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Emerson"));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(NaN));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

////// EQUALITY OPERATORS == AND ===
//=== strict doesn't type coercion
// const age = 18;
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

//== loose does type coercion
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What is your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite == 8) {
  //"8" == 8
  console.log("Cool! 8 is an amazing number! (loose)");
}

if (favourite === 8) {
  //"8" === 8
  console.log("Cool! 8 is an amazing number! (strict)");
} else if (favourite === 10) {
  console.log("10 is also a cool number");
} else {
  console.log("Number is not 8 or 10");
}

if (favourite !== 11) {
  console.log("Why not 11?");
}
