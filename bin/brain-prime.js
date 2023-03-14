#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomIntNumber from './brain-randomize.js';
import { checkIsPrime } from './brain-answers.js';
import userName from './brain-meeting.js';

const name = userName();
const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let userScore = 1; userScore < 4; userScore += 1) {
    const randomNumber = getRandomIntNumber(100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (!checkIsPrime(randomNumber, answer)) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

isPrime(name);
