import runEngine, { getRandom, askPlayerQuestion, getYesOrNo } from '../index.js';

const questionToPlayer = 'Answer "yes" if the number is prime, otherwise answer "no".';
const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return false;
  }
  return true;
};

const runGamePrime = () => {
  const getCorrectAnswer = () => {
    const isPrimeNumber = getRandom();
    const correctAnswer = getYesOrNo(isPrime(isPrimeNumber));
    askPlayerQuestion(isPrimeNumber);
    return correctAnswer;
  };
  runEngine(getCorrectAnswer, questionToPlayer);
};

export { runGamePrime as default };
