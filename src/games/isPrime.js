import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkIsPrime = (number) => {
  if (number === 0) return true;
  if (number <= 2) return true;
  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const correctAnswer = checkIsPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
