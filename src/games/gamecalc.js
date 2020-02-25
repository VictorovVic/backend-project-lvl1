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
  const getCorrectAswer = () => {
    const operSelection = ['+', '-', '*'];
    const beginRangeRandom = 0;
    const endRangeRandom = 100;
    const randomNumber1 = getRandom(beginRangeRandom, endRangeRandom);
    const randomNumber2 = getRandom(beginRangeRandom, endRangeRandom);
    const signOperation = operSelection[getRandom(beginRangeRandom, operSelection.length - 1)];
    const correctAnswer = getValueExpression(randomNumber1, randomNumber2, signOperation);
    const expressionQuestion = `${randomNumber1} ${signOperation} ${randomNumber2}`;
    askPlayerQuestion(expressionQuestion);
    return correctAnswer;
  };
  runEngine(getCorrectAswer, questionToPlayer);
};

export { runGameCalc as default };
