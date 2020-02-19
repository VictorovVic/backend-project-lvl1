import toAskName, { answer, checkAnswer } from './index.js';
import gameCalc from './games/gamecalc.js';
import gameEven from './games/gameeven.js';
import gameGcd from './games/gamegcd.js';
import gamePrime from './games/gameprime.js';
import gameProgression from './games/gameprogression.js';

const engine = (game) => {
  const playerName = toAskName();

  switch (game) {
    case 'brain-calc':
      console.log('What is the result of the expression?');
      for (let i = 0; i < 3; i += 1) {
        const correctAnswer = gameCalc();
        const playerAnswer = answer();
        checkAnswer(correctAnswer, playerAnswer, playerName, i);
      }
      break;

    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      for (let i = 0; i < 3; i += 1) {
        const correctAnswer = gameEven();
        const playerAnswer = answer();
        checkAnswer(correctAnswer, playerAnswer, playerName, i);
      }
      break;

    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      for (let i = 0; i < 3; i += 1) {
        const correctAnswer = gameGcd();
        const playerAnswer = answer();
        checkAnswer(correctAnswer, playerAnswer, playerName, i);
      }
      break;

    case 'brain-prime':
      console.log('Answer "yes" if the number is prime, otherwise answer "no".');
      for (let i = 0; i < 3; i += 1) {
        const correctAnswer = gamePrime();
        const playerAnswer = answer();
        checkAnswer(correctAnswer, playerAnswer, playerName, i);
      }
      break;

    case 'brain-progression':
      console.log('What number is missing in the progression?');
      for (let i = 0; i < 3; i += 1) {
        const correctAnswer = gameProgression();
        const playerAnswer = answer();
        checkAnswer(correctAnswer, playerAnswer, playerName, i);
      }
      break;

    default:
      break;
  }
};

export { engine as default };
