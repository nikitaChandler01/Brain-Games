#!/usr/bin/env node
import { logicOfGames, taskIsEven } from '../src/index.js';
import isEven from '../src/games/isEven.js';

logicOfGames(taskIsEven, isEven);
