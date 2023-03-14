#!usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomIntNumber from './brain-randomize.js';
import { checkIsPrime } from './brain-answers.js';

const isPrime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let userScore = 1; userScore < 4; userScore += 1) {
    const randomNumber = getRandomIntNumber(100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (!checkIsPrime(randomNumber, answer)) {
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default isPrime;
