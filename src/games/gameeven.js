import { getRandom } from '../index.js';

const evenOrUneven = (randomNumber) => { // brain-even
  if (randomNumber % 2 === 0) return 'yes';
  return 'no';
};

const gameEven = () => {
  const randomNumber = getRandom(100);
  const correctAnswer = evenOrUneven(randomNumber);
  console.log(`Question: ${randomNumber}`);
  return correctAnswer;
};

export { gameEven as default };
