////// Chalenge 1 and 2
//BMI = mass / height ** 2
// const marksWeights = 78;
// const marksHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;

// const marksBMI = marksWeights / marksHeight ** 2;
// const johnBMI = johnWeights / johnHeight ** 2;
// const markHigherBMI = marksBMI > johnBMI;

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})`);
// }

// const marksWeights2 = 95;
// const marksHeight2 = 1.88;
// const johnWeights2 = 85;
// const johnHeight2 = 1.76;

// const marksBMI2 = marksWeights / marksHeight ** 2;
// const johnBMI2 = johnWeights2 / johnHeight2 ** 2;

// const markHigherBMI2 = marksBMI2 > johnBMI2;
// const test = johnBMI.toFixed(2);
// console.log(test);
// if (markHigherBMI2) {
//   console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${marksBMI2})`);
// }

////Challenge 3

const dolphinsScore = [80, 112, 150];
const KoalasScore = [80, 112, 150];

const dolphinsAverage = getAverage(dolphinsScore);
const KoalasAverage = getAverage(KoalasScore);
const minimumScoreNeeded = 100;
console.log(dolphinsAverage, KoalasAverage);

if (dolphinsAverage >= minimumScoreNeeded && dolphinsAverage > KoalasAverage) {
  console.log(`Team Dolphins is the winner! average: ${dolphinsAverage}`);
} else if (
  KoalasAverage >= minimumScoreNeeded &&
  KoalasAverage > dolphinsAverage
) {
  console.log(`Team Koalas is the winner! average: ${KoalasAverage}`);
} else if (
  KoalasAverage >= minimumScoreNeeded &&
  dolphinsAverage >= minimumScoreNeeded &&
  KoalasAverage === dolphinsAverage
) {
  console.log(`It is a draw! Both win the trophy`);
} else {
  console.log(
    `No one wins the trophy.Minimum score needed ${minimumScoreNeeded}`
  );
}

function getAverage(scores) {
  let average;
  let totalSum = 0;
  for (let i = 0; i < scores.length; i++) {
    totalSum += scores[i];
  }
  average = totalSum / scores.length;
  return average;
}
