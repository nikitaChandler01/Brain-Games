import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const checkIsEven = (number) => {
  if (number % 2 === 0) return true;
  return false;
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const correctAnswer = checkIsEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
