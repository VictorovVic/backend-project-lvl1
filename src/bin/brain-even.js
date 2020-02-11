#!/usr/bin/env node

import toAskName, {
  getRandom, evenOrUneven, answer, checkAnswer,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const playerName = toAskName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandom(100);
  const correctAnswer = evenOrUneven(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const playerAnswer = answer();
  checkAnswer(correctAnswer, playerAnswer, playerName, i);
}
