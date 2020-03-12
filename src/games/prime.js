import engine from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getCorrectAnswer = () => {
  const question = getRandom();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runGamePrime = () => engine(getCorrectAnswer, description);

export { runGamePrime as default };
