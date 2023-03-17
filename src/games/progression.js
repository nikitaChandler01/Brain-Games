import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const firstValue = getRandomNumber(0, 10);
  const arifmeticalDiff = getRandomNumber(1, 10);
  const lengthOfProgression = getRandomNumber(5, 12);
  const finalProgression = [];
  const lastValueOfProgression = firstValue + (lengthOfProgression - 1) * arifmeticalDiff;
  const randomNumberOfProgression = getRandomNumber(0, lengthOfProgression);
  let disturbedProgression = [];
  for (let i = firstValue; i <= lastValueOfProgression; i += arifmeticalDiff) {
    finalProgression.push(i);
  }
  disturbedProgression = [...finalProgression];
  disturbedProgression[randomNumberOfProgression] = '..';
  const stringProgression = disturbedProgression.join(' ');
  const question = `${stringProgression}`;
  const correctAnswer = String(finalProgression[randomNumberOfProgression]);
  return [question, correctAnswer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
