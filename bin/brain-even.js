#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { checkIsEven } from './brain-answers.js';
import getRandomIntNumber from './brain-randomize.js';
import userName from './brain-meeting.js';

const name = userName();
const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let userScore = 1; userScore < 4; userScore += 1) {
    const randomNumber = getRandomIntNumber(100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: \n`);
    if (!checkIsEven(randomNumber, answer)) {
      console.log(`Let's try again, ${name}\n`);
      isEven(name);
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
isEven(name);
export default isEven;
