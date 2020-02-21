import engine, { getRandom, question } from '../index.js';

const gamePrime = () => {
  const prime = (randomNumber) => {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) return 'no';
    }
    return 'yes';
  };
  const logicGame = () => {
    const randomNumber = getRandom(100);
    const correctAnswer = prime(randomNumber);
    question(randomNumber);
    return correctAnswer;
  };
  const stringQuestion = 'Answer "yes" if the number is prime, otherwise answer "no".';
  engine(logicGame, stringQuestion);
};

export { gamePrime as default };
