import runEngine, { getRandom, askPlayerQuestion } from '../index.js';

const questionToPlayer = 'Answer "yes" if the number is prime, otherwise answer "no".';
const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return false;
  }
  return true;
};

const runGamePrime = () => {
  const getCorrectAswer = () => {
    const beginRangeRandom = 0;
    const endRangeRandom = 100;
    const isPrimeNumber = getRandom(beginRangeRandom, endRangeRandom);
    const correctAnswer = isPrime(isPrimeNumber) ? 'yes' : 'no';
    askPlayerQuestion(isPrimeNumber);
    return correctAnswer;
  };
  runEngine(getCorrectAswer, questionToPlayer);
};

export { runGamePrime as default };
