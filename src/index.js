#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../bin/brain-meeting.js';
import isEven from '../bin/games/brain-even.js';
import calculate from '../bin/games/brain-calc.js';
import commonDivisior from '../bin/games/brain-cgd.js';
import defineMissedNumber from '../bin/games/brain-progression.js';

const name = userName();
const brainEven = '>>>>>brain-even';
const brainCalc = '>>>>>brain-calc';
const brainCGD = '>>>>>brain-cgd';
const brainProgression = '>>>>>brain-progression';

const play = () => {
  const game = readlineSync.question(`What game you want to play? \n${brainEven}\n${brainCalc}\n${brainCGD}\n${brainProgression}\n`);
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
