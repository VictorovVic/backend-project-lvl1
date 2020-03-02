import runEngine, { getRandom } from '../index.js';

const questionGame = 'Find the greatest common divisor of given numbers.';
const getGcd = (randNum1, randNum2) => {
  const maxNumb = Math.max(randNum1, randNum2);
  let gcd = 1;
  for (let i = 2; i <= maxNumb; i += 1) {
    if (randNum1 % i === 0 && randNum2 % i === 0) gcd = i;
  }
  return gcd;
};
const runGameGcd = () => {
  const questionAndCorrectAnswer = {};
  const getCorrectAnswer = () => {
    const randNum1 = getRandom();
    const randNum2 = getRandom();
    questionAndCorrectAnswer.questionToPlayer = `${randNum1} ${randNum2}`;
    questionAndCorrectAnswer.correctAnswer = String(getGcd(randNum1, randNum2));
    return questionAndCorrectAnswer;
  };
  runEngine(getCorrectAnswer, questionGame);
};

export { runGameGcd as default };
