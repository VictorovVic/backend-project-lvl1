import { getRandom } from '../index.js';

const prime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return 'no';
  }
  return 'yes';
};

const gamePrime = () => {
  const randomNumber = getRandom(100);
  const correctAnswer = prime(randomNumber);
  console.log(`Question: ${randomNumber}`);
  return correctAnswer;
};

export { gamePrime as default };
