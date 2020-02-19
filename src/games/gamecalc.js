import { getRandom } from '../index.js';

const resultExpression = (randomNumber1, randomNumber2, sign) => {
  let result = '';
  switch (sign) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }
  return String(result);
};

const gameCalc = () => {
  const arrSign = ['+', '-', '*'];
  const randomNumber1 = getRandom(100);
  const randomNumber2 = getRandom(100);
  const sign = arrSign[getRandom(3)];
  const correctAnswer = resultExpression(randomNumber1, randomNumber2, sign);
  const expression = `${randomNumber1} ${sign} ${randomNumber2}`;
  console.log(`Question: ${expression}`);
  return correctAnswer;
};

export { gameCalc as default };
