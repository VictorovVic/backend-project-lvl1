import startResponseProcessing from '../index.js';
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
  const questionAndCorrectAnswer = {};
  const signsCalculate = ['+', '-', '*'];
  const randNum1 = getRandom();
  const randNum2 = getRandom();
  const signOperation = signsCalculate[getRandom(0, signsCalculate.length - 1)];
  questionAndCorrectAnswer.questionToPlayer = (`${randNum1} ${signOperation} ${randNum2}`);
  questionAndCorrectAnswer.correctAnswer = String(calculate(randNum1, randNum2, signOperation));
  return questionAndCorrectAnswer;
};

const runGameCalc = () => startResponseProcessing(getCorrectAnswer, description);

export { runGameCalc as default };
