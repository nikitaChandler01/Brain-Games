import runGame from '../test.js';
import getRandomNumber from '../utils.js';

const checkIsEven = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const correctAnswer = checkIsEven(randomNumber);
  return [question, correctAnswer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
