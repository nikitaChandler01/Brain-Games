import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const createProgression = () => {
  const firstValue = getRandomNumber(0, 10);
  const arifmeticalDiff = getRandomNumber(1, 10);
  const lengthOfProgression = getRandomNumber(5, 12);
  const progression = [];
  const lastValueOfProgression = firstValue + (lengthOfProgression - 1) * arifmeticalDiff;
  for (let i = firstValue; i <= lastValueOfProgression; i += arifmeticalDiff) {
    progression.push(i);
  }
  return progression;
};

const disturbingProgression = (finalProgression, randomNumberOfProgression) => {
  let disturbedProgression = [];
  disturbedProgression = [...finalProgression];
  disturbedProgression[randomNumberOfProgression] = '..';
  return disturbedProgression;
};

const getQuestionAndAnswer = () => {
  const finalProgression = createProgression();
  const randomNumberOfProgression = getRandomNumber(0, finalProgression.length);
  const disturbedProgression = disturbingProgression(finalProgression, randomNumberOfProgression);
  const stringProgression = disturbedProgression.join(' ');
  const question = `${stringProgression}`;
  const correctAnswer = String(finalProgression[randomNumberOfProgression]);
  return [question, correctAnswer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
