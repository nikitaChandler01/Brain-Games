#!/usr/bin/env node
import { logicOfGames, taskToPrime } from '../src/index.js';
import isPrime from '../src/games/isPrime.js';

logicOfGames(taskToPrime, isPrime);
