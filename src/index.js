import readlineSync from 'readline-sync';

const getRandom = (rangeNumber) => Math.floor(Math.random() * rangeNumber);

const question = (number) => console.log(`Question: ${number}`);

const checkAnswer = (correctAnswer, answerPlayer, playerName, i) => {
  if (correctAnswer !== answerPlayer) {
    console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
    process.exit(-1);
  }
  console.log('Correct!');
  if (i === 2) console.log(`Congratulations, ${playerName}!`);
};

const engine = (game, stringQuestion) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(stringQuestion);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = game();
    const answerPlayer = readlineSync.question('Your answer: ');
    checkAnswer(correctAnswer, answerPlayer, playerName, i);
  }
};

export { engine as default, getRandom, question };
