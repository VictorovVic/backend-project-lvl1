#!/usr/bin/env node

import toAskName, { gameEngine, getRandom } from '../index.js';

console.log('Welcome to the Brain Games!');
const playerName = toAskName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const arrQuestionCorrAnswer = [{}, {}, {}];
for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandom(100);
  arrQuestionCorrAnswer[i].question = randomNumber;
  if (randomNumber % 2 === 0) arrQuestionCorrAnswer[i].correctAnswer = 'yes';
  else arrQuestionCorrAnswer[i].correctAnswer = 'no';
}
const { correctAnswer, answerPlayer } = gameEngine(arrQuestionCorrAnswer);
if (correctAnswer === answerPlayer) console.log(`Congratulations, ${playerName}!`);
else console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
