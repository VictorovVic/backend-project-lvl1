import readlineSync from 'readline-sync';

const getRandom = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getAnswer = (number) => {
  const correctAnswer = number ? 'yes' : 'no';
  return correctAnswer;
};

const runEngine = (game, questionGame) => {
  console.log('Welcome to the Brain Games!');
  let isWin = true;
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(questionGame);
  for (let i = 0; i < 3; i += 1) {
    const questionAndCorrectAnswer = game();
    console.log(`Question: ${questionAndCorrectAnswer.questionToPlayer}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (questionAndCorrectAnswer.correctAnswer === answerPlayer) console.log('Correct!');
    else {
      isWin = false;
      console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${questionAndCorrectAnswer.correctAnswer}".\nLet's try again, ${playerName}!`);
      break;
    }
  }
  if (isWin) console.log(`Congratulations, ${playerName}!`);
};

export {
  runEngine as default, getRandom, getAnswer,
};
