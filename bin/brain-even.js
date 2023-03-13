#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from './brain-meeting.js';
import checkIsEven from './brain-answers.js';
import getRandomIntNumber from './brain-randomize.js';

const name = userName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = () => {
  for (let userScore = 0; userScore < 3; userScore += 1) {
    const randomNumber = getRandomIntNumber(100);
    const answer = readlineSync.question(`Question: ${randomNumber} \n`);
    if (!checkIsEven(randomNumber, answer)) {
      break;
    }
    if (userScore === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
isEven();
