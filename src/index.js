import readlineSync from 'readline-sync';

const toAskName = () => { // запрос имени игрока
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const getRandom = (rangeNumber) => Math.floor(Math.random() * rangeNumber);

const answer = () => { // ответ игрока на вопрос
  const answerPlayer = readlineSync.question('Your answer: ');
  return answerPlayer;
};

const gameEngine = (arrQuestionCorrAnswer) => {
  const arrCorrAnswerAndPlayerAnswer = {};
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${arrQuestionCorrAnswer[i].question}`);
    arrCorrAnswerAndPlayerAnswer.correctAnswer = arrQuestionCorrAnswer[i].correctAnswer;
    arrCorrAnswerAndPlayerAnswer.answerPlayer = answer();
    if (arrCorrAnswerAndPlayerAnswer.correctAnswer !== arrCorrAnswerAndPlayerAnswer.answerPlayer) {
      return arrCorrAnswerAndPlayerAnswer;
    }
    console.log('Correct!');
  }
  return arrCorrAnswerAndPlayerAnswer;
};

export { toAskName as default, gameEngine, getRandom };
