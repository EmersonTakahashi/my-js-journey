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
// const calculateAge3 = (birthYear) => 2022 - birthYear;

// const age3 = calculateAge3(2000);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2000, "Emerson"));
////////Array

// const countries = ["Brazil", "Japan", "Portugal", "Denmark"];
// const years = new Array(2000, 2001, 2002);
// console.log(countries.length);
// console.log(countries[countries.length - 1]);

// countries[2] = "Ireland";
// console.log(countries);

// const firstName = "Emerson";
// const emerson = [
//   firstName,
//   "Takahashi",
//   2022 - 2000,
//   "Backend Developer",
//   countries,
// ];
// console.log(emerson);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const yearsToCalculate = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(yearsToCalculate[0]);
// const age2 = calcAge(yearsToCalculate[1]);
// const age3 = calcAge(yearsToCalculate[2]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(yearsToCalculate[0]),
//   calcAge(yearsToCalculate[1]),
//   calcAge(yearsToCalculate[2]),
// ];
// console.log(ages);

/////Basic Array Operations(Methods)
//push to add in the end in the array
// const countries = ["Brazil", "Japan", "Portugal", "Denmark"];
// const countriesLength = countries.push("Japan");
// console.log(countries);
// console.log(countriesLength);
// //unshift to add in the beggining in the arraty
// countries.unshift("Japan");
// console.log(countries);
// //pop remove the last element in the array
// const removedCountry = countries.pop();
// console.log(countries);
// console.log(removedCountry);
// //shift remove the first element in the array
// countries.shift();
// console.log(countries);
// //indexOf
// console.log(countries.indexOf("Brazil"));
// console.log(countries.indexOf("Italy")); //if doesn't exist, then return -1
// //includes
// console.log(countries.includes("Brazil"));
// console.log(countries.includes("Italy"));

// if (countries.includes("Brazil")) {
//   console.log("I love Brazil");
// }

////// INTRODUCTION TO OBJECTS
// const emerson = {
//   firstName: "Emerson",
//   lastName: "Takahashi",
//   age: 2022 - 2000,
//   job: "Backend developer",
//   techSkills: ["C#", ".net", "SQL"],
// };

// console.log(emerson);
// console.log(emerson.lastName);
// console.log(emerson["lastName"]);

// const nameKey = "Name";
// console.log(emerson["first" + nameKey]);
// console.log(emerson["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Emerson? Choose between firstName, lastName, age, job, and techSkills"
// );

// console.log(`Interested in "${interestedIn}"`);

// if (emerson[interestedIn]) {
//   console.log(emerson[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and techSkills"
//   );
// }

// emerson.location = "Brazil";
// emerson["favoriteGames"] = ["CSGO", "Let's cook together"];
// console.log(emerson);
// //Challenge
// console.log(
//   `${emerson.firstName} has ${emerson.favoriteGames.length} favorite games, and his favorite game is called ${emerson.favoriteGames[0]}`
// );
///////Object methods
// const emerson = {
//   firstName: "Emerson",
//   lastName: "Takahashi",
//   birthYear: 2000,
//   job: "Backend developer",
//   techSkills: ["C#", ".net", "SQL"],
//   hasDriverLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2022 - birthYear;
//   // },
//   // calcAge: function () {
//   //   return 2022 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     console.log(
//       `${this.firstName} is a ${this.calcAge()} years old, ${
//         this.job
//       }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`
//     );
//   },
// };
// console.log(emerson);
// console.log(emerson.calcAge());
// console.log(emerson.age);
// console.log(emerson.age);
// console.log(emerson.age);

// //Challenge
// console.log(emerson.getSummary());

////// INTERATION LOOP: FOR
// for (let i = 0; i < 10; i++) {
//   console.log(`counter: ${i + 1}`);
// }

// const emerson = [
//   "Emerson",
//   "Takahashi",
//   2022 - 2000,
//   "Backend Developer",
//   ["Brazil", "Japão", "Portugal", "Denmark"],
// ];
// const types = [];
// for (let i = 0; i < emerson.length; i++) {
//   //reading from emerson array
//   console.log(emerson[i], typeof emerson[i]);
//   //filling types array
//   // types[i] = typeof emerson[i];
//   types.push(typeof emerson[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < emerson.length; i++) {
//   if (typeof emerson[i] !== "string") {
//     continue;
//   }
//   console.log(emerson[i], typeof emerson[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < emerson.length; i++) {
//   if (typeof emerson[i] === "number") {
//     break;
//   }
//   console.log(emerson[i], typeof emerson[i]);
// }
///// DECREASING LOOP FOR
// const emerson = [
//   "Emerson",
//   "Takahashi",
//   2022 - 2000,
//   "Backend Developer",
//   ["Brazil", "Japão", "Portugal", "Denmark"],
// ];

// for (let i = emerson.length - 1; i >= 0; i--) {
//   console.log(i, emerson[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🚕`);
//   }
// }

//////WHILE LOOP
let rep = 1;
while (rep < 11) {
  console.log(`Lifting weight repetition ${rep} 🚕`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end... You rolled a ${dice}`);
  }
}
