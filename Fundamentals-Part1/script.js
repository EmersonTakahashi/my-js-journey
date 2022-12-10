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

const age = 22;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Emilly can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Emilly is too your, wait another ${yearsLeft} year(s) :)`);
}

const birthDate = 2000;
let century;
if (birthDate <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`Century: ${century}`);
