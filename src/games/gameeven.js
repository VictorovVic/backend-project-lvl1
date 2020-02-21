import engine, { getRandom, question } from '../index.js';

const gameEven = () => {
  const evenOrUneven = (randomNumber) => {
    if (randomNumber % 2 === 0) return 'yes';
    return 'no';
  };

  const logicGame = () => {
    const randomNumber = getRandom(100);
    const correctAnswer = evenOrUneven(randomNumber);
    question(randomNumber);
    return correctAnswer;
  };
  const stringQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(logicGame, stringQuestion);
};


export { gameEven as default };
