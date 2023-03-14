import readlineSync from 'readline-sync';
import { checkIsPrime } from '../brain-answers.js';
import getRandomIntNumber from '../brain-randomize.js';

const isPrime = () => {
  const randomNumber = getRandomIntNumber(100);
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  if (!checkIsPrime(randomNumber, answer)) {
    return false;
  }
  return true;
};

export default isPrime;
