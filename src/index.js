#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../bin/brain-meeting.js';
import isEven from '../bin/games/brain-even.js';
import calculate from '../bin/games/brain-calc.js';

const name = userName();
const brainEven = '>>>>>brain-even';
const brainCalc = '>>>>>brain-calc';
const game = readlineSync.question(`What game you want to play? \n${brainEven}\n${brainCalc}\n`);

switch (game) {
  case 'brain-even':
    isEven(name);
    break;

  case 'brain-calc':
    calculate(name);
    break;

  default:
    console.log('This game is not exist :(');
}
