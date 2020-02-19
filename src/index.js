import readlineSync from 'readline-sync';

const getRandom = (rangeNumber) => Math.floor(Math.random() * rangeNumber);

const toAskName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const answer = () => {
  const answerPlayer = readlineSync.question('Your answer: ');
  return answerPlayer;
};

const checkAnswer = (correctAnswer, playerAnswer, playerName, i) => {
  if (correctAnswer !== playerAnswer) {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
    process.exit(-1);
  }
  console.log('Correct!');
  if (i === 2) console.log(`Congratulations, ${playerName}!`);
};

export {
  toAskName as default, getRandom, answer, checkAnswer,
};
