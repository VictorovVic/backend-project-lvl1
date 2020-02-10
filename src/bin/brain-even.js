#!/usr/bin/env node

import toAskName, { isEvenNumber } from '../index.js';

console.log('Welcome to the Brain Games!');
const playerName = toAskName();
const { correct, player } = isEvenNumber();
if (correct === player) console.log(`Congratulations, ${playerName}!`);
else console.log(`"${player}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${playerName}!`);
