import runEngine, { getAnswer, getRandom } from '../index.js';

const questionGame = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (randNum) => {
  if (randNum < 2) return false;
  for (let i = 2; i <= randNum / 2; i += 1) {
    if (randNum % i === 0) return false;
  }
  return true;
};

const runGamePrime = () => {
  const questionAndCorrectAnswer = {};
  const getCorrectAnswer = () => {
    const questionToPlayer = getRandom();
    const correctAnswer = isPrime(questionToPlayer);
    questionAndCorrectAnswer.questionToPlayer = questionToPlayer;
    questionAndCorrectAnswer.correctAnswer = getAnswer(correctAnswer);
    return questionAndCorrectAnswer;
  };
  runEngine(getCorrectAnswer, questionGame);
};

export { runGamePrime as default };
