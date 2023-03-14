#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomIntNumber from './brain-randomize.js';
import userName from './brain-meeting.js';

const name = userName();
const defineMissedNumber = () => {
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
    }
    disturbedProgression = [...finalProgression];
    disturbedProgression[randomNumberOfProgression] = '..';
    const stringProgression = disturbedProgression.join(' ');
    const answer = readlineSync.question(`Question: ${stringProgression}\nYour answer: `);
    if (Number(answer) === finalProgression[randomNumberOfProgression]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${finalProgression[randomNumberOfProgression]}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

defineMissedNumber(name);
