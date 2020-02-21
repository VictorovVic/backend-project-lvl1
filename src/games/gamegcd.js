import engine, { getRandom, question } from '../index.js';

const gameGcd = () => {
  const gcd = (randomNumber1, randomNumber2) => {
    const maxNumber = Math.max(randomNumber1, randomNumber2);
    let resultGcd = 1;
    for (let i = 2; i <= maxNumber; i += 1) {
      if (randomNumber1 % i === 0 && randomNumber2 % i === 0) resultGcd = i;
    }
    return String(resultGcd);
  };

  const logicGame = () => {
    const randomNumber1 = getRandom(100);
    const randomNumber2 = getRandom(100);
    const correctAnswer = gcd(randomNumber1, randomNumber2);
    const expression = `${randomNumber1} ${randomNumber2}`;
    question(expression);
    return correctAnswer;
  };
  const stringQuestion = 'Find the greatest common divisor of given numbers.';
  engine(logicGame, stringQuestion);
};

export { gameGcd as default };
