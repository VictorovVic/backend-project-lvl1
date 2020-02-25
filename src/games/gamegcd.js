import runEngine, { getRandom, askPlayerQuestion } from '../index.js';

const questionToPlayer = 'Find the greatest common divisor of given numbers.';
const getGcd = (randomNumber1, randomNumber2) => {
  const maxNumber = Math.max(randomNumber1, randomNumber2);
  let gcd = 1;
  for (let i = 2; i <= maxNumber; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) gcd = i;
  }
  return gcd;
};
const runGameGcd = () => {
  const getCorrectAswer = () => {
    const beginRangeRandom = 0;
    const endRangeRandom = 100;
    const randomNumber1 = getRandom(beginRangeRandom, endRangeRandom);
    const randomNumber2 = getRandom(beginRangeRandom, endRangeRandom);
    const correctAnswer = getGcd(randomNumber1, randomNumber2);
    const expressionQuestion = `${randomNumber1} ${randomNumber2}`;
    askPlayerQuestion(expressionQuestion);
    return String(correctAnswer);
  };
  runEngine(getCorrectAswer, questionToPlayer);
};

export { runGameGcd as default };
