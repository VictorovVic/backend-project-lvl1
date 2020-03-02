import runEngine, { getAnswer, getRandom } from '../index.js';

const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randNum) => randNum % 2 === 0;

const runGameEven = () => {
  const questionAndCorrectAnswer = {};
  const getCorrectAnswer = () => {
    const questionToPlayer = getRandom();
    const correctAnswer = isEven(questionToPlayer);
    questionAndCorrectAnswer.questionToPlayer = questionToPlayer;
    questionAndCorrectAnswer.correctAnswer = getAnswer(correctAnswer);
    return questionAndCorrectAnswer;
  };
  runEngine(getCorrectAnswer, questionGame);
};

export { runGameEven as default };
