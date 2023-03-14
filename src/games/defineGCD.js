import readlineSync from 'readline-sync';
import getRandomIntNumber from '../brain-randomize.js';
import { findCommonDivisior } from '../brain-answers.js';

const commonDivisior = () => {
  const firstRandomNumber = getRandomIntNumber(50) + 9;
  const secondRandomNumber = getRandomIntNumber(50) + 9;
  const answer = readlineSync.question(`Question: ${firstRandomNumber} ${secondRandomNumber}\nYour answer: `);
  if (Number(answer) === findCommonDivisior(firstRandomNumber, secondRandomNumber)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${findCommonDivisior(firstRandomNumber, secondRandomNumber)}".`);
  return false;
};

export default commonDivisior;
