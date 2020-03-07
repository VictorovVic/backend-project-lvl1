import startResponseProcessing from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randNum) => randNum % 2 === 0;

const getCorrectAnswer = () => {
  const questionAndCorrectAnswer = {};
  const questionToPlayer = getRandom();
  const correctAnswer = isEven(questionToPlayer) ? 'yes' : 'no';
  questionAndCorrectAnswer.questionToPlayer = questionToPlayer;
  questionAndCorrectAnswer.correctAnswer = correctAnswer;
  return questionAndCorrectAnswer;
};

const runGameEven = () => startResponseProcessing(getCorrectAnswer, description);

export { runGameEven as default };
