#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../bin/brain-meeting.js';
import isEven from '../bin/brain-even.js';
import calculate from '../bin/brain-calc.js';
import commonDivisior from '../bin/brain-cgd.js';
import defineMissedNumber from '../bin/brain-progression.js';
import isPrime from '../bin/brain-prime.js';

const name = userName();
const brainEven = '>>>>>brain-even';
const brainCalc = '>>>>>brain-calc';
const brainCGD = '>>>>>brain-cgd';
const brainProgression = '>>>>>brain-progression';
const brainPrime = '>>>>>brain-prime';

const play = () => {
  const game = readlineSync.question(`What game you want to play? \n${brainEven}\n${brainCalc}\n${brainCGD}\n${brainProgression}\n${brainPrime}\n`);
  switch (game) {
    case 'brain-even':
      isEven(name);
      break;

    case 'brain-calc':
      calculate(name);
      break;

    case 'brain-cgd':
      commonDivisior(name);
      break;

    case 'brain-progression':
      defineMissedNumber(name);
      break;

    case 'brain-prime':
      isPrime(name);
      break;
    default:
      console.log('This game is not exist :(');
  }
  //   const repeatGame = readlineSync.question('Do you want to play again? ');
  //   const answer = repeatGame.toLowerCase();
  //   switch (answer) {
  //     case 'yes':
  //       play();
  //       break;

  //     case 'no':
  //       console.log(`Good luck, ${name}!`);
  //       break;

  //     default:
  //   }
};

play();
