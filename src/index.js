import readlineSync from 'readline-sync';

const getAnswerPlayer = () => readlineSync.question('Your answer: ');

const finishGame = (answerPlayer, correctAnswer, name) => {
  console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);

const startResponseProcessing = (game, description) => {
  console.log(description);
  const numberOfQuestion = 3;
  for (let i = 0; i < numberOfQuestion; i += 1) {
    const questionAndCorrectAnswer = game();
    console.log(`Question: ${questionAndCorrectAnswer.questionToPlayer}`);
    const answerPlayer = getAnswerPlayer();
    if (questionAndCorrectAnswer.correctAnswer !== answerPlayer) {
      return finishGame(answerPlayer, questionAndCorrectAnswer.correctAnswer, playerName);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export { startResponseProcessing as default };
