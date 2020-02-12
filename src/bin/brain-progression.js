#!/usr/bin/env node

import toAskName, {
  getRandom, progression, answer, checkAnswer,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const playerName = toAskName();
console.log('What number is missing in the progression?');
for (let i = 0; i < 3; i += 1) {
  const beginProg = getRandom(100);
  const step = getRandom(10);
  const hidden = getRandom(9);
  const expression = progression(beginProg, step);
  const correctAnswer = String(expression[hidden]);
  expression[hidden] = '..';
  const question = expression.join(' ');
  console.log(`Question: ${question}`);
  const playerAnswer = answer();
  checkAnswer(correctAnswer, playerAnswer, playerName, i);
}
