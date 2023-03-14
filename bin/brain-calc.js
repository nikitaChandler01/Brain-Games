#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { checkCalcSum, checkCalcDif, checkCalcMuliply } from './brain-answers.js';
import getRandomIntNumber from './brain-randomize.js';
import userName from './brain-meeting.js';

const name = userName();
const calculate = () => {
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
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

calculate(name);
