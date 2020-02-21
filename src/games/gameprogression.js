import engine, { getRandom, question } from '../index.js';

const gameProgression = () => {
  const progression = (beginProg, step) => {
    const arrProgression = [];
    for (let num = beginProg, index = 0; index < 10; index += 1, num += (step + 1)) {
      arrProgression[index] = num;
    }
    return arrProgression;
  };

  const logicGame = () => {
    const beginProg = getRandom(100);
    const stepProg = getRandom(10);
    const hiddenNumber = getRandom(9);
    const expression = progression(beginProg, stepProg);
    const correctAnswer = String(expression[hiddenNumber]);
    expression[hiddenNumber] = '..';
    question(expression.join(' '));
    return correctAnswer;
  };
  const stringQuestion = 'What number is missing in the progression?';
  engine(logicGame, stringQuestion);
};

export { gameProgression as default };
