import readlineSync from 'readline-sync';
import { checkIsEven } from '../brain-answers.js';
import getRandomIntNumber from '../brain-randomize.js';

const isEven = () => {
  const randomNumber = getRandomIntNumber(100);
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  if (checkIsEven(randomNumber, answer)) return true;
  return false;
};

export default isEven;
