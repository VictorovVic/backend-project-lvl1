#!/usr/bin/env node

import toAskName, { gameEngine, getRandom } from '../index.js';

console.log('Welcome to the Brain Games!');
const playerName = toAskName();
console.log('What is the result of the expression?');
const arrQuestionCorrAnswer = [{}, {}, {}];
const arrSign = ['+', '-', '*'];

for (let i = 0; i < 3; i += 1) {
  const randomNumber1 = getRandom(100);
  const randomNumber2 = getRandom(100);
  const sign = arrSign[getRandom(3)];
  arrQuestionCorrAnswer[i].question = `${randomNumber1} ${sign} ${randomNumber2}`;
  if (sign === '+') arrQuestionCorrAnswer[i].correctAnswer = String(randomNumber1 + randomNumber2);
  if (sign === '-') arrQuestionCorrAnswer[i].correctAnswer = String(randomNumber1 - randomNumber2);
  if (sign === '*') arrQuestionCorrAnswer[i].correctAnswer = String(randomNumber1 * randomNumber2);
}
const { correctAnswer, answerPlayer } = gameEngine(arrQuestionCorrAnswer);
if (correctAnswer === answerPlayer) console.log(`Congratulations, ${playerName}!`);
else console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
