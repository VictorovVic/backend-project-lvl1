import runEngine, { getRandom, askPlayerQuestion } from '../index.js';

const questionToPlayer = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNumber) => randomNumber % 2 === 0;

const runGameEven = () => {
  const getCorrectAswer = () => {
    const beginRangeRandom = 0;
    const endRangeRandom = 100;
    const isEvenNumber = getRandom(beginRangeRandom, endRangeRandom);
    const correctAnswer = isEven(isEvenNumber) ? 'yes' : 'no';
    askPlayerQuestion(isEvenNumber);
    return correctAnswer;
  };
  runEngine(getCorrectAswer, questionToPlayer);
};

export { runGameEven as default };
