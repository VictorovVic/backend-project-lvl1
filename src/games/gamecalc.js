import runEngine, { getRandom, askPlayerQuestion } from '../index.js';

const questionToPlayer = 'What is the result of the expression?';
const getValueExpression = (randomNumber1, randomNumber2, sign) => {
  let result = '';
  switch (sign) {
    case '+': result = randomNumber1 + randomNumber2;
      break;
    case '-': result = randomNumber1 - randomNumber2;
      break;
    case '*': result = randomNumber1 * randomNumber2;
      break;
    default: break;
  } return String(result);
};

const runGameCalc = () => {
  const getCorrectAnswer = () => {
    const operSelection = ['+', '-', '*'];
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const signOperation = operSelection[getRandom(0, operSelection.length - 1)];
    const correctAnswer = getValueExpression(randomNumber1, randomNumber2, signOperation);
    const expressionQuestion = `${randomNumber1} ${signOperation} ${randomNumber2}`;
    askPlayerQuestion(expressionQuestion);
    return correctAnswer;
  };
  runEngine(getCorrectAnswer, questionToPlayer);
};

export { runGameCalc as default };
