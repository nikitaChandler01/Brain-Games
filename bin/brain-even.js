#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { checkIsEven } from '../brain-answers.js';
import getRandomIntNumber from '../brain-randomize.js';

const isEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let userScore = 1; userScore < 4; userScore += 1) {
    const randomNumber = getRandomIntNumber(100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (!checkIsEven(randomNumber, answer)) {
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default isEven;
