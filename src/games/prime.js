import startResponseProcessing from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (randNum) => {
  if (randNum < 2) return false;
  for (let i = 2; i <= randNum / 2; i += 1) {
    if (randNum % i === 0) return false;
  }
  return true;
};

const getCorrectAnswer = () => {
  const questionAndCorrectAnswer = {};
  const questionToPlayer = getRandom();
  const correctAnswer = isPrime(questionToPlayer) ? 'yes' : 'no';
  questionAndCorrectAnswer.questionToPlayer = questionToPlayer;
  questionAndCorrectAnswer.correctAnswer = correctAnswer;
  return questionAndCorrectAnswer;
};

const runGamePrime = () => startResponseProcessing(getCorrectAnswer, description);

export { runGamePrime as default };
