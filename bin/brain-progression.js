#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomIntNumber from './brain-randomize.js';

const defineMissedNumber = (name) => {
  console.log('What number is missing in the progression?');
  for (let userScore = 1; userScore < 4; userScore += 1) {
    const firstValue = getRandomIntNumber(10);
    const arifmeticalDiff = getRandomIntNumber(7) + 1;
    const lengthOfProgression = getRandomIntNumber(7) + 5;
    const finalProgression = [];
    const lastValueOfProgression = firstValue + (lengthOfProgression - 1) * arifmeticalDiff;
    const randomNumberOfProgression = getRandomIntNumber(lengthOfProgression);
    let disturbedProgression = [];
    for (let i = firstValue; i <= lastValueOfProgression; i += arifmeticalDiff) {
      finalProgression.push(i);
      disturbedProgression = [...finalProgression];
      disturbedProgression[randomNumberOfProgression] = '*';
    }
    const answer = readlineSync.question(`Question: ${disturbedProgression}\nYour answer: `);
    if (Number(answer) === finalProgression[randomNumberOfProgression]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${finalProgression[randomNumberOfProgression]}.`);
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default defineMissedNumber;
