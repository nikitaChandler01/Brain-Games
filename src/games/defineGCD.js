import runGame from '../index.js';
import getRandomNumber from '../utils.js';
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
const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(findCommonDivisior(firstNumber, secondNumber));
  return [question, correctAnswer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
