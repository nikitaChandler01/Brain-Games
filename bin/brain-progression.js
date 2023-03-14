#!/usr/bin/env node
import defineMissedNumber from '../src/games/progression.js';
import { logicOfGames, taskToProgression } from '../src/index.js';

logicOfGames(taskToProgression, defineMissedNumber);
