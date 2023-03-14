import readlineSync from 'readline-sync';

const taskIsEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const taskToCalc = 'What is the result of the expression?';
const taskToGCD = 'Find the greatest common divisor of given numbers.';
const taskToProgression = 'What number is missing in the progression?';
const taskToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logicOfGames = (task, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(task);
  for (let userScore = 1; userScore < 4; userScore += 1) {
    if (!game()) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (userScore === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export {
  logicOfGames,
  taskIsEven,
  taskToCalc,
  taskToGCD,
  taskToProgression,
  taskToPrime,
};
