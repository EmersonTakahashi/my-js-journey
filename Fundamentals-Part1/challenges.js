////// Chalenge 1
//BMI = mass / height ** 2
const marksWeights = 78;
const marksHeight = 1.69;
const johnWeights = 92;
const johnHeight = 1.95;

const marksBMI = marksWeights / marksHeight ** 2;
const johnBMI = johnWeights / johnHeight ** 2;
const markHigherBMI = marksBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})`);
}

const marksWeights2 = 95;
const marksHeight2 = 1.88;
const johnWeights2 = 85;
const johnHeight2 = 1.76;

const marksBMI2 = marksWeights / marksHeight ** 2;
const johnBMI2 = johnWeights2 / johnHeight2 ** 2;

const markHigherBMI2 = marksBMI2 > johnBMI2;
const test = johnBMI.toFixed(2);
console.log(test);
if (markHigherBMI2) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${marksBMI2})`);
}
