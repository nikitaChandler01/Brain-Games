#!/usr/bin/env node
import { logicOfGames, taskToCalc } from '../src/index.js';
import calculate from '../src/games/calculate.js';

logicOfGames(taskToCalc, calculate);
