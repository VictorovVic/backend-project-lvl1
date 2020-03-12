import engine from '../index.js';
import getRandom from '../random.js';

const description = 'What is the result of the expression?';

const calculate = (randNum1, randNum2, sign) => {
  let result;
  switch (sign) {
    case '+': result = randNum1 + randNum2;
      break;
    case '-': result = randNum1 - randNum2;
      break;
    case '*': result = randNum1 * randNum2;
      break;
    default: break;
  }
  return result;
};

const getCorrectAnswer = () => {
  const signs = ['+', '-', '*'];
  const randNum1 = getRandom();
  const randNum2 = getRandom();
  const signOperation = signs[getRandom(0, signs.length - 1)];
  const question = (`${randNum1} ${signOperation} ${randNum2}`);
  const correctAnswer = String(calculate(randNum1, randNum2, signOperation));
  return { question, correctAnswer };
};

const runGameCalc = () => engine(getCorrectAnswer, description);

export { runGameCalc as default };
