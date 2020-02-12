import readlineSync from 'readline-sync';

const toAskName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const getRandom = (rangeNumber) => Math.floor(Math.random() * rangeNumber);

const progression = (beginProg, step) => { // brain-progression
  const arrProgression = [];
  for (let num = beginProg, index = 0; index < 10; index += 1, num += (step + 1)) {
    arrProgression[index] = num;
  }
  return arrProgression;
};

const gcd = (randomNumber1, randomNumber2) => { // brain-gcd
  const maxNumber = Math.max(randomNumber1, randomNumber2);
  let resultGcd = 1;
  for (let i = 2; i <= maxNumber; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) resultGcd = i;
  }
  return String(resultGcd);
};

const prime = (randomNumber) => { // brain-prime
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return 'no';
  }
  return 'yes';
};

const evenOrUneven = (randomNumber) => { // brain-even
  if (randomNumber % 2 === 0) return 'yes';
  return 'no';
};

const resultExpression = (randomNumber1, randomNumber2, sign) => { // brain-calc
  let result = '';
  switch (sign) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }
  return String(result);
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
  toAskName as default, getRandom, evenOrUneven, answer, checkAnswer,
  resultExpression, gcd, progression, prime,
};
