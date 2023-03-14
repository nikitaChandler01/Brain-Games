import readlineSync from 'readline-sync';
import getRandomIntNumber from '../brain-randomize.js';

const defineMissedNumber = () => {
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
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${finalProgression[randomNumberOfProgression]}".`);
  return false;
};

export default defineMissedNumber;
