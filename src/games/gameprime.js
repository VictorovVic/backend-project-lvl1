import runEngine, { getAnswer } from '../index.js';

const questionToPlayer = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return false;
  }
  return true;
};

const runGamePrime = () => {
  const getCorrectAnswer = () => getAnswer(isPrime);
  runEngine(getCorrectAnswer, questionToPlayer);
};

export { runGamePrime as default };
