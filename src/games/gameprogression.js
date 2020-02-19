import { getRandom } from '../index.js';

const progression = (beginProg, step) => {
  const arrProgression = [];
  for (let num = beginProg, index = 0; index < 10; index += 1, num += (step + 1)) {
    arrProgression[index] = num;
  }
  return arrProgression;
};

const gameProgression = () => {
  const beginProg = getRandom(100);
  const stepProg = getRandom(10);
  const hiddenNumber = getRandom(9);
  const expression = progression(beginProg, stepProg);
  const correctAnswer = String(expression[hiddenNumber]);
  expression[hiddenNumber] = '..';
  const question = expression.join(' ');
  console.log(`Question: ${question}`);
  return correctAnswer;
};

export { gameProgression as default };
