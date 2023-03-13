#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomIntNumber from '../brain-randomize.js';
import { findCommonDivisior } from '../brain-answers.js';

const commonDivisior = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let userScore = 1; userScore < 4; userScore += 1) {
    const firstRandomNumber = getRandomIntNumber(50) + 9;
    const secondRandomNumber = getRandomIntNumber(50) + 9;
    const answer = readlineSync.question(`Qestion: ${firstRandomNumber} ${secondRandomNumber} `);
    if (Number(answer) === findCommonDivisior(firstRandomNumber, secondRandomNumber)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${findCommonDivisior(firstRandomNumber, secondRandomNumber)}'.`);
      break;
    }
  }
};

export default commonDivisior;
