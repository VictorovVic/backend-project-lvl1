import engine from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const runGameEven = () => engine(getCorrectAnswer, description);

export { runGameEven as default };
