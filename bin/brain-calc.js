#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { checkCalcSum, checkCalcDif, checkCalcMuliply } from './brain-answers.js';
import getRandomIntNumber from './brain-randomize.js';

const calculate = (name) => {
  console.log('What is the result of the expression?');
  const operations = ['+', '-', '*'];
  const checkFunctions = [checkCalcSum, checkCalcDif, checkCalcMuliply];
  /* функции проверки лежат под тем же индексом что и операции которые они проверяют */
  for (let userScore = 1; userScore < 4; userScore += 1) {
    const randomOperation = getRandomIntNumber(3);
    const firstRandomNumber = getRandomIntNumber(100);
    const secondRandomNumber = getRandomIntNumber(100);
    const answer = readlineSync.question(`Question: ${firstRandomNumber} ${operations[randomOperation]} ${secondRandomNumber}\nYour answer: `);
    if (!checkFunctions[randomOperation](firstRandomNumber, secondRandomNumber, answer)) {
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default calculate;
