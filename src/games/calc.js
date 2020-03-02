import runEngine, { getRandom } from '../index.js';

const questionGame = 'What is the result of the expression?';
const calcCorrAnsw = (randNum1, randNum2, sign) => {
  let result = '';
  switch (sign) {
    case '+': result = randNum1 + randNum2;
      break;
    case '-': result = randNum1 - randNum2;
      break;
    case '*': result = randNum1 * randNum2;
      break;
    default: break;
  } return result;
};

const runGameCalc = () => {
  const questionAndCorrectAnswer = {};
  const getCorrectAnswer = () => {
    const signCalc = ['+', '-', '*'];
    const randNum1 = getRandom();
    const randNum2 = getRandom();
    const calculation = signCalc[getRandom(0, signCalc.length - 1)];
    questionAndCorrectAnswer.questionToPlayer = (`${randNum1} ${calculation} ${randNum2}`);
    questionAndCorrectAnswer.correctAnswer = String(calcCorrAnsw(randNum1, randNum2, calculation));
    return questionAndCorrectAnswer;
  };
  runEngine(getCorrectAnswer, questionGame);
};

export { runGameCalc as default };
