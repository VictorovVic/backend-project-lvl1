import readlineSync from 'readline-sync';

const getRandom = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const askPlayerQuestion = (number) => console.log(`Question: ${number}`);

const getYesOrNo = (number) => (number ? 'yes' : 'no');

const checkAnswer = (correctAnswer, answerPlayer, playerName, i) => {
  if (correctAnswer !== answerPlayer) {
    console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
    process.exit(-1);
  }
  console.log('Correct!');
  if (i === 2) console.log(`Congratulations, ${playerName}!`);
};

const runEngine = (game, questionToPlayer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(questionToPlayer);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = game();
    const answerPlayer = readlineSync.question('Your answer: ');
    checkAnswer(correctAnswer, answerPlayer, playerName, i);
  }
};

export {
  runEngine as default, getRandom, askPlayerQuestion, getYesOrNo,
};
