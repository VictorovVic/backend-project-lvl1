#!/usr/bin/env node
import toAskName, {
  getRandom, answer, checkAnswer, resultExpression,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const playerName = toAskName();
console.log('What is the result of the expression?');
const arrSign = ['+', '-', '*'];
for (let i = 0; i < 3; i += 1) {
  const randomNumber1 = getRandom(100);
  const randomNumber2 = getRandom(100);
  const sign = arrSign[getRandom(3)];
  const correctAnswer = resultExpression(randomNumber1, randomNumber2, sign);
  const expression = `${randomNumber1} ${sign} ${randomNumber2}`;
  console.log(`Question: ${expression}`);
  const playerAnswer = answer();
  checkAnswer(correctAnswer, playerAnswer, playerName, i);
}
