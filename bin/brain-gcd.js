#!/usr/bin/env node
import { logicOfGames, taskToGCD } from '../src/index.js';
import commonDivisior from '../src/games/defineGCD.js';

logicOfGames(taskToGCD, commonDivisior);
