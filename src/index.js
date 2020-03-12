import readlineSync from 'readline-sync';

const engine = (getQuestionAndAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answerPlayer) {
      console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
  return true;
};

export { engine as default };
