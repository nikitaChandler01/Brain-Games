#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from './brain-meeting.js';

const name = userName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = () => {
  const randomNumbers = [];
  for (let i = 0; i < 3; i += 1) {
    randomNumbers[i] = Math.floor(Math.random() * 100);
  }
  let userScore = 0;
  /* eslint-disable-next-line */
  for (const num of randomNumbers) {
    const answer = readlineSync.question(`Question: ${num} \n`);
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      userScore += 1;
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      userScore += 1;
    } else {
      userScore = 0;
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
  }
  if (userScore === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
isEven();
