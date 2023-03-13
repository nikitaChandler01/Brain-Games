const checkIsEven = (number, answer) => {
  const answers = ['yes', 'no'];
  if (number % 2 !== answers.indexOf(answer)) { /* 'yes' лежит под нулевым индексом */
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answers.at(answers.indexOf(answer) - 1)}"`);
    return false;
  }
  console.log('Correct!');
  return true;
};
const checkCalcSum = (num1, num2, answer) => {
  if (num1 + num2 !== Number(answer)) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${num1 + num2}"`);
    return false;
  }
  console.log('Correct!');
  return true;
};
const checkCalcDif = (num1, num2, answer) => {
  if (num1 - num2 !== Number(answer)) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${num1 - num2}"`);
    return false;
  }
  console.log('Correct!');
  return true;
};
const checkCalcMuliply = (num1, num2, answer) => {
  if (num1 * num2 !== Number(answer)) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${num1 * num2}"`);
    return false;
  }
  console.log('Correct!');
  return true;
};
/* eslint-disable no-param-reassign */
const findCommonDivisior = (num1, num2) => {
  let buff;
  if (num2 > num1) {
    buff = num2;
    num2 = num1;
    num1 = buff;
  }
  let i = num2;
  while (num1 % i !== 0 || num2 % i !== 0) {
    i -= 1;
  }
  return i;
};

/* eslint-disable-next-line */
export { checkCalcSum, checkCalcDif, checkCalcMuliply };
export { findCommonDivisior, checkIsEven };
