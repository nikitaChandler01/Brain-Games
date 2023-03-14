import readlineSync from 'readline-sync';
import { checkCalcSum, checkCalcDif, checkCalcMuliply } from '../brain-answers.js';
import getRandomIntNumber from '../brain-randomize.js';

const calculate = () => {
  const operations = ['+', '-', '*'];
  const checkFunctions = [checkCalcSum, checkCalcDif, checkCalcMuliply];
  const randomOperation = getRandomIntNumber(3);
  const firstRandomNumber = getRandomIntNumber(100);
  const secondRandomNumber = getRandomIntNumber(100);
  const answer = readlineSync.question(`Question: ${firstRandomNumber} ${operations[randomOperation]} ${secondRandomNumber}\nYour answer: `);
  if (checkFunctions[randomOperation](firstRandomNumber, secondRandomNumber, answer)) return true;
  return false;
};

export default calculate;
