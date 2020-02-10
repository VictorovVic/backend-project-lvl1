import readlineSync from 'readline-sync';

const toAskName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const getRandom = () => {
  const randAndAnsw = {};
  const randNum = Math.floor(Math.random() * 100);
  randAndAnsw.randomNumber = randNum;
  if (randNum % 2 === 0) randAndAnsw.correctAnswer = 'yes';
  else randAndAnsw.correctAnswer = 'no';
  return randAndAnsw;
};

const isEvenNumber = () => {
  const answers = {};
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const { randomNumber, correctAnswer } = getRandom();
    console.log(`Question: ${randomNumber}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    answers.correct = correctAnswer;
    answers.player = answerPlayer;
    if (answerPlayer !== correctAnswer) return answers;
    console.log('Correct!');
  }
  return answers;
};

export { toAskName as default, isEvenNumber };
