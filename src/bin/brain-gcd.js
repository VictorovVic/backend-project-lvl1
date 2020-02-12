#!/usr/bin/env node

import toAskName, {
  getRandom, gcd, answer, checkAnswer,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const playerName = toAskName();
console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < 3; i += 1) {
  const randomNumber1 = getRandom(100);
  const randomNumber2 = getRandom(100);
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  const expression = `${randomNumber1} ${randomNumber2}`;
  console.log(`Question: ${expression}`);
  const playerAnswer = answer();
  checkAnswer(correctAnswer, playerAnswer, playerName, i);
}
