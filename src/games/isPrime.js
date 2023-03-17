import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkIsPrime = (number) => {
  if (number === 0) return 'yes';
  if (number <= 2) return 'yes';
  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};
const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const correctAnswer = checkIsPrime(randomNumber);
  return [question, correctAnswer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
