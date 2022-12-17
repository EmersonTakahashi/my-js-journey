///// Challenge 1

// const calcAverage = (scores) => {
//   let sum = 0;
//   for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
//   }
//   return sum / scores.length;
// };

// function checkWinner(koalasAverage, dolphinsAverage) {
//   if (koalasAverage >= dolphinsAverage * 2) {
//     console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`);
//   } else if (dolphinsAverage >= koalasAverage * 2) {
//     console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`);
//   } else {
//     console.log("no team wins...");
//   }
// }

// let koalasScore = [23, 34, 27];
// let dolphinsScore = [85, 54, 41];

// let koalasAverage = calcAverage(koalasScore);
// let dolphinsAverage = calcAverage(dolphinsScore);

// console.log(
//   `KoalasAverage: ${koalasAverage}`,
//   `DolphinsAverage: ${dolphinsAverage}`
// );
// checkWinner(koalasAverage, dolphinsAverage);

// koalasScore = [65, 54, 49];
// dolphinsScore = [44, 23, 71];

// koalasAverage = calcAverage(koalasScore);
// dolphinsAverage = calcAverage(dolphinsScore);

// console.log(
//   `KoalasAverage: ${koalasAverage}`,
//   `DolphinsAverage: ${dolphinsAverage}`
// );
// checkWinner(koalasAverage, dolphinsAverage);

///// Challenge 2
// function calcTip(billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// }

// // console.log(calcTip(100));
// const bills = [125, 556, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(total);
///// Challenge 3
const mark = {
  fullName: "Mark Miller",
  massInKg: 78,
  heightInM: 1.69,
  calcBMI: function () {
    this.BMI = this.massInKg / this.heightInM ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  massInKg: 92,
  heightInM: 1.95,
  calcBMI: function () {
    this.BMI = this.massInKg / this.heightInM ** 2;
    return this.BMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI}`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI}`
  );
} else {
  console.log(
    `They have the same BMI: ${mark.fullName}'s BMI (${mark.BMI}) and ${john.fullName}'s BMI (${john.BMI})`
  );
}
