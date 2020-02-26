import runEngine, { getRandom, askPlayerQuestion, getYesOrNo } from '../index.js';

const questionToPlayer = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNumber) => randomNumber % 2 === 0;

const runGameEven = () => {
  const getCorrectAnswer = () => {
    const isEvenNumber = getRandom();
    const correctAnswer = getYesOrNo(isEven(isEvenNumber));
    askPlayerQuestion(isEvenNumber);
    return correctAnswer;
  };
  runEngine(getCorrectAnswer, questionToPlayer);
};

export { runGameEven as default };
