import runEngine, { getAnswer } from '../index.js';

const questionToPlayer = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNumber) => randomNumber % 2 === 0;

const runGameEven = () => {
  const getCorrectAnswer = () => getAnswer(isEven);
  runEngine(getCorrectAnswer, questionToPlayer);
};

export { runGameEven as default };
