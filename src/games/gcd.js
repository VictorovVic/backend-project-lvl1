import engine from '../index.js';
import getRandom from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const maxNumb = Math.max(num1, num2);
  let gcd = 1;
  for (let i = 2; i <= maxNumb; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
};

const getCorrectAnswer = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return { question, correctAnswer };
};

const runGameGcd = () => engine(getCorrectAnswer, description);

export { runGameGcd as default };
